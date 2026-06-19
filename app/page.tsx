import Image from "next/image";
import { ArrowRight, Briefcase, Phone } from "lucide-react";
import { HeroGlow } from "@/app/components/HeroGlow";
import { BlurFade } from "@/components/ui/blur-fade";
import { WorkCard } from "@/components/ui/work-card";
import { works } from "@/lib/works";

const sectionPadding = "px-4 sm:px-6 lg:px-16";

export default function Home() {
  return (
    <main className="flex flex-col">
      {/* ── Hero ── */}
      <section
        id="hero"
        className={`relative flex min-h-[100dvh] flex-col overflow-hidden py-6 sm:py-8 ${sectionPadding}`}
      >
        {/* Hero background — dark, low opacity */}
        <div aria-hidden className="pointer-events-none absolute inset-0 -z-10">
          <Image
            src="/hero-bg.png"
            alt=""
            fill
            className="object-cover"
            style={{ opacity: 0.18 }}
            priority
          />
          <div className="absolute inset-0 bg-background/60" />
        </div>

        <HeroGlow />

        {/* Top bar */}
        <div className="flex flex-col gap-3 border-b border-border pb-4 sm:flex-row sm:items-center sm:justify-between sm:pb-6">
          <BlurFade delay={0}>
            <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-muted-foreground sm:text-xs sm:tracking-[0.3em]">
              Portfolio
            </span>
          </BlurFade>
          <BlurFade delay={0.05}>
            <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-muted-foreground sm:text-xs sm:tracking-[0.3em]">
              Designer&nbsp;·&nbsp;Seoul
            </span>
          </BlurFade>
        </div>

        {/* Center — responsive: stack on mobile, 3-column on lg */}
        <div className="flex flex-1 flex-col justify-center gap-8 py-8 sm:gap-10 lg:flex-row lg:items-center lg:gap-0 lg:py-0">
          {/* Name */}
          <div className="order-2 flex-1 lg:order-1">
            <BlurFade delay={0.1}>
              <h1
                className="font-bold uppercase leading-none tracking-tight text-foreground"
                style={{ fontSize: "clamp(2rem, 9vw, 8rem)" }}
              >
                Hong<br />Gil-dong
              </h1>
            </BlurFade>
          </div>

          {/* Avatar */}
          <div className="order-1 mx-auto w-full max-w-[200px] shrink-0 sm:max-w-[260px] lg:order-2 lg:mx-0 lg:max-w-[320px] lg:px-8">
            <BlurFade delay={0.2} direction="up">
              <Image
                src="/avatar.png"
                alt="Hong Gil-dong avatar"
                width={320}
                height={320}
                className="h-auto w-full drop-shadow-2xl"
                priority
              />
            </BlurFade>
          </div>

          {/* Role */}
          <div className="order-3 flex flex-1 justify-start lg:justify-end">
            <BlurFade delay={0.15}>
              <p
                className="font-bold uppercase leading-none tracking-tight text-muted-foreground lg:text-right"
                style={{ fontSize: "clamp(2rem, 9vw, 8rem)" }}
              >
                Product<br />Designer
              </p>
            </BlurFade>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="flex flex-col gap-4 border-t border-border pt-4 sm:flex-row sm:items-center sm:justify-between sm:pt-6">
          <BlurFade delay={0.28}>
            <p className="max-w-md font-mono text-xs leading-relaxed text-muted-foreground sm:text-sm">
              Manager Hong — homeowner in Seoul
            </p>
          </BlurFade>
          <BlurFade delay={0.34}>
            <a
              href="#about"
              className="inline-flex w-full items-center justify-center gap-3 bg-primary px-6 py-3 font-mono text-xs font-semibold uppercase tracking-[0.2em] text-primary-foreground transition-opacity hover:opacity-80 sm:w-auto"
            >
              Learn more
              <ArrowRight className="h-3.5 w-3.5" />
            </a>
          </BlurFade>
        </div>
      </section>

      {/* ── About ── */}
      <section id="about" className={`border-t border-border py-0 ${sectionPadding}`}>
        {/* 01 — About */}
        <BlurFade
          className="flex flex-col gap-4 border-b border-border py-10 sm:gap-6 sm:py-14 lg:flex-row lg:gap-0"
          inView
          delay={0}
        >
          <div className="flex shrink-0 items-start gap-3 sm:w-48 lg:w-64">
            <span className="font-mono text-[10px] text-primary">01</span>
            <span className="font-mono text-[10px] uppercase tracking-[0.25em] text-muted-foreground">
              About
            </span>
          </div>
          <p className="max-w-xl text-base leading-relaxed text-muted-foreground sm:text-lg">
            An ordinary office worker living the everyday life in Seoul.
          </p>
        </BlurFade>

        {/* 02 — Career */}
        <BlurFade
          className="flex flex-col gap-4 border-b border-border py-10 sm:gap-6 sm:py-14 lg:flex-row lg:items-center lg:gap-0"
          inView
          delay={0.12}
        >
          <div className="flex shrink-0 items-start gap-3 sm:w-48 lg:w-64">
            <span className="font-mono text-[10px] text-primary">02</span>
            <span className="font-mono text-[10px] uppercase tracking-[0.25em] text-muted-foreground">
              Career
            </span>
          </div>
          <div className="flex items-start gap-4 sm:items-center">
            <Briefcase className="mt-1 h-5 w-5 shrink-0 text-muted-foreground/40 sm:mt-0" strokeWidth={1.5} />
            <div className="flex min-w-0 flex-col gap-1">
              <p className="text-2xl font-bold tracking-tight text-foreground sm:text-3xl">
                Samsung Electronics
              </p>
              <p className="font-mono text-xs uppercase tracking-[0.2em] text-muted-foreground">
                Designer
              </p>
            </div>
          </div>
        </BlurFade>

        {/* 03 — Contact */}
        <BlurFade
          className="flex flex-col gap-4 py-10 sm:gap-6 sm:py-14 lg:flex-row lg:items-center lg:gap-0"
          inView
          delay={0.24}
        >
          <div className="flex shrink-0 items-start gap-3 sm:w-48 lg:w-64">
            <span className="font-mono text-[10px] text-primary">03</span>
            <span className="font-mono text-[10px] uppercase tracking-[0.25em] text-muted-foreground">
              Contact
            </span>
          </div>
          <div className="flex items-start gap-4 sm:items-center">
            <Phone className="mt-1 h-5 w-5 shrink-0 text-muted-foreground/40 sm:mt-0" strokeWidth={1.5} />
            <a
              href="tel:01012345678"
              className="break-all text-xl font-bold tracking-tight text-foreground transition-colors hover:text-primary sm:break-normal sm:text-2xl lg:text-3xl"
            >
              010-1234-5678
            </a>
          </div>
        </BlurFade>
      </section>

      {/* ── Works ── */}
      <section
        id="works"
        className={`border-t border-border py-12 sm:py-16 lg:py-24 ${sectionPadding}`}
      >
        <div className="mx-auto w-full max-w-7xl">
          <BlurFade inView>
            <div className="mb-8 flex items-center gap-4 sm:mb-12">
              <span className="font-mono text-[10px] uppercase tracking-[0.25em] text-muted-foreground">
                Works
              </span>
              <div className="h-px flex-1 bg-border" />
              <span className="font-mono text-[10px] text-primary">03</span>
            </div>
          </BlurFade>

          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-6 lg:grid-cols-3">
            {works.map((work, i) => (
              <BlurFade key={work.slug} inView delay={i * 0.1}>
                <WorkCard work={work} index={i} />
              </BlurFade>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
