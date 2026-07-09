import { GoogleGenAI } from "@google/genai";
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
    const ai = new GoogleGenAI({ apiKey });
    const response = await ai.models.generateContent({
      model: "gemini-2.5-flash",
      contents: message.trim(),
      config: { systemInstruction: SYSTEM_INSTRUCTION },
    });

    return NextResponse.json({
      answer:
        response.text ??
        "I could not answer that question. Please contact admissions.",
    });
  } catch (error) {
    console.error("Advisor request failed", error);
    return NextResponse.json(
      { error: "The advisor is temporarily unavailable. Please try again." },
      { status: 502 },
    );
  }
}
