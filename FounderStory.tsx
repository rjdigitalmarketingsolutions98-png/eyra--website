"use client"

import { motion } from "framer-motion"
import Image from "next/image"

export default function FounderStory() {
  return (
    <section id="founder" className="bg-bg-card py-14">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="rounded-3xl border border-stone-100 bg-bg-card p-10 shadow-sm sm:p-14"
        >
          <div className="grid items-start gap-10 lg:grid-cols-[auto_1fr]">
            <div className="flex flex-col items-center text-center lg:items-start lg:text-left">
              <div className="relative h-32 w-32 overflow-hidden rounded-full ring-4 ring-gold/20 shadow-xl">
                <Image
                  src="/founder.jpg"
                  alt="Rajesh Chougoni"
                  fill
                  className="object-cover"
                  sizes="128px"
                  loading="lazy"
                />
              </div>
              <h3 className="mt-5 text-lg font-semibold text-charcoal">
                Rajesh Chougoni
              </h3>
              <p className="mt-1 text-[10px] font-semibold uppercase tracking-[0.2em] text-gold">
                Consultant Optometrist
              </p>
            </div>
            <div className="border-t lg:border-t-0 lg:border-l border-charcoal/10 pt-8 lg:pt-0 lg:pl-10">
              <p className="text-sm leading-relaxed text-warm-gray italic">
                &ldquo;After nearly a decade in the optical industry, I noticed
                that many stores spent more time selling eyewear than
                understanding a customer&rsquo;s eyes. Eye tests often lasted
                only a few minutes, while the focus remained on frames and
                lenses. As an optometrist and gold medalist in Optometry, I
                believed people deserved more than just a prescription&mdash;they
                deserved answers, guidance, and genuine eye care. That&rsquo;s
                why I started EYRA. At EYRA, eye care comes first. We take the
                time to understand your vision, answer your questions, and help
                you choose eyewear that truly suits you.&rdquo;
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
