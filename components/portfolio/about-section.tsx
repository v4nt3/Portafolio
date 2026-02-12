"use client"

import { GraduationCap, Code, Palette, Sparkles, User } from "lucide-react"
import { useScrollAnimation } from "@/hooks/use-scroll-animation"
import Image from "next/image"

const highlights = [
  {
    icon: GraduationCap,
    title: "9 Semestre",
    description: "Proxima a culminar estudios en ambos programas.",
  },
  {
    icon: Code,
    title: "Desarrollo Web",
    description: "React, Node.js, bases de datos y APIs.",
  },
  {
    icon: Palette,
    title: "Doble Programa",
    description: "Ing. Multimedia e Ing. de Sistemas.",
  },
  {
    icon: Sparkles,
    title: "Enfoque Hibrido",
    description: "Codigo + creatividad multimedia.",
  },
]

export function AboutSection() {
  const { ref, isVisible } = useScrollAnimation(0.1)

  return (
    <section id="sobre-mi" className="py-20 sm:py-24 lg:py-32 bg-secondary/30">
      <div
        ref={ref}
        className={`mx-auto max-w-6xl px-4 sm:px-6 transition-all duration-700 ${
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
        }`}
      >
        <div className="flex items-center gap-3 mb-4">
          <div className="h-px flex-1 max-w-[60px] bg-primary" />
          <span className="text-xs font-medium uppercase tracking-widest text-primary">
            {"Sobre Mi"}
          </span>
        </div>

        <h2 className="font-display text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-balance mb-10 sm:mb-12">
          {"Perfil hibrido entre "}
          <span className="text-primary">{"codigo"}</span>
          {" y "}
          <span className="text-primary">{"creatividad"}</span>
        </h2>

        <div className="grid lg:grid-cols-5 gap-10 lg:gap-16 items-start">
          {/* Left: Avatar + quick intro */}
          <div className="lg:col-span-2 flex flex-col items-center lg:items-start gap-6">
            <div className="relative">
              <div className="relative h-32 w-32 sm:h-40 sm:w-40 rounded-2xl bg-card border-2 border-border flex items-center justify-center overflow-hidden">
                <Image
                  src="/ilustracion-gissel.png"
                  alt="Ilustración de Gissel Vanessa Quitian"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="absolute -bottom-2 -right-2 h-8 w-8 rounded-lg bg-primary flex items-center justify-center">
                <Code className="h-4 w-4 text-primary-foreground" />
              </div>
            </div>
            <div className="text-center lg:text-left">
              <p className="text-muted-foreground leading-relaxed text-sm">
                {
                  "Soy estudiante de doble programa en Ingenieria Multimedia e Ingenieria de Sistemas en la Universidad de San Buenaventura. Mi formacion me permite combinar el pensamiento logico del desarrollo de software con la sensibilidad visual del diseno multimedia."
                }
              </p>
              {/* <p className="mt-4 text-muted-foreground leading-relaxed text-sm">
                {
                  "Busco una oportunidad de practicas donde pueda aplicar mis conocimientos en desarrollo web, aportando ademas una perspectiva creativa y multidisciplinaria al equipo."
                }
              </p> */}
            </div>
          </div>

          {/* Right: Highlight Cards */}
          <div className="lg:col-span-3 grid grid-cols-1 sm:grid-cols-2 gap-4">
            {highlights.map((item, i) => (
              <div
                key={item.title}
                className={`group rounded-xl border border-border bg-card p-5 sm:p-6 hover:border-primary/30 hover:bg-primary/5 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:shadow-primary/5 ${
                  isVisible ? "animate-fade-up" : "opacity-0"
                }`}
                style={{ animationDelay: `${i * 120 + 200}ms` }}
              >
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10 mb-4">
                  <item.icon className="h-5 w-5 text-primary" />
                </div>
                <h3 className="font-display text-sm font-semibold text-card-foreground">
                  {item.title}
                </h3>
                <p className="mt-2 text-xs text-muted-foreground leading-relaxed">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
