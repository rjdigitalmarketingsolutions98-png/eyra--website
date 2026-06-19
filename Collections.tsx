"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import { ArrowRight } from "lucide-react"

const collections = [
  {
    name: "The Heritage",
    description: "Classic handcrafted acetate frame with timeless vintage styling.",
    tag: "Gold Accent",
    src: "https://images.pexels.com/photos/11982414/pexels-photo-11982414.jpeg?auto=compress&cs=tinysrgb&w=900&dpr=2",
  },
  {
    name: "The Minimalist",
    description: "Ultra-thin titanium frame with clean minimalist aesthetics.",
    tag: "Titanium",
    src: "https://images.pexels.com/photos/32887098/pexels-photo-32887098.jpeg?auto=compress&cs=tinysrgb&w=900&dpr=2",
  },
  {
    name: "The Bold",
    description: "Thick modern statement frame for confident personalities.",
    tag: "Statement",
    src: "https://images.pexels.com/photos/7173274/pexels-photo-7173274.jpeg?auto=compress&cs=tinysrgb&w=900&dpr=2",
  },
  {
    name: "The Artisan",
    description: "Unique handcrafted luxury frame with distinctive artistic detailing.",
    tag: "Limited Edition",
    src: "https://images.pexels.com/photos/29560425/pexels-photo-29560425.jpeg?auto=compress&cs=tinysrgb&w=900&dpr=2",
  },
]

export default function Collections() {
  return (
    <section id="collections" className="bg-bg-base py-14">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7 }}
          className="mx-auto max-w-3xl text-center"
        >
          <span className="text-[10px] font-semibold uppercase tracking-[0.25em] text-gold">
            Collections
          </span>
          <h2 className="mt-5 text-3xl font-light leading-tight text-charcoal sm:text-4xl lg:text-5xl">
            Frames That
            <br />
            <span className="font-medium italic">Define You</span>
          </h2>
          <p className="mt-6 text-sm leading-relaxed text-warm-gray">
            Curated from the world&apos;s finest optical houses. Each collection,
            a distinct voice.
          </p>
        </motion.div>

        <div className="mt-6 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {collections.map((col, i) => (
            <motion.div
              key={col.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="group overflow-hidden rounded-2xl bg-bg-card shadow-sm ring-1 ring-stone-100 transition-all duration-500 hover:shadow-md"
            >
              <div className="relative aspect-[4/5] w-full overflow-hidden bg-stone-50">
                <Image
                  src={col.src}
                  alt={col.name}
                  fill
                  className="object-cover brightness-[0.97] sepia-[0.04] contrast-[1.05] transition-transform duration-700 group-hover:scale-105"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                  loading="lazy"
                />
              </div>
              <div className="p-6 pb-8">
                <span className="mb-1.5 block text-[10px] font-medium uppercase tracking-[0.2em] text-gold">
                  {col.tag}
                </span>
                <h3 className="mb-2 text-lg font-medium text-charcoal">
                  {col.name}
                </h3>
                <p className="text-sm leading-relaxed text-warm-gray">
                  {col.description}
                </p>
                <div className="mt-4 flex items-center gap-1.5 text-xs font-medium uppercase tracking-[0.1em] text-gold opacity-0 transition-all duration-300 group-hover:opacity-100">
                  Explore <ArrowRight className="h-3 w-3" />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
