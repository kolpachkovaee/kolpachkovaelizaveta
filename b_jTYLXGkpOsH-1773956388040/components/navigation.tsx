"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import Link from "next/link"

const menuItems = [
  { label: "портфолио", href: "#portfolio" },
  { label: "обо мне", href: "#about" },
  { label: "услуги и стоимость", href: "#services" },
  { label: "этапы работы", href: "#process" },
  { label: "контакты", href: "#contact" },
]

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false)

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden"
    } else {
      document.body.style.overflow = ""
    }
    return () => {
      document.body.style.overflow = ""
    }
  }, [isOpen])

  return (
    <>
      <header className="fixed top-0 left-0 right-0 z-50 mix-blend-difference">
        <div className="flex items-center justify-between px-6 py-6 md:px-12">
          <Link
            href="/"
            className="text-white text-sm tracking-[0.2em] uppercase font-light"
          >
            kolpachkovaelizaveta
          </Link>

          <div className="hidden md:flex items-center gap-8">
            <a
              href="https://t.me/kolpachkovaelizaveta"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white text-sm tracking-[0.15em] hover:opacity-60 transition-opacity"
            >
              tg
            </a>
            <span className="text-white text-sm">—</span>
            <a
              href="mailto:kolpachkova00@gmail.ru"
              className="text-white text-sm tracking-[0.15em] hover:opacity-60 transition-opacity"
            >
              e-mail
            </a>
          </div>

          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-white text-sm tracking-[0.2em] uppercase font-light hover:opacity-60 transition-opacity"
          >
            {isOpen ? "закрыть" : "меню"}
          </button>
        </div>
      </header>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
            className="fixed inset-0 z-40 bg-[#0a0a0a]"
          >
            <div className="h-full flex flex-col justify-center px-6 md:px-12 lg:px-24">
              <nav className="space-y-2 md:space-y-4">
                {menuItems.map((item, index) => (
                  <motion.div
                    key={item.label}
                    initial={{ opacity: 0, y: 40 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 20 }}
                    transition={{ delay: index * 0.1, duration: 0.5 }}
                  >
                    <a
                      href={item.href}
                      onClick={() => setIsOpen(false)}
                      className="block text-white text-4xl md:text-6xl lg:text-7xl font-light tracking-[0.05em] hover:opacity-40 transition-opacity duration-300 font-serif"
                    >
                      {item.label}
                    </a>
                  </motion.div>
                ))}
              </nav>

              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.6, duration: 0.5 }}
                className="mt-16 md:mt-24 flex flex-col md:flex-row gap-4 md:gap-12"
              >
                <a
                  href="https://docs.google.com/presentation/d/1HUUdXREnCmWIgGKm41TPZKF5dJHY6ETUa34J3PEO1_8/edit?usp=sharing"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white/60 text-sm tracking-[0.15em] hover:text-white transition-colors"
                >
                  коммерческое предложение
                </a>
                <a
                  href="https://docs.google.com/forms/d/e/1FAIpQLSca5uQb1gNw3rcEtzeTiSwlpzpCpqo2d7yTm6vvPLykZ4vq5w/viewform"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white/60 text-sm tracking-[0.15em] hover:text-white transition-colors"
                >
                  заполнить бриф
                </a>
                <a
                  href="https://t.me/kolpachkovael"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white/60 text-sm tracking-[0.15em] hover:text-white transition-colors"
                >
                  telegram канал
                </a>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
