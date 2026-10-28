'use client'

import Image from 'next/image'
import { ArrowRight, CheckCircle2, Code2, LockKeyhole, Menu, Palette, Server, Sparkles, X } from 'lucide-react'
import { useState } from 'react'

const process = [
  ['Discovery', 'Understanding your goals and the challenge at hand.', Sparkles],
  ['Design', 'Building a clear, capable visual language.', Palette],
  ['Engineering', 'Fast, resilient implementation.', Code2],
  ['Delivery', 'A frictionless path to production.', ArrowRight],
] as const

const principles = [
  ['Focus', 'We turn complex product ideas into focused launch experiences.'],
  ['Clarity', 'We bring clarity to every decision, building products customers love.'],
  ['Cooperation', 'Close, transparent teamwork at every step of the journey.'],
]

function Button({ children, href = '#contact', light = false }: { children: React.ReactNode; href?: string; light?: boolean }) {
  return <a href={href} className={`inline-flex items-center justify-center rounded-md px-4 py-2.5 text-sm font-medium transition ${light ? 'border border-line text-ink hover:bg-gray-50' : 'bg-ink text-paper hover:opacity-90'}`}>{children}</a>
}

function Section({ children, id, className = '' }: { children: React.ReactNode; id?: string; className?: string }) {
  return <section id={id} className={`py-16 sm:py-20 ${className}`}><div className="mx-auto max-w-screen-xl px-4 md:px-8">{children}</div></section>
}

export function KestrelLanding() {
  const [open, setOpen] = useState(false)
  return <main className="overflow-hidden bg-paper text-ink font-body">
    <header className="mx-auto flex max-w-screen-xl items-center justify-between px-4 py-5 md:px-8">
      <a href="#top" className="flex items-center gap-2 text-lg font-bold tracking-tight text-ink font-display"><span className="grid h-7 w-7 place-items-center rounded bg-ink text-sm text-paper">K</span> Kestrel Studio</a>
      <nav className={`${open ? 'absolute left-4 right-4 top-16 z-10 flex' : 'hidden'} flex-col gap-4 rounded-lg border border-line bg-paper p-5 shadow-lg md:static md:flex md:flex-row md:items-center md:gap-8 md:border-0 md:p-0 md:shadow-none`}>
        <a href="#process" onClick={() => setOpen(false)} className="text-sm hover:text-accent">Process</a>
        <a href="#principles" onClick={() => setOpen(false)} className="text-sm hover:text-accent">Principles</a>
        <Button href="#contact">Let's talk</Button>
      </nav>
      <button aria-label="Toggle menu" onClick={() => setOpen(!open)} className="rounded p-2 md:hidden">{open ? <X size={20} /> : <Menu size={20} />}</button>
    </header>

    <Section id="top" className="pt-20 text-center sm:pt-28">
      <div className="mx-auto max-w-4xl space-y-5">
        <h1 className="mx-auto text-4xl font-extrabold tracking-tight text-ink sm:text-6xl font-display">Clear product thinking for ambitious teams</h1>
        <p className="mx-auto max-w-xl text-base leading-7 text-gray">Kestrel Studio helps ambitious teams turn business challenges into clear, capable digital products.</p>
        <div className="flex items-center justify-center gap-3 font-display"><Button href="#contact">Get started</Button><Button href="#process" light>Our process</Button></div>
      </div>
    </Section>

    <div className="bg-gradient-to-br from-blue-50/70 via-paper to-paper">
      <Section id="process" className="pb-10"><h2 className="text-center text-sm font-semibold tracking-widest text-gray uppercase font-display">Our Process</h2><ul className="mt-12 grid gap-x-12 gap-y-8 sm:grid-cols-2 lg:grid-cols-4">{process.map(([title, desc, Icon]) => <li key={title} className="space-y-3"><div className="flex h-12 w-12 items-center justify-center rounded-full border border-line text-accent"><Icon size={24} /></div><h3 className="text-lg font-semibold text-ink font-display">{title}</h3><p className="text-gray">{desc}</p></li>)}</ul></Section>
      
      <Section className="pt-10">
        <div className="items-center gap-x-12 lg:flex">
          <div className="flex-1 sm:hidden lg:block">
            <Image src="/cta-image.jpg" className="rounded-lg md:max-w-lg" width={768} height={512} alt="A team collaborating in a bright, modern studio" />
          </div>
          <div className="mt-6 max-w-2xl lg:mt-0">
            <h2 className="text-3xl font-semibold text-ink sm:text-4xl font-display">Create successful business models with a digital partner</h2>
            <p className="mt-3 leading-7 text-gray">Kestrel Studio helps ambitious teams turn business challenges into useful, beautiful software. We value close, transparent cooperation and invite our clients into every step of the journey.</p>
            <div className="mt-6">
              <Button href="#contact">Get started</Button>
            </div>
          </div>
        </div>
      </Section>
    </div>

    <Section id="principles">
      <div className="mx-auto max-w-2xl space-y-3 text-center"><h2 className="text-3xl font-semibold text-ink sm:text-4xl font-display">Our Principles</h2><p className="text-gray">How we work to ensure your product succeeds.</p></div>
      <ul className="mt-12 grid gap-6 md:grid-cols-3">{principles.map(([title, desc]) => <li key={title} className="rounded-xl border border-line bg-paper p-5"><h3 className="font-semibold text-ink font-display">{title}</h3><p className="mt-2 text-gray">{desc}</p></li>)}</ul>
    </Section>

    <Section id="contact" className="border-t border-line"><div className="mx-auto max-w-2xl text-center"><h2 className="text-3xl font-semibold text-ink sm:text-4xl font-display">Let's build something clear</h2><p className="mt-3 text-gray">Hire experts to shape your next idea and deliver on schedule.</p><Button href="mailto:hello@kestrel.example">Start building</Button><p className="mt-6 text-sm text-gray">hello@kestrel.example</p></div></Section>
    <footer className="border-t border-line py-8"><div className="mx-auto flex max-w-screen-xl flex-col gap-3 px-4 text-sm text-gray md:flex-row md:items-center md:justify-between md:px-8"><span>© 2026 Kestrel Studio</span><a href="mailto:hello@kestrel.example" className="hover:text-ink">Email</a></div></footer>
  </main>
}
