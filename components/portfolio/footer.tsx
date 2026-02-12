"use client"

import { ArrowUp } from "lucide-react"

export function Footer() {
  return (
    <footer className="border-t border-border py-8">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 flex flex-col sm:flex-row items-center justify-between gap-4">
        <p className="text-xs text-muted-foreground">
          {"2026 Gissel Vanessa Quitian Rojas. Todos los derechos reservados."}
        </p>
        <div className="flex items-center gap-6">
          <p className="text-xs text-muted-foreground">
            {"Hecho con "}
            <span className="text-primary font-medium">{"Next.js"}</span>
            {" y "}
            <span className="text-primary font-medium">{"Tailwind CSS"}</span>
          </p>
          <a
            href="#"
            className="flex h-8 w-8 items-center justify-center rounded-lg bg-secondary text-muted-foreground hover:bg-primary hover:text-primary-foreground transition-all duration-200"
            aria-label="Volver arriba"
          >
            <ArrowUp className="h-4 w-4" />
          </a>
        </div>
      </div>
    </footer>
  )
}
