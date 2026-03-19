"use client"

import { motion } from "framer-motion"
import Image from "next/image"

export function Hero() {
  return (
    <section className="min-h-screen bg-[#f5f5f3] relative overflow-hidden">
      <div className="absolute right-0 top-0 w-1/2 h-full opacity-20 pointer-events-none hidden lg:block">
        <Image
          src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Rectangle%206813-5-SWW1W0otY7zVeizZvef8UGT6pZ689r.png"
          alt=""
          fill
          className="object-cover object-center"
        />
      </div>

      <div className="min-h-screen flex flex-col justify-center px-6 md:px-12 lg:px-24 pt-24">
        <div className="max-w-5xl">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xs tracking-[0.3em] text-[#666] mb-12 uppercase"
          >
            Будет стильно. Даже не сомневайтесь.
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 60 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.4 }}
            className="text-[#1a1a1a] text-4xl md:text-5xl lg:text-6xl leading-[1.25] tracking-wide mb-16 max-w-4xl font-light"
          >
            Создаю{" "}
            <span className="font-playfair italic font-normal">визуальные решения,</span>{" "}
            которые помогают вашему бизнесу расти, выделяться и вызывать{" "}
            <span className="font-playfair italic font-normal">доверие</span>{" "}
            с первых секунд.
          </motion.h1>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="flex flex-col sm:flex-row gap-6"
          >
            <a
              href="#portfolio"
              className="inline-flex items-center gap-3 text-sm tracking-[0.15em] text-[#1a1a1a] hover:opacity-60 transition-opacity group"
            >
              <span className="w-8 h-px bg-[#1a1a1a] group-hover:w-12 transition-all" />
              портфолио
            </a>
            <a
              href="#services"
              className="inline-flex items-center gap-3 text-sm tracking-[0.15em] text-[#1a1a1a] hover:opacity-60 transition-opacity group"
            >
              <span className="w-8 h-px bg-[#1a1a1a] group-hover:w-12 transition-all" />
              сотрудничество
            </a>
          </motion.div>
        </div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1.2 }}
        className="absolute bottom-8 left-6 md:left-12 lg:left-24"
      >
        <p className="text-xs tracking-[0.2em] text-[#999]">
          графический дизайнер
        </p>
      </motion.div>
    </section>
  )
}
