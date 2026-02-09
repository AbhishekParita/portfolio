"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import { Github, Linkedin, Mail, Phone, ExternalLink, ChevronDown, Activity } from "lucide-react"

const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 }
}

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
}

// Floating particle/data node effect for AIML background
const FloatingParticles = () => {
  const particles = Array.from({ length: 20 }, (_, i) => ({
    id: i,
    left: (i * 5.3) % 100,
    top: (i * 7.1) % 100,
    x: ((i % 3) - 1) * 50,
    y: ((i % 5) - 2) * 40,
    duration: 15 + (i % 10),
  }))

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden">
      {particles.map((particle) => (
        <motion.div
          key={particle.id}
          className="absolute w-1 h-1 bg-primary/20 rounded-full"
          style={{
            left: `${particle.left}%`,
            top: `${particle.top}%`,
          }}
          animate={{
            x: [0, particle.x, 0],
            y: [0, particle.y, 0],
          }}
          transition={{
            duration: particle.duration,
            repeat: Infinity,
            repeatType: "reverse",
          }}
        />
      ))}
    </div>
  )
}

export default function Portfolio() {
  return (
    <main className="min-h-screen bg-background relative">
      {/* Floating Particles Background */}
      <FloatingParticles />
      
      {/* Gradient Overlays for depth */}
      <div className="fixed inset-0 pointer-events-none">
        <div className="absolute top-0 left-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute top-1/4 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-1/3 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
      </div>
      {/* Navigation */}
      <motion.nav 
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border"
      >
        <div className="max-w-5xl mx-auto px-6 py-4 flex items-center justify-between">
          <a href="#" className="font-mono text-sm text-primary font-semibold hover:opacity-80 transition-opacity">Abhishek Parita</a>
          <div className="flex items-center gap-6">
            <a href="#about" className="text-sm text-muted-foreground hover:text-foreground transition-colors">About</a>
            <a href="#experience" className="text-sm text-muted-foreground hover:text-foreground transition-colors">Experience</a>
            <a href="#projects" className="text-sm text-muted-foreground hover:text-foreground transition-colors">Projects</a>
            <a href="#skills" className="text-sm text-muted-foreground hover:text-foreground transition-colors">Skills</a>
          </div>
        </div>
      </motion.nav>

      {/* Hero Section */}
      <section className="min-h-screen flex flex-col items-center justify-center px-6 pt-20">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <div className="relative w-48 h-48 mx-auto mb-8 rounded-full overflow-hidden border-4 border-primary/20 shadow-2xl">
            {/* Cobalt Blue Glow */}
            <div className="absolute inset-0 -z-10 blur-3xl scale-125 bg-[#2563EB] opacity-20"></div>
            <Image
              src="/images/profile.jpeg"
              alt="Abhishek Parita"
              fill
              className="object-cover"
              priority
              unoptimized={true}
            />
          </div>
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="text-4xl md:text-5xl font-semibold text-foreground mb-4 text-balance"
          >
            Abhishek Parita
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.5 }}
            className="text-xl font-semibold text-primary mb-2"
          >
            Architecting Resilient Intelligence
          </motion.p>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.35, duration: 0.5 }}
            className="text-base font-mono text-muted-foreground mb-6"
          >
            AIML Developer
          </motion.p>
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.5 }}
            className="flex flex-wrap items-center justify-center gap-3"
          >
            <a 
              href="mailto:abhishek13parita25@gmail.com" 
              className="flex items-center gap-2 px-4 py-2 rounded-lg border border-border hover:border-primary hover:bg-primary/5 hover:text-primary transition-all"
            >
              <Mail className="w-4 h-4" />
              <span className="text-sm font-mono">Email</span>
            </a>
            <a 
              href="tel:+919752895880" 
              className="flex items-center gap-2 px-4 py-2 rounded-lg border border-border hover:border-primary hover:bg-primary/5 hover:text-primary transition-all"
            >
              <Phone className="w-4 h-4" />
              <span className="text-sm font-mono">+91 9752895880</span>
            </a>
            <a 
              href="https://www.linkedin.com/in/abhishek-parita-55b24624a/" 
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-4 py-2 rounded-lg border border-border hover:border-primary hover:bg-primary/5 hover:text-primary transition-all"
            >
              <Linkedin className="w-4 h-4" />
              <span className="text-sm font-mono">LinkedIn</span>
            </a>
            <a 
              href="https://github.com/AbhishekParita" 
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-4 py-2 rounded-lg border border-border hover:border-primary hover:bg-primary/5 hover:text-primary transition-all"
            >
              <Github className="w-4 h-4" />
              <span className="text-sm font-mono">GitHub</span>
            </a>
          </motion.div>
        </motion.div>
        
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8, duration: 0.5 }}
          className="absolute bottom-8"
        >
          <a href="#about" className="text-muted-foreground hover:text-primary transition-colors">
            <ChevronDown className="w-6 h-6 animate-bounce" />
          </a>
        </motion.div>
      </section>

      {/* About Section */}
      <section id="about" className="py-16 px-6">
        <div className="max-w-3xl mx-auto">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeInUp}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-sm font-mono text-primary mb-4 uppercase tracking-wider">Philosophy</h2>
            <div className="prose prose-lg text-foreground/90 leading-relaxed">
              <p className="text-lg text-muted-foreground">
                I am an AIML Developer who views machine learning as a living, evolving system rather than a static destination. My thought process is rooted in <span className="text-primary font-medium">observability</span> architecting resilient systems that identify their own failures before they happen by specializing in <span className="text-primary font-medium">anomaly detection</span> and <span className="text-primary font-medium">model drift</span>. I don&apos;t just train algorithms, I build immune systems for data. My goal is to bridge the gap between experimental code and production grade reliability, creating intelligence that is as robust as it is insightful.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Experience & Education Section */}
      <section id="experience" className="py-24 px-6 bg-card">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
          >
            <motion.h2 variants={fadeInUp} className="text-sm font-mono text-primary mb-12 uppercase tracking-wider">Experience & Education</motion.h2>
            
            <div className="grid md:grid-cols-2 gap-8">
              {/* Experience */}
              <motion.div variants={fadeInUp} className="border border-border rounded-lg p-6 bg-background">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                    <span className="text-primary font-mono text-sm font-bold">AT</span>
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground">AIML Developer Intern</h3>
                    <p className="text-sm text-muted-foreground">Advantal Technology, Indore</p>
                  </div>
                </div>
                <p className="text-xs font-mono text-primary mb-3">Nov 2025 – Present</p>
                <ul className="text-sm text-muted-foreground space-y-2">
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-1">•</span>
                    Designed anomaly detection systems using LSTM Autoencoder, Isolation Forest
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-1">•</span>
                    Implemented model drift detection and retraining systems
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-1">•</span>
                    Developed end-to-end ML pipelines for large-scale analysis
                  </li>
                </ul>
              </motion.div>

              {/* Education */}
              <motion.div variants={fadeInUp} className="border border-border rounded-lg p-6 bg-background">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                    <span className="text-primary font-mono text-sm font-bold">IIST</span>
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground">B.Tech in AI & ML</h3>
                    <p className="text-sm text-muted-foreground">Indore Institute of Science and Technology</p>
                  </div>
                </div>
                <p className="text-xs font-mono text-primary mb-3">Sept 2022 – Present</p>
                <div className="mt-6 pt-4 border-t border-border">
                  <h4 className="text-sm font-medium text-foreground mb-2">Certifications</h4>
                  <ul className="text-sm text-muted-foreground space-y-1">
                    <li>• Udemy - Complete DS, ML, DL, NLP Bootcamp</li>
                    <li>• GeeksforGeeks - Data Science BootCamp</li>
                  </ul>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-24 px-6">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
          >
            <motion.h2 variants={fadeInUp} className="text-sm font-mono text-primary mb-12 uppercase tracking-wider">Featured Projects</motion.h2>
            
            <div className="space-y-8">
              {/* Project 1 - Credit Scoring System */}
              <motion.div 
                variants={fadeInUp}
                className="border border-border rounded-lg p-6 hover:border-primary/50 transition-colors bg-card relative overflow-hidden"
              >
                {/* Static credit/financial icon */}
                <div className="absolute top-4 right-4 opacity-10">
                  <svg width="100" height="100" viewBox="0 0 100 100" className="text-primary">
                    <rect x="20" y="35" width="60" height="35" rx="4" stroke="currentColor" strokeWidth="2.5" fill="none" />
                    <line x1="20" y1="45" x2="80" y2="45" stroke="currentColor" strokeWidth="2.5" />
                    <circle cx="35" cy="57" r="3" fill="currentColor" />
                    <circle cx="45" cy="57" r="3" fill="currentColor" />
                    <circle cx="55" cy="57" r="3" fill="currentColor" />
                    <circle cx="65" cy="57" r="3" fill="currentColor" />
                    <path d="M 25 28 L 30 20 L 35 28" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" />
                    <path d="M 65 28 L 70 20 L 75 28" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </div>
                <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-4">
                  <h3 className="text-xl font-semibold text-foreground">Credit Scoring System with Explainability</h3>
                  <a 
                    href="https://github.com/AbhishekParita/Credit-Scoring-System-with-Explainability"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-2 px-4 py-2.5 text-sm text-primary hover:bg-primary/5 border border-border hover:border-primary rounded-lg font-mono transition-all cursor-pointer select-none whitespace-nowrap"
                  >
                    <Github className="w-4 h-4 pointer-events-none" />
                    <span className="pointer-events-none">View Code</span>
                    <ExternalLink className="w-3 h-3 pointer-events-none" />
                  </a>
                </div>
                <p className="text-muted-foreground mb-4">
                  Production-style ML system for predicting credit default risk with full pipeline from data processing to API deployment, featuring explainability, fairness analysis, and business profit simulation.
                </p>
                <ul className="text-sm text-muted-foreground space-y-2 mb-4">
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-1">•</span>
                    Trained <span className="text-primary font-semibold">XGBoost model</span> with calibrated probabilities and custom <span className="text-primary font-semibold">24 engineered financial features</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-1">•</span>
                    Implemented explainability using SHAP for per-user and global model interpretation
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-1">•</span>
                    Performed fairness & bias analysis with threshold optimization and cost-sensitive business profit simulation
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-1">•</span>
                    Deployed prediction and explainability endpoints with drift detection monitoring
                  </li>
                </ul>
                <div className="flex flex-wrap gap-2">
                  <span className="px-3 py-1 text-xs font-mono bg-primary/10 text-primary rounded-full">XGBoost</span>
                  <span className="px-3 py-1 text-xs font-mono bg-primary/10 text-primary rounded-full">SHAP</span>
                  <span className="px-3 py-1 text-xs font-mono bg-primary/10 text-primary rounded-full">FastAPI</span>
                  <span className="px-3 py-1 text-xs font-mono bg-primary/10 text-primary rounded-full">Scikit-learn</span>
                </div>
              </motion.div>

              {/* Project 2 - Model Drift Detection */}
              <motion.div 
                variants={fadeInUp}
                className="border border-border rounded-lg p-6 hover:border-primary/50 transition-colors bg-card relative overflow-hidden"
              >
                {/* Static chart icon */}
                <div className="absolute top-4 right-4 opacity-10">
                  <svg width="120" height="80" viewBox="0 0 120 80" className="text-primary">
                    <path d="M 10 60 Q 30 20, 50 40 T 90 30 L 110 50" stroke="currentColor" strokeWidth="2" fill="none" />
                    <circle cx="10" cy="60" r="3" fill="currentColor" />
                    <circle cx="50" cy="40" r="3" fill="currentColor" />
                    <circle cx="90" cy="30" r="3" fill="currentColor" />
                    <circle cx="110" cy="50" r="3" fill="currentColor" />
                  </svg>
                </div>
                <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-4">
                  <div className="flex items-start gap-3">
                    <h3 className="text-xl font-semibold text-foreground">Adaptive ML Model Monitoring & Drift Detection</h3>
                    <div className="flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/30">
                      <Activity className="w-3 h-3 text-primary animate-pulse" />
                      <span className="text-xs font-mono text-primary font-semibold">Active</span>
                    </div>
                  </div>
                  <a 
                    href="https://github.com/AbhishekParita/ML-Model-Drift-Failure-Detection-System"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-2 px-4 py-2.5 text-sm text-primary hover:bg-primary/5 border border-border hover:border-primary rounded-lg font-mono transition-all cursor-pointer select-none whitespace-nowrap"
                  >
                    <Github className="w-4 h-4 pointer-events-none" />
                    <span className="pointer-events-none">View Code</span>
                    <ExternalLink className="w-3 h-3 pointer-events-none" />
                  </a>
                </div>
                <p className="text-muted-foreground mb-4">
                  Built an ML model observability system to detect silent failures, behavior drift, and data drift in a production fraud detection pipeline without labels.
                </p>
                <ul className="text-sm text-muted-foreground space-y-2 mb-4">
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-1">•</span>
                    Monitored prediction behavior using entropy, rolling statistics, and risk-ratio thresholds
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-1">•</span>
                    Implemented automated drift alerts using KS-test-based feature monitoring
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-1">•</span>
                    Built FastAPI endpoints and a multi-page monitoring dashboard
                  </li>
                </ul>
                <div className="flex flex-wrap gap-2">
                  <span className="px-3 py-1 text-xs font-mono bg-primary/10 text-primary rounded-full">Python</span>
                  <span className="px-3 py-1 text-xs font-mono bg-primary/10 text-primary rounded-full">FastAPI</span>
                  <span className="px-3 py-1 text-xs font-mono bg-primary/10 text-primary rounded-full">KS-test</span>
                </div>
              </motion.div>

              {/* Project 3 - BGP Anomaly Detection */}
              <motion.div 
                variants={fadeInUp}
                className="border border-border rounded-lg p-6 hover:border-primary/50 transition-colors bg-card relative overflow-hidden"
              >
                {/* Static network icon */}
                <div className="absolute top-4 right-4 opacity-10">
                  <svg width="120" height="80" viewBox="0 0 120 80" className="text-primary">
                    <circle cx="30" cy="30" r="8" fill="currentColor" />
                    <circle cx="60" cy="50" r="8" fill="currentColor" />
                    <circle cx="90" cy="30" r="8" fill="currentColor" />
                    <circle cx="60" cy="10" r="6" fill="currentColor" opacity="0.7" />
                    <circle cx="90" cy="60" r="6" fill="currentColor" opacity="0.7" />
                    <line x1="30" y1="30" x2="60" y2="50" stroke="currentColor" strokeWidth="2" opacity="0.6" />
                    <line x1="60" y1="50" x2="90" y2="30" stroke="currentColor" strokeWidth="2" opacity="0.6" />
                    <line x1="30" y1="30" x2="60" y2="10" stroke="currentColor" strokeWidth="1.5" opacity="0.4" />
                    <line x1="90" y1="30" x2="60" y2="10" stroke="currentColor" strokeWidth="1.5" opacity="0.4" />
                    <line x1="60" y1="50" x2="90" y2="60" stroke="currentColor" strokeWidth="1.5" opacity="0.4" />
                  </svg>
                </div>
                <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-4">
                  <div className="flex items-start gap-3">
                    <h3 className="text-xl font-semibold text-foreground">Real-Time BGP Anomaly Detection System</h3>
                    <div className="flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/30">
                      <Activity className="w-3 h-3 text-primary animate-pulse" />
                      <span className="text-xs font-mono text-primary font-semibold">Active</span>
                    </div>
                  </div>
                  <a 
                    href="https://github.com/AbhishekParita/BGP-anomaly-detection"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-2 px-4 py-2.5 text-sm text-primary hover:bg-primary/5 border border-border hover:border-primary rounded-lg font-mono transition-all cursor-pointer select-none whitespace-nowrap"
                  >
                    <Github className="w-4 h-4 pointer-events-none" />
                    <span className="pointer-events-none">View Code</span>
                    <ExternalLink className="w-3 h-3 pointer-events-none" />
                  </a>
                </div>
                <p className="text-muted-foreground mb-4">
                  Intelligent real-time BGP routing anomaly detection using ensemble ML. Monitors live BGP updates to detect route hijacks, leaks, and network instability.
                </p>
                <ul className="text-sm text-muted-foreground space-y-2 mb-4">
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-1">•</span>
                    Multi-model ensemble combining <span className="text-primary font-semibold">LSTM Autoencoder</span>, <span className="text-primary font-semibold">Isolation Forest</span>, and rule-based heuristics
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-1">•</span>
                    Real-time processing of live BGP data streams from RIPE RIS with microservices architecture
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-1">•</span>
                    Built-in drift monitoring and automated model retraining pipeline with interactive dashboard
                  </li>
                </ul>
                <div className="flex flex-wrap gap-2">
                  <span className="px-3 py-1 text-xs font-mono bg-primary/10 text-primary rounded-full">LSTM</span>
                  <span className="px-3 py-1 text-xs font-mono bg-primary/10 text-primary rounded-full">Isolation Forest</span>
                  <span className="px-3 py-1 text-xs font-mono bg-primary/10 text-primary rounded-full">FastAPI</span>
                  <span className="px-3 py-1 text-xs font-mono bg-primary/10 text-primary rounded-full">PostgreSQL</span>
                  <span className="px-3 py-1 text-xs font-mono bg-primary/10 text-primary rounded-full">TimescaleDB</span>
                </div>
              </motion.div>

              {/* Project 3 - Fraud Detection */}
              <motion.div 
                variants={fadeInUp}
                className="border border-border rounded-lg p-6 hover:border-primary/50 transition-colors bg-card relative overflow-hidden"
              >
                {/* Static shield/security icon */}
                <div className="absolute top-4 right-4 opacity-10">
                  <svg width="100" height="100" viewBox="0 0 100 100" className="text-primary">
                    <path
                      d="M50 10 C70 10, 80 20, 80 30 L80 50 C80 70, 65 85, 50 90 C35 85, 20 70, 20 50 L20 30 C20 20, 30 10, 50 10 Z"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="3"
                    />
                    <path
                      d="M 35 50 L 45 60 L 65 40"
                      stroke="currentColor"
                      strokeWidth="3"
                      fill="none"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
                <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-4">
                  <h3 className="text-xl font-semibold text-foreground">Large-Scale Financial Fraud Detection</h3>
                  <a 
                    href="https://github.com/AbhishekParita/Fraud_Detection-using-XGboost"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-2 px-4 py-2.5 text-sm text-primary hover:bg-primary/5 border border-border hover:border-primary rounded-lg font-mono transition-all cursor-pointer select-none whitespace-nowrap"
                  >
                    <Github className="w-4 h-4 pointer-events-none" />
                    <span className="pointer-events-none">View Code</span>
                    <ExternalLink className="w-3 h-3 pointer-events-none" />
                  </a>
                </div>
                <p className="text-muted-foreground mb-4">
                  Developed a fraud detection system on <span className="text-primary font-semibold">6.3M+ transactions</span> to detect rare fraud cases under extreme class imbalance (0.13%).
                </p>
                <ul className="text-sm text-muted-foreground space-y-2 mb-4">
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-1">•</span>
                    Achieved <span className="text-[#2563EB] font-bold text-base">98.3% recall</span> and <span className="text-[#2563EB] font-bold text-base">PR-AUC of 0.865</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-1">•</span>
                    Implemented cost-sensitive learning where false negatives are critical
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-1">•</span>
                    Built end-to-end ML workflow with preprocessing and feature engineering
                  </li>
                </ul>
                <div className="flex flex-wrap gap-2">
                  <span className="px-3 py-1 text-xs font-mono bg-primary/10 text-primary rounded-full">Python</span>
                  <span className="px-3 py-1 text-xs font-mono bg-primary/10 text-primary rounded-full">XGBoost</span>
                  <span className="px-3 py-1 text-xs font-mono bg-primary/10 text-primary rounded-full">Scikit-learn</span>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-24 px-6 bg-card">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
          >
            <motion.h2 variants={fadeInUp} className="text-sm font-mono text-primary mb-12 uppercase tracking-wider">Technical Stack</motion.h2>
            
            <div className="grid md:grid-cols-2 gap-8">
              <motion.div variants={fadeInUp} className="space-y-4">
                <h3 className="text-lg font-semibold text-foreground flex items-center gap-2">
                  <span className="w-2 h-2 bg-primary rounded-full"></span>
                  Core Engines
                </h3>
                <div className="flex flex-wrap gap-3">
                  {["Python & SQL", "TensorFlow & Keras", "Scikit-learn & XGBoost"].map((skill) => (
                    <span 
                      key={skill}
                      className="px-4 py-2 text-sm font-mono border border-border rounded-lg hover:border-primary hover:text-primary transition-colors bg-background"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </motion.div>

              <motion.div variants={fadeInUp} className="space-y-4">
                <h3 className="text-lg font-semibold text-foreground flex items-center gap-2">
                  <span className="w-2 h-2 bg-primary rounded-full"></span>
                  Observability & Deployment
                </h3>
                <div className="flex flex-wrap gap-3">
                  {["FastAPI", "NumPy & Pandas", "Matplotlib & Seaborn"].map((skill) => (
                    <span 
                      key={skill}
                      className="px-4 py-2 text-sm font-mono border border-border rounded-lg hover:border-primary hover:text-primary transition-colors bg-background"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </motion.div>
            </div>

            <motion.div variants={fadeInUp} className="mt-12 space-y-4">
              <h3 className="text-lg font-semibold text-foreground flex items-center gap-2">
                <span className="w-2 h-2 bg-primary rounded-full"></span>
                Specializations
              </h3>
              <div className="flex flex-wrap gap-3">
                {["Anomaly Detection", "Model Drift & Observability", "Deep Learning & NLP"].map((skill) => (
                  <span 
                    key={skill}
                    className="px-4 py-2 text-sm font-mono bg-primary/5 border border-primary/20 rounded-lg text-primary"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-6 border-t border-border">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-sm text-muted-foreground mb-4">
            Let&apos;s build something intelligent together
          </p>
          <div className="flex items-center justify-center gap-4">
            <a 
              href="mailto:abhishek13parita25@gmail.com"
              className="text-sm text-primary hover:underline font-mono"
            >
              abhishek13parita25@gmail.com
            </a>
            <span className="text-muted-foreground">|</span>
            <a 
              href="tel:+919752895880"
              className="text-sm text-primary hover:underline font-mono"
            >
              +91 9752895880
            </a>
          </div>
          <p className="text-xs text-muted-foreground mt-8">
            © 2026 Abhishek Parita. All rights reserved.
          </p>
        </div>
      </footer>
    </main>
  )
}
