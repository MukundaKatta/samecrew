"use client";

import { useState } from "react";
import Link from "next/link";

type Situation = "adoption" | "immigration" | "chronic-illness" | "lgbtq" | "caregiver";

interface ChatTurn {
  who: "you" | "ai";
  text: string;
}

const SITUATIONS: { key: Situation; label: string; description: string }[] = [
  { key: "adoption", label: "Adoption", description: "Navigating the adoption journey" },
  { key: "immigration", label: "Immigration", description: "Building a life in a new country" },
  { key: "chronic-illness", label: "Chronic illness", description: "Living with ongoing health challenges" },
  { key: "lgbtq", label: "LGBTQ+", description: "Finding support and community" },
  { key: "caregiver", label: "Caregiver", description: "Caring for someone you love" },
];

const CHAT_TURNS: Record<Situation, ChatTurn[]> = {
  adoption: [
    { who: "you", text: "The home study is next week and I can't stop thinking about everything that could go wrong." },
    { who: "ai", text: "That anxiety is so normal. You're putting yourself out there in a way most people never do." },
    { who: "ai", text: "What's the one thing that worries you most — the questions, the house, or something else?" },
    { who: "you", text: "That they'll decide we're not good enough." },
    { who: "ai", text: "You're not being graded. They're looking for safety and love — and you're already here, preparing. That says a lot." },
  ],
  immigration: [
    { who: "you", text: "I got the visa but I feel guilty leaving everyone behind." },
    { who: "ai", text: "Guilt and excitement can exist at the same time. Neither cancels the other out." },
    { who: "ai", text: "What does 'leaving behind' feel like for you — distance, or something deeper?" },
    { who: "you", text: "Like I'm choosing myself over my family." },
    { who: "ai", text: "Building something new doesn't mean abandoning what you came from. You can hold both. Let's talk about what staying connected looks like for you." },
  ],
  "chronic-illness": [
    { who: "you", text: "I had to cancel plans again. I'm tired of being the flaky friend." },
    { who: "ai", text: "Cancelling when your body says no is not flaking. It's listening." },
    { who: "ai", text: "Do the people in your life understand what a bad day actually looks like for you?" },
    { who: "you", text: "Not really. I don't want to be a burden." },
    { who: "ai", text: "Letting someone in is not a burden — it's trust. You deserve people who can hold that. Let's figure out who that might be." },
  ],
  lgbtq: [
    { who: "you", text: "I came out to my parents last month. They said they need time. It's been silence since." },
    { who: "ai", text: "That silence is heavy. You did something incredibly brave, and now you're carrying the wait." },
    { who: "ai", text: "How are you filling that space right now — are you talking to anyone else about it?" },
    { who: "you", text: "A couple friends know. But it's not the same." },
    { who: "ai", text: "It's not the same. And it's okay to grieve that gap while still holding space for them to come around. You don't have to rush either side." },
  ],
  caregiver: [
    { who: "you", text: "Mom doesn't recognise me some days. I smile through it but inside I'm falling apart." },
    { who: "ai", text: "Smiling through that takes more strength than most people will ever understand." },
    { who: "ai", text: "When was the last time someone asked how you're doing — not your mom, just you?" },
    { who: "you", text: "I honestly can't remember." },
    { who: "ai", text: "Then let's start here. Right now, this is your time. What do you need most today — to vent, to plan, or just to sit with someone?" },
  ],
};

export default function TryPage() {
  const [situation, setSituation] = useState<Situation | null>(null);

  return (
    <div className="min-h-screen bg-white">
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 py-5">
        <Link href="/" className="flex items-center gap-2 text-lg font-bold tracking-tight">
          <span className="inline-block h-2.5 w-2.5 rounded-full bg-teal-500" />
          SameCrew
        </Link>
        <Link
          href="/#waitlist"
          className="rounded-full bg-neutral-900 px-4 py-2 text-sm font-medium text-white transition hover:bg-neutral-700"
        >
          Get early access
        </Link>
      </nav>

      <div className="mx-auto max-w-2xl px-6 py-12">
        <div className="mb-8">
          <p className="text-xs font-semibold uppercase tracking-widest text-teal-600">
            Empathetic session
          </p>
          <h1 className="mt-1 text-2xl font-bold tracking-tight">
            Pick a situation. See how it feels.
          </h1>
        </div>

        <div className="grid gap-2 sm:grid-cols-2">
          {SITUATIONS.map((s) => (
            <button
              key={s.key}
              onClick={() => setSituation(s.key)}
              className={`rounded-xl border px-4 py-3 text-left text-sm transition ${
                situation === s.key
                  ? "border-teal-500 bg-teal-50 text-teal-900"
                  : "border-neutral-300 bg-white hover:border-teal-500 hover:bg-teal-50"
              }`}
            >
              <span className="font-semibold">{s.label}</span>
              <span className="ml-2 text-neutral-500">{s.description}</span>
            </button>
          ))}
        </div>

        {situation && (
          <div className="mt-8 overflow-hidden rounded-3xl border border-neutral-200 bg-white shadow-sm">
            <div className="flex items-center gap-3 border-b border-neutral-200 bg-neutral-50 px-5 py-3 text-sm">
              <span className="h-2 w-2 rounded-full bg-teal-500" />
              <span className="font-medium">
                {SITUATIONS.find((s) => s.key === situation)?.label} · Session preview
              </span>
            </div>
            <div className="flex flex-col gap-3 p-5">
              {CHAT_TURNS[situation].map((turn, i) => (
                <div
                  key={i}
                  className={`max-w-[85%] rounded-2xl px-4 py-2 text-sm leading-relaxed ${
                    turn.who === "ai"
                      ? "self-start bg-teal-50 text-teal-900"
                      : "self-end bg-neutral-900 text-white"
                  }`}
                >
                  {turn.text}
                </div>
              ))}
            </div>
          </div>
        )}

        <p className="mt-6 text-center text-xs text-neutral-400">
          This is a v0 preview with hardcoded conversations.{" "}
          <Link href="/#waitlist" className="underline hover:text-neutral-600">
            Join the waitlist
          </Link>{" "}
          for the full experience.
        </p>
      </div>
    </div>
  );
}
