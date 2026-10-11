import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import {
  ShieldCheck, Menu, X, ArrowDown, Lightbulb, CheckCircle2, Briefcase, Info, Users, Globe, Lock,
  KeyRound, Smartphone, MailWarning, UserX, MonitorOff, FolderLock, RefreshCcw, Siren, Send, BookOpen,
} from "lucide-react";
import hero from "@/assets/hero-shield.jpg";
import { topics, type Topic } from "@/lib/topics";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "SecureAware — ISO 27001 Security Awareness" },
      { name: "description", content: "Learn ISO 27001 information security essentials: the CIA triad, risk, access control, incidents and everyday best practices." },
      { property: "og:title", content: "SecureAware — ISO 27001 Security Awareness" },
      { property: "og:description", content: "Practical information security awareness for every employee, based on ISO 27001." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

const nav = [
  { href: "#home", label: "Home" },
  { href: "#about", label: "About ISO 27001" },
  { href: "#topics", label: "Security Topics" },
  { href: "#best-practices", label: "Best Practices" },
];

function Header() {
  const [open, setOpen] = useState(false);
  return (
    <header className="sticky top-0 z-50 border-b border-navy-foreground/10 bg-navy/90 text-navy-foreground backdrop-blur">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-5">
        <a href="#home" className="flex items-center gap-2 font-display font-semibold">
          <ShieldCheck className="h-6 w-6 text-cyan" /> SecureAware
        </a>
        <nav className="hidden gap-8 text-sm md:flex" aria-label="Main">
          {nav.map((n) => (
            <a key={n.href} href={n.href} className="text-navy-muted transition-colors hover:text-cyan">{n.label}</a>
          ))}
        </nav>
        <button className="md:hidden" aria-label="Toggle menu" onClick={() => setOpen(!open)}>
          {open ? <X /> : <Menu />}
        </button>
      </div>
      {open && (
        <nav className="flex flex-col gap-1 border-t border-navy-foreground/10 px-5 py-3 md:hidden" aria-label="Mobile">
          {nav.map((n) => (
            <a key={n.href} href={n.href} onClick={() => setOpen(false)} className="py-2 text-navy-muted hover:text-cyan">{n.label}</a>
          ))}
        </nav>
      )}
    </header>
  );
}

function Hero() {
  return (
    <section id="home" className="relative overflow-hidden bg-hero text-navy-foreground">
      <div className="absolute inset-0 bg-grid" aria-hidden />
      <div className="relative mx-auto grid max-w-6xl items-center gap-10 px-5 py-20 md:grid-cols-2 md:py-28">
        <div>
          <span className="inline-flex items-center gap-2 rounded-full border border-cyan/30 bg-cyan/10 px-3 py-1 text-xs font-medium text-cyan">
            <Lock className="h-3.5 w-3.5" /> ISO/IEC 27001 Awareness
          </span>
          <h1 className="mt-6 text-4xl font-bold leading-tight md:text-5xl lg:text-6xl">
            Information Security Starts With <span className="text-cyan">Awareness</span>
          </h1>
          <p className="mt-6 max-w-lg text-lg text-navy-muted">
            Learn how to protect information, recognize security risks, and practice safer digital habits through the principles of ISO 27001.
          </p>
          <a href="#topics" className="mt-8 inline-flex items-center gap-2 rounded-lg bg-cyan px-6 py-3 font-semibold text-navy transition hover:shadow-glow">
            Explore Security Topics <ArrowDown className="h-4 w-4" />
          </a>
        </div>
        <img src={hero} alt="Glowing shield with padlock above a secure network" width={1024} height={1024}
          className="mx-auto w-full max-w-md rounded-3xl shadow-glow" />
      </div>
    </section>
  );
}

function Intro() {
  const items = [
    { icon: Info, title: "What it is", text: "Information security protects data — digital or on paper — from being seen, changed or lost by the wrong people." },
    { icon: Globe, title: "Why it matters", text: "Breaches damage trust, cost money and can harm customers. Most incidents start with a simple human mistake." },
    { icon: Users, title: "Your role", text: "Everyone handles information. Your everyday choices are the strongest line of defence." },
  ];
  return (
    <section className="mx-auto max-w-6xl px-5 py-20">
      <h2 className="text-center text-3xl font-bold md:text-4xl">Security is a shared effort</h2>
      <div className="mt-12 grid gap-6 md:grid-cols-3">
        {items.map((i) => (
          <div key={i.title} className="rounded-2xl border bg-card p-6 shadow-card transition hover:-translate-y-1">
            <i.icon className="h-8 w-8 text-accent" />
            <h3 className="mt-4 text-lg font-semibold">{i.title}</h3>
            <p className="mt-2 text-muted-foreground">{i.text}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

function About() {
  return (
    <section id="about" className="bg-secondary">
      <div className="mx-auto grid max-w-6xl gap-10 px-5 py-20 md:grid-cols-2">
        <div>
          <p className="text-sm font-semibold uppercase tracking-widest text-accent">About the standard</p>
          <h2 className="mt-3 text-3xl font-bold md:text-4xl">What is ISO/IEC 27001?</h2>
          <p className="mt-5 text-muted-foreground">
            ISO/IEC 27001 is the international standard for establishing, implementing, maintaining and continually improving an
            <strong className="text-foreground"> Information Security Management System (ISMS)</strong> — a structured way of managing people, processes and technology to keep information safe.
          </p>
          <p className="mt-4 text-muted-foreground">
            It helps organizations identify information security risks, choose suitable controls, and protect sensitive information belonging to the business, its customers and partners.
          </p>
        </div>
        <div className="space-y-4">
          <div className="rounded-2xl bg-navy p-6 text-navy-foreground shadow-card">
            <h3 className="flex items-center gap-2 font-semibold"><ShieldCheck className="h-5 w-5 text-cyan" /> The foundation</h3>
            <p className="mt-2 text-navy-muted">The CIA Triad — Confidentiality, Integrity, Availability — is the fundamental concept of information security that defines what we protect.</p>
          </div>
          <div className="rounded-2xl border bg-card p-6 shadow-card">
            <h3 className="flex items-center gap-2 font-semibold"><BookOpen className="h-5 w-5 text-accent" /> The supporting practices</h3>
            <p className="mt-2 text-muted-foreground">Risk, access, assets, incidents, policies, continuity and improvement are related practices that support an organization's information security program.</p>
          </div>
        </div>
      </div>
    </section>
  );
}

function List({ title, icon: Icon, items }: { title: string; icon: typeof Info; items: string[] }) {
  return (
    <div>
      <h4 className="flex items-center gap-2 font-semibold"><Icon className="h-4 w-4 text-accent" /> {title}</h4>
      <ul className="mt-3 space-y-2">
        {items.map((e) => (
          <li key={e} className="flex gap-2 text-sm text-muted-foreground">
            <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />{e}
          </li>
        ))}
      </ul>
    </div>
  );
}

function TopicSection({ t, n }: { t: Topic; n: number }) {
  return (
    <article id={t.id} className="rounded-3xl border bg-card p-6 shadow-card md:p-10">
      <div className="flex items-start gap-4">
        <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-navy text-cyan">
          <t.icon className="h-6 w-6" />
        </div>
        <div>
          <p className="text-xs font-semibold uppercase tracking-widest text-accent">Topic {n}</p>
          <h3 className="text-2xl font-bold md:text-3xl">{t.title}</h3>
          <p className="mt-1 text-muted-foreground">{t.intro}</p>
        </div>
      </div>
      <div className="mt-8 grid gap-6 md:grid-cols-2">
        <div><h4 className="font-semibold">What it means</h4><p className="mt-2 text-sm text-muted-foreground">{t.meaning}</p></div>
        <div><h4 className="font-semibold">Why it's important</h4><p className="mt-2 text-sm text-muted-foreground">{t.importance}</p></div>
      </div>
      {t.pillars && (
        <div className="mt-8 grid gap-4 md:grid-cols-3">
          {t.pillars.map((p) => (
            <div key={p.name} className="rounded-2xl bg-navy p-5 text-navy-foreground">
              <p className="font-display text-lg font-semibold text-cyan">{p.name}</p>
              <p className="mt-2 text-sm">{p.text}</p>
              <p className="mt-3 border-t border-navy-foreground/10 pt-3 text-xs text-navy-muted">Example: {p.example}</p>
            </div>
          ))}
        </div>
      )}
      <div className="mt-8 grid gap-8 md:grid-cols-2">
        <List title="Workplace examples" icon={Briefcase} items={t.examples} />
        <List title="Recommended practices" icon={CheckCircle2} items={t.practices} />
      </div>
      <div className="mt-8 flex items-center gap-3 rounded-xl border border-accent/30 bg-accent/10 p-4">
        <Lightbulb className="h-5 w-5 shrink-0 text-accent" />
        <p className="text-sm font-medium"><span className="font-semibold">Key takeaway:</span> {t.takeaway}</p>
      </div>
    </article>
  );
}

function Topics() {
  return (
    <section id="topics" className="mx-auto max-w-6xl px-5 py-20">
      <div className="text-center">
        <p className="text-sm font-semibold uppercase tracking-widest text-accent">Learn</p>
        <h2 className="mt-3 text-3xl font-bold md:text-4xl">Information Security Topics</h2>
        <p className="mx-auto mt-4 max-w-2xl text-muted-foreground">Eight essential areas, explained in plain language with real workplace examples.</p>
      </div>
      <div className="mt-10 grid grid-cols-2 gap-3 md:grid-cols-4">
        {topics.map((t, i) => (
          <a key={t.id} href={`#${t.id}`} className="group flex items-center gap-3 rounded-xl border bg-card p-4 text-sm font-medium transition hover:border-accent hover:shadow-card">
            <t.icon className="h-5 w-5 text-accent" />
            <span><span className="text-muted-foreground">{i + 1}.</span> {t.title}</span>
          </a>
        ))}
      </div>
      <div className="mt-12 space-y-8">
        {topics.map((t, i) => <TopicSection key={t.id} t={t} n={i + 1} />)}
      </div>
    </section>
  );
}

const practices = [
  { icon: KeyRound, text: "Use strong, unique passwords." },
  { icon: Smartphone, text: "Enable multifactor authentication when available." },
  { icon: MailWarning, text: "Verify suspicious emails and links." },
  { icon: UserX, text: "Never share passwords or accounts." },
  { icon: MonitorOff, text: "Lock your computer when leaving your workstation." },
  { icon: FolderLock, text: "Store confidential information securely." },
  { icon: RefreshCcw, text: "Keep software and devices updated." },
  { icon: Siren, text: "Report suspected security incidents promptly." },
  { icon: Send, text: "Share sensitive information only with authorized recipients." },
  { icon: BookOpen, text: "Follow company information security policies." },
];

function BestPractices() {
  return (
    <section id="best-practices" className="relative overflow-hidden bg-hero text-navy-foreground">
      <div className="absolute inset-0 bg-grid" aria-hidden />
      <div className="relative mx-auto max-w-6xl px-5 py-20">
        <h2 className="text-center text-3xl font-bold md:text-4xl">Everyday Security Best Practices</h2>
        <p className="mx-auto mt-4 max-w-xl text-center text-navy-muted">Ten simple habits that protect you, your colleagues and the organization.</p>
        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
          {practices.map((p, i) => (
            <div key={p.text} className="rounded-2xl border border-navy-foreground/10 bg-navy-foreground/5 p-5 transition hover:border-cyan/50 hover:bg-navy-foreground/10">
              <div className="flex items-center justify-between">
                <p.icon className="h-6 w-6 text-cyan" />
                <span className="font-display text-sm text-navy-muted">{String(i + 1).padStart(2, "0")}</span>
              </div>
              <p className="mt-4 text-sm font-medium">{p.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="bg-navy text-navy-foreground">
      <div className="mx-auto flex max-w-6xl flex-col gap-8 px-5 py-12 md:flex-row md:justify-between">
        <div className="max-w-sm">
          <p className="flex items-center gap-2 font-display font-semibold"><ShieldCheck className="h-5 w-5 text-cyan" /> SecureAware</p>
          <p className="mt-3 text-sm text-navy-muted">Security is everyone's responsibility. Stay informed, stay alert, and protect information.</p>
        </div>
        <nav className="flex flex-wrap gap-6 text-sm" aria-label="Footer">
          {nav.map((n) => <a key={n.href} href={n.href} className="text-navy-muted hover:text-cyan">{n.label}</a>)}
        </nav>
      </div>
      <p className="border-t border-navy-foreground/10 py-5 text-center text-xs text-navy-muted">ISO/IEC 27001 Information Security Awareness</p>
    </footer>
  );
}

function Index() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Intro />
        <About />
        <Topics />
        <BestPractices />
      </main>
      <Footer />
    </>
  );
}
