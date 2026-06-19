"use client"

import { motion } from "framer-motion"
import { Heart, Sparkles, Star } from "lucide-react"

export default function KidsVision() {
  return (
    <section id="kids-vision" className="bg-bg-card py-14">
      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid items-center gap-14 lg:grid-cols-2">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
          >
            <span className="inline-flex items-center gap-2 rounded-full bg-bg-card/80 px-4 py-2 text-[10px] font-semibold uppercase tracking-[0.15em] text-gold backdrop-blur-sm ring-1 ring-gold/20">
              <Heart className="h-3 w-3" />
              EYRA Kids Vision Initiative
            </span>
            <h2 className="mt-7 text-3xl font-light leading-tight text-charcoal sm:text-4xl lg:text-5xl">
              Free First Glasses
              <br />
              <span className="font-medium italic">For Children Under 8</span>
            </h2>
            <p className="mt-6 text-sm leading-relaxed text-warm-gray">
              Every child deserves to see the world clearly. Our Kids Vision
              Initiative provides a complimentary comprehensive paediatric eye
              exam and first pair of basic glasses for every child aged 8 and
              under — no purchase necessary, no strings attached.
            </p>
            <ul className="mt-6 space-y-4">
              {[
                "Full paediatric eye examination by a qualified optometrist",
                "High-quality basic frame and impact-resistant lenses",
                "Myopia risk assessment and early intervention planning",
                "Parent guidance on visual development milestones",
                "Complimentary annual follow-up check-ups",
              ].map((item) => (
                <li key={item} className="flex items-start gap-3 text-sm text-warm-gray">
                  <Sparkles className="mt-0.5 h-4 w-4 shrink-0 text-gold" />
                  {item}
                </li>
              ))}
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative hidden lg:block"
          >
            <div className="aspect-[4/5] rounded-3xl bg-gradient-to-br from-gold/10 via-beige to-gold/5 p-0.5">
              <div className="flex h-full w-full flex-col items-center justify-center rounded-[calc(1.5rem-1px)] bg-bg-card p-12 text-center">
                <Star className="h-16 w-16 text-gold" />
                <h3 className="mt-6 text-3xl font-light text-charcoal">
                  Building a brighter future
                </h3>
                <p className="mt-3 text-sm text-warm-gray">
                  one pair at a time.
                </p>
                <div className="mt-6 h-1 w-20 rounded-full bg-gold/30" />
                <p className="mt-6 text-[10px] uppercase tracking-[0.2em] text-gold">
                  Since 2020
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
