"use client"

import { motion } from "framer-motion"
import { MapPin, Phone, Mail, Clock, Camera } from "lucide-react"
import { Button } from "@/components/ui/button"

const contactInfo = [
  {
    icon: MapPin,
    title: "Visit",
    details: ["123 Vision Street", "Medical District", "City, State 10001"],
  },
  {
    icon: Phone,
    title: "Call",
    details: ["+1 (555) 123-4567", "Mon–Sat: 9 AM – 6 PM"],
  },
  {
    icon: Mail,
    title: "Email",
    details: ["hello@eyra.care", "We reply within 4 hours"],
  },
  {
    icon: Clock,
    title: "Hours",
    details: ["Mon–Fri: 9 AM – 7 PM", "Sat: 9 AM – 5 PM", "Sun: Closed"],
  },
]

const instagramPosts = [
  { id: 1, label: "New drop" },
  { id: 2, label: "Behind the lens" },
  { id: 3, label: "Patient love" },
  { id: 4, label: "Kids Day" },
]

export default function Contact() {
  return (
    <section id="contact" className="bg-bg-card py-14">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7 }}
          className="mx-auto max-w-3xl text-center"
        >
          <span className="text-[10px] font-semibold uppercase tracking-[0.25em] text-gold">
            Contact
          </span>
          <h2 className="mt-5 text-3xl font-light leading-tight text-charcoal sm:text-4xl lg:text-5xl">
            We&apos;d Love to
            <br />
            <span className="font-medium italic">Hear From You</span>
          </h2>
          <p className="mt-6 text-sm leading-relaxed text-warm-gray">
            Visit us, call us, or send a message. We are here for you.
          </p>
        </motion.div>

        <div className="mt-6 grid gap-8 lg:grid-cols-2">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.7 }}
            className="space-y-6"
          >
            <div className="grid gap-5 sm:grid-cols-2">
              {contactInfo.map((item) => (
                <div
                  key={item.title}
                  className="rounded-2xl bg-bg-card p-6 shadow-sm ring-1 ring-charcoal/5"
                >
                  <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-xl bg-beige-light text-gold">
                    <item.icon className="h-5 w-5" />
                  </div>
                  <h3 className="mb-2 text-xs font-semibold uppercase tracking-[0.1em] text-charcoal">
                    {item.title}
                  </h3>
                  {item.details.map((line) => (
                    <p key={line} className="text-sm text-warm-gray">
                      {line}
                    </p>
                  ))}
                </div>
              ))}
            </div>

            <div className="overflow-hidden rounded-2xl shadow-sm ring-1 ring-charcoal/5">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d387193.305935303!2d-74.25986613799748!3d40.69714941774136!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c24fa5d33f083b%3A0xc80b8f06e177fe62!2sNew%20York%2C%20NY!5e0!3m2!1sen!2sus!4v1"
                width="100%"
                height="220"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="EYRA Location"
              />
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.7 }}
            className="space-y-6"
          >
            <div className="rounded-2xl bg-bg-card p-8 shadow-sm ring-1 ring-stone-100">
              <div className="mb-3 flex items-center gap-2.5">
                <Camera className="h-5 w-5 text-gold" />
                <span className="text-xs font-medium uppercase tracking-[0.15em] text-charcoal">
                  @eyra.care
                </span>
              </div>
              <p className="mb-6 text-sm text-warm-gray">
                Follow for eye care insights, new arrivals, and a glimpse into
                the EYRA studio.
              </p>
              <div className="grid grid-cols-2 gap-3">
                {instagramPosts.map((post) => (
                  <div
                    key={post.id}
                    className="aspect-square rounded-xl bg-bg-card flex items-center justify-center text-center p-4 ring-1 ring-stone-100 transition-all hover:ring-gold/30"
                  >
                    <Camera className="mx-auto mb-2 h-5 w-5 text-gold/60" />
                    <p className="text-[10px] uppercase tracking-[0.1em] text-warm-gray">
                      {post.label}
                    </p>
                  </div>
                ))}
              </div>
              <div className="mt-6">
                <Button variant="gold" className="w-full" asChild>
                  <a
                    href="https://instagram.com"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Follow on Instagram
                  </a>
                </Button>
              </div>
            </div>

            <div className="rounded-2xl bg-bg-card p-8 shadow-sm ring-1 ring-charcoal/5">
              <h3 className="mb-5 text-xs font-semibold uppercase tracking-[0.1em] text-charcoal">
                Send a Message
              </h3>
              <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
                <div className="grid gap-4 sm:grid-cols-2">
                  <input
                    type="text"
                    placeholder="Your name"
                    className="w-full rounded-xl border border-charcoal/10 bg-bg-card px-4 py-3 text-sm text-charcoal placeholder:text-warm-gray focus:border-gold focus:outline-none focus:ring-2 focus:ring-gold/10"
                  />
                  <input
                    type="email"
                    placeholder="Your email"
                    className="w-full rounded-xl border border-charcoal/10 bg-bg-card px-4 py-3 text-sm text-charcoal placeholder:text-warm-gray focus:border-gold focus:outline-none focus:ring-2 focus:ring-gold/10"
                  />
                </div>
                <textarea
                  rows={4}
                  placeholder="How can we help?"
                  className="w-full rounded-xl border border-charcoal/10 bg-bg-card px-4 py-3 text-sm text-charcoal placeholder:text-warm-gray focus:border-gold focus:outline-none focus:ring-2 focus:ring-gold/10"
                />
                <Button type="submit" variant="gold" className="w-full">
                  Send Message
                </Button>
              </form>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
