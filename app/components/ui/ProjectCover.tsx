"use client";

import Image from "next/image";
import { useState } from "react";

import type { CoverTone, Project } from "@/lib/types";
import { cn } from "@/lib/utils";

const TONES: Record<CoverTone, string> = {
  indigo: "from-indigo-500 via-violet-500 to-fuchsia-500",
  violet: "from-violet-600 via-purple-500 to-indigo-400",
  sky: "from-sky-500 via-cyan-500 to-teal-400",
  emerald: "from-emerald-500 via-teal-500 to-cyan-500",
  amber: "from-amber-500 via-orange-500 to-rose-500",
  rose: "from-rose-500 via-pink-500 to-purple-500",
};

/** Screenshot when available, otherwise a designed browser-window cover. */
interface ProjectCoverProps {
  project: Project;
  priority?: boolean;
  className?: string;
  /** Large cards: the screenshot sits whole inside a tinted frame instead of filling the box. */
  framed?: boolean;
}

export const ProjectCover = ({ project, priority = false, className, framed = false }: ProjectCoverProps) => {
  const [failed, setFailed] = useState(false);
  const showImage = project.image && !failed;

  if (showImage && framed) {
    return (
      <div className={cn("relative flex items-center overflow-hidden bg-surface-2 p-5 sm:p-8", className)}>
        <div aria-hidden="true" className={cn("absolute inset-0 bg-gradient-to-br opacity-20", TONES[project.tone])} />
        <div className="relative aspect-[2/1] w-full overflow-hidden rounded-lg shadow-2xl shadow-black/20 ring-1 ring-black/10 transition duration-700 group-hover:-translate-y-1">
          <Image
            src={project.image!}
            alt={`${project.title} screenshot`}
            fill
            sizes="(min-width: 1024px) 520px, 100vw"
            priority={priority}
            onError={() => setFailed(true)}
            className="object-cover object-left-top"
          />
        </div>
      </div>
    );
  }

  return (
    <div className={cn("relative aspect-[16/10] overflow-hidden bg-surface-2", className)}>
      {showImage ? (
        <Image
          src={project.image!}
          alt={`${project.title} screenshot`}
          fill
          sizes="(min-width: 1024px) 560px, 100vw"
          priority={priority}
          onError={() => setFailed(true)}
          className="object-cover object-top transition duration-700 group-hover:scale-[1.03]"
        />
      ) : (
        <div className={cn("absolute inset-0 bg-gradient-to-br p-5 sm:p-6", TONES[project.tone])}>
          <div className="absolute inset-0 opacity-20 [background-image:radial-gradient(white_1px,transparent_1px)] [background-size:16px_16px]" />
          <div className="relative flex h-full flex-col overflow-hidden rounded-xl bg-white/15 shadow-2xl ring-1 ring-white/25 backdrop-blur-sm transition duration-700 group-hover:scale-[1.02]">
            <div className="flex items-center gap-1.5 border-b border-white/20 px-3 py-2">
              <span className="h-2.5 w-2.5 rounded-full bg-white/60" />
              <span className="h-2.5 w-2.5 rounded-full bg-white/40" />
              <span className="h-2.5 w-2.5 rounded-full bg-white/30" />
              {project.domain && (
                <span className="ml-3 truncate rounded-md bg-white/20 px-2 py-0.5 text-[11px] font-medium text-white/90">{project.domain}</span>
              )}
            </div>
            <div className="flex flex-1 flex-col justify-end p-4 sm:p-5">
              <span className="text-xs font-semibold uppercase tracking-wider text-white/75">{project.context}</span>
              <span className="mt-1 font-display text-xl font-bold leading-tight text-white sm:text-2xl">{project.title}</span>
              <div className="mt-4 grid grid-cols-3 gap-2 opacity-70" aria-hidden="true">
                <span className="h-8 rounded-md bg-white/25" />
                <span className="h-8 rounded-md bg-white/20" />
                <span className="h-8 rounded-md bg-white/15" />
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
