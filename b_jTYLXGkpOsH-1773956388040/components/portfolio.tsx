"use client"

import { useState, useRef } from "react"
import { motion, useInView, AnimatePresence } from "framer-motion"
import Image from "next/image"

const projects = [
  {
    id: 1,
    title: "Момент",
    subtitle: "фото копицентр",
    category: "Фирменный стиль",
    task: "Создать айдентику, отражающую характер основательницы: сочетание элегантности и профессионализма, и выделить бренд в конкурентной среде.",
    solution: "Разработан современный визуальный стиль с акцентом на типографику и минимализм, формирующий ощущение «дорогого» и уверенного бренда.",
    result: "Бренд получил выразительный визуальный язык, который усиливает доверие и выгодно отличает его от типичных решений на рынке.",
    mainImage: "/moment.png",
  },
  {
    id: 2,
    title: "Сохрани жизнь собакам с полей",
    subtitle: "благотворительный проект",
    category: "Ребрендинг и визуальная система",
    task: "Провести ребрендинг и создать универсальную визуальную систему для digital и офлайн-среды, сохранив узнаваемость проекта.",
    solution: "Обновлена айдентика и визуальная подача, разработан контент и серия стикерпаков на основе реальных собак, интегрированных в мем-культуру для повышения вовлечённости.",
    result: "Рост вовлечённости аудитории и увеличение пожертвований за счёт сильной визуальной коммуникации и вирусного контента.",
    mainImage: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Slide%2016_9%20-%2051-p50YpAvSgJCAzALhAUPHjKQTbLEyfC.png",
  },
  {
    id: 3,
    title: "SWC",
    subtitle: "спорт • работа • отдых",
    category: "Фирменный стиль и презентация",
    task: "Создать визуальную концепцию и бизнес-презентацию для пространства нового формата, объединяющего спорт, отдых и восстановление.",
    solution: "Разработана айдентика и визуальный язык на основе идеи паузы и внутреннего баланса: спокойная цветовая палитра, чистая типографика, атмосферные визуалы.",
    result: "Сформирована сильная концепция бренда и продукта, готовая для презентации инвесторам и выхода на рынок.",
    mainImage: "/swc.png",
  },
  {
    id: 4,
    title: "Engliss Tea",
    subtitle: "бренд чая в дрип-пакетах",
    category: "Фирменный стиль и упаковка",
    task: "Создать фирменный стиль для бренда дрип-чая, который передаёт премиальность английской чайной культуры, подчёркивает удобство формата и выделяет продукт на полке.",
    solution: "Разработана визуальная ДНК бренда: типографика, цветовая система, упаковка и коммуникация, объединяющие эстетику традиционного чаепития с современным минимализмом.",
    result: "Сформирован целостный бренд с понятным позиционированием, который выделяется среди конкурентов и воспринимается как премиальный продукт в категории.",
    mainImage: "/englisstea.png",
  },
  {
    id: 5,
    title: "DIL",
    subtitle: "бренд кожаных изделий",
    category: "Фирменный стиль и веб-дизайн",
    task: "Создать премиальный визуальный стиль и онлайн-магазин, передающий ценность материала и эксклюзивность продукта.",
    solution: "Разработан минималистичный бренд: логотип, типографика, цветовая система и дизайн сайта с продуманной структурой каталога и пользовательского опыта.",
    result: "Создан масштабируемый премиальный бренд с сильной визуальной идентичностью, эффективно работающий в digital-среде и готовый к расширению.",
    mainImage: "/dil.png",
  },
  {
    id: 6,
    title: "Хлопок",
    subtitle: "ретрит-центр на Алтае",
    category: "Фирменный стиль и визуальная концепция",
    task: "Создать фирменный стиль для ретрит-центра нового поколения, который передаёт идею паузы, тишины и внутреннего восстановления.",
    solution: "Разработана айдентика и визуальный язык на основе идеи внутреннего диалога с собой: спокойная палитра, природные текстуры, сдержанная типографика.",
    result: "Сформирован бренд, транслирующий состояние восстановления ещё до первого контакта с пространством — визуал продаёт ощущение, а не просто услугу.",
    mainImage: "/хлопок.png",
  },
]

export function Portfolio() {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })
  const [current, setCurrent] = useState(0)
  const [direction, setDirection] = useState(1)

  const prev = () => {
    setDirection(-1)
    setCurrent((c) => (c - 1 + projects.length) % projects.length)
  }

  const next = () => {
    setDirection(1)
    setCurrent((c) => (c + 1) % projects.length)
  }

  const project = projects[current]
  const pad = (n: number) => String(n).padStart(2, "0")

  const variants = {
    enter: (dir: number) => ({ x: dir > 0 ? 50 : -50, opacity: 0 }),
    center: { x: 0, opacity: 1 },
    exit: (dir: number) => ({ x: dir > 0 ? -50 : 50, opacity: 0 }),
  }

  return (
    <section id="portfolio" ref={ref} className="py-24 bg-white">

      {/* Header */}
      <div className="px-6 md:px-12 lg:px-24 mb-12">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-xs tracking-[0.3em] text-neutral-400 uppercase"
        >
          недавние проекты
        </motion.p>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="px-6 md:px-12 lg:px-24"
      >
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-24 items-start">

          {/* Image */}
          <div className="relative aspect-[4/3] overflow-hidden bg-[#f5f5f3]">
            <AnimatePresence custom={direction} mode="wait">
              <motion.div
                key={project.id}
                custom={direction}
                variants={variants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{ duration: 0.45, ease: [0.4, 0, 0.2, 1] }}
                className="absolute inset-0"
              >
                <Image
                  src={project.mainImage}
                  alt={project.title}
                  fill
                  className="object-contain p-6"
                />
              </motion.div>
            </AnimatePresence>

            <button
              onClick={prev}
              className="absolute left-0 top-0 h-full w-12 z-10 flex items-center justify-center text-[#1a1a1a] opacity-0 hover:opacity-100 hover:bg-white/50 transition-all duration-200 text-base"
            >
              ←
            </button>
            <button
              onClick={next}
              className="absolute right-0 top-0 h-full w-12 z-10 flex items-center justify-center text-[#1a1a1a] opacity-0 hover:opacity-100 hover:bg-white/50 transition-all duration-200 text-base"
            >
              →
            </button>
          </div>

          {/* Info */}
          <div>
            {/* Counter + progress */}
            <div className="flex items-center gap-3 mb-10">
              <span className="text-xs tracking-[0.3em] text-[#1a1a1a]">{pad(current + 1)}</span>
              <div className="flex-1 h-px bg-[#e5e5e5]">
                <motion.div
                  className="h-full bg-[#1a1a1a]"
                  animate={{ width: `${((current + 1) / projects.length) * 100}%` }}
                  transition={{ duration: 0.4 }}
                />
              </div>
              <span className="text-xs tracking-[0.3em] text-[#ccc]">{pad(projects.length)}</span>
            </div>

            {/* Text */}
            <AnimatePresence custom={direction} mode="wait">
              <motion.div
                key={project.id}
                custom={direction}
                variants={variants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{ duration: 0.4, ease: [0.4, 0, 0.2, 1] }}
              >
                <p className="text-xs tracking-[0.25em] text-[#999] uppercase mb-4">
                  {project.category}
                </p>
                <h3 className="font-serif text-3xl md:text-4xl text-[#1a1a1a] mb-2 leading-tight">
                  {project.title}
                </h3>
                <p className="text-sm text-[#999] tracking-[0.1em] mb-8">
                  {project.subtitle}
                </p>

                <div className="flex flex-col gap-5 text-sm">
                  <div>
                    <p className="text-xs tracking-[0.2em] text-[#bbb] uppercase mb-1">задача</p>
                    <p className="text-[#666] leading-relaxed">{project.task}</p>
                  </div>
                  <div>
                    <p className="text-xs tracking-[0.2em] text-[#bbb] uppercase mb-1">решение</p>
                    <p className="text-[#666] leading-relaxed">{project.solution}</p>
                  </div>
                  <div>
                    <p className="text-xs tracking-[0.2em] text-[#bbb] uppercase mb-1">результат</p>
                    <p className="text-[#1a1a1a] font-medium leading-relaxed">{project.result}</p>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>

            {/* Dots + arrows */}
            <div className="flex items-center gap-4 mt-12">
              <button
                onClick={prev}
                className="w-8 h-8 border border-[#e5e5e5] hover:border-[#1a1a1a] hover:bg-[#1a1a1a] hover:text-white transition-colors flex items-center justify-center text-sm text-[#1a1a1a]"
              >
                ←
              </button>
              <button
                onClick={next}
                className="w-8 h-8 border border-[#e5e5e5] hover:border-[#1a1a1a] hover:bg-[#1a1a1a] hover:text-white transition-colors flex items-center justify-center text-sm text-[#1a1a1a]"
              >
                →
              </button>
              <div className="flex gap-2 ml-auto">
                {projects.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => { setDirection(i > current ? 1 : -1); setCurrent(i) }}
                    className="transition-all duration-300"
                    style={{
                      width: i === current ? 20 : 6,
                      height: 1,
                      background: i === current ? "#1a1a1a" : "#ccc",
                    }}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </motion.div>

      {/* Behance */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6, delay: 0.5 }}
        className="mt-16 px-6 md:px-12 lg:px-24 text-center"
      >
        <a
          href="https://www.behance.net/3199f929"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-3 text-sm tracking-[0.15em] text-[#1a1a1a] hover:opacity-60 transition-opacity group"
        >
          <span className="w-8 h-px bg-[#1a1a1a] group-hover:w-12 transition-all" />
          все работы на Behance
          <span className="w-8 h-px bg-[#1a1a1a] group-hover:w-12 transition-all" />
        </a>
      </motion.div>

    </section>
  )
}