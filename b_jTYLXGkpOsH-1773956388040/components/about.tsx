"use client"

import { motion, useInView } from "framer-motion"
import { useRef } from "react"
import Image from "next/image"

const tools = [
  "adobe illustrator",
  "adobe photoshop",
  "adobe indesign",
  "figma",
  "нейросети",
]

export function About() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section id="about" className="bg-[#f5f5f3] py-32 lg:py-48" ref={ref}>

      {/* About Header */}
      <div className="px-6 md:px-12 lg:px-24 mb-24">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-xs tracking-[0.3em] text-[#999] mb-6"
        >
          подробнее
        </motion.p>

        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="font-serif text-3xl md:text-4xl lg:text-5xl text-[#1a1a1a] max-w-4xl leading-[1.3]"
        >
          Здравствуйте! Меня зовут Елизавета, я графический дизайнер.
        </motion.h2>
      </div>

      {/* Two Column Layout */}
      <div className="grid lg:grid-cols-2 gap-16 lg:gap-0">

        {/* Left - Photo */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          animate={isInView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="px-6 md:px-12 lg:pl-24 lg:pr-12"
        >
          <div className="relative aspect-[3/4] max-w-md">
            <Image
              src="/photo.png"
              alt="Елизавета Колпачкова"
              fill
              className="object-cover grayscale"
            />
          </div>
        </motion.div>

        {/* Right - Text */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="px-6 md:px-12 lg:pr-24 lg:pl-12 flex flex-col justify-center gap-10"
        >
          <p className="text-xs tracking-[0.3em] text-[#999]">
            обо мне и моём подходе в работе
          </p>

          <p className="text-[#444] leading-relaxed text-lg">
            Я понимаю, насколько важен{" "}
            <span className="text-[#1a1a1a] font-medium">визуальный облик для развития бизнеса</span>
            {" "}— потому что учусь в ведущей бизнес-школе России и сама строю своё дело.
            Создаю креативные и актуальные решения, сохраняя баланс между{" "}
            <span className="text-[#1a1a1a] font-medium">эстетикой и стратегическими задачами бренда.</span>
          </p>

          <div className="space-y-5">
            <p className="text-[#666] leading-relaxed">
              Моя задача — создавать{" "}
              <span className="text-[#1a1a1a] font-medium">осмысленный дизайн,</span>{" "}
              который помогает бизнесу выделяться и быть понятным своей аудитории.
            </p>

            <p className="text-[#666] leading-relaxed">
              Я превращаю идеи и стратегию бренда в{" "}
              <span className="text-[#1a1a1a] font-medium">визуальную систему,</span>{" "}
              которая усиливает доверие и делает компанию узнаваемой.
            </p>

            <p className="text-[#666] leading-relaxed">
              Для меня каждый проект — это внимание к деталям, уважение к идеям клиента
              и поиск решения, которое будет{" "}
              <span className="text-[#1a1a1a] font-medium">работать на бренд долгие годы.</span>
            </p>
          </div>
        </motion.div>
      </div>

      {/* Tools Label */}
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6, delay: 0.5 }}
        className="px-6 md:px-12 lg:px-24 mt-32 mb-6 text-xs tracking-[0.3em] text-[#999]"
      >
        инструменты, с которыми я работаю
      </motion.p>

      {/* Tools Marquee */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={isInView ? { opacity: 1 } : {}}
        transition={{ duration: 1, delay: 0.6 }}
        className="w-full overflow-hidden bg-[#1a1a1a] py-5"
      >
        <motion.div
          animate={{ x: ["0%", "-50%"] }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          className="flex whitespace-nowrap"
        >
          {[...tools, ...tools, ...tools, ...tools].map((tool, index) => (
            <span key={index} className="inline-flex items-center">
              <span className="text-xs tracking-[0.3em] text-white/70 uppercase px-8">
                {tool}
              </span>
              <span className="text-white/20 text-xs">·</span>
            </span>
          ))}
        </motion.div>
      </motion.div>

    </section>
  )
}