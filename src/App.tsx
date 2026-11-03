import { useEffect, useState } from 'react';
import {
  Menu, X, ArrowRight, ArrowUpRight, ArrowDown, Download, Mail, Phone, MapPin, Linkedin,
  Monitor, ShoppingBag, TrendingUp, BadgeCheck, GraduationCap, Sun, Moon,
} from 'lucide-react';

const EMAIL = 'aoundanish6@gmail.com';
const PHONE = '03350204955';
const LINKEDIN = 'https://www.linkedin.com/in/aoun-danish-87a12a449/';
const CV = 'https://www.dropbox.com/scl/fi/ibjn9uyyp5cm72abonlsd/Aoun-1.pdf?rlkey=nj2ww6p0qly1kzxw1v67wgxl0&st=t22mkl4p&dl=1';

const nav = [
  { id: 'work', label: 'Work' },
  { id: 'services', label: 'Services' },
  { id: 'experience', label: 'Experience' },
  { id: 'contact', label: 'Contact' },
];

const featured = {
  name: 'True Rest',
  type: 'Shopify store · UK',
  url: 'https://truerest.co.uk',
  image: '/work/truerest.jpg',
  summary: 'Online store for a UK mattress brand, built to turn visitors into buyers.',
  tags: ['Shopify', 'E-commerce', 'Klarna checkout'],
};

const work = [
  { name: 'ExtreemTek', type: 'Company website · in progress', url: 'https://extreemtek.com', image: '/work/extreemtek.jpg' },
  { name: 'Solar Dream', type: 'WordPress · UK solar company', url: 'https://solardream.co.uk', image: '/work/solardream.jpg' },
  { name: 'Ray Executive Cars', type: 'WordPress + social design', url: 'https://www.rayexecutivecars.co.uk', image: '/work/ray.jpg' },
  { name: 'Fall Family Furniture', type: 'WordPress e-commerce', url: 'https://fallfamilyfurniture.ca/', image: '' },
];

const moreWork = [
  { name: 'British Clinic' },
  { name: 'Lofty Estimation' },
  { name: 'Fluffy Kids', url: 'https://drive.google.com/file/d/1XJsG4tU8BzEjr61ke9S3WnxbuSI-dXuO/view?usp=drive_link' },
  { name: 'All Star Meat Shop', url: 'https://drive.google.com/file/d/19efdx4ys9przEJ2FHLPHxcLxUldov89P/view?usp=drive_link' },
  { name: 'Mina Bay Sea Food' },
];

const designWork = [
  { name: 'Game Hero', url: 'https://drive.google.com/drive/folders/1I_-F9VpkMCZZBmaIqcQUWSB0prTLuwNa?usp=drive_link' },
  { name: 'Project Starter', url: 'https://drive.google.com/drive/folders/1vtU5VQ-L8rI062FB5BlE07LeYJK4EzrW' },
  { name: 'Smile Studio Boston', url: 'https://drive.google.com/drive/folders/17rL5YeyrD9g97upwsqVQLR7rqylyx31J' },
  { name: 'Neotecniq' },
  { name: 'Mik Plumbing' },
];

const services = [
  { icon: Monitor, title: 'Websites', text: 'WordPress and hand-coded sites that get people to call, book or buy.' },
  { icon: ShoppingBag, title: 'Online stores', text: 'Shopify stores with clear product pages and an easy checkout.' },
  { icon: TrendingUp, title: 'Marketing', text: 'Meta ads, lead forms and SEO that bring the right visitors.' },
];

const experience = [
  { role: 'Digital Marketer', org: 'ExtreemTek', when: '2026 – Now' },
  { role: 'Digital Marketer', org: 'Chimp Studio', when: '2025 – 2026' },
  { role: 'Web Developer', org: 'Freelance', when: '2023 – Now' },
  { role: 'WordPress Intern', org: 'Tech Hub Pakistan', when: '2022' },
  { role: 'Graphic Designer Intern', org: 'Multidex Technologies', when: '2022' },
];

const education = [
  { title: 'Post-ADP, Business Management & Accountancy', when: 'UMT · 2023 – 2025' },
  { title: 'Associate Degree, Computer Science', when: 'UMT · 2020 – 2022' },
];

const skills = ['WordPress', 'Shopify', 'HTML5', 'CSS3', 'JavaScript', 'Meta Ads', 'Lead Generation', 'SEO', 'Social Media', 'Figma', 'Canva', 'Power BI'];

const certs = [
  { name: 'Web Design for Beginners: HTML & CSS', url: 'https://ude.my/UC-7b636a14-b0ad-47c6-9e1c-b6f2609a32da' },
  { name: 'WordPress Web Design & Freelancing MasterClass', url: 'https://ude.my/UC-96d73063-d0a0-4919-af72-8b3e706e09c3' },
  { name: 'WordPress (No Coding) in 3.5 Hours', url: 'https://ude.my/UC-3603e572-5aed-4b99-b4b8-a7411181812f' },
  { name: 'Figma to WordPress Website', url: '' },
];

const stats = [
  { value: '9', label: 'websites built' },
  { value: '6', label: 'brands designed for' },
  { value: '2023', label: 'freelancing since' },
  { value: '4', label: 'certifications' },
];

function useReveal() {
  useEffect(() => {
    const els = document.querySelectorAll('.reveal');
    const io = new IntersectionObserver(
      (entries) => entries.forEach((e) => e.isIntersecting && e.target.classList.add('is-visible')),
      { threshold: 0.1 },
    );
    els.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, []);
}

function SectionHead({ eyebrow, title }: { eyebrow: string; title: string }) {
  return (
    <div className="reveal mb-8 md:mb-12">
      <p className="eyebrow">{eyebrow}</p>
      <h2 className="font-display text-[1.75rem] md:text-[2.5rem] font-extrabold leading-tight text-fg mt-2">{title}</h2>
    </div>
  );
}

function Browser({ src, alt, className = '' }: { src: string; alt: string; className?: string }) {
  return (
    <div className={`rounded-xl overflow-hidden bg-surface border border-line/10 shadow-2xl ${className}`}>
      <div className="flex items-center gap-1.5 px-3 h-6 md:h-7 frame-bar border-b border-line/10">
        <span className="w-2 h-2 md:w-2.5 md:h-2.5 rounded-full bg-[#ff5f57]/80" />
        <span className="w-2 h-2 md:w-2.5 md:h-2.5 rounded-full bg-[#febc2e]/80" />
        <span className="w-2 h-2 md:w-2.5 md:h-2.5 rounded-full bg-[#28c840]/80" />
      </div>
      <img src={src} alt={alt} loading="lazy" className="w-full aspect-[1134/600] object-cover object-top" />
    </div>
  );
}

function App() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [dark, setDark] = useState(() => document.documentElement.classList.contains('dark'));
  useReveal();

  const toggleTheme = () => {
    const next = !dark;
    setDark(next);
    document.documentElement.classList.toggle('dark', next);
    try { localStorage.setItem('theme', next ? 'dark' : 'light'); } catch { /* storage unavailable */ }
  };

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const go = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
    setOpen(false);
  };

  return (
    <div className="min-h-screen bg-bg text-fg2 font-body antialiased selection:bg-accent/30">
      {/* Nav */}
      <header className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${scrolled || open ? 'bg-bg/85 backdrop-blur-lg border-b border-line/10' : ''}`}>
        <div className="max-w-6xl mx-auto px-5 h-16 flex items-center justify-between">
          <button onClick={() => go('home')} className="flex items-center gap-2.5" aria-label="Back to top">
            <span className="w-9 h-9 rounded-lg bg-accent/15 border border-accent/30 grid place-items-center font-display font-extrabold text-accent text-sm">AD</span>
            <span className="font-display font-bold text-fg tracking-tight">Aoun Danish</span>
          </button>
          <nav className="hidden md:flex items-center gap-8 text-sm">
            {nav.map((n) => (
              <button key={n.id} onClick={() => go(n.id)} className="text-muted hover:text-accent transition">{n.label}</button>
            ))}
            <button onClick={toggleTheme} aria-label={dark ? 'Switch to light theme' : 'Switch to dark theme'} className="w-10 h-10 rounded-full border border-line/15 bg-surface/70 grid place-items-center text-fg hover:text-accent hover:border-accent transition">
              {dark ? <Sun size={18} /> : <Moon size={18} />}
            </button>
            <a href={`mailto:${EMAIL}`} className="btn-primary !py-2 !px-4 text-sm">Hire me</a>
          </nav>
          <div className="md:hidden flex items-center gap-2">
            <button onClick={toggleTheme} aria-label={dark ? 'Switch to light theme' : 'Switch to dark theme'} className="w-10 h-10 rounded-full border border-line/15 bg-surface/70 grid place-items-center text-fg hover:text-accent hover:border-accent transition">
              {dark ? <Sun size={18} /> : <Moon size={18} />}
            </button>
            <button className="w-10 h-10 grid place-items-center text-fg" onClick={() => setOpen(!open)} aria-label="Menu">
              {open ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
        {open && (
          <div className="md:hidden px-5 pb-6 pt-2 flex flex-col gap-1">
            {nav.map((n) => (
              <button key={n.id} onClick={() => go(n.id)} className="text-left text-lg text-fg py-3 border-b border-line/10">{n.label}</button>
            ))}
            <a href={`mailto:${EMAIL}`} className="btn-primary justify-center mt-4">Hire me</a>
          </div>
        )}
      </header>

      {/* Hero */}
      <section id="home" className="relative min-h-[100svh] flex items-center pt-24 pb-24 md:pb-28 overflow-hidden">
        <div className="absolute inset-0 grid-bg pointer-events-none" />
        <div className="absolute -top-40 right-[-20%] w-[520px] md:w-[640px] h-[520px] md:h-[640px] rounded-full bg-accent/20 blur-[140px] pointer-events-none" />
        <div className="absolute top-[30%] left-[35%] w-[360px] h-[360px] rounded-full bg-mint/60 dark:bg-transparent blur-[120px] pointer-events-none" />
        <div className="absolute bottom-[-20%] left-[-20%] w-[420px] h-[420px] rounded-full bg-pink/70 dark:bg-warm/10 blur-[140px] pointer-events-none" />

        <div className="relative max-w-6xl mx-auto px-5 grid lg:grid-cols-[1.05fr_1fr] gap-12 items-center w-full">
          <div>
            <div className="hero-in inline-flex items-center gap-2 rounded-full border border-line/10 bg-surface px-3 py-1.5 text-xs text-fg2">
              <span className="relative flex w-2 h-2"><span className="absolute inset-0 rounded-full bg-emerald-400 animate-ping opacity-60" /><span className="relative w-2 h-2 rounded-full bg-emerald-400" /></span>
              Available for work
            </div>
            <h1 className="hero-in font-display font-extrabold text-fg text-[2.4rem] leading-[1.08] sm:text-6xl tracking-tight mt-6" style={{ animationDelay: '100ms' }}>
              Websites that <span className="text-accent">bring in sales.</span>
            </h1>
            <p className="hero-in text-base sm:text-lg text-muted leading-relaxed mt-5 max-w-md" style={{ animationDelay: '160ms' }}>
              Web developer &amp; digital marketer. I build WordPress and Shopify sites, then bring customers to them.
            </p>
            <div className="hero-in flex flex-col sm:flex-row gap-3 mt-8" style={{ animationDelay: '220ms' }}>
              <button onClick={() => go('work')} className="btn-primary justify-center">See my work <ArrowRight size={18} /></button>
              <a href={CV} target="_blank" rel="noopener noreferrer" className="btn-ghost justify-center"><Download size={18} /> Download CV</a>
            </div>
            <p className="hero-in inline-flex items-center gap-2 mt-7 text-sm text-muted" style={{ animationDelay: '280ms' }}>
              <MapPin size={15} /> Jhelum, Pakistan · Remote
            </p>
          </div>

          {/* Visual: desktop collage */}
          <div className="relative hidden lg:block h-[480px] hero-in" style={{ animationDelay: '200ms' }}>
            <Browser src="/work/extreemtek.jpg" alt="ExtreemTek website" className="absolute top-0 right-0 w-[78%] opacity-60 rotate-[3deg]" />
            <Browser src="/work/truerest.jpg" alt="True Rest Shopify store" className="absolute top-20 left-0 w-[86%] float-slow" />
            <span className="chip-float top-6 left-4 bg-[#95BF47] text-[#0b1a00]">Shopify</span>
            <span className="chip-float bottom-24 right-2 bg-[#21759B] text-white" style={{ animationDelay: '1.2s' }}>WordPress</span>
            <span className="chip-float bottom-6 left-16 bg-surface text-fg border border-line/10" style={{ animationDelay: '2.4s' }}>Meta Ads · SEO</span>
          </div>
          {/* Visual: mobile / tablet */}
          <div className="relative lg:hidden hero-in" style={{ animationDelay: '260ms' }}>
            <Browser src="/work/truerest.jpg" alt="True Rest Shopify store" />
            <span className="absolute -top-3 right-3 text-[11px] font-bold px-3 py-1.5 rounded-full bg-[#95BF47] text-[#0b1a00] shadow-lg">Shopify</span>
          </div>
        </div>

        <button onClick={() => go('work')} aria-label="Scroll to work" className="hidden md:grid absolute bottom-8 left-1/2 -translate-x-1/2 w-10 h-10 rounded-full border border-line/15 place-items-center text-muted hover:text-accent hover:border-accent transition animate-bounce">
          <ArrowDown size={18} />
        </button>
      </section>

      {/* Stats */}
      <section className="border-y border-line/10 bg-surface2/50">
        <div className="max-w-6xl mx-auto px-5 grid grid-cols-2 md:grid-cols-4">
          {stats.map((s, i) => (
            <div key={s.label} className={`reveal py-6 md:py-8 ${i % 2 ? 'pl-5 border-l border-line/10' : ''} ${i > 1 ? 'border-t md:border-t-0 border-line/10' : ''} ${i === 2 ? 'md:pl-5 md:border-l' : ''}`}>
              <p className="font-display text-3xl md:text-4xl font-extrabold text-fg">{s.value}</p>
              <p className="text-xs md:text-sm text-muted mt-1">{s.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Work */}
      <section id="work" className="py-20 md:py-28">
        <div className="max-w-6xl mx-auto px-5">
          <SectionHead eyebrow="Selected work" title="Live sites I’ve built" />

          <a href={featured.url} target="_blank" rel="noopener noreferrer" className="reveal card group grid lg:grid-cols-[1.3fr_1fr] overflow-hidden">
            <div className="p-3 md:p-6 bg-gradient-to-br from-accent/10 to-transparent">
              <Browser src={featured.image} alt={`${featured.name} website`} className="group-hover:-translate-y-1 transition duration-500" />
            </div>
            <div className="p-6 md:p-9 flex flex-col justify-center">
              <p className="text-[11px] uppercase tracking-[0.2em] text-warm font-semibold">Featured · {featured.type}</p>
              <h3 className="font-display text-2xl md:text-3xl font-extrabold text-fg mt-2">{featured.name}</h3>
              <p className="text-muted mt-2 leading-relaxed">{featured.summary}</p>
              <div className="flex flex-wrap gap-2 mt-5">{featured.tags.map((t) => <span key={t} className="tag">{t}</span>)}</div>
              <span className="btn-primary self-start mt-7">Visit store <ArrowUpRight size={18} /></span>
            </div>
          </a>

          <div className="grid sm:grid-cols-2 gap-4 md:gap-6 mt-4 md:mt-6">
            {work.map((w) => (
              <a key={w.name} href={w.url} target="_blank" rel="noopener noreferrer" className="reveal card group overflow-hidden">
                <div className="p-3 pb-0">
                  {w.image ? (
                    <Browser src={w.image} alt={`${w.name} website`} className="group-hover:-translate-y-1 transition duration-500" />
                  ) : (
                    <div className="rounded-xl aspect-[1134/600] border border-line/10 bg-gradient-to-br from-pink/70 via-surface2 to-mint/70 grid place-items-center group-hover:-translate-y-1 transition duration-500">
                      <span className="font-display text-xl md:text-2xl font-extrabold text-fg">{w.name}</span>
                    </div>
                  )}
                </div>
                <div className="p-5 flex items-center justify-between gap-4">
                  <div className="min-w-0">
                    <h3 className="font-display text-lg font-bold text-fg truncate">{w.name}</h3>
                    <p className="text-sm text-muted truncate">{w.type}</p>
                  </div>
                  <span className="w-9 h-9 shrink-0 rounded-full border border-line/10 grid place-items-center text-muted group-hover:bg-accent group-hover:text-onaccent group-hover:border-accent transition"><ArrowUpRight size={17} /></span>
                </div>
              </a>
            ))}
          </div>

          <div className="reveal card p-5 md:p-7 mt-4 md:mt-6 grid md:grid-cols-2 gap-6">
            {[{ label: 'More websites', items: moreWork }, { label: 'Social media design', items: designWork }].map((g) => (
              <div key={g.label}>
                <p className="eyebrow">{g.label}</p>
                <div className="flex flex-wrap gap-2 mt-3">
                  {g.items.map((it: { name: string; url?: string }) =>
                    it.url ? (
                      <a key={it.name} href={it.url} target="_blank" rel="noopener noreferrer" className="tag !text-sm !py-1.5 !px-3 inline-flex items-center gap-1 hover:border-accent hover:text-accent transition">{it.name} <ArrowUpRight size={13} /></a>
                    ) : (
                      <span key={it.name} className="tag !text-sm !py-1.5 !px-3 text-muted">{it.name}</span>
                    ),
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services */}
      <section id="services" className="py-20 md:py-28 bg-surface2/50 border-y border-line/10">
        <div className="max-w-6xl mx-auto px-5">
          <SectionHead eyebrow="What I do" title="The site and the marketing" />
          <div className="grid md:grid-cols-3 gap-4 md:gap-6">
            {services.map((s) => (
              <div key={s.title} className="reveal card p-6 md:p-7 flex md:block gap-4">
                <span className="w-11 h-11 shrink-0 rounded-xl bg-accent/15 border border-accent/25 grid place-items-center text-accent"><s.icon size={20} /></span>
                <div>
                  <h3 className="font-display text-lg md:text-xl font-bold text-fg md:mt-5">{s.title}</h3>
                  <p className="text-muted text-sm leading-relaxed mt-1.5">{s.text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Experience + Education + Skills */}
      <section id="experience" className="py-20 md:py-28">
        <div className="max-w-6xl mx-auto px-5 grid lg:grid-cols-2 gap-14">
          <div>
            <SectionHead eyebrow="Experience" title="Where I’ve worked" />
            <ul className="reveal card divide-y divide-line/10">
              {experience.map((e, i) => (
                <li key={e.role + e.org} className="px-5 py-4 flex items-center justify-between gap-4">
                  <div className="min-w-0">
                    <p className="text-fg font-semibold flex items-center gap-2">
                      {i === 0 && <span className="w-2 h-2 rounded-full bg-accent shrink-0" />}
                      <span className="truncate">{e.role}</span>
                    </p>
                    <p className="text-sm text-muted truncate">{e.org}</p>
                  </div>
                  <p className="text-xs text-muted shrink-0">{e.when}</p>
                </li>
              ))}
            </ul>
            <ul className="reveal mt-4 space-y-3">
              {education.map((ed) => (
                <li key={ed.title} className="flex gap-3 items-start">
                  <GraduationCap size={18} className="text-muted mt-0.5 shrink-0" />
                  <div>
                    <p className="text-sm text-fg">{ed.title}</p>
                    <p className="text-xs text-muted">{ed.when}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>

          <div id="skills">
            <SectionHead eyebrow="Skills" title="Tools I use" />
            <div className="reveal flex flex-wrap gap-2">
              {skills.map((s) => <span key={s} className="tag !text-sm !px-3.5 !py-1.5">{s}</span>)}
            </div>
            <p className="eyebrow mt-10">Udemy certificates</p>
            <ul className="reveal mt-3 space-y-2">
              {certs.map((c) => (
                <li key={c.name}>
                  {c.url ? (
                    <a href={c.url} target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 py-2 text-sm text-fg2 hover:text-accent transition">
                      <BadgeCheck size={18} className="text-accent shrink-0" />
                      <span className="flex-1">{c.name}</span>
                      <ArrowUpRight size={15} className="text-muted shrink-0" />
                    </a>
                  ) : (
                    <div className="flex items-center gap-3 py-2 text-sm text-fg2">
                      <BadgeCheck size={18} className="text-accent shrink-0" />
                      <span className="flex-1">{c.name}</span>
                    </div>
                  )}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="pb-20 md:pb-28">
        <div className="max-w-6xl mx-auto px-5">
          <div className="reveal relative overflow-hidden rounded-3xl border border-line/10 bg-gradient-to-br from-surface2 via-surface to-pink/40 p-7 sm:p-10 md:p-16">
            <div className="absolute -top-24 -right-24 w-80 h-80 rounded-full bg-accent/25 blur-[100px]" />
            <div className="relative">
              <p className="eyebrow">Contact</p>
              <h2 className="font-display text-[1.9rem] md:text-5xl font-extrabold text-fg leading-tight mt-2 max-w-xl">Let’s build something that sells.</h2>
              <div className="flex flex-col sm:flex-row flex-wrap gap-3 mt-8">
                <a href={`mailto:${EMAIL}`} className="btn-primary justify-center"><Mail size={18} /> Email me</a>
                <a href={LINKEDIN} target="_blank" rel="noopener noreferrer" className="btn-ghost justify-center"><Linkedin size={18} /> LinkedIn</a>
                <a href={`tel:+92${PHONE.slice(1)}`} className="btn-ghost justify-center"><Phone size={18} /> Call</a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <footer className="border-t border-line/10">
        <div className="max-w-6xl mx-auto px-5 py-7 flex items-center justify-between text-xs sm:text-sm text-muted">
          <p>© 2026 Aoun Danish</p>
          <button onClick={() => go('home')} className="hover:text-accent transition">Back to top ↑</button>
        </div>
      </footer>
    </div>
  );
}

export default App;
