"use client"

export function Footer() {
  return (
    <footer className="bg-[#1a1a1a] text-white border-t border-white/10 py-16 px-6 md:px-12 lg:px-24">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-8">

        <div>
          <p className="font-serif text-lg text-white/90 mb-1">Елизавета Колпачкова</p>
          <p className="text-xs tracking-[0.2em] text-white/40 uppercase">графический дизайнер</p>
        </div>

        <div className="flex flex-col gap-2 text-sm text-white/50">
          <a href="https://t.me/kolpachkovaelizaveta" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">
            Telegram
          </a>
          <a href="mailto:kolpachkova00@gmail.com" className="hover:text-white transition-colors">
            Email
          </a>
        </div>

        <p className="text-xs text-white/20">
          {`© ${new Date().getFullYear()} Все права защищены`}
        </p>

      </div>
    </footer>
  )
}