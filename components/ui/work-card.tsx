import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import type { Work } from "@/lib/works";

const placeholderGradients = [
  "linear-gradient(135deg, oklch(0.2 0.05 285), oklch(0.12 0.03 65))",
  "linear-gradient(135deg, oklch(0.18 0.04 200), oklch(0.1 0.02 285))",
  "linear-gradient(135deg, oklch(0.16 0.06 65), oklch(0.1 0.02 200))",
];

type WorkCardProps = {
  work: Work;
  index?: number;
};

export function WorkCard({ work, index = 0 }: WorkCardProps) {
  const gradient =
    placeholderGradients[index % placeholderGradients.length];

  return (
    <Link
      href={`/works/${work.slug}`}
      className="group flex flex-col border border-border bg-card transition-colors hover:border-primary/50"
    >
      <div className="relative aspect-video overflow-hidden border-b border-border">
        {work.thumbnail ? (
          <Image
            src={work.thumbnail}
            alt={work.title}
            fill
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
            className="object-cover transition-transform duration-500 group-hover:scale-105"
          />
        ) : (
          <div
            aria-hidden
            className="h-full w-full transition-transform duration-500 group-hover:scale-105"
            style={{ background: gradient }}
          />
        )}
      </div>

      <div className="flex flex-col gap-2 p-4 sm:p-6">
        <div className="flex items-start justify-between gap-3 sm:gap-4">
          <h3 className="min-w-0 text-lg font-bold tracking-tight text-foreground sm:text-xl">
            {work.title}
          </h3>
          <ArrowUpRight
            className="h-5 w-5 shrink-0 text-muted-foreground transition-colors group-hover:text-primary"
            strokeWidth={1.5}
          />
        </div>
        <p className="line-clamp-3 text-sm leading-relaxed text-muted-foreground">
          {work.description}
        </p>
        <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-muted-foreground/60">
          {work.year}
        </span>
      </div>
    </Link>
  );
}
