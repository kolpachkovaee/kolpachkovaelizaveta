"use client"

import { motion, useInView } from "framer-motion"
import { useRef } from "react"
import Image from "next/image"

export function Contact() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section id="contact" className="bg-[#1a1a1a] text-white py-32 lg:py-48" ref={ref}>
      <div className="px-6 md:px-12 lg:px-24">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24">
          {/* Left - Image */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="relative aspect-[3/4] max-w-md"
          >
            <Image
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Rectangle%206813-5-SWW1W0otY7zVeizZvef8UGT6pZ689r.png"
              alt="Елизавета Колпачкова"
              fill
              className="object-cover grayscale"
            />
          </motion.div>

          {/* Right - Content */}
          <div className="flex flex-col justify-center">
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="font-playfair text-4xl md:text-5xl lg:text-6xl text-white leading-[1.2] mb-8"
            >
              Если вы чувствуете, что мой подход вам близок — давайте обсудим <span className="italic font-normal">ваш проект.</span>
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="text-white/60 mb-12 text-lg"
            >
              Свяжитесь со мной через Telegram или e-mail — я лично отвечу вам в ближайшее время. Даже самая большая история начинается с первого шага...
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="flex flex-col sm:flex-row gap-8"
            >
              <a
                href="https://t.me/kolpachkovaelizaveta"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 text-sm tracking-[0.15em] text-white hover:text-white/60 transition-colors group"
              >
                <span className="w-8 h-px bg-white group-hover:w-12 transition-all" />
                telegram
              </a>
              <a
                href="mailto:kolpachkova00@mail.ru"
                className="inline-flex items-center gap-3 text-sm tracking-[0.15em] text-white hover:text-white/60 transition-colors group"
              >
                <span className="w-8 h-px bg-white group-hover:w-12 transition-all" />
                e-mail
              </a>
            </motion.div>

            {/* Additional Links */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="mt-16 pt-16 border-t border-white/10"
            >
              <p className="text-xs tracking-[0.3em] text-white/40 mb-6">
                полезные ссылки
              </p>
              <div className="flex flex-col gap-4">
                <a
                  href="https://t.me/kolpachkovaelizaveta"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-white/60 hover:text-white transition-colors"
                >
                  связаться со мной в телеграм
                </a>
                <a
                  href="https://t.me/kolpachkovael"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-white/60 hover:text-white transition-colors"
                >
                  телеграм канал
                </a>
                <a
                  href="https://www.instagram.com/kolpachkovaelizaveta/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-white/60 hover:text-white transition-colors"
                >
                  соцсеть
                </a>
                <a
                  href="https://www.behance.net/3199f929"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-white/60 hover:text-white transition-colors"
                >
                  behance
                </a>
                <a
                  href="https://t.me/brandboard_bot"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-white/60 hover:text-white transition-colors"
                >
                  brandboard тг бот
                </a>
                <a
                  href="https://docs.google.com/presentation/d/1HUUdXREnCmWIgGKm41TPZKF5dJHY6ETUa34J3PEO1_8/edit?usp=sharing"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-white/60 hover:text-white transition-colors"
                >
                  коммерческое предложение
                </a>
                <a
                  href="https://docs.google.com/document/d/1orcAhr1yzQJxlV5veCFYU-unOrbQRchymGPIhJWVk30/edit?tab=t.prhxltqbkzzd"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-white/60 hover:text-white transition-colors"
                >
                  резюме
                </a>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}