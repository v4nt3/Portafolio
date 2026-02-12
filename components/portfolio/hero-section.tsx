"use client"

import { ArrowDown, Github, Mail, Eye } from "lucide-react"
import { useScrollAnimation } from "@/hooks/use-scroll-animation"

function GeometricVisual() {
  return (
    <div className="relative w-full aspect-square max-w-xs lg:max-w-md mx-auto">
      {/* Glow backdrop */}
      <div className="absolute inset-0 bg-primary/10 rounded-full blur-[80px]" />

      {/* Rotating outer ring */}
      <div className="absolute inset-4 rounded-full border border-primary/20 animate-[spin_25s_linear_infinite]">
        <div className="absolute -top-1.5 left-1/2 -translate-x-1/2 h-3 w-3 rounded-full bg-primary/60" />
      </div>

      {/* Inner shapes */}
      <div className="absolute inset-12 rounded-2xl border border-border rotate-12 animate-[spin_40s_linear_infinite_reverse]" />
      <div className="absolute inset-16 rounded-full border border-primary/30" />
      <div className="absolute inset-20 rounded-xl border border-border -rotate-6 animate-[spin_30s_linear_infinite]" />

      {/* Center content */}
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="flex flex-col items-center gap-2">
          <div className="h-14 w-14 lg:h-16 lg:w-16 rounded-2xl bg-primary/15 border border-primary/30 flex items-center justify-center">
            <span className="font-display text-xl lg:text-2xl font-bold text-primary">
              {"</>"}
            </span>
          </div>
          <span className="text-[10px] lg:text-xs text-muted-foreground font-medium tracking-wider uppercase">
            {"Code + Design"}
          </span>
        </div>
      </div>

      {/* Floating dots */}
      <div className="absolute top-1/4 right-8 h-2 w-2 rounded-full bg-accent animate-pulse" />
      <div
        className="absolute bottom-1/3 left-6 h-1.5 w-1.5 rounded-full bg-primary/60 animate-pulse"
        style={{ animationDelay: "1s" }}
      />
      <div
        className="absolute top-2/3 right-1/4 h-1 w-1 rounded-full bg-accent/40 animate-pulse"
        style={{ animationDelay: "2s" }}
      />
    </div>
  )
}

export function HeroSection() {
  const { ref, isVisible } = useScrollAnimation(0.1)

  return (
    <section
      ref={ref}
      className="relative min-h-screen flex items-center overflow-hidden"
    >
      {/* Subtle grid background */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,hsl(var(--border))_1px,transparent_1px),linear-gradient(to_bottom,hsl(var(--border))_1px,transparent_1px)] bg-[size:4rem_4rem] opacity-20" />

      {/* Top gradient for depth */}
      <div className="absolute inset-0 bg-gradient-to-b from-primary/[0.03] via-transparent to-transparent" />

      <div
        className={`relative z-10 mx-auto max-w-6xl w-full px-4 sm:px-6 py-20 sm:py-24 transition-all duration-1000 ${
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
        }`}
      >
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
          {/* Left: Text Content */}
          <div className="text-center lg:text-left">
            <div className="inline-flex items-center gap-2 rounded-full border border-border bg-secondary/50 px-4 py-1.5 text-xs text-muted-foreground mb-6 sm:mb-8">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-accent" />
              </span>
              {"Disponible para practicas profesionales"}
            </div>

            <h1 className="font-display text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight leading-[1.1]">
              {"Gissel Vanessa"}
              <br />
              <span className="text-primary">{"Quitian Rojas"}</span>
            </h1>

            <p className="mt-4 sm:mt-6 text-base sm:text-lg text-muted-foreground leading-relaxed">
              {"Ingenieria de Sistemas"}
              <span className="text-foreground/40">{" | "}</span>
              {"Ingenieria Multimedia"}
            </p>

            <p className="mt-3 sm:mt-4 text-sm text-muted-foreground leading-relaxed max-w-lg mx-auto lg:mx-0">
              {
                "Estudiante de 9 semestre con doble programa, combinando desarrollo web moderno con creatividad multimedia para construir experiencias digitales unicas."
              }
            </p>

            <div className="mt-8 sm:mt-10 flex flex-col sm:flex-row flex-wrap items-center justify-center lg:justify-start gap-3 sm:gap-4">
              <a
                href="#proyectos"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-lg bg-primary px-6 py-3 text-sm font-medium text-primary-foreground hover:bg-primary/90 transition-all duration-200 hover:shadow-lg hover:shadow-primary/20"
              >
                <Eye className="h-4 w-4" />
                {"Ver proyectos"}
              </a>
              <a
                href="#contacto"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-lg border border-border bg-card px-6 py-3 text-sm font-medium text-foreground hover:border-primary/40 hover:bg-primary/5 transition-all duration-200"
              >
                <Mail className="h-4 w-4" />
                {"Contactar"}
              </a>
              <a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-lg border border-border px-6 py-3 text-sm font-medium text-muted-foreground hover:text-foreground hover:border-primary/40 transition-all duration-200"
              >
                <Github className="h-4 w-4" />
                {"GitHub"}
              </a>
            </div>
          </div>

          {/* Right: Geometric Visual */}
          <div className="hidden md:block">
            <GeometricVisual />
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-6 sm:bottom-8 left-1/2 -translate-x-1/2">
          <a
            href="#sobre-mi"
            className="inline-flex animate-bounce text-muted-foreground hover:text-primary transition-colors"
            aria-label="Ir a sobre mi"
          >
            <ArrowDown className="h-5 w-5" />
          </a>
        </div>
      </div>
    </section>
  )
}
