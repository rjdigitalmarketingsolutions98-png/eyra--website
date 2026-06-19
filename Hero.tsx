"use client"

import Image from "next/image"

export default function Hero() {
  return (
    <section className="bg-bg-base pt-28 lg:pt-32">
      {/* Mobile layout */}
      <div className="flex flex-col lg:hidden">
        <div className="relative h-[55vh] min-h-[380px] w-full overflow-hidden">
          <Image
            src="/hero-portrait.jpeg"
            alt=""
            fill
            className="object-cover object-center"
            priority
          />
        </div>
        <div className="flex flex-col justify-center px-4 py-14 sm:px-6">
          <span className="mb-6 block text-[11px] font-medium uppercase tracking-[0.35em] text-warm-gray">
            EYRA
          </span>
          <h1 className="text-5xl font-light leading-[1.15] tracking-[-0.05em] text-charcoal sm:text-6xl md:text-7xl">
            Sight,
            <br />
            <span className="font-medium">Engineered.</span>
            <br />
            Style,
            <br />
            <span className="font-medium">Perfected.</span>
          </h1>
          <div className="mt-5 h-px w-10 bg-gold" />
          <p className="mt-3 text-lg font-light leading-snug tracking-tight text-warm-gray sm:text-xl">
            Reimagining Eye Care &amp; Eyewear.
          </p>
          <p className="mt-6 max-w-md text-sm leading-relaxed text-warm-gray">
            Comprehensive eye examinations, personalized vision solutions, and
            thoughtfully curated eyewear designed around you.
          </p>

        </div>
      </div>

      {/* Desktop layout */}
      <div className="mx-auto hidden max-w-[1400px] lg:block lg:px-8">
        <div className="relative" style={{ minHeight: "750px" }}>
          <div className="absolute inset-y-0 right-0 w-[54%] overflow-hidden rounded-xl">
            <Image
              src="/hero-portrait.jpeg"
              alt=""
              fill
              className="object-cover object-center brightness-[0.97] sepia-[0.04] contrast-[1.05]"
              priority
              sizes="54vw"
            />
            <div className="pointer-events-none absolute inset-y-0 left-0 w-[30%] bg-gradient-to-r from-bg-base via-bg-base/60 to-transparent" />
            <div className="pointer-events-none absolute bottom-0 left-0 h-1/2 w-1/2 bg-gradient-to-tr from-black/10 via-transparent to-transparent" />
          </div>

          <div
            className="flex w-[48%] flex-col justify-center py-16"
            style={{ minHeight: "750px" }}
          >
            <span className="mb-6 block text-[11px] font-medium uppercase tracking-[0.35em] text-warm-gray">
              EYRA
            </span>
            <h1 className="text-5xl font-light leading-[1.15] tracking-[-0.05em] text-charcoal sm:text-6xl md:text-7xl lg:text-7xl xl:text-8xl">
              Sight,
              <br />
              <span className="font-medium">Engineered.</span>
              <br />
              Style,
              <br />
              <span className="font-medium">Perfected.</span>
            </h1>
            <div className="mt-5 h-px w-10 bg-gold" />
            <p className="mt-3 text-lg font-light leading-snug tracking-tight text-warm-gray sm:text-xl">
              Reimagining Eye Care &amp; Eyewear.
            </p>
            <p className="mt-6 max-w-md text-sm leading-relaxed text-warm-gray">
              Comprehensive eye examinations, personalized vision solutions,
              and thoughtfully curated eyewear designed around you.
            </p>

          </div>
        </div>
      </div>
    </section>
  )
}
