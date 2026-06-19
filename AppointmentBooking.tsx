"use client"

import { motion } from "framer-motion"
import { User, Phone, Mail, CalendarDays, Clock, MessageSquare } from "lucide-react"
import { Button } from "@/components/ui/button"

const timeSlots = [
  "9:00 AM",
  "10:00 AM",
  "11:00 AM",
  "1:00 PM",
  "2:00 PM",
  "3:00 PM",
  "4:00 PM",
  "5:00 PM",
]

const services = [
  "Comprehensive Eye Exam",
  "Contact Lens Fitting & Consult",
  "Kids Vision Initiative",
  "Frame Styling Session",
  "Myopia Management Consult",
  "Virtual Frame Consultation",
]

export default function AppointmentBooking() {
  return (
    <section id="appointment" className="bg-bg-base py-14">
      <div className="mx-auto max-w-3xl px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7 }}
          className="mx-auto max-w-3xl text-center"
        >
          <span className="text-[10px] font-semibold uppercase tracking-[0.25em] text-gold">
            Book Now
          </span>
          <h2 className="mt-5 text-3xl font-light leading-tight text-charcoal sm:text-4xl lg:text-5xl">
            Schedule Your
            <br />
            <span className="font-medium italic">Visit to EYRA</span>
          </h2>
          <p className="mt-6 text-sm leading-relaxed text-warm-gray">
            Choose your service, pick a time, and we&apos;ll handle the rest.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="mt-6"
        >
          <form
            onSubmit={(e) => e.preventDefault()}
            className="space-y-8 rounded-3xl bg-bg-card p-8 shadow-sm ring-1 ring-charcoal/5 sm:p-12"
          >
            <div className="grid gap-6 sm:grid-cols-2">
              <div>
                <label className="mb-2 flex items-center gap-2 text-xs font-medium text-charcoal">
                  <User className="h-3.5 w-3.5 text-gold" />
                  Full Name
                </label>
                <input
                  type="text"
                  placeholder="John Doe"
                  className="w-full rounded-xl border border-charcoal/10 bg-bg-card px-4 py-3 text-sm text-charcoal placeholder:text-warm-gray focus:border-gold focus:outline-none focus:ring-2 focus:ring-gold/10"
                  required
                />
              </div>
              <div>
                <label className="mb-2 flex items-center gap-2 text-xs font-medium text-charcoal">
                  <Mail className="h-3.5 w-3.5 text-gold" />
                  Email
                </label>
                <input
                  type="email"
                  placeholder="john@example.com"
                  className="w-full rounded-xl border border-charcoal/10 bg-bg-card px-4 py-3 text-sm text-charcoal placeholder:text-warm-gray focus:border-gold focus:outline-none focus:ring-2 focus:ring-gold/10"
                  required
                />
              </div>
            </div>

            <div className="grid gap-6 sm:grid-cols-2">
              <div>
                <label className="mb-2 flex items-center gap-2 text-xs font-medium text-charcoal">
                  <Phone className="h-3.5 w-3.5 text-gold" />
                  Phone
                </label>
                <input
                  type="tel"
                  placeholder="+1 (555) 000-0000"
                  className="w-full rounded-xl border border-charcoal/10 bg-bg-card px-4 py-3 text-sm text-charcoal placeholder:text-warm-gray focus:border-gold focus:outline-none focus:ring-2 focus:ring-gold/10"
                  required
                />
              </div>
              <div>
                <label className="mb-2 flex items-center gap-2 text-xs font-medium text-charcoal">
                  <CalendarDays className="h-3.5 w-3.5 text-gold" />
                  Preferred Date
                </label>
                <input
                  type="date"
                  className="w-full rounded-xl border border-charcoal/10 bg-bg-card px-4 py-3 text-sm text-charcoal focus:border-gold focus:outline-none focus:ring-2 focus:ring-gold/10"
                  required
                />
              </div>
            </div>

            <div className="grid gap-6 sm:grid-cols-2">
              <div>
                <label className="mb-3 flex items-center gap-2 text-xs font-medium text-charcoal">
                  <Clock className="h-3.5 w-3.5 text-gold" />
                  Preferred Time
                </label>
                <div className="grid grid-cols-2 gap-2 sm:grid-cols-4">
                  {timeSlots.map((slot) => (
                    <label
                      key={slot}
                      className="flex cursor-pointer items-center justify-center rounded-xl border border-charcoal/10 bg-bg-card px-2 py-2.5 text-[10px] font-medium uppercase tracking-[0.05em] text-warm-gray transition-all has-[:checked]:border-gold has-[:checked]:bg-gold/10 has-[:checked]:text-gold"
                    >
                      <input
                        type="radio"
                        name="time"
                        value={slot}
                        className="sr-only"
                      />
                      {slot}
                    </label>
                  ))}
                </div>
              </div>
              <div>
                <label className="mb-2 flex items-center gap-2 text-xs font-medium text-charcoal">
                  <MessageSquare className="h-3.5 w-3.5 text-gold" />
                  Service
                </label>
                <select
                  className="w-full rounded-xl border border-charcoal/10 bg-bg-card px-4 py-3 text-sm text-charcoal focus:border-gold focus:outline-none focus:ring-2 focus:ring-gold/10"
                  required
                >
                  <option value="">Select a service</option>
                  {services.map((s) => (
                    <option key={s} value={s}>
                      {s}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            <div>
              <label className="mb-2 flex items-center gap-2 text-xs font-medium text-charcoal">
                <MessageSquare className="h-3.5 w-3.5 text-gold" />
                Notes
              </label>
              <textarea
                rows={3}
                placeholder="Any specific concerns or preferences..."
                className="w-full rounded-xl border border-charcoal/10 bg-bg-card px-4 py-3 text-sm text-charcoal placeholder:text-warm-gray focus:border-gold focus:outline-none focus:ring-2 focus:ring-gold/10"
              />
            </div>

            <Button type="submit" variant="gold" size="xl" className="w-full">
              Confirm Appointment
            </Button>

            <p className="text-center text-[10px] uppercase tracking-[0.1em] text-warm-gray">
              We&apos;ll confirm your booking within 2 hours via email or SMS.
            </p>
          </form>
        </motion.div>
      </div>
    </section>
  )
}
