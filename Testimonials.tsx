"use client"

import { motion } from "framer-motion"
import { Star } from "lucide-react"

const testimonials = [
  {
    name: "Aarav M.",
    role: "Patient since 2022",
    content:
      "I have never experienced this level of care anywhere. The optometrist spent 45 minutes with me, explained every finding, and then helped me pick frames that actually suit my face. The glasses arrived in three days, perfectly adjusted.",
    rating: 5,
  },
  {
    name: "Priya K.",
    role: "Parent of Myra, age 7",
    content:
      "The Kids Vision Initiative is a blessing. My daughter got her first glasses for free, and the team made her feel so comfortable. She actually asks to go back for her check-ups.",
    rating: 5,
  },
  {
    name: "Rohan S.",
    role: "Contact lens patient",
    content:
      "I had given up on contact lenses after years of discomfort. EYRA found the perfect fit and now I forget I am wearing them. Life-changing doesn't begin to cover it.",
    rating: 5,
  },
  {
    name: "Anika V.",
    role: "Patient since 2023",
    content:
      "The frame selection process was unlike anything I have experienced. They considered my face shape, my skin tone, my lifestyle and the result is a pair of glasses I am genuinely proud to wear.",
    rating: 5,
  },
]

export default function Testimonials() {
  return (
    <section id="testimonials" className="bg-bg-base py-14">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7 }}
          className="mx-auto max-w-3xl text-center"
        >
          <span className="text-[10px] font-semibold uppercase tracking-[0.25em] text-gold">
            Stories
          </span>
          <h2 className="mt-5 text-3xl font-light leading-tight text-charcoal sm:text-4xl lg:text-5xl">
            What Our Patients Say
          </h2>
          <p className="mt-6 text-sm leading-relaxed text-warm-gray">
            Real voices from people who trust us with their vision.
          </p>
        </motion.div>

        <div className="mt-6 grid gap-8 md:grid-cols-2">
          {testimonials.map((t, i) => (
            <motion.div
              key={t.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="rounded-2xl border border-stone-100 bg-bg-card p-8 shadow-sm transition-all duration-500 hover:shadow-md"
            >
              <div className="mb-4 flex gap-1">
                {Array.from({ length: t.rating }).map((_, j) => (
                  <Star key={j} className="h-4 w-4 fill-gold text-gold" />
                ))}
              </div>
              <p className="mb-6 text-sm leading-relaxed text-warm-gray">
                &ldquo;{t.content}&rdquo;
              </p>
              <div className="border-t border-stone-100 pt-4">
                <p className="text-sm font-medium text-charcoal">{t.name}</p>
                <p className="text-[10px] uppercase tracking-[0.1em] text-warm-gray">
                  {t.role}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
