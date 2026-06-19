"use client"

import { motion } from "framer-motion"
import { Circle, CircleDot, CircleEllipsis, Target, Dot } from "lucide-react"

const categories = [
  {
    title: "Face Shape",
    options: ["Oval", "Round", "Square", "Heart", "Diamond"],
    icon: CircleDot,
  },
  {
    title: "Lifestyle",
    options: ["Office", "Active", "Weekend", "Formal", "Travel"],
    icon: Circle,
  },
  {
    title: "Prescription",
    options: ["Single Vision", "Progressives", "Reading", "High Index", "Blue Light"],
    icon: Target,
  },
  {
    title: "Comfort",
    options: ["Ultra Light", "Spring Hinges", "Adjustable", "Hypoallergenic", "Silicone"],
    icon: Dot,
  },
  {
    title: "Style",
    options: ["Classic", "Modern", "Retro", "Bold", "Minimal"],
    icon: CircleEllipsis,
  },
]

export default function FrameSelector() {
  return (
    <section id="frames" className="bg-bg-base py-14">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7 }}
          className="mx-auto max-w-3xl text-center"
        >
          <span className="text-[10px] font-semibold uppercase tracking-[0.25em] text-gold">
            Find Your Frame
          </span>
          <h2 className="mt-5 text-3xl font-light leading-tight text-charcoal sm:text-4xl lg:text-5xl">
            Five Questions.<br />
            <span className="font-medium italic">Your Perfect Frame.</span>
          </h2>
          <p className="mt-6 text-sm leading-relaxed text-warm-gray">
            Not sure where to start? Answer a few quick questions and we&apos;ll
            surface frames tailored to you.
          </p>
        </motion.div>

        <div className="mt-6 grid gap-4 sm:gap-6 lg:grid-cols-5 lg:gap-5">
          {categories.map((cat, i) => (
            <motion.div
              key={cat.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="rounded-2xl bg-bg-card p-6 shadow-sm ring-1 ring-charcoal/5"
            >
              <div className="mb-4 text-gold">
                <cat.icon className="h-6 w-6" />
              </div>
              <h3 className="mb-4 text-xs font-semibold uppercase tracking-[0.15em] text-charcoal">
                {cat.title}
              </h3>
              <div className="flex flex-wrap gap-2">
                {cat.options.map((opt) => (
                  <label
                    key={opt}
                    className="flex cursor-pointer items-center gap-2 rounded-full border border-charcoal/10 px-3.5 py-2 text-[10px] font-medium uppercase tracking-[0.05em] text-warm-gray transition-all has-[:checked]:border-gold has-[:checked]:bg-gold/10 has-[:checked]:text-gold"
                  >
                    <input type="checkbox" className="peer sr-only" />
                    <span className="flex h-3.5 w-3.5 shrink-0 items-center justify-center rounded-full border border-charcoal/20 transition-all peer-checked:border-gold peer-checked:bg-gold">
                      <span className="h-1.5 w-1.5 rounded-full bg-bg-card opacity-0 transition-opacity peer-checked:opacity-100" />
                    </span>
                    {opt}
                  </label>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
