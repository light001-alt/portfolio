"use client";

import { useEffect, useState } from "react";
import Script from "next/script";

const TALLY_FORM_ID = "q4gRGY";
const TALLY_EMBED_URL = `https://tally.so/embed/${TALLY_FORM_ID}?alignLeft=1&hideTitle=1&transparentBackground=1&dynamicHeight=1`;

declare global {
  interface Window {
    Tally?: {
      loadEmbeds: () => void;
    };
  }
}

function isTallyFormSubmitted(data: unknown): boolean {
  if (typeof data === "string") {
    if (!data.includes("Tally.FormSubmitted")) return false;
    try {
      const parsed = JSON.parse(data) as { event?: string; type?: string };
      return (
        parsed.event === "Tally.FormSubmitted" ||
        parsed.type === "Tally.FormSubmitted"
      );
    } catch {
      return true;
    }
  }

  if (typeof data === "object" && data !== null) {
    const record = data as { event?: string; type?: string };
    return (
      record.event === "Tally.FormSubmitted" ||
      record.type === "Tally.FormSubmitted"
    );
  }

  return false;
}

export function TallyContactForm() {
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    const handleMessage = (event: MessageEvent) => {
      if (event.origin !== "https://tally.so") return;
      if (isTallyFormSubmitted(event.data)) {
        setSubmitted(true);
      }
    };

    window.addEventListener("message", handleMessage);
    return () => window.removeEventListener("message", handleMessage);
  }, []);

  if (submitted) {
    return (
      <div
        className="w-full border border-border bg-card p-6 sm:p-8"
        role="status"
        aria-live="polite"
      >
        <p className="text-base leading-relaxed text-foreground sm:text-lg">
          문의가 접수됐어요. 확인 후 답장드릴게요.
        </p>
      </div>
    );
  }

  return (
    <>
      <Script
        src="https://tally.so/widgets/embed.js"
        strategy="lazyOnload"
        onLoad={() => {
          window.Tally?.loadEmbeds();
        }}
      />
      <div className="w-full min-w-0 overflow-hidden border border-border bg-card">
        <iframe
          data-tally-src={TALLY_EMBED_URL}
          loading="lazy"
          width="100%"
          height="420"
          className="min-h-[420px] w-full border-0 sm:min-h-[480px]"
          title="Contact form — 함께 만들 프로젝트"
        />
      </div>
    </>
  );
}
