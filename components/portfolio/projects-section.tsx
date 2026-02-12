"use client"

import { Github, ExternalLink, Folder } from "lucide-react"
import { useScrollAnimation } from "@/hooks/use-scroll-animation"

interface Project {
  title: string
  description: string
  technologies: string[]
  github: string
  color: string
}

const projects: Project[] = [
  {
    title: "E-Commerce Dashboard",
    description:
      "Panel de administracion para tienda en linea con graficos de ventas, gestion de inventario y analisis de datos en tiempo real.",
    technologies: ["React", "Node.js", "MongoDB", "CSS"],
    github: "https://github.com",
    color: "from-primary/20 to-primary/5",
  },
  {
    title: "Portfolio 3D Interactivo",
    description:
      "Sitio web con elementos 3D interactivos construidos con Three.js y Blender, mostrando habilidades de diseno multimedia.",
    technologies: ["JavaScript", "Blender", "CSS", "HTML"],
    github: "https://github.com",
    color: "from-primary/15 to-primary/5",
  },
  {
    title: "API REST Gestion Academica",
    description:
      "Backend completo para gestion de estudiantes, materias y calificaciones con autenticacion JWT y documentacion Swagger.",
    technologies: ["Node.js", "PostgreSQL", "Python"],
    github: "https://github.com",
    color: "from-primary/20 to-primary/5",
  },
  {
    title: "App de Tareas Colaborativa",
    description:
      "Aplicacion de productividad en tiempo real con tableros Kanban, asignacion de tareas y notificaciones.",
    technologies: ["React", "MySQL", "Node.js", "CSS"],
    github: "https://github.com",
    color: "from-primary/15 to-primary/5",
  },
  {
    title: "Juego Educativo en Unity",
    description:
      "Videojuego educativo en 2D para ensenar conceptos de programacion basica a ninos, desarrollado con Unity y C#.",
    technologies: ["Unity", "C#", "Blender", "Figma"],
    github: "https://github.com",
    color: "from-primary/20 to-primary/5",
  },
]

function ProjectCard({ project, index, isVisible }: { project: Project; index: number; isVisible: boolean }) {
  return (
    <div
      className={`group relative flex flex-col rounded-xl border border-border bg-card overflow-hidden hover:border-primary/40 transition-all duration-300 hover:-translate-y-1.5 hover:shadow-xl hover:shadow-primary/5 ${
        isVisible ? "animate-fade-up" : "opacity-0"
      }`}
      style={{ animationDelay: `${index * 100 + 100}ms` }}
    >
      {/* Image preview area */}
      <div className={`relative h-36 bg-gradient-to-br ${project.color} flex items-center justify-center overflow-hidden`}>
        <Folder className="h-10 w-10 text-primary/40 group-hover:text-primary/60 transition-colors duration-300 group-hover:scale-110 transform" />
        {/* Animated bottom line */}
        <div className="absolute bottom-0 left-0 h-0.5 w-0 bg-primary transition-all duration-500 group-hover:w-full" />
      </div>

      <div className="flex flex-col flex-1 p-6">
        <div className="flex items-start justify-between mb-3">
          <h3 className="font-display text-base font-semibold text-card-foreground group-hover:text-primary transition-colors duration-200">
            {project.title}
          </h3>
          <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            className="shrink-0 p-1.5 rounded-md text-muted-foreground hover:text-foreground hover:bg-secondary transition-colors"
            aria-label={`Ver ${project.title} en GitHub`}
          >
            <Github className="h-4 w-4" />
          </a>
        </div>

        <p className="text-sm text-muted-foreground leading-relaxed flex-1">
          {project.description}
        </p>

        <div className="mt-4 flex flex-wrap gap-1.5">
          {project.technologies.map((tech) => (
            <span
              key={tech}
              className="inline-flex items-center rounded-md bg-secondary px-2 py-0.5 text-xs font-medium text-secondary-foreground"
            >
              {tech}
            </span>
          ))}
        </div>

        <a
          href={project.github}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-4 inline-flex items-center gap-1.5 text-xs font-medium text-primary hover:underline"
        >
          {"Ver proyecto"}
          <ExternalLink className="h-3 w-3" />
        </a>
      </div>
    </div>
  )
}

export function ProjectsSection() {
  const { ref, isVisible } = useScrollAnimation(0.1)

  return (
    <section id="proyectos" className="py-20 sm:py-24 lg:py-32">
      <div
        ref={ref}
        className={`mx-auto max-w-6xl px-4 sm:px-6 transition-all duration-700 ${
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
        }`}
      >
        <div className="flex items-center gap-3 mb-4">
          <div className="h-px flex-1 max-w-[60px] bg-primary" />
          <span className="text-xs font-medium uppercase tracking-widest text-primary">
            {"Proyectos"}
          </span>
        </div>

        <h2 className="font-display text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight mb-4">
          {"Otros "}
          <span className="text-primary">{"Proyectos"}</span>
        </h2>
        <p className="text-muted-foreground text-sm max-w-xl mb-12 leading-relaxed">
          {"Una seleccion de proyectos academicos y personales que reflejan mi aprendizaje y crecimiento como desarrolladora."}
        </p>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {projects.map((project, i) => (
            <ProjectCard key={project.title} project={project} index={i} isVisible={isVisible} />
          ))}
        </div>
      </div>
    </section>
  )
}
