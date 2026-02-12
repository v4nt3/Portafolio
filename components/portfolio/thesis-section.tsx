"use client"

import { ExternalLink, BookOpen, Hand, Eye, Mic, Brain } from "lucide-react"
import { useScrollAnimation } from "@/hooks/use-scroll-animation"

const techStack = ["Python", "OpenCV", "MediaPipe", "TensorFlow", "pyttsx3"]

const objectives = [
  {
    icon: Eye,
    text: "Captura de gestos de manos y expresiones faciales mediante vision computacional.",
  },
  {
    icon: Brain,
    text: "Algoritmos de IA para interpretar y traducir la Lengua de Senas Colombiana.",
  },
  {
    icon: Mic,
    text: "Sintesis de voz para convertir los gestos reconocidos en mensajes audibles.",
  },
]

function SystemDiagram() {
  return (
    <div className="relative mx-auto max-w-sm">
      <div className="rounded-2xl border-2 border-primary/20 bg-card overflow-hidden shadow-2xl shadow-primary/10">
        {/* Header */}
        <div className="flex items-center gap-2 px-4 py-2.5 bg-secondary/80 border-b border-border">
          <div className="flex gap-1.5">
            <div className="h-2.5 w-2.5 rounded-full bg-primary/40" />
            <div className="h-2.5 w-2.5 rounded-full bg-accent/40" />
            <div className="h-2.5 w-2.5 rounded-full bg-muted-foreground/30" />
          </div>
          <div className="flex-1 mx-6">
            <div className="h-5 rounded-md bg-muted/80 flex items-center justify-center">
              <span className="text-[10px] text-muted-foreground">
                {"traductor-lsc.app"}
              </span>
            </div>
          </div>
        </div>

        {/* Content - flow diagram */}
        <div className="p-6 space-y-3 aspect-[4/3]">
          {/* Step 1: Camera input */}
          <div className="flex items-center gap-3 p-2.5 rounded-lg bg-primary/10 border border-primary/20">
            <div className="h-8 w-8 shrink-0 rounded-lg bg-primary/20 flex items-center justify-center">
              <Eye className="h-4 w-4 text-primary" />
            </div>
            <div className="flex-1">
              <div className="h-2 w-24 rounded bg-foreground/15" />
              <div className="h-1.5 w-16 rounded bg-foreground/8 mt-1.5" />
            </div>
          </div>

          {/* Arrow */}
          <div className="flex justify-center">
            <div className="h-4 w-0.5 bg-primary/30" />
          </div>

          {/* Step 2: Processing */}
          <div className="flex items-center gap-3 p-2.5 rounded-lg bg-accent/10 border border-accent/20">
            <div className="h-8 w-8 shrink-0 rounded-lg bg-accent/20 flex items-center justify-center">
              <Brain className="h-4 w-4 text-accent" />
            </div>
            <div className="flex-1">
              <div className="h-2 w-28 rounded bg-foreground/15" />
              <div className="h-1.5 w-20 rounded bg-foreground/8 mt-1.5" />
            </div>
          </div>

          {/* Arrow */}
          <div className="flex justify-center">
            <div className="h-4 w-0.5 bg-primary/30" />
          </div>

          {/* Step 3: Voice output */}
          <div className="flex items-center gap-3 p-2.5 rounded-lg bg-primary/10 border border-primary/20">
            <div className="h-8 w-8 shrink-0 rounded-lg bg-primary/20 flex items-center justify-center">
              <Mic className="h-4 w-4 text-primary" />
            </div>
            <div className="flex-1">
              <div className="h-2 w-20 rounded bg-foreground/15" />
              <div className="h-1.5 w-14 rounded bg-foreground/8 mt-1.5" />
            </div>
          </div>

          {/* Status bar */}
          <div className="flex items-center gap-2 pt-2">
            <div className="h-6 flex-1 rounded-md bg-primary/15 flex items-center justify-center">
              <span className="text-[9px] text-primary font-medium">
                {"Modelo activo"}
              </span>
            </div>
            <div className="h-6 w-16 rounded-md bg-secondary flex items-center justify-center">
              <span className="text-[9px] text-muted-foreground">
                {"95.2%"}
              </span>
            </div>
          </div>
        </div>
      </div>
      {/* Base */}
      <div className="mx-auto mt-1 h-3 w-3/4 rounded-b-xl bg-secondary border border-t-0 border-border" />
    </div>
  )
}

export function ThesisSection() {
  const { ref, isVisible } = useScrollAnimation(0.1)

  return (
    <section className="py-24 sm:py-32 bg-secondary/30">
      <div
        ref={ref}
        className={`mx-auto max-w-6xl px-6 transition-all duration-700 ${
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
        }`}
      >
        <div className="flex items-center gap-3 mb-4">
          <div className="h-px flex-1 max-w-[60px] bg-primary" />
          <span className="text-xs font-medium uppercase tracking-widest text-primary">
            {"Proyecto de Tesis"}
          </span>
        </div>

        <div className="relative overflow-hidden rounded-2xl border-2 border-primary/20 bg-card shadow-xl shadow-primary/5">
          {/* Top accent bar */}
          <div className="h-1 w-full bg-gradient-to-r from-primary via-accent to-primary" />

          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 p-6 sm:p-8 lg:p-12">
            {/* Left: Mockup */}
            <div className="flex items-center justify-center order-2 lg:order-1">
              <SystemDiagram />
            </div>

            {/* Right: Details */}
            <div className="flex flex-col justify-center order-1 lg:order-2">
              <div className="flex items-start gap-3 mb-6">
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-primary/10">
                  <Hand className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <h2 className="font-display text-xl sm:text-2xl lg:text-3xl font-bold tracking-tight text-card-foreground leading-tight">
                    {
                      "Traduccion de Lengua de Senas Colombiana a Voz"
                    }
                  </h2>
                  <p className="mt-1 text-sm text-muted-foreground">
                    {
                      "Vision Computacional e Inteligencia Artificial -- Universidad de San Buenaventura"
                    }
                  </p>
                </div>
              </div>

              <p className="text-muted-foreground leading-relaxed text-sm">
                {
                  "Sistema basado en vision computacional e inteligencia artificial para traducir senas manuales y expresiones faciales de la Lengua de Senas Colombiana a voz, mejorando la comunicacion de personas con discapacidad para hablar en plataformas de reuniones en linea."
                }
              </p>

              {/* Objectives */}
              <div className="mt-6 space-y-3">
                {objectives.map((obj) => (
                  <div
                    key={obj.text}
                    className="flex items-start gap-3"
                  >
                    <div className="flex h-7 w-7 shrink-0 items-center justify-center rounded-lg bg-primary/10 mt-0.5">
                      <obj.icon className="h-3.5 w-3.5 text-primary" />
                    </div>
                    <p className="text-xs text-muted-foreground leading-relaxed">
                      {obj.text}
                    </p>
                  </div>
                ))}
              </div>

              <div className="mt-6 flex flex-wrap gap-2">
                {techStack.map((tech) => (
                  <span
                    key={tech}
                    className="inline-flex items-center rounded-md border border-primary/20 bg-primary/5 px-3 py-1 text-xs font-medium text-primary"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              <div className="mt-8 flex flex-wrap gap-3">
                <a
                  href="https://github.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-lg bg-primary px-5 py-2.5 text-sm font-medium text-primary-foreground hover:bg-primary/90 transition-all duration-200 hover:shadow-lg hover:shadow-primary/20"
                >
                  <ExternalLink className="h-4 w-4" />
                  {"Ver Repositorio"}
                </a>
                <a
                  href="https://lumen-traductor.vercel.app/"
                  className="inline-flex items-center gap-2 rounded-lg border border-border px-5 py-2.5 text-sm font-medium text-card-foreground hover:border-primary/40 hover:bg-primary/5 transition-all duration-200"
                >
                  <BookOpen className="h-4 w-4" />
                  {"Ver Página Web"}
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
