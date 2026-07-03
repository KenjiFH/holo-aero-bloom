import { createFileRoute } from "@tanstack/react-router";
import { Github, Linkedin, Mail, MapPin, Sparkles, Cpu, Cloud, Rocket, GraduationCap, Briefcase, FolderKanban, Award, Users } from "lucide-react";
import { useEffect, useState } from "react";
import heroBg from "@/assets/hero-aero.jpg";
import iconLeafChip from "@/assets/icon-leaf-chip.png";
import iconDroplet from "@/assets/icon-droplet-cloud.png";
import iconAiOrb from "@/assets/icon-ai-orb.png";

export const Route = createFileRoute("/")({
  component: Index,
});

function Bubble({ className, size = 80, delay = 0 }: { className?: string; size?: number; delay?: number }) {
  return (
    <div
      className={`aero-orb pointer-events-none animate-float ${className ?? ""}`}
      style={{ width: size, height: size, animationDelay: `${delay}s`, opacity: 0.75 }}
      aria-hidden
    />
  );
}

function GlassCard({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  return <div className={`glass-panel p-6 md:p-8 ${className}`}>{children}</div>;
}

function SectionTitle({ icon: Icon, kicker, title }: { icon: React.ElementType; kicker: string; title: string }) {
  return (
    <div className="flex items-center gap-4 mb-8">
      <div className="aero-orb flex items-center justify-center" style={{ width: 56, height: 56 }}>
        <Icon className="w-7 h-7 text-white drop-shadow" />
      </div>
      <div>
        <div className="text-xs uppercase tracking-[0.2em] text-aero-deep/70 font-semibold">{kicker}</div>
        <h2 className="text-3xl md:text-4xl font-semibold text-aero-deep">{title}</h2>
      </div>
    </div>
  );
}

const skills = {
  Languages: ["Python", "SQL", "Swift (SwiftUI)", "Java", "C++", "HTML/CSS", "React"],
  "AI, Data & Cloud": ["Azure AI Foundry", "Azure OpenAI", "Azure AI Document Intelligence", "Azure App Service", "LangChain", "LangSmith", "RAG", "Vector Databases", "Vercel", "Firebase"],
  "Business & Delivery": ["Figma", "Miro", "Jira", "Trello", "Git", "Xcode"],
  Certifications: ["Microsoft Certified: Azure AI Fundamentals (AI-900)"],
};

function Index() {
  const sections = ["about", "projects", "experience", "skills"] as const;
  const [active, setActive] = useState<string>("about");

  useEffect(() => {
    const els = sections
      .map((id) => document.getElementById(id))
      .filter((el): el is HTMLElement => !!el);
    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) setActive(e.target.id);
        });
      },
      { rootMargin: "-40% 0px -55% 0px", threshold: 0 }
    );
    els.forEach((el) => obs.observe(el));
    return () => obs.disconnect();
  }, []);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    const el = document.getElementById(id);
    if (!el) return;
    el.scrollIntoView({ behavior: "smooth", block: "start" });
    history.replaceState(null, "", `#${id}`);
  };

  return (
    <div className="min-h-screen relative overflow-x-hidden text-foreground">
      {/* Sky + hill hero background */}
      <div
        className="fixed inset-0 -z-10 bg-cover bg-center"
        style={{ backgroundImage: `url(${heroBg})` }}
      />
      <div className="fixed inset-0 -z-10 opacity-40" style={{ background: "var(--gradient-aurora)" }} />
      {/* Soft white scrim to lift text contrast over the hero photo */}
      <div className="fixed inset-0 -z-10 bg-white/25 pointer-events-none" aria-hidden />

      {/* Nav */}
      <header className="sticky top-4 z-50 mx-auto max-w-6xl px-4">
        <nav className="glass-panel flex items-center justify-between px-5 py-3">
          <div className="flex items-center gap-3">
            <img src={iconLeafChip} alt="" width={36} height={36} className="drop-shadow" />
            <span className="font-semibold text-aero-deep tracking-wide">Kenji Fahselt</span>
          </div>
          <ul className="hidden md:flex items-center gap-6 text-sm font-medium text-aero-deep/85">
            {sections.map((id) => (
              <li key={id}>
                <a
                  href={`#${id}`}
                  onClick={(e) => handleNavClick(e, id)}
                  data-active={active === id}
                  className="nav-link capitalize"
                >
                  {id}
                </a>
              </li>
            ))}
          </ul>
          <a href="#contact" onClick={(e) => handleNavClick(e, "contact")} className="aero-btn aero-btn-green text-sm">
            <Mail className="w-4 h-4" /> Contact
          </a>
        </nav>
      </header>

      {/* Hero */}
      <section className="relative mx-auto max-w-6xl px-4 pt-16 md:pt-24 pb-24">
        <Bubble className="absolute top-10 right-10" size={110} />
        <Bubble className="absolute top-40 left-6" size={70} delay={1.5} />
        <Bubble className="absolute top-72 right-40" size={50} delay={0.8} />

        <div className="grid md:grid-cols-[1.4fr_1fr] gap-10 items-center">
          <div className="glass-panel p-8 md:p-12">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/60 border border-white/70 text-xs font-semibold text-aero-deep mb-6">
              <Sparkles className="w-3.5 h-3.5" /> DX 2.0 · Agentic AI · AI Observability
            </div>
            <h1 className="text-4xl md:text-6xl font-semibold leading-[1.05] text-aero-deep">
              Technology <span className="text-primary">in harmony</span><br />
              with the humans it serves.
            </h1>
            <p className="mt-6 text-lg text-aero-deep/80 max-w-xl">
              I'm Kenji — an aspiring Digital Transformation consultant bridging engineering
              teams and executive stakeholders to ship secure, scalable, human-centric AI.
            </p>
            <div className="mt-4 flex items-center gap-2 text-sm text-aero-deep/70">
              <MapPin className="w-4 h-4" /> Seattle, WA
            </div>
            <div className="mt-8 flex flex-wrap gap-3">
              <a href="#projects" className="aero-btn"><Rocket className="w-4 h-4" /> See Projects</a>
              <a href="https://github.com/KenjiFH" target="_blank" rel="noreferrer" className="aero-btn aero-btn-green"><Github className="w-4 h-4" /> GitHub</a>
              <a href="https://www.linkedin.com/in/kenji-fahselt-9ba91138a/" target="_blank" rel="noreferrer" className="aero-btn"><Linkedin className="w-4 h-4" /> LinkedIn</a>
            </div>
          </div>

          <div className="relative flex items-center justify-center">
            <div className="absolute inset-0 blur-3xl opacity-40" style={{ background: "radial-gradient(circle, rgba(155,224,58,0.4), transparent 65%)" }} aria-hidden />
            <div className="droplet-stage" role="img" aria-label="Animated glassy water droplets">
              <div className="droplet droplet-1" />
              <div className="droplet droplet-2" />
              <div className="droplet droplet-3" />
              <div className="droplet droplet-4" />
              <div className="droplet droplet-5" />
              <div className="droplet-ripple" />
            </div>
          </div>
        </div>
      </section>

      {/* About / stats */}
      <section id="about" className="mx-auto max-w-6xl px-4 pb-24">
        <div className="grid md:grid-cols-3 gap-6">
          {[
            { icon: iconAiOrb, title: "Agentic AI", body: "Building autonomous agent architectures with governance and observability at the core." },
            { icon: iconDroplet, title: "Cloud Native", body: "Azure AI Foundry, OpenAI, App Service, Document Intelligence — shipping real value." },
            { icon: iconLeafChip, title: "Human-Centric", body: "Translating between engineering, MIS, and executive stakeholders to unlock buy-in." },
          ].map((c) => (
            <GlassCard key={c.title} className="text-center">
              <img src={c.icon} alt="" width={110} height={110} className="mx-auto mb-4 animate-float" loading="lazy" />
              <h3 className="text-xl font-semibold text-aero-deep">{c.title}</h3>
              <p className="mt-2 text-aero-deep/80 text-sm leading-relaxed">{c.body}</p>
            </GlassCard>
          ))}
        </div>
      </section>

      {/* Current engagements */}
      <section className="mx-auto max-w-6xl px-4 pb-24">
        <SectionTitle icon={Sparkles} kicker="Right Now" title="Current Engagements" />
        <div className="grid md:grid-cols-2 gap-6">
          <GlassCard>
            <div className="flex items-start gap-3 mb-3">
              <Cpu className="w-6 h-6 text-primary shrink-0 mt-1" />
              <div>
                <h3 className="text-lg font-semibold text-aero-deep">Socio-Technical Trade-Offs of Agentic AI</h3>
                <div className="text-xs text-aero-deep/70">Summer Research Fellow · with Dr. Wei, UWB · Abstract Accepted to INFORMS (Nov 2026)</div>
              </div>
            </div>
            <p className="text-sm text-aero-deep/80">
              A white paper on operationalizing agentic AI — AI observability, robust evaluation
              frameworks, and the business impact of autonomous agents in real-world scenarios.
            </p>
          </GlassCard>
          <GlassCard>
            <div className="flex items-start gap-3 mb-3">
              <Cloud className="w-6 h-6 text-secondary shrink-0 mt-1" />
              <div>
                <h3 className="text-lg font-semibold text-aero-deep">Seattle Public Schools — Azure DX & Power App</h3>
                <div className="text-xs text-aero-deep/70">Cross-functional lead · Avanade Scholar network</div>
              </div>
            </div>
            <p className="text-sm text-aero-deep/80">
              Leading a CS/MIS team on an active Azure + Dataverse digital transformation.
              Building a Power App to modernize institutional workflows — owning stakeholder
              requirements, cloud architecture, and secure delivery.
            </p>
          </GlassCard>
        </div>
      </section>

      {/* Experience */}
      <section id="experience" className="mx-auto max-w-6xl px-4 pb-24">
        <SectionTitle icon={Briefcase} kicker="Work" title="Experience" />
        <div className="space-y-6">
          <GlassCard>
            <div className="flex flex-wrap items-baseline justify-between gap-2 mb-3">
              <h3 className="text-lg font-semibold text-aero-deep">University of Washington — Undergraduate Research Assistant</h3>
              <span className="text-xs text-aero-deep/70">Spring – Summer 2025</span>
            </div>
            <ul className="list-disc pl-5 space-y-2 text-sm text-aero-deep/85">
              <li><b>Stakeholder Presentations & Buy-In:</b> Designed and presented a Computer Vision object detection PoC (PyTorch, Intel RealSense D435i depth cameras) directly to NASA engineering sponsors, securing executive buy-in for an autonomous vehicle initiative.</li>
              <li><b>Cross-Functional Translation:</b> Bridged Mechanical, Electrical, and Software teams — translating hardware constraints into a digital twin simulation. Reduced testing costs by $2,500 and accelerated the timeline by two weeks.</li>
            </ul>
          </GlassCard>
          <GlassCard>
            <div className="flex flex-wrap items-baseline justify-between gap-2 mb-3">
              <h3 className="text-lg font-semibold text-aero-deep">Apexiel Inc. — Technical Product Manager Intern (iOS)</h3>
              <span className="text-xs text-aero-deep/70">Summer 2025 – Winter 2026</span>
            </div>
            <ul className="list-disc pl-5 space-y-2 text-sm text-aero-deep/85">
              <li><b>Product Strategy & Stakeholder Management:</b> Led end-to-end delivery of a first-to-market motorsport data analysis app using custom track geofencing. Balanced executive priorities vs. engineering tradeoffs to ship MVP in 8 weeks — unlocking a new product line for the startup's 300+ MAU.</li>
              <li><b>Executive Communication:</b> Owned sprints, ran weekly Agile standups, delivered strategy decks directly to the CEO.</li>
              <li><b>Rapid Prototyping for Buy-In:</b> Built and demoed SwiftUI PoCs iteratively for executive review — validating feasibility and securing go/no-go decisions.</li>
            </ul>
          </GlassCard>
        </div>
      </section>

      {/* Projects */}
      <section id="projects" className="mx-auto max-w-6xl px-4 pb-24">
        <SectionTitle icon={FolderKanban} kicker="Build" title="Technical Projects" />
        <GlassCard>
          <div className="flex items-start gap-4">
            <img src={iconAiOrb} alt="" width={96} height={96} className="shrink-0 animate-float" loading="lazy" />
            <div>
              <h3 className="text-xl font-semibold text-aero-deep">B2B Vendor Contract Compliance Agent</h3>
              <div className="text-xs text-aero-deep/70 mb-3">RAG · Azure App Service · Azure OpenAI · Azure AI Document Intelligence · LangSmith</div>
              <ul className="list-disc pl-5 space-y-2 text-sm text-aero-deep/85">
                <li><b>Business Value:</b> Agentic compliance system ingests vendor contracts via Azure AI Document Intelligence, flags risks through a stateless Azure OpenAI pipeline, and surfaces findings directly in Slack and Jira.</li>
                <li><b>Governance-First Architecture:</b> Minimized data retention risk and aligned with enterprise data governance and compliance requirements via Azure OpenAI.</li>
                <li><b>Observability & Reliability:</b> Instrumented with LangSmith for full pipeline observability into tokenomics and hallucination prevention.</li>
              </ul>
            </div>
          </div>
        </GlassCard>
      </section>

      {/* Skills */}
      <section id="skills" className="mx-auto max-w-6xl px-4 pb-24">
        <SectionTitle icon={Cpu} kicker="Toolkit" title="Technical Skills" />
        <div className="grid md:grid-cols-2 gap-6">
          {Object.entries(skills).map(([group, items]) => (
            <GlassCard key={group}>
              <h3 className="text-lg font-semibold text-aero-deep mb-4">{group}</h3>
              <div className="flex flex-wrap gap-2">
                {items.map((s) => (
                  <span key={s} className="px-3 py-1.5 rounded-full text-xs font-medium text-white shadow-sm"
                    style={{ background: "var(--gradient-button-blue)", border: "1px solid rgba(255,255,255,0.7)", textShadow: "0 1px 1px rgba(0,0,0,0.3)" }}>
                    {s}
                  </span>
                ))}
              </div>
            </GlassCard>
          ))}
        </div>
      </section>

      {/* Education + Orgs */}
      <section className="mx-auto max-w-6xl px-4 pb-24">
        <div className="grid md:grid-cols-2 gap-6">
          <GlassCard>
            <div className="flex items-center gap-3 mb-3">
              <GraduationCap className="w-6 h-6 text-primary" />
              <h3 className="text-lg font-semibold text-aero-deep">Education</h3>
            </div>
            <div className="text-aero-deep font-medium">University of Washington | Bothell, WA</div>
            <div className="text-sm text-aero-deep/80">Applied Computing — Computing & Software Systems</div>
            <div className="text-sm text-aero-deep/80">Minor in Data Science · GPA 3.6</div>
            <div className="text-xs text-aero-deep/60 mt-1">Expected Graduation: June 2027</div>
          </GlassCard>
          <GlassCard>
            <div className="flex items-center gap-3 mb-3">
              <Users className="w-6 h-6 text-secondary" />
              <h3 className="text-lg font-semibold text-aero-deep">Organizations & Leadership</h3>
            </div>
            <div className="space-y-3 text-sm text-aero-deep/85">
              <div>
                <div className="font-semibold text-aero-deep flex items-center gap-2"><Award className="w-4 h-4" /> Avanade NextGen Scholar</div>
                <p>Engaged with a network of Avanade consultants for strategic career and technical insights; presented project architectures to industry professionals to sharpen client-facing communication.</p>
              </div>
              <div>
                <div className="font-semibold text-aero-deep flex items-center gap-2"><Award className="w-4 h-4" /> Google Developer Student Clubs — Lead Officer</div>
                <p>Organized technical workshops and led a diverse team, translating complex concepts into accessible material for non-technical audiences.</p>
              </div>
            </div>
          </GlassCard>
        </div>
      </section>

      {/* Contact CTA */}
      <section id="contact" className="mx-auto max-w-4xl px-4 pb-24">
        <div className="glass-panel-dark p-10 text-center">
          <img src={iconDroplet} alt="" width={90} height={90} className="mx-auto mb-4 animate-float" loading="lazy" />
          <h2 className="text-3xl md:text-4xl font-semibold text-white drop-shadow">Let's build something optimistic.</h2>
          <p className="mt-3 text-white/85 max-w-xl mx-auto">
            Open to consulting POC cycles, agentic AI research collaborations, and DX 2.0 engagements.
          </p>
          <div className="mt-6 flex flex-wrap gap-3 justify-center">
            <a href="mailto:kenjif3@uw.edu" className="aero-btn aero-btn-green"><Mail className="w-4 h-4" /> kenjif3@uw.edu</a>
            <a href="https://github.com/KenjiFH" target="_blank" rel="noreferrer" className="aero-btn"><Github className="w-4 h-4" /> GitHub</a>
            <a href="https://www.linkedin.com/in/kenji-fahselt-9ba91138a/" target="_blank" rel="noreferrer" className="aero-btn"><Linkedin className="w-4 h-4" /> LinkedIn</a>
          </div>
        </div>
      </section>

      <footer className="mx-auto max-w-6xl px-4 pb-10 text-center text-xs text-aero-deep/70">
        © {new Date().getFullYear()} Kenji Fahselt · Seattle, WA · Crafted with a taste of Frutiger Aero.
      </footer>
    </div>
  );
}
