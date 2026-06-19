import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { ArrowLeft, ExternalLink } from "lucide-react";
import { BlurFade } from "@/components/ui/blur-fade";
import { getWorkBySlug, works } from "@/lib/works";

const placeholderGradients = [
  "linear-gradient(135deg, oklch(0.2 0.05 285), oklch(0.12 0.03 65))",
  "linear-gradient(135deg, oklch(0.18 0.04 200), oklch(0.1 0.02 285))",
  "linear-gradient(135deg, oklch(0.16 0.06 65), oklch(0.1 0.02 200))",
];

export async function generateStaticParams() {
  return works.map((work) => ({ slug: work.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const work = getWorkBySlug(slug);

  if (!work) {
    return { title: "Work Not Found" };
  }

  return {
    title: `${work.title} — Hong Gil-dong`,
    description: work.description,
  };
}

export default async function WorkPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const work = getWorkBySlug(slug);

  if (!work) {
    notFound();
  }

  const workIndex = works.findIndex((item) => item.slug === slug);
  const gradient =
    placeholderGradients[workIndex % placeholderGradients.length];

  return (
    <main className="flex flex-col px-4 py-6 sm:px-6 sm:py-8 lg:px-16 lg:py-16">
      <div className="mx-auto flex w-full max-w-4xl flex-col gap-8 sm:gap-12">
        <BlurFade delay={0}>
          <Link
            href="/#works"
            className="inline-flex items-center gap-2 font-mono text-xs uppercase tracking-[0.2em] text-muted-foreground transition-colors hover:text-primary"
          >
            <ArrowLeft className="h-3.5 w-3.5" />
            All Works
          </Link>
        </BlurFade>

        <BlurFade delay={0.08}>
          <div className="flex flex-col gap-3 border-b border-border pb-6 sm:gap-4 sm:pb-8">
            <span className="font-mono text-[10px] uppercase tracking-[0.25em] text-primary">
              {work.year}
            </span>
            <h1 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl lg:text-5xl">
              {work.title}
            </h1>
            <p className="max-w-2xl text-base leading-relaxed text-muted-foreground sm:text-lg">
              {work.description}
            </p>
          </div>
        </BlurFade>

        <BlurFade delay={0.16}>
          <div className="relative aspect-video overflow-hidden border border-border">
            {work.thumbnail ? (
              <Image
                src={work.thumbnail}
                alt={work.title}
                fill
                className="object-cover"
                priority
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 90vw, 896px"
              />
            ) : (
              <div
                aria-hidden
                className="h-full w-full"
                style={{ background: gradient }}
              />
            )}
          </div>
        </BlurFade>

        <BlurFade delay={0.24}>
          <p className="max-w-2xl text-base leading-relaxed text-muted-foreground sm:text-lg">
            {work.longDescription}
          </p>
        </BlurFade>

        {work.links.length > 0 && (
          <BlurFade delay={0.32}>
            <div className="flex flex-col gap-4 border-t border-border pt-6 sm:pt-8">
              <span className="font-mono text-[10px] uppercase tracking-[0.25em] text-muted-foreground">
                Links
              </span>
              <div className="flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:gap-4">
                {work.links.map((link) => (
                  <a
                    key={link.label}
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex w-full items-center justify-center gap-2 border border-border bg-card px-5 py-3 font-mono text-xs uppercase tracking-[0.15em] text-foreground transition-colors hover:border-primary/50 hover:text-primary sm:w-auto"
                  >
                    {link.label}
                    <ExternalLink className="h-3.5 w-3.5" strokeWidth={1.5} />
                  </a>
                ))}
              </div>
            </div>
          </BlurFade>
        )}
      </div>
    </main>
  );
}
