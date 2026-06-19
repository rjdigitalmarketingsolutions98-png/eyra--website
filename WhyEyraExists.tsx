"use client"

import { motion } from "framer-motion"
import { Eye, Glasses, Heart } from "lucide-react"

const features = [
  {
    icon: Eye,
    title: "Comprehensive Eye Evaluation",
    description:
      "A detailed assessment of vision, eye health, symptoms, and visual needs before any recommendation is made.",
  },
  {
    icon: Glasses,
    title: "Personalized Eyewear Guidance",
    description:
      "Frame and lens recommendations tailored to your prescription, lifestyle, comfort, and visual demands.",
  },
  {
    icon: Heart,
    title: "Eye Care First",
    description:
      "Every recommendation begins with your eyes, not with a product.",
  },
]

export default function WhyEyraExists() {
  return (
    <section id="why-eyra" className="bg-bg-card py-14">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7 }}
          className="mx-auto max-w-3xl text-center"
        >
          <span className="text-[10px] font-semibold uppercase tracking-[0.25em] text-gold">
            Our Purpose
          </span>
          <h2 className="mt-5 text-3xl font-light leading-tight text-charcoal sm:text-4xl lg:text-5xl">
            Why EYRA Exists
          </h2>
          <p className="mt-6 text-sm leading-relaxed text-warm-gray">
            Most people buy glasses without ever understanding their eyes.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="mx-auto mt-6 max-w-2xl text-center"
        >
          <p className="text-sm leading-relaxed text-warm-gray">
            EYRA was created to bring together comprehensive eye care, patient
            education, and thoughtfully curated eyewear in one experience.
          </p>
          <p className="mt-4 text-sm leading-relaxed text-warm-gray">
            We believe eyewear recommendations should begin with understanding
            your eyes, your lifestyle, and your visual needs&mdash;not just
            your prescription.
          </p>
        </motion.div>

        <div className="mt-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((feature, i) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="group rounded-2xl border border-[#E0D8CC] bg-bg-card p-8 shadow-sm transition-all duration-500 hover:shadow-md"
            >
              <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl bg-beige-light text-gold">
                <feature.icon className="h-5 w-5" />
              </div>
              <h3 className="mb-3 text-sm font-semibold text-charcoal">
                {feature.title}
              </h3>
              <p className="text-xs leading-relaxed text-warm-gray">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="mt-10 text-center"
        >
          <p className="mb-4 text-sm leading-relaxed text-warm-gray">
            Opening Soon in Hyderabad.
          </p>
          <a
            href="#"
            className="inline-flex items-center gap-2 rounded-full bg-gold px-8 py-3 text-xs font-medium uppercase tracking-[0.15em] text-white transition-all duration-300 hover:-translate-y-0.5 hover:shadow-lg"
          >
            Follow the Journey
          </a>
        </motion.div>
      </div>
    </section>
  )
}
