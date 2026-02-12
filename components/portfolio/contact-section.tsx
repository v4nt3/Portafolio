"use client"

import { Mail, Linkedin, Github, ArrowUpRight } from "lucide-react"
import { useScrollAnimation } from "@/hooks/use-scroll-animation"

const contactLinks = [
  {
    label: "Correo Electronico",
    value: "gisselv.quitian@gmail.com",
    href: "mailto:gisselv.quitian@gmail.com",
    icon: Mail,
  },
  {
    label: "LinkedIn",
    value: "linkedin.com/in/gissel-quitian",
    href: "https://www.linkedin.com/in/gissel-vanessa-quiti%C3%A1n-rojas-62b488362/",
    icon: Linkedin,
  },
  {
    label: "GitHub",
    value: "github.com/gissel-quitian",
    href: "https://github.com/v4nt3",
    icon: Github,
  },
]

export function ContactSection() {
  const { ref, isVisible } = useScrollAnimation(0.1)

  return (
    <section id="contacto" className="py-20 sm:py-24 lg:py-32 bg-secondary/30">
      <div
        ref={ref}
        className={`mx-auto max-w-3xl px-4 sm:px-6 text-center transition-all duration-700 ${
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
        }`}
      >
        <div className="flex items-center justify-center gap-3 mb-4">
          <div className="h-px w-10 bg-primary" />
          <span className="text-xs font-medium uppercase tracking-widest text-primary">
            {"Contacto"}
          </span>
          <div className="h-px w-10 bg-primary" />
        </div>

        <h2 className="font-display text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-balance mb-4">
          {"Trabajemos "}
          <span className="text-primary">{"juntos"}</span>
        </h2>
        <p className="text-muted-foreground text-sm max-w-xl mx-auto mb-12 leading-relaxed">
          {"Estoy buscando oportunidades de practicas profesionales donde pueda aportar mis habilidades en desarrollo web y multimedia. Si tienes un proyecto o una posicion disponible, me encantaria conversar."}
        </p>

        <div className="flex flex-col sm:flex-row items-stretch gap-4 max-w-2xl mx-auto">
          {contactLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex flex-1 flex-col items-center gap-3 rounded-xl border border-border bg-card p-6 hover:border-primary/40 hover:bg-primary/5 transition-all duration-300 hover:-translate-y-1"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-300">
                <link.icon className="h-5 w-5" />
              </div>
              <div className="text-center">
                <p className="text-xs text-muted-foreground uppercase tracking-wider mb-1">
                  {link.label}
                </p>
                <p className="text-sm font-medium text-card-foreground">
                  {link.value}
                </p>
              </div>
              <ArrowUpRight className="h-4 w-4 text-muted-foreground/40 group-hover:text-primary transition-colors" />
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}
