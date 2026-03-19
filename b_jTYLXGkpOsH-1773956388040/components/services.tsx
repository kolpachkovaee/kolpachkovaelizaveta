"use client"

import { motion, useInView } from "framer-motion"
import { useRef } from "react"

interface Package {
  id: string
  title: string
  duration: string
  features: string[]
}

const packages: Package[] = [
  {
    id: "01",
    title: "Малый фирменный стиль",
    duration: "2-3 недели",
    features: [
      "логотип (для печати и web)",
      "фирменные цвета",
      "фирменные шрифты",
      "логобук"
    ]
  },
  {
    id: "02",
    title: "Фирменный стиль",
    duration: "3-4 недели",
    features: [
      "логотип (для печати и web)",
      "фирменные цвета",
      "фирменные шрифты",
      "макеты полиграфии (до 3-х)",
      "гайдлайн"
    ]
  },
  {
    id: "03",
    title: "Расширенный фирменный стиль",
    duration: "3-4 недели",
    features: [
      "логотип (для печати и web)",
      "фирменные цвета",
      "фирменные шрифты",
      "макеты полиграфии (до 7-ми)",
      "гайдлайн"
    ]
  },
  {
    id: "04",
    title: "Дизайн рекламной кампании",
    duration: "5-7 недель",
    features: [
      "визуальная концепция кампании",
      "ключевые рекламные материалы",
      "брендированные макеты для полиграфии",
      "координация визуала с существующим фирменным стилем",
      "гайдлайн"
    ]
  },
  {
    id: "05",
    title: "Оформление стиля для социальных сетей",
    duration: "2-3 недели",
    features: [
      "раскладка ленты (9-12 постов)",
      "фирменные цвета",
      "фирменные шрифты",
      "шаблоны сторис (5 шт.)",
      "шаблоны постов (5 шт.)"
    ]
  }
]

const whyMe = [
  "Индивидуальный подход и глубокое погружение в проект",
  "Дизайн, который работает на ценности бренда",
  "Премиальное качество и внимание к деталям",
  "Прозрачные процессы и комфортная коммуникация",
  "Стратегический подход и понимание бизнеса"
]

export function Services() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section id="services" className="bg-[#1a1a1a] text-white py-32 lg:py-48" ref={ref}>
      <div className="px-6 md:px-12 lg:px-24">

        {/* ПРОДАЮЩИЙ БЛОК */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mb-32 space-y-6"
        >
          <h2 className="font-serif text-2xl md:text-3xl text-white/90">
            Почему бизнес не растет
          </h2>

          <p className="text-white/70">
            Часто проблема <span className="text-white font-medium">не в продукте и не в рекламе.</span> А в том, как выглядит и ощущается ваш бренд.
          </p>

          <p className="text-white/70">
            Если у вас нет <span className="text-white font-medium">цельного фирменного стиля:</span>
          </p>

          <ul className="text-white/60 space-y-2">
            <li>— вас <span className="text-white/80">не запоминают</span></li>
            <li>— вам <span className="text-white/80">не доверяют</span> с первого касания</li>
            <li>— вы выглядите <span className="text-white/80">дешевле, чем есть</span></li>
            <li>— клиенты уходят к тем, <span className="text-white/80">кто выглядит увереннее</span></li>
          </ul>

          <p className="text-white/70">
            И самое неприятное — вы начинаете думать, что <span className="text-white font-medium">проблема в продукте или в вас.</span>
          </p>

          <p className="text-white/70">
            Хотя на деле — у вас просто нет <span className="text-white font-medium">визуальной системы, которая продаёт.</span>
          </p>

          <div className="space-y-2 text-white/60">
            <p className="text-white/50 text-xs tracking-[0.2em] uppercase mb-3">Что меняется, когда появляется сильный фирменный стиль:</p>
            <p>→ вас начинают <span className="text-white/80">узнавать</span></p>
            <p>→ растёт <span className="text-white/80">доверие и средний чек</span></p>
            <p>→ контент выглядит как <span className="text-white/80">бренд,</span> а не случайные посты</p>
            <p>→ клиенту <span className="text-white/80">проще принять решение</span> о покупке</p>
          </div>

          <p className="text-white/70">
            Бизнес начинает ощущаться как <span className="text-white font-medium">собранный и уверенный,</span> а не хаотичный.
          </p>

          <p className="text-white/70">
            Если хотите выстроить сильный фирменный стиль, который реально работает на рост, можете
          </p>

          <a
            href="https://t.me/kolpachkovaelizaveta"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 text-sm tracking-[0.15em] text-white hover:text-white/60 transition-colors group mt-4"
          >
            <span className="w-8 h-px bg-white group-hover:w-12 transition-all" />
            обратиться ко мне
          </a>
        </motion.div>

        {/* ЗАГОЛОВОК ПАКЕТОВ */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-xs tracking-[0.3em] text-white/40 mb-12"
        >
          для развития вашего бренда могу предложить создать
        </motion.p>

        {/* ПАКЕТЫ */}
        <div className="divide-y divide-white/10 mb-16">
          {packages.map((pkg, index) => (
            <motion.div
              key={pkg.id}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="py-10 flex flex-col md:flex-row md:items-start gap-6 md:gap-16"
            >
              <span className="text-xs tracking-[0.3em] text-white/30 md:w-12 shrink-0">
                {pkg.id}
              </span>
              <div className="flex-1">
                <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-6 mb-4">
                  <h3 className="text-base md:text-lg text-white/90">{pkg.title}</h3>
                  <span className="text-xs tracking-[0.2em] text-white/30">{pkg.duration}</span>
                </div>
                <ul className="space-y-1">
                  {pkg.features.map((feature, i) => (
                    <li key={i} className="text-sm text-white/50">
                      — {feature}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>

        {/* ЗАМЕТКА О СТОИМОСТИ */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="border-t border-white/10 pt-10 mb-32 max-w-2xl"
        >
          <p className="text-sm text-white/40 leading-relaxed">
            Каждый проект уникален по задачам, масштабу и носителям.{" "}
            <span className="text-white/60">Стоимость формируется индивидуально</span>{" "}
            после обсуждения задач бренда. Подробнее можно ознакомиться в коммерческом предложении.
          </p>
          <a
            href="https://t.me/kolpachkovaelizaveta"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 text-sm tracking-[0.15em] text-white/60 hover:text-white transition-colors group mt-6"
          >
            <span className="w-8 h-px bg-white/40 group-hover:w-12 transition-all" />
            запросить КП
          </a>
        </motion.div>

        {/* ПРЕИМУЩЕСТВА */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="max-w-2xl"
        >
          <p className="text-xs tracking-[0.3em] text-white/40 mb-10">преимущества сотрудничества со мной</p>
          <ul className="space-y-4">
            {whyMe.map((item, index) => (
              <motion.li
                key={index}
                initial={{ opacity: 0, x: -10 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.4, delay: 0.4 + index * 0.08 }}
                className="flex items-start gap-4 text-sm text-white/60"
              >
                <span className="mt-1 w-4 h-px bg-white/30 shrink-0" />
                {item}
              </motion.li>
            ))}
          </ul>
        </motion.div>

      </div>
    </section>
  )
}