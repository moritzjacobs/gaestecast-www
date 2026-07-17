import { ablauf } from "@/content/site";

export default function Ablauf() {
  return (
    <section id="ablauf" className="px-6 py-20">
      <div className="mx-auto max-w-5xl">
        <h2 className="font-display text-4xl md:text-5xl">{ablauf.title}</h2>
        <p className="mt-4 max-w-2xl font-sans text-lg text-ink/80">
          {ablauf.intro}
        </p>

        <div className="mt-14 grid gap-10 md:grid-cols-3">
          {ablauf.steps.map((step, index) => (
            <div key={step.number} className="relative">
              <span
                className={`flex h-14 w-14 items-center justify-center rounded-full border-2 border-ink bg-cream-soft font-display text-3xl shadow-[3px_3px_0_var(--color-ink)] ${
                  index % 2 === 0 ? "-rotate-3" : "rotate-3"
                }`}
              >
                {step.number}
              </span>
              <h3 className="mt-4 font-display text-2xl font-semibold">
                {step.title}
              </h3>
              <p className="mt-2 font-sans text-ink/80">{step.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
