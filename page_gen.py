
with open('app/page.tsx', 'w', encoding='utf-8') as f:
    f.write(r'''"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import Image from "next/image"
import Link from "next/link"
import { ArrowUpRight, Github, ExternalLink, Mail, Linkedin, Menu, X, Download, MapPin, PlayCircle } from "lucide-react"

// --- CONSTANTS & DATA ---
const NAV_LINKS = ["Experience", "Projects", "Education", "Connect"]

const STATS = [
  { value: "4", label: "Core Projects" },
  { value: "1", label: "Internship" },
  { value: "2", label: "Hackathon Wins" },
  { value: "3+", label: "Years in AI/ML" }
]

const SKILLS = {
    "Languages": ["Python", "SQL"],
    "ML / AI": ["XGBoost", "Scikit-learn", "LSTM Autoencoder", "Isolation Forest", "SHAP", "Anomaly Detection", "Drift Detection", "Imbalanced Classification"],
    "LLMs & RAG": ["LangChain", "ChromaDB", "HuggingFace", "Sentence Transformers", "RAG Pipelines"],
    "Backend & APIs": ["FastAPI", "SQLAlchemy", "REST API", "Pydantic", "Uvicorn"],
    "Data & Tools": ["Pandas", "NumPy", "Matplotlib", "Jupyter", "Github"]
  }
const EXPERIENCE = [
  {
    role: "AIML Developer Intern",
    company: "Advantal Technology",
    duration: "Nov 2025 - Feb 2026",
    location: "Indore",
    bullets: [
      "Built a real-time BGP anomaly detection system using ensemble ML (LSTM Autoencoder + Isolation Forest + Heuristics) on sequential network data.",
      "Designed feature-level drift monitoring (KS-test) comparing live vs. training distributions; triggered automated retraining alerts before production model degradation.",
      "Delivered a modular, retraining-ready ML pipeline � training, validation, anomaly scoring, performance tracking � reducing manual monitoring overhead."
    ],
    tech: ["Python", "LSTM Autoencoder", "Isolation Forest", "KS-test"]
  },
  {
    role: "AI/ML Developer",
    company: "Internal College AI Hackathon",
    duration: "2024",
    location: "Indore",
    bullets: [
      "Secured 3rd rank in an internal AI hackathon through collaborative AI project development and problem-solving.",
      "Built self-driven AI/ML projects involving anomaly detection, NLP workflows, healthcare-oriented AI concepts, and computer vision systems."
    ],
    tech: ["Python", "PyTorch", "NLP", "Computer Vision"]
  }
]

const PROJECTS = [
  {
    num: "01",
    title: "CrackIt \u2014 AI Interview Prep Platform",
    summary: "Built FastAPI backend with SQLAlchemy/SQLite ORM. Engineered end-to-end RAG pipeline with LangChain & ChromaDB for context-injected prompting to ground Llama 3.2 responses. Designed full system from API contracts to inference layer.",
    tech: ["FastAPI", "SQLAlchemy", "LangChain", "ChromaDB", "Llama 3.2"],
    features: ["RAG pipeline", "Context-injected prompting", "REST API Design"],
    github: "https://github.com/AbhishekParita/CrackIt",
    isFeatured: true
  },
  {
    num: "02",
    title: "Large-Scale Financial Fraud Detection",
    summary: "Trained XGBoost classifier on 6.3M+ transactions (0.13% fraud rate); tackled extreme class imbalance via cost-sensitive learning and decision-threshold optimization. Achieved 98.3% Recall and PR-AUC 0.865.",
    tech: ["Python", "XGBoost", "Cost-sensitive learning"],
    features: ["Class Imbalance handling", "Decision-threshold optimization", "High Recall tracking"],
    github: "https://github.com/AbhishekParita/Fraud_Detection-using-XGboost",
    isFeatured: false
  },
  {
    num: "03",
    title: "ML Model Monitoring & Drift Detection System",
    summary: "Built production monitoring framework with FastAPI REST API, SQLite logging, and severity-based alerting. Implemented statistical drift detection (KS-test + Chi-Square) with an interactive dashboard.",
    tech: ["FastAPI", "SQLite", "KS-test", "Chi-Square"],
    features: ["Severity-based alerting", "Statistical drift detection", "Interactive dashboard"],
    github: "https://github.com/AbhishekParita/ML-Model-Drift-Failure-Detection-System",
    isFeatured: false
  },
  {
    num: "04",
    title: "Credit Scoring System with Explainability",
    summary: "XGBoost credit-default predictor with engineered behavioural features recall-tuned via class weighting for high-risk applicant detection. Applied SHAP for global feature importance and per-prediction explanations.",
    tech: ["XGBoost", "Python", "SHAP"],
    features: ["Risk applicant detection", "SHAP Global feature importance", "Audit-ready explainability"],
    github: "https://github.com/AbhishekParita/Credit-Scoring-System-with-Explainability",
    isFeatured: false
  }
]

// --- SHARED COMPONENTS ---
const SectionHeader = ({ num, title, watermark }: any) => (
  <div className="relative mb-16 pt-8">
    <div className="absolute top-0 left-0 -translate-y-4 watermark-text z-0">{watermark}</div>
    <div className="relative z-10 flex items-center gap-6">
      <span className="font-mono text-[var(--color-primary-lime)] text-base">{num}</span>
      <h2 className="font-display text-[var(--color-text-near-black)] text-[26px] font-medium tracking-tight whitespace-nowrap">{title}</h2>
      <div className="h-[1px] w-full bg-[var(--color-border-gray)] mt-1"></div>
    </div>
  </div>
)

const SkillChip = ({ children }: any) => (
  <div className="group flex items-center gap-2 px-3 py-1.5 rounded-full bg-[var(--color-bg-light)] border-[0.5px] border-[var(--color-border-gray)] hover:border-[var(--color-primary-lime)] hover:border-[1.5px] transition-all duration-200 cursor-default">
    <div className="w-1.5 h-1.5 rounded-full bg-[var(--color-primary-lime)] group-hover:scale-125 transition-transform"></div>
    <span className="font-mono text-[11px] text-[var(--color-text-near-black)] tracking-tight">{children}</span>
  </div>
)

const TechPill = ({ children }: any) => (
  <span className="px-3 py-1 bg-[var(--color-border-darker)] text-[#D0D0D0] text-[11px] font-mono rounded-full whitespace-nowrap">
    {children}
  </span>
)

export default function Portfolio() {
  const [scrolled, setScrolled] = useState(false)
  const [scrollProgress, setScrollProgress] = useState(0)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
      const totalScroll = document.documentElement.scrollTop
      const windowHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight
      const scroll = totalScroll / windowHeight
      setScrollProgress(scroll)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <div className="min-h-screen pb-32 overflow-hidden">
      <div 
        className="fixed top-0 left-0 h-1 bg-[var(--color-primary-lime)] z-50 transition-all duration-150"
        style={{ width: \\%\ }}
      />

      {/* Navbar */}
      <nav className={\ixed top-0 w-full h-[64px] z-40 transition-colors duration-300 \\}>
        <div className="max-w-[1200px] h-full mx-auto px-6 flex items-center justify-between">
          <Link href="#top" className="font-display font-medium text-xl text-[var(--color-text-near-black)] flex items-baseline gap-[1px]">
            A.Parita<span className="text-[var(--color-primary-lime)] text-2xl leading-none font-bold">.</span>
          </Link>
          
          <div className="hidden md:flex items-center gap-8">
            {NAV_LINKS.map(link => (
              <Link key={link} href={\#\\} className="text-[14px] text-[var(--color-text-muted)] hover:text-[var(--color-text-near-black)] font-medium transition-colors relative group">
                {link}
                <div className="absolute -bottom-1 left-0 w-0 h-[2px] bg-[var(--color-primary-lime)] group-hover:w-full transition-all duration-300"></div>
              </Link>
            ))}
            <a href="/Abhishek_Parita_Resume.pdf" target="_blank" className="flex items-center gap-2 px-5 py-2 rounded-full bg-[var(--color-text-near-black)] text-white text-[14px] font-medium hover:bg-black transition-colors">
              <Download className="w-4 h-4" /> Resume
            </a>
          </div>
          
          <button className="md:hidden text-[var(--color-text-near-black)]" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
            {mobileMenuOpen ? <X /> : <Menu />}
          </button>
        </div>
      </nav>

      {mobileMenuOpen && (
        <div className="fixed inset-0 top-[64px] bg-white z-30 flex flex-col p-6 border-b border-[var(--color-border-gray)] slide-in-from-right animate-in">
          {NAV_LINKS.map(link => (
            <Link key={link} onClick={() => setMobileMenuOpen(false)} href={\#\\} className="py-4 border-b border-[var(--color-border-gray)] text-lg font-medium text-[var(--color-text-near-black)]">
              {link}
            </Link>
          ))}
          <a href="/Abhishek_Parita_Resume.pdf" className="mt-6 flex items-center justify-center gap-2 py-3 rounded-full bg-[var(--color-text-near-black)] text-white font-medium">
            <Download className="w-4 h-4" /> Download Resume
          </a>
        </div>
      )}

      <main className="max-w-[1200px] mx-auto">
        
        {/* HERO SECTION */}
        <section id="top" className="pt-[144px] pb-[80px] px-6">
          <div className="grid md:grid-cols-[60%_40%] gap-12 items-start">
            <div className="flex flex-col items-start gap-6">
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[var(--color-primary-lime-wash)] border-[0.5px] border-[var(--color-primary-lime)]">
                <div className="w-2 h-2 rounded-full bg-[var(--color-primary-lime)] animate-pulse"></div>
                <span className="text-[12px] font-mono text-[var(--color-primary-lime-dark)]">Available for opportunities</span>
              </div>
              
              <div className="relative">
                <h1 className="font-display text-[clamp(36px,5vw,52px)] font-medium leading-[1.1] tracking-tight text-[var(--color-text-near-black)]">
                  Abhishek <span className="text-[var(--color-primary-lime)]">Parita</span>
                </h1>
                <svg className="absolute -bottom-3 left-0 w-[200px] h-[12px] text-[var(--color-primary-lime)]" viewBox="0 0 200 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M1 9.5C28.5 -1.5 59 1 76 6.5C108.5 17 131 -2.5 161 6.5C175 10.7 186.5 9 199 6.5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                </svg>
              </div>

              <div className="font-mono text-[var(--color-text-near-black)] text-sm md:text-base mt-2 flex items-center gap-2 font-medium">
                > Applied AI/ML Engineer � Intelligent Systems � Anomaly Detection
                <span className="w-1.5 h-4 bg-[var(--color-primary-lime)]"></span>
              </div>
              
              <p className="text-[15px] leading-[1.7] text-[var(--color-text-muted)] max-w-[520px]">
                Building AI-driven systems focused on anomaly detection, intelligent monitoring, multilingual NLP, and real-world machine learning applications. I focus on practical problem-solving using predictive analytics, behavioral concepts, and scalable workflows.
              </p>
              
              <div className="flex flex-wrap items-center gap-4 mt-2">
                <Link href="#projects" className="px-6 py-2.5 rounded-full bg-[var(--color-text-near-black)] text-white text-[14px] font-medium hover:bg-black transition-colors">
                  View Projects
                </Link>
                <a href="/Abhishek_Parita_Resume.pdf" className="px-6 py-2.5 rounded-full bg-white border border-[var(--color-border-gray)] text-[var(--color-text-near-black)] text-[14px] font-medium hover:border-[var(--color-primary-lime)] hover:border-[1.5px] transition-all flex items-center gap-2">
                  <Download className="w-4 h-4" /> Resume
                </a>
                <Link href="https://github.com/AbhishekParita" target="_blank" className="p-2 ml-2 text-[var(--color-text-muted)] hover:text-[var(--color-primary-lime)] transition-colors">
                  <Github className="w-5 h-5" />
                </Link>
                <Link href="https://linkedin.com/in/abhishek-parita-55b24624a/" target="_blank" className="p-2 text-[var(--color-text-muted)] hover:text-[var(--color-primary-lime)] transition-colors">
                  <Linkedin className="w-5 h-5" />
                </Link>
              </div>

              <div className="mt-8 flex flex-col gap-3">
                {Object.entries(SKILLS).map(([cat, sks]) => (
                  <div key={cat} className="flex flex-wrap items-center gap-2">
                    <span className="text-[12px] font-mono text-[var(--color-text-muted)] w-[80px]">{cat}:</span>
                    {sks.map(s => <SkillChip key={s}>{s}</SkillChip>)}
                  </div>
                ))}
              </div>
            </div>

            <div className="relative w-full aspect-square md:aspect-auto md:h-full flex items-center justify-center pt-12 md:pt-0">
               <div className="absolute inset-0 m-auto w-[280px] h-[280px] sm:w-[320px] sm:h-[320px] border border-dashed border-[var(--color-border-gray)] rounded-full opacity-50" />
               <div className="absolute inset-0 m-auto w-[420px] h-[420px] border border-dashed border-[var(--color-border-gray)] rounded-full opacity-30 hidden sm:block" />
               
               <div className="relative z-10 w-[120px] h-[120px] md:w-[160px] md:h-[160px] rounded-full border-[1.5px] border-[var(--color-primary-lime)] bg-[var(--color-bg-light)] p-1 shadow-lg">
                 <div className="w-full h-full rounded-full bg-[var(--color-border-gray)] overflow-hidden relative">
                    <div className="absolute inset-0 flex items-center justify-center font-display text-[var(--color-text-near-black)] font-medium text-lg">AI/ML</div>
                 </div>
               </div>

               <div className="absolute z-20 top-4 right-12 md:top-12 md:right-0 px-3 py-1.5 rounded-full bg-[var(--color-primary-lime-wash)] border-[0.5px] border-[var(--color-primary-lime)] text-[var(--color-primary-lime-dark)] font-mono text-[10px] sm:text-[11px] font-medium shadow-sm">
                  Production-Ready
               </div>
               <div className="absolute z-20 bottom-8 md:bottom-24 right-4 md:-right-8 px-3 py-1.5 rounded-full bg-[var(--color-primary-lime-wash)] border-[0.5px] border-[var(--color-primary-lime)] text-[var(--color-primary-lime-dark)] font-mono text-[10px] sm:text-[11px] font-medium shadow-sm">
                  Data-Driven
               </div>
            </div>
          </div>
        </section>

        {/* STATS */}
        <section className="bg-[var(--color-text-near-black)] py-10 px-6 mx-4 rounded-[20px] shadow-xl relative overflow-hidden mb-12">
          <div className="relative z-10 grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-px md:bg-[var(--color-border-darker)]">
            {STATS.map((stat, i) => (
              <div key={i} className="flex flex-col items-center justify-center md:bg-[var(--color-text-near-black)] py-2 gap-1">
                <span className="font-display font-medium text-3xl text-[var(--color-primary-lime)]">{stat.value}</span>
                <span className="text-[12px] font-mono text-[var(--color-text-muted)] uppercase tracking-wider">{stat.label}</span>
              </div>
            ))}
          </div>
        </section>

        {/* EXPERIENCE */}
        <section id="experience" className="pt-[60px] pb-12 px-6">
          <SectionHeader num="01." title="Experience & Activities" watermark="EXPERIENCE" />
          
          <div className="ml-2 md:ml-8 pl-8 border-l-[1px] border-[var(--color-border-gray)] relative flex flex-col gap-12">
            {EXPERIENCE.map((exp, i) => (
              <div key={i} className="relative group bg-white border-[0.5px] border-[var(--color-border-gray)] hover:border-[var(--color-primary-lime)] hover:border-[1.5px] rounded-xl p-6 md:p-8 transition-all duration-300 shadow-sm">
                <div className="absolute -left-[37px] top-8 w-[12px] h-[12px] rounded-full bg-[var(--color-primary-lime)] border-[3px] border-white group-hover:scale-125 transition-transform"></div>
                
                <div className="flex flex-col md:flex-row justify-between gap-4 mb-6">
                  <div>
                    <h3 className="font-display text-lg font-medium text-[var(--color-text-near-black)] flex items-center gap-3">
                      {exp.role} 
                      {i === 0 && <span className="px-2 py-0.5 rounded-full bg-[var(--color-primary-lime-wash)] text-[var(--color-primary-lime-dark)] text-[10px] font-mono border-[0.5px] border-[var(--color-primary-lime)]">NEW</span>}
                    </h3>
                    <div className="text-[14px] text-[var(--color-primary-lime)] font-medium mt-1">{exp.company}</div>
                  </div>
                  <div className="shrink-0 flex items-center gap-2 px-3 py-1 bg-[var(--color-bg-light)] rounded-full text-[12px] font-mono text-[var(--color-text-muted)] self-start">
                     {exp.duration} <MapPin className="w-3 h-3" /> {exp.location}
                  </div>
                </div>

                <ul className="flex flex-col gap-3 mb-6">
                  {exp.bullets.map((b, bi) => (
                    <li key={bi} className="flex items-start gap-3 text-[14px] leading-relaxed text-[var(--color-text-muted)]">
                       <span className="text-[var(--color-primary-lime)] mt-1.5 shrink-0 block w-1.5 h-1.5 rounded-full bg-[var(--color-primary-lime)]"></span>
                       <span>{b}</span>
                    </li>
                  ))}
                </ul>

                <div className="flex flex-wrap gap-2 pt-4 border-t border-[var(--color-border-gray)]/50">
                   {exp.tech.map(t => <TechPill key={t}>{t}</TechPill>)}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* PROJECTS */}
        <section id="projects" className="pt-[100px] pb-12 bg-[var(--color-bg-light)] -mx-6 px-6 relative">
          <SectionHeader num="02." title="Featured Projects" watermark="PROJECTS" />
          
          <div className="flex flex-col gap-8">
            {PROJECTS.map((proj, i) => (
              <div key={i} className={\
elative bg-white rounded-xl border-[0.5px] border-[var(--color-border-gray)] hover:border-[var(--color-primary-lime)] p-6 md:p-8 transition-all \\}>
                <div className="flex flex-col gap-6">
                  
                  <div className="flex flex-col gap-2">
                    <span className="font-mono text-[var(--color-primary-lime)] text-[12px]">Project {proj.num} {proj.isFeatured && "� Featured"}</span>
                    <h3 className="font-display text-[20px] font-medium text-[var(--color-text-near-black)] hover:text-[var(--color-primary-lime)] transition-colors">{proj.title}</h3>
                    <p className="text-[14px] leading-relaxed text-[var(--color-text-muted)] mt-2">{proj.summary}</p>
                  </div>
                  
                  <div className="grid md:grid-cols-2 gap-4 mt-2">
                    <div className="text-[13px] text-[var(--color-text-muted)]">
                       <strong className="block mb-2 text-[var(--color-text-near-black)] font-display">Key Features</strong>
                       <ul className="flex flex-col gap-1.5">
                         {proj.features.map(f => (
                           <li key={f} className="flex items-center gap-2"><span className="w-1 h-1 bg-[var(--color-primary-lime)] rounded-full"></span>{f}</li>
                         ))}
                       </ul>
                    </div>
                  </div>

                  <div className="flex flex-wrap items-center justify-between pt-4 border-t border-[var(--color-border-gray)] gap-4 mt-2">
                    <div className="flex flex-wrap gap-2">
                      {proj.tech.map(t => <TechPill key={t}>{t}</TechPill>)}
                    </div>
                    <Link href={proj.github} target="_blank" className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-[var(--color-border-gray)] text-[12px] font-mono text-[var(--color-text-near-black)] hover:border-[var(--color-primary-lime)] hover:bg-[var(--color-text-near-black)] hover:text-white transition-all">
                      View GitHub <ArrowUpRight className="w-3 h-3" />
                    </Link>
                  </div>

                </div>
              </div>
            ))}
          </div>
        </section>

        {/* EDUCATION */}
        <section id="education" className="pt-[100px] pb-12 px-6">
          <SectionHeader num="03." title="Education & Certifications" watermark="EDUCATION" />
          <div className="bg-white border-[0.5px] border-[var(--color-border-gray)] hover:border-[var(--color-primary-lime)] rounded-xl p-6 md:p-8 flex flex-col md:flex-row justify-between gap-4 mt-8 transition-all">
             <div>
                <h3 className="font-display text-lg font-medium text-[var(--color-text-near-black)]">B.Tech � Artificial Intelligence & Machine Learning</h3>
                <div className="text-[14px] text-[var(--color-primary-lime)] font-medium mt-1">Indore Institute of Science and Technology, Indore</div>
             </div>
             <div className="shrink-0 flex items-center gap-2 px-3 py-1 bg-[var(--color-bg-light)] rounded-full text-[12px] font-mono text-[var(--color-text-muted)] self-start">
               Sept 2022 � Present
             </div>
          </div>
        </section>

        {/* CONNECT */}
        <section id="connect" className="pt-[100px] pb-[100px] px-6">
          <SectionHeader num="04." title="Let's Connect" watermark="CONNECT" />
          <div className="grid md:grid-cols-2 gap-[72px] items-center">
             <div className="w-full aspect-[3/4] bg-[var(--color-bg-light)] rounded-xl border border-[var(--color-border-gray)] overflow-hidden relative hidden md:block">
                 <div className="absolute inset-0 bg-gradient-to-t from-[var(--color-primary-lime-wash)] to-transparent opacity-30"></div>
                 <div className="w-full h-full flex items-center justify-center font-display text-[var(--color-text-muted)]">Dev Concept/Photo</div>
             </div>
             <div className="flex flex-col gap-8">
                <p className="text-[16px] leading-[1.8] text-[var(--color-text-near-black)]">
                  Open to AI/ML internships, software engineering opportunities, and collaborative technical projects.
                </p>
                <div className="flex flex-col gap-4">
                  <a href="mailto:abhishek13parita25@gmail.com" className="flex items-center gap-4 py-4 border-b border-[var(--color-border-gray)] group cursor-pointer hover:border-[var(--color-primary-lime)] transition-all text-[var(--color-text-muted)] hover:text-[var(--color-primary-lime)]">
                     <Mail className="w-5 h-5"/>
                     <span className="font-medium text-[var(--color-text-near-black)] group-hover:text-[var(--color-primary-lime)]">Email me</span>
                  </a>
                  <a href="https://linkedin.com/in/abhishek-parita-55b24624a/" target="_blank" className="flex items-center gap-4 py-4 border-b border-[var(--color-border-gray)] group cursor-pointer hover:border-[var(--color-primary-lime)] transition-all text-[var(--color-text-muted)] hover:text-[var(--color-primary-lime)]">
                     <Linkedin className="w-5 h-5"/>
                     <span className="font-medium text-[var(--color-text-near-black)] group-hover:text-[var(--color-primary-lime)]">LinkedIn</span>
                  </a>
                  <a href="https://github.com/AbhishekParita" target="_blank" className="flex items-center gap-4 py-4 border-b border-[var(--color-border-gray)] group cursor-pointer hover:border-[var(--color-primary-lime)] transition-all text-[var(--color-text-muted)] hover:text-[var(--color-primary-lime)]">
                     <Github className="w-5 h-5"/>
                     <span className="font-medium text-[var(--color-text-near-black)] group-hover:text-[var(--color-primary-lime)]">GitHub</span>
                  </a>
                  <a href="/Abhishek_Parita_Resume.pdf" className="flex items-center gap-4 py-4 border-b border-[var(--color-border-gray)] group cursor-pointer hover:border-[var(--color-primary-lime)] transition-all text-[var(--color-text-muted)] hover:text-[var(--color-primary-lime)]">
                     <Download className="w-5 h-5"/>
                     <span className="font-medium text-[var(--color-text-near-black)] group-hover:text-[var(--color-primary-lime)]">Resume</span>
                  </a>
                </div>
             </div>
          </div>
        </section>

      </main>

      {/* FOOTER */}
      <footer className="bg-[var(--color-text-near-black)] text-[var(--color-text-muted)] py-12 px-6">
        <div className="max-w-[1200px] mx-auto flex flex-col items-center justify-center gap-6">
          <p className="font-display text-white text-xl">Let's build something intelligent together.</p>
          <div className="w-full h-[1px] bg-[var(--color-border-darker)] max-w-[300px] my-4"></div>
          <p className="italic text-[14px]">"Trained on curiosity. Deployed with intention."</p>
          <p className="text-[12px] font-mono mt-4">� {new Date().getFullYear()} Abhishek <span className="text-[var(--color-primary-lime)]">Parita</span>. All rights reserved.</p>
        </div>
      </footer>
    </div>
  )
}
''')

