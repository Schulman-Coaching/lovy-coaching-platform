import { NextResponse } from "next/server";

const SYSTEM_INSTRUCTION = `
You are the Senior Course Advisor for the Lovy Relationship Coaching Institute.
The institute is led by Rabbi Shlomo Lovy and Malky Lovy and trains coaches
for husband-wife relationships (Shalom Bayis).

Answer prospective students' questions about certification in a warm,
professional, encouraging, and empathetic tone. Keep answers under 150 words
unless the visitor asks for more detail. Do not invent dates, prices,
accreditation, scholarships, or policies. When information is unavailable,
direct the visitor to admissions through the contact page.
`;

type GeminiResponse = {
  candidates?: Array<{
    content?: { parts?: Array<{ text?: string }> };
  }>;
};

export async function POST(request: Request) {
  const apiKey = process.env.GEMINI_API_KEY;
  if (!apiKey) {
    return NextResponse.json(
      { error: "The advisor is not configured. Please contact admissions." },
      { status: 503 },
    );
  }

  let message: unknown;
  try {
    ({ message } = await request.json());
  } catch {
    return NextResponse.json({ error: "Invalid request." }, { status: 400 });
  }

  if (typeof message !== "string" || !message.trim() || message.length > 2000) {
    return NextResponse.json(
      { error: "Please enter a question under 2,000 characters." },
      { status: 400 },
    );
  }

  try {
    const providerResponse = await fetch(
      "https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash:generateContent",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "x-goog-api-key": apiKey,
        },
        body: JSON.stringify({
          system_instruction: {
            parts: [{ text: SYSTEM_INSTRUCTION }],
          },
          contents: [
            {
              role: "user",
              parts: [{ text: message.trim() }],
            },
          ],
        }),
        cache: "no-store",
      },
    );

    if (!providerResponse.ok) {
      console.error("Advisor provider error", providerResponse.status);
      return NextResponse.json(
        { error: "The advisor is temporarily unavailable. Please try again." },
        { status: 502 },
      );
    }

    const data = (await providerResponse.json()) as GeminiResponse;
    const answer = data.candidates?.[0]?.content?.parts
      ?.map((part) => part.text ?? "")
      .join("")
      .trim();

    return NextResponse.json({
      answer:
        answer || "I could not answer that question. Please contact admissions.",
    });
  } catch (error) {
    console.error("Advisor request failed", error);
    return NextResponse.json(
      { error: "The advisor is temporarily unavailable. Please try again." },
      { status: 502 },
    );
  }
}
