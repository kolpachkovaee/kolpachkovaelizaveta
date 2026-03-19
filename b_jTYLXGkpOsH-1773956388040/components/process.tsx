"use client"

import { motion, useInView } from "framer-motion"
import { useRef, useState } from "react"

const steps = [
  {
    num: "01",
    title: "Знакомство и стратегия",
    duration: "~3 рабочих дня",
    details: [
      { bold: "Формат:", text: " созвон или личная встреча" },
      { bold: "Цель:", text: " погружение в бизнес, выявление «болей» и постановка целей и задач." },
      { bold: "Мудборд:", text: " составляем через BRANDBOARD" },
    ],
    payment: null,
    top: 0,
    left: "0%",
  },
  {
    num: "02",
    title: "Подготовка и фиксация",
    duration: null,
    details: [
      { bold: "Согласование", text: " мудборда и референсов" },
      { bold: "Уточнение", text: " состава пакета услуг и списка носителей" },
      { bold: "Составление", text: " сметы проекта" },
      { bold: "Подписание", text: " договора" },
    ],
    payment: "Старт работы: предоплата 50%",
    top: 80,
    left: "18%",
  },
  {
    num: "03",
    title: "Разработка дизайн-концепции",
    duration: "~7–14 рабочих дней",
    details: [
      { bold: "Создание", text: " основной стилистики бренда" },
      { bold: "Визуализация", text: " на 2–3 реалистичных мокапах" },
      { bold: "Результат:", text: " логически обоснованный дизайн под задачи бизнеса" },
    ],
    payment: null,
    top: 160,
    left: "36%",
  },
  {
    num: "04",
    title: "Детализация и доработка",
    duration: "~5 рабочих дней",
    details: [
      { bold: "Адаптация", text: " стиля под все носители" },
      { bold: "Правки:", text: " 2 итерации бесплатно" },
    ],
    payment: "Полная оплата оставшихся 50%",
    top: 240,
    left: "54%",
  },
  {
    num: "05",
    title: "Финальная презентация",
    duration: null,
    details: [
      { bold: "Созвон:", text: " лично презентую проект и провожу вас через каждое решение" },
      { bold: "Презентация:", text: " все элементы стиля с обоснованием выбора, заложенными смыслами и правилами использования" },
      { bold: "Передача:", text: " пакет исходников — PDF, AI, PSD, PNG" },
    ],
    payment: null,
    top: 320,
    left: "72%",
  },
]

export function Process() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null)

  return (
    <section id="process" className="bg-[#f5f5f3] py-32 lg:py-48" ref={ref}>
      <div className="px-6 md:px-12 lg:px-24">

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-xs tracking-[0.3em] text-[#999] mb-20"
        >
          этапы нашего сотрудничества
        </motion.p>

        {/* Desktop cascade */}
        <div className="hidden lg:block relative mb-56" style={{ height: 580 }}>
          {steps.map((step, index) => (
            <motion.div
              key={step.num}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.1 + index * 0.15 }}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
              style={{
                position: "absolute",
                top: step.top,
                left: step.left,
                width: 260,
                zIndex: hoveredIndex === index ? 20 : index + 1,
                transform: hoveredIndex === index ? "scale(1.04)" : "scale(1)",
                transition: "transform 0.25s ease, z-index 0s",
              }}
            >
              {/* Arrow to next */}
              {index < steps.length - 1 && (
                <motion.span
                  initial={{ opacity: 0 }}
                  animate={isInView ? { opacity: 1 } : {}}
                  transition={{ duration: 0.4, delay: 0.5 + index * 0.15 }}
                  className="absolute text-[#bbb] text-xs"
                  style={{ right: -44, top: 16 }}
                >
                  →
                </motion.span>
              )}

              <div className="bg-[#f5f5f3] hover:bg-white transition-colors duration-300 p-5 shadow-none hover:shadow-sm">
                {/* Title with star */}
                <div className="flex items-start gap-2 mb-4">
                  <span className="text-[#1a1a1a] text-xs mt-0.5 shrink-0">✦</span>
                  <h4 className="text-xs font-medium text-[#1a1a1a] leading-snug uppercase tracking-[0.1em]">
                    {step.num}. {step.title}
                  </h4>
                </div>

                {step.duration && (
                  <p className="text-xs text-[#aaa] tracking-[0.1em] mb-3 pl-4">
                    {step.duration}
                  </p>
                )}

                <ul className="space-y-1.5 pl-4">
                  {step.details.map((detail, i) => (
                    <li key={i} className="text-xs text-[#666] leading-relaxed flex gap-1">
                      <span className="text-[#ccc] shrink-0">·</span>
                      <span>
                        <span className="text-[#1a1a1a] font-medium">{detail.bold}</span>
                        {detail.text}
                      </span>
                    </li>
                  ))}
                </ul>

                {step.payment && (
                  <p className="mt-3 pl-4 text-xs text-[#999] italic">
                    ↑ {step.payment}
                  </p>
                )}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Mobile — accordion-style vertical */}
        <div className="lg:hidden mb-20 space-y-0 divide-y divide-[#e8e8e4]">
          {steps.map((step, index) => (
            <motion.div
              key={step.num}
              initial={{ opacity: 0, x: -20 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.1 + index * 0.1 }}
              className="py-5"
            >
              <div className="flex items-start gap-3 mb-3">
                <span className="text-[#1a1a1a] text-xs mt-0.5 shrink-0">✦</span>
                <div className="flex-1">
                  <div className="flex items-center justify-between gap-4 mb-1">
                    <h4 className="text-xs font-medium text-[#1a1a1a] uppercase tracking-[0.1em]">
                      {step.num}. {step.title}
                    </h4>
                    {step.duration && (
                      <span className="text-xs text-[#aaa] shrink-0">{step.duration}</span>
                    )}
                  </div>
                  <ul className="space-y-1 mt-2">
                    {step.details.map((detail, i) => (
                      <li key={i} className="text-xs text-[#666] leading-relaxed flex gap-1">
                        <span className="text-[#ccc] shrink-0">·</span>
                        <span>
                          <span className="text-[#1a1a1a] font-medium">{detail.bold}</span>
                          {detail.text}
                        </span>
                      </li>
                    ))}
                  </ul>
                  {step.payment && (
                    <p className="mt-2 text-xs text-[#999] italic">↑ {step.payment}</p>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bonus + Problems */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="grid md:grid-cols-2 gap-12 mb-32 border-t border-[#ddddd8] pt-12"
        >
          <div>
            <p className="text-xs tracking-[0.3em] text-[#999] mb-6">бонус и поддержка</p>
            <ul className="space-y-3">
              {[
                { bold: "Рекомендации", text: " по выбору типографии и материалов" },
                { bold: "Авторский надзор:", text: " сопровождение производства" },
                { bold: "2 итерации правок", text: " на каждом этапе — бесплатно" },
              ].map((item, i) => (
                <li key={i} className="flex gap-3 text-sm text-[#666] leading-relaxed">
                  <span className="text-[#ccc] shrink-0">·</span>
                  <span>
                    <span className="text-[#1a1a1a] font-medium">{item.bold}</span>
                    {item.text}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="text-xs tracking-[0.3em] text-[#999] mb-6">какие проблемы мы решаем</p>
            <ul className="space-y-3">
              {[
                "Почему старый дизайн перестал приносить результат?",
                "Почему упаковка при печати выглядит не так, как ожидалось?",
                "Как сделать бренд запоминающимся и повысить его ценность?",
                "Как сэкономить время и сразу создать работающую визуальную систему?",
              ].map((item, i) => (
                <li key={i} className="flex gap-3 text-sm text-[#666] leading-relaxed">
                  <span className="text-[#ccc] shrink-0">·</span>
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </motion.div>

        {/* BOT BLOCK */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="max-w-2xl"
        >
          <p className="text-xs tracking-[0.3em] text-[#999] mb-8">бесплатный старт</p>
          <h3 className="font-serif text-2xl md:text-3xl text-[#1a1a1a] mb-8 leading-snug">
            Бесплатный мудборд для вашего бренда
          </h3>
          <div className="space-y-4 mb-10">
            <p className="text-[#444] leading-relaxed">
              Telegram-бот{" "}
              <span className="text-[#1a1a1a] font-medium">BRANDBOARD</span>{" "}
              помогает быстро собрать визуальное направление бренда без сложных брифов.
            </p>
            <p className="text-[#666] leading-relaxed">
              В процессе вы не просто отвечаете на 10 вопросов — вы начинаете лучше понимать свой бренд. На основе анализа бот генерирует:{" "}
              <span className="text-[#1a1a1a]">стиль, цвета, шрифты, идеи визуала и понятную основу для фирменного стиля.</span>
            </p>
            <p className="text-[#666] leading-relaxed">
              Это быстрый способ навести порядок в бренде и понять, как он должен выглядеть.
            </p>
            <p className="text-[#666] leading-relaxed">
              С готовым мудбордом мы быстрее соберём{" "}
              <span className="text-[#1a1a1a] font-medium">сильный фирменный стиль</span>{" "}
              — без долгих объяснений и правок.
            </p>
          </div>
          <a
            href="https://t.me/brandboard_bot"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 text-sm tracking-[0.15em] text-[#1a1a1a] hover:opacity-60 transition-opacity group"
          >
            <span className="w-8 h-px bg-[#1a1a1a] group-hover:w-12 transition-all" />
            попробовать BRANDBOARD
          </a>
        </motion.div>

      </div>
    </section>
  )
}