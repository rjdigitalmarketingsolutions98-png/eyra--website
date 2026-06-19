"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import {
  Stethoscope,
  Eye,
  Glasses,
  Search,
} from "lucide-react"

const eyraDifference = [
  {
    icon: Stethoscope,
    title: "Qualified Optometrists",
    description:
      "Every eye examination is performed by trained and qualified optometrists.",
    image:
      "/optometrist.jpeg",
  },
  {
    icon: Eye,
    title: "Eye Care First",
    description:
      "We prioritize understanding your vision and eye health before recommending eyewear.",
    image:
      "/eyetesting.jpeg",
  },
  {
    icon: Glasses,
    title: "Guided Frame Selection",
    description:
      "A structured process to help customers find frames that suit their face, lifestyle, and prescription.",
    image:
      "/frame.jpeg",
  },
  {
    icon: Search,
    title: "Personalized Lens Recommendations",
    description:
      "We recommend lenses based on your prescription, lifestyle, work demands, and visual needs\u2014not sales targets. Every lens recommendation is tailored to provide the best comfort, clarity, and performance for your daily life.",
    image:
      "/lens.jpeg",
  },
]

export default function EyraDifference() {
  return (
    <section id="eyra-difference" className="bg-bg-card py-14">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7 }}
        >
          <div className="mx-auto max-w-2xl text-center">
            <span className="text-[10px] font-semibold uppercase tracking-[0.25em] text-gold">
              Why Choose Us
            </span>
            <h2 className="mt-5 text-3xl font-light leading-tight text-charcoal sm:text-4xl lg:text-5xl">
              <span className="font-medium italic">The EYRA</span> Difference
            </h2>
          </div>
          <div className="mt-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {eyraDifference.map((item, i) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="group flex flex-col overflow-hidden rounded-2xl border border-[#E0D8CC] bg-bg-card shadow-sm transition-all duration-500 hover:shadow-md"
              >
                <div className="relative aspect-[4/3] w-full overflow-hidden">
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                    loading="lazy"
                  />
                </div>
                <div className="flex flex-1 flex-col p-6">
                  <div className="mb-3 flex h-9 w-9 items-center justify-center rounded-lg bg-beige-light text-gold">
                    <item.icon className="h-4 w-4" />
                  </div>
                  <h3 className="mb-2 text-sm font-semibold text-charcoal">
                    {item.title}
                  </h3>
                  <p className="text-xs leading-relaxed text-warm-gray">
                    {item.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
