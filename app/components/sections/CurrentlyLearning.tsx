import { currentlyLearning } from "@/lib/data";

import { Card } from "../ui/Card";

/** Small "currently learning" card shown at the end of the skills grid. */
export default function CurrentlyLearning() {
  return (
    <>
      {currentlyLearning.map((item) => (
        <Card key={item.title} className="border-dashed p-6">
          <div className="flex items-center gap-3">
            <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-accent/10 text-accent">
              <item.icon aria-hidden="true" className="h-5 w-5" />
            </span>
            <div>
              <p className="text-xs font-semibold uppercase tracking-wider text-accent">Currently learning</p>
              <h3 className="font-display text-lg font-bold text-fg">{item.title}</h3>
            </div>
          </div>
          <p className="mt-4 text-sm leading-relaxed text-muted">{item.description}</p>
          <div className="mt-5">
            <div className="flex justify-between text-xs text-muted">
              <span>Since {item.startedDate}</span>
              <span className="font-semibold text-fg">{item.progress}%</span>
            </div>
            <div className="mt-2 h-1.5 overflow-hidden rounded-full bg-surface-2" role="progressbar" aria-valuenow={item.progress} aria-valuemin={0} aria-valuemax={100} aria-label={`${item.title} progress`}>
              <div className="h-full rounded-full bg-accent" style={{ width: `${item.progress}%` }} />
            </div>
          </div>
        </Card>
      ))}
    </>
  );
}
