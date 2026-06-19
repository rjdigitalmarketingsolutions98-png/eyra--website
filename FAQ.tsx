"use client"

import { motion } from "framer-motion"
import * as AccordionPrimitive from "@radix-ui/react-accordion"
import { Plus } from "lucide-react"

const faqs = [
  {
    q: "How long does an eye examination take?",
    a: "Most comprehensive eye examinations at EYRA take around 20\u201330 minutes. The duration may vary depending on your visual needs, symptoms, and whether additional eye health assessments are required.",
  },
  {
    q: "How do I know which frame suits me best?",
    a: "We guide you through frame selection based on your face shape, prescription, lifestyle, comfort preferences, and personal style. Our goal is to help you choose confidently without feeling overwhelmed.",
  },
  {
    q: "What makes EYRA different from a regular optical store?",
    a: "EYRA follows an eye-care-first approach. Every recommendation begins with understanding your vision needs, eye health, daily habits, and lifestyle before suggesting eyewear solutions.",
  },
  {
    q: "How often should I have my eyes examined?",
    a: "Most adults should have a comprehensive eye examination every 1\u20132 years. More frequent examinations may be recommended for children, contact lens users, or individuals with specific eye conditions.",
  },
  {
    q: "What frame materials do you offer?",
    a: "We curate high-quality frame materials including acetate, stainless steel, titanium, TR90, and lightweight premium composites, selected for comfort, durability, and aesthetics.",
  },
  {
    q: "How are lenses recommended at EYRA?",
    a: "Lens recommendations are personalized based on your prescription, screen usage, occupation, lifestyle, visual demands, and comfort requirements rather than a one-size-fits-all approach.",
  },
]

export default function FAQ() {
  return (
    <section id="faq" className="bg-bg-base py-14">
      <div className="mx-auto max-w-3xl px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7 }}
          className="text-center"
        >
          <span className="text-[10px] font-semibold uppercase tracking-[0.25em] text-gold">
            FAQ
          </span>
          <h2 className="mt-5 text-3xl font-light leading-tight text-charcoal sm:text-4xl lg:text-5xl">
            Questions?
            <br />
            <span className="font-medium italic">We Have Answers.</span>
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="mt-6"
        >
          <AccordionPrimitive.Root type="single" collapsible className="space-y-3">
            {faqs.map((faq, i) => (
              <AccordionPrimitive.Item
                key={i}
                value={`item-${i}`}
                className="rounded-2xl bg-bg-card shadow-sm ring-1 ring-charcoal/5 transition-all hover:bg-charcoal/[0.02] data-[state=open]:ring-gold/30 data-[state=open]:shadow-lg data-[state=open]:shadow-gold/5"
              >
                <AccordionPrimitive.Header className="flex">
                  <AccordionPrimitive.Trigger className="group flex w-full items-center justify-between px-6 py-5 text-left text-sm font-medium text-charcoal">
                    {faq.q}
                    <Plus className="ml-4 h-4 w-4 shrink-0 text-gold transition-transform duration-300 group-data-[state=open]:rotate-45" />
                  </AccordionPrimitive.Trigger>
                </AccordionPrimitive.Header>
                <AccordionPrimitive.Content className="overflow-hidden data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down">
                  <div className="px-6 pb-5 text-sm leading-relaxed text-warm-gray">
                    {faq.a}
                  </div>
                </AccordionPrimitive.Content>
              </AccordionPrimitive.Item>
            ))}
          </AccordionPrimitive.Root>
        </motion.div>
      </div>
    </section>
  )
}
