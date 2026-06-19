"use client"

import { motion } from "framer-motion"
import { ArrowRight, Calendar } from "lucide-react"
import { Button } from "@/components/ui/button"

const posts = [
  {
    title: "Digital Eye Strain: A Modern Epidemic",
    excerpt:
      "How blue light, prolonged screen time, and poor ergonomics are affecting a generation — and what you can do about it.",
    date: "Jun 2026",
    category: "Eye Health",
  },
  {
    title: "The Art of Choosing the Right Frame",
    excerpt:
      "Face shape, skin undertone, prescription requirements, and personal style — a complete guide to finding frames that feel like you.",
    date: "May 2026",
    category: "Eyewear",
  },
  {
    title: "Myopia Control: What Every Parent Should Know",
    excerpt:
      "The evidence behind myopia management in children, from orthokeratology to atropine, and why early intervention matters.",
    date: "Apr 2026",
    category: "Kids Vision",
  },
]

export default function Blog() {
  return (
    <section id="blog" className="bg-bg-card py-14">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7 }}
          className="mx-auto max-w-3xl text-center"
        >
          <span className="text-[10px] font-semibold uppercase tracking-[0.25em] text-gold">
            Journal
          </span>
          <h2 className="mt-5 text-3xl font-light leading-tight text-charcoal sm:text-4xl lg:text-5xl">
            Eye Care Insights
          </h2>
          <p className="mt-6 text-sm leading-relaxed text-warm-gray">
            Expert advice, clinical insights, and stories from the practice.
          </p>
        </motion.div>

        <div className="mt-6 grid grid-cols-1 gap-8 md:grid-cols-3">
          {posts.map((post, i) => (
            <motion.article
              key={post.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="group cursor-pointer rounded-2xl bg-bg-card p-8 shadow-sm ring-1 ring-charcoal/5 transition-all duration-500 hover:shadow-xl hover:ring-gold/20"
            >
              <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-beige-light px-3 py-1.5 text-[10px] font-medium text-gold">
                <Calendar className="h-3 w-3" />
                {post.date}
              </div>
              <span className="mb-3 block text-[10px] font-semibold uppercase tracking-[0.15em] text-warm-gray">
                {post.category}
              </span>
              <h3 className="mb-3 text-base font-semibold leading-snug text-charcoal transition-colors group-hover:text-gold">
                {post.title}
              </h3>
              <p className="mb-5 text-sm leading-relaxed text-warm-gray">
                {post.excerpt}
              </p>
              <span className="inline-flex items-center gap-1.5 text-xs font-medium uppercase tracking-[0.1em] text-gold transition-all group-hover:gap-2.5">
                Read <ArrowRight className="h-3 w-3" />
              </span>
            </motion.article>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mt-6 text-center"
        >
          <Button variant="outline" asChild>
            <a href="#">View All Articles</a>
          </Button>
        </motion.div>
      </div>
    </section>
  )
}
