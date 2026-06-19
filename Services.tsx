"use client"

import { motion } from "framer-motion"
import {
  Eye,
  Glasses,
  Search,
  Sparkles,
  Contact,
  Baby,
} from "lucide-react"

const services = [
  {
    icon: Eye,
    title: "Comprehensive Eye Examination",
    description:
      "Accurate vision assessment and prescription testing to help you see clearly and comfortably.",
  },
  {
    icon: Glasses,
    title: "Prescription Glasses",
    description:
      "Personalized eyewear solutions tailored to your prescription, lifestyle, and visual needs.",
  },
  {
    icon: Search,
    title: "Personalised Lens Recommendations",
    description:
      "Expert guidance on lens materials, coatings, blue-light filtering, progressive lenses, and high-index options based on your daily requirements.",
  },
  {
    icon: Sparkles,
    title: "Frame Selection Consultation",
    description:
      "A structured process that helps customers choose frames that suit their face shape, prescription, comfort, and personal style.",
  },
  {
    icon: Contact,
    title: "Contact Lens Consultation",
    description:
      "Professional guidance on suitable contact lens options, usage, handling, hygiene, and aftercare.",
  },
  {
    icon: Baby,
    title: "Children\u2019s Vision Care",
    description:
      "Vision assessments for children and myopia progression lens solutions to support healthy visual development.",
  },
]

export default function Services() {
  return (
    <section id="services" className="bg-bg-card py-14">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7 }}
          className="mx-auto max-w-3xl text-center"
        >
          <span className="text-[10px] font-semibold uppercase tracking-[0.25em] text-gold">
            Our Services
          </span>
          <h2 className="mt-5 text-3xl font-light leading-tight text-charcoal sm:text-4xl lg:text-5xl">
            Clinical Excellence.<br />
            <span className="font-medium italic">Personalised Care.</span>
          </h2>
          <p className="mt-6 text-sm leading-relaxed text-warm-gray">
            Every service is delivered by experienced optometrists who take the
            time to understand your vision and lifestyle.
          </p>
        </motion.div>

        <div className="mt-6 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service, i) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="group cursor-pointer rounded-2xl border border-[#E0D8CC] bg-bg-card p-8 shadow-sm transition-all duration-500 hover:shadow-xl hover:shadow-gold/5 hover:border-gold/20"
            >
              <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl bg-beige-light text-gold transition-all duration-500 group-hover:bg-charcoal group-hover:text-gold">
                <service.icon className="h-5 w-5" />
              </div>
              <h3 className="mb-3 text-sm font-semibold text-charcoal">
                {service.title}
              </h3>
              <p className="text-xs leading-relaxed text-warm-gray">
                {service.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
