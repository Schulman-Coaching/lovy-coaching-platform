"use client";

import { FormEvent, useEffect, useRef, useState } from "react";
import { Bot, Loader2, MessageCircle, Send, X } from "lucide-react";

type Message = {
  id: string;
  role: "user" | "advisor";
  text: string;
};

const welcome: Message = {
  id: "welcome",
  role: "advisor",
  text: "Hello! I’m the Lovy Institute AI Advisor. What would you like to know about becoming a relationship coach?",
};

export default function AdvisorChat() {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([welcome]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const endRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    endRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, loading]);

  async function send(event: FormEvent) {
    event.preventDefault();
    const question = input.trim();
    if (!question || loading) return;

    setMessages((current) => [
      ...current,
      { id: crypto.randomUUID(), role: "user", text: question },
    ]);
    setInput("");
    setLoading(true);

    try {
      const response = await fetch("/api/advisor", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ message: question }),
      });
      const data = (await response.json()) as {
        answer?: string;
        error?: string;
      };

      setMessages((current) => [
        ...current,
        {
          id: crypto.randomUUID(),
          role: "advisor",
          text:
            data.answer ??
            data.error ??
            "The advisor is unavailable. Please contact admissions.",
        },
      ]);
    } catch {
      setMessages((current) => [
        ...current,
        {
          id: crypto.randomUUID(),
          role: "advisor",
          text: "The advisor is unavailable. Please contact admissions.",
        },
      ]);
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="fixed bottom-5 right-5 z-50 flex flex-col items-end">
      {open && (
        <section
          aria-label="AI program advisor"
          className="mb-3 flex h-[min(32rem,70vh)] w-[min(24rem,calc(100vw-2.5rem))] flex-col overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-2xl"
        >
          <header className="flex items-center justify-between bg-slate-900 p-4 text-white">
            <span className="flex items-center gap-2 font-medium">
              <Bot className="h-5 w-5" aria-hidden />
              Program Advisor
            </span>
            <button
              type="button"
              onClick={() => setOpen(false)}
              className="rounded p-1 hover:bg-slate-700"
              aria-label="Close advisor"
            >
              <X className="h-5 w-5" />
            </button>
          </header>

          <div
            className="flex-1 space-y-3 overflow-y-auto bg-slate-50 p-4"
            aria-live="polite"
          >
            {messages.map((message) => (
              <div
                key={message.id}
                className={message.role === "user" ? "text-right" : "text-left"}
              >
                <p
                  className={`inline-block max-w-[85%] rounded-2xl px-4 py-3 text-left text-sm ${
                    message.role === "user"
                      ? "bg-slate-900 text-white"
                      : "border border-slate-200 bg-white text-slate-800"
                  }`}
                >
                  {message.text}
                </p>
              </div>
            ))}
            {loading && <Loader2 className="h-5 w-5 animate-spin text-slate-500" />}
            <div ref={endRef} />
          </div>

          <form onSubmit={send} className="border-t border-slate-200 bg-white p-3">
            <div className="flex gap-2">
              <label htmlFor="advisor-question" className="sr-only">
                Ask the program advisor
              </label>
              <input
                id="advisor-question"
                value={input}
                onChange={(event) => setInput(event.target.value)}
                maxLength={2000}
                placeholder="Ask about certification…"
                className="min-w-0 flex-1 rounded-full border border-slate-300 px-4 py-2 text-sm outline-none focus:border-slate-600"
              />
              <button
                type="submit"
                disabled={loading || !input.trim()}
                className="rounded-full bg-slate-900 p-2 text-white disabled:opacity-40"
                aria-label="Send question"
              >
                <Send className="h-4 w-4" />
              </button>
            </div>
            <p className="mt-2 text-center text-[10px] text-slate-500">
              AI can make mistakes. Confirm important information with admissions.
            </p>
          </form>
        </section>
      )}

      <button
        type="button"
        onClick={() => setOpen((current) => !current)}
        className="flex items-center gap-2 rounded-full bg-slate-900 px-4 py-3 text-sm font-medium text-white shadow-lg hover:bg-slate-800"
        aria-expanded={open}
      >
        <MessageCircle className="h-5 w-5" />
        Ask AI Advisor
      </button>
    </div>
  );
}
