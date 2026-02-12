"use client"

import { Code, Layers, Database, Paintbrush } from "lucide-react"
import { useScrollAnimation } from "@/hooks/use-scroll-animation"
import type { LucideIcon } from "lucide-react"

interface SkillCategory {
  title: string
  icon: LucideIcon
  skills: { name: string; abbr: string }[]
}

const categories: SkillCategory[] = [
  {
    title: "Lenguajes",
    icon: Code,
    skills: [
      { name: "JavaScript", abbr: "JS" },
      { name: "Python", abbr: "PY" },
      { name: "HTML5", abbr: "HT" },
      { name: "CSS3", abbr: "CS" },
      { name: "C#", abbr: "C#" },
    ],
  },
  {
    title: "Frameworks",
    icon: Layers,
    skills: [
      { name: "React", abbr: "Re" },
      { name: "Node.js", abbr: "No" },
      { name: "Unity", abbr: "Un" },
    ],
  },
  {
    title: "Bases de Datos",
    icon: Database,
    skills: [
      { name: "MySQL", abbr: "My" },
      { name: "PostgreSQL", abbr: "Pg" },
      { name: "MongoDB", abbr: "Mg" },
    ],
  },
  {
    title: "Multimedia",
    icon: Paintbrush,
    skills: [
      { name: "Figma", abbr: "Fi" },
      { name: "Blender", abbr: "Bl" },
      { name: "Unity", abbr: "Un" },
    ],
  },
]

export function SkillsSection() {
  const { ref, isVisible } = useScrollAnimation(0.1)

  return (
    <section id="habilidades" className="py-20 sm:py-24 lg:py-32">
      <div
        ref={ref}
        className={`mx-auto max-w-6xl px-4 sm:px-6 transition-all duration-700 ${
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
        }`}
      >
        <div className="flex items-center gap-3 mb-4">
          <div className="h-px flex-1 max-w-[60px] bg-primary" />
          <span className="text-xs font-medium uppercase tracking-widest text-primary">
            {"Habilidades"}
          </span>
        </div>

        <h2 className="font-display text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight mb-4">
          {"Stack "}
          <span className="text-primary">{"Tecnologico"}</span>
        </h2>
        <p className="text-muted-foreground text-sm max-w-xl mb-12 leading-relaxed">
          {"Herramientas y tecnologias con las que trabajo para construir soluciones web y experiencias multimedia."}
        </p>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {categories.map((category, catIndex) => (
            <div
              key={category.title}
              className={`group rounded-xl border border-border bg-card p-6 hover:border-primary/30 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:shadow-primary/5 ${
                isVisible ? "animate-fade-up" : "opacity-0"
              }`}
              style={{ animationDelay: `${catIndex * 120 + 100}ms` }}
            >
              <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-primary/10 mb-5 group-hover:bg-primary/20 transition-colors duration-300">
                <category.icon className="h-5 w-5 text-primary" />
              </div>
              <h3 className="font-display text-sm font-semibold uppercase tracking-wider text-card-foreground mb-4">
                {category.title}
              </h3>
              <div className="flex flex-col gap-2.5">
                {category.skills.map((skill) => (
                  <div
                    key={skill.name + category.title}
                    className="flex items-center gap-3"
                  >
                    <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-md bg-secondary text-xs font-bold font-display text-primary">
                      {skill.abbr}
                    </div>
                    <span className="text-sm text-muted-foreground group-hover:text-card-foreground transition-colors duration-200">
                      {skill.name}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
