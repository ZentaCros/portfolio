"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { FaGithub, FaLinkedin, FaEnvelope, FaExternalLinkAlt, FaTimes, FaPython, FaNodeJs, FaReact, FaDatabase, FaInstagram, FaDiscord } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { SiPytorch, SiPandas, SiTailwindcss, SiNextdotjs } from "react-icons/si";

// --- DATA ---
const researchData = [
  {
    id: "research-1",
    title: "Fourier Domain Adaptation & Evidential DL",
    subtitle: "Deforestation Detection in the Amazon",
    date: "Aug 2025 – Jan 2026",
    company: "Capstone Project 1, GIFT University",
    image: "/images/deforestation.png",
    tags: ["PyTorch", "ConvNeXt", "Domain Adaptation", "EDL"],
    repo: "https://github.com/ZentaCros/convnext-edl-deforestation-amazon",
    bullets: [
      "Developed a cross-domain deforestation detection system replacing expensive adversarial training with parameter-free Fourier Domain Adaptation (FDA).",
      "Integrated Evidential Deep Learning (EDL) for single-pass pixel uncertainty, eliminating the need for costly deep ensembles.",
      "Achieved a +23.3 percentage point F1-score improvement (59.6% vs 36.3%) on within-biome transfer using a lightweight 9.5M parameter ConvNeXt hybrid model."
    ]
  },
  {
    id: "research-2",
    title: "Land Cover Mapping with Foundation Models",
    subtitle: "Geospatial Analysis over Punjab",
    date: "Feb 2026 – Jun 2026",
    company: "Capstone Project 2, GIFT University",
    image: null,
    tags: ["PyTorch", "Prithvi-EO v2", "LoRA", "Sentinel-2"],
    repo: "https://github.com/ZentaCros/prithvi-lulc-punjab",
    liveUrl: "https://greenwatch-dashboard.vercel.app/webapp/index.html",
    bullets: [
      "Fine-tuned the 300M parameter NASA/IBM Prithvi-EO foundation model using Low-Rank Adaptation (LoRA) on Sentinel-2 imagery of Lahore, Pakistan.",
      "Demonstrated superior zero-shot cross-city generalization on unseen data (Gujranwala) compared to U-Net, DeepLabV3+, and SegFormer baselines.",
      "Conducted bi-temporal change detection (2018-2026), quantifying +21.3% urban expansion and 28% vegetation loss."
    ]
  }
];

const projectsData = [
  {
    id: "project-1",
    title: "AskDoc AI (RAG Chatbot)",
    subtitle: "Enterprise Document Q&A",
    date: "2026",
    company: "Personal Project",
    image: "/images/askdoc.png",
    tags: ["FastAPI", "LangChain", "FAISS", "Llama 3"],
    repo: "https://github.com/ZentaCros/askdoc-ai",
    liveUrl: "https://askdoc-ai-pi.vercel.app/",
    bullets: [
      "Engineered a full-stack Retrieval-Augmented Generation (RAG) application allowing users to upload PDFs and query the document context in real-time.",
      "Developed the Python backend using FastAPI and LangChain, implementing FAISS vector databases for efficient semantic search.",
      "Deployed the responsive web interface and backend API to Vercel for live production use."
    ]
  },
  {
    id: "project-2",
    title: "Market Basket Analysis",
    subtitle: "Association Rule Mining",
    date: "2025",
    company: "Academic Project",
    image: "/images/market_basket.png",
    tags: ["Python", "Pandas", "Apriori", "FP-Growth"],
    repo: "",
    bullets: [
      "Performed comprehensive Data Mining on the UCI Online Retail Dataset (540,000+ transactions) to discover hidden purchasing patterns.",
      "Implemented and compared Apriori and FP-Growth algorithms to generate actionable association rules and frequent itemsets.",
      "Optimized algorithm performance for large-scale transactional data to derive data-driven retail strategies."
    ]
  },
  {
    id: "project-3",
    title: "Automated Data Extraction Pipeline",
    subtitle: "E-Commerce Intelligence",
    date: "2025",
    company: "Freelance",
    image: "/images/data_extraction.png",
    tags: ["Node.js", "Playwright", "REST APIs"],
    repo: "",
    bullets: [
      "Built scalable web scrapers for E-Commerce intelligence, bypassing anti-bot mechanisms.",
      "Deployed highly unstructured e-commerce data via robust REST APIs for downstream analytics."
    ]
  },
  {
    id: "project-4",
    title: "Otsu's Thresholding",
    subtitle: "Computer Vision from Scratch",
    date: "2025",
    company: "Academic Project",
    image: null,
    tags: ["Python", "OpenCV", "Numpy"],
    repo: "https://github.com/ZentaCros/otsu-thresholding",
    bullets: [
      "Implementation of Otsu's Method for automatic, adaptive image binarization.",
      "Computes optimal global thresholds iteratively using raw image histograms."
    ]
  }
];

// --- CUSTOM CURSOR ---
function CustomCursor() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const updateMousePosition = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener("mousemove", updateMousePosition);
    return () => window.removeEventListener("mousemove", updateMousePosition);
  }, []);

  return (
    <>
      <motion.div
        className="fixed top-0 left-0 w-4 h-4 bg-indigo-500 rounded-full pointer-events-none z-[9999] mix-blend-screen"
        animate={{ x: mousePosition.x - 8, y: mousePosition.y - 8 }}
        transition={{ type: "spring", stiffness: 1000, damping: 40, mass: 0.1 }}
      />
      <motion.div
        className="fixed top-0 left-0 w-12 h-12 border border-indigo-400/30 rounded-full pointer-events-none z-[9998]"
        animate={{ x: mousePosition.x - 24, y: mousePosition.y - 24 }}
        transition={{ type: "spring", stiffness: 200, damping: 20, mass: 0.5 }}
      />
    </>
  );
}

// --- AMBIENT BACKGROUND ---
function AmbientBackground() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <div className="fixed inset-0 z-[-1] overflow-hidden pointer-events-none bg-grid">
      <motion.div 
        className="absolute w-[600px] h-[600px] rounded-full blur-[120px] bg-indigo-900/20"
        animate={{
          x: mousePosition.x - 300,
          y: mousePosition.y - 300,
        }}
        transition={{ type: "tween", ease: "linear", duration: 0.2 }}
      />
      <div className="absolute top-[-10%] right-[-5%] w-[500px] h-[500px] rounded-full blur-[100px] bg-purple-900/10 animate-pulse" />
      <div className="absolute bottom-[-10%] left-[-10%] w-[600px] h-[600px] rounded-full blur-[120px] bg-blue-900/10" />
    </div>
  );
}

// --- MAIN PAGE ---
export default function Home() {
  const [selectedId, setSelectedId] = useState<string | null>(null);
  const [copied, setCopied] = useState(false);
  
  // Find selected project across both arrays
  const selectedProject = [...researchData, ...projectsData].find(p => p.id === selectedId);

  // Lock scroll when modal is open
  useEffect(() => {
    if (selectedId) document.body.style.overflow = "hidden";
    else document.body.style.overflow = "auto";
  }, [selectedId]);

  return (
    <main className="relative min-h-screen text-slate-200 selection:bg-indigo-500/30 font-sans">
      <CustomCursor />
      <AmbientBackground />

      {/* Two Column Layout Wrapper */}
      <div className="flex flex-col lg:flex-row max-w-7xl mx-auto px-6 py-12 md:px-12 md:py-24 gap-12 lg:gap-24 relative z-10">
        
        {/* LEFT COLUMN (Sticky) */}
        <header className="lg:w-5/12 flex flex-col lg:sticky lg:top-24 h-auto lg:max-h-[calc(100vh-6rem)] relative">
          
          <motion.div 
            layoutId="card-container-socials"
            onClick={() => setSelectedId('socials')}
            initial={{ opacity: 0, scale: 0.8 }} 
            animate={{ opacity: 1, scale: 1 }} 
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="relative w-56 h-72 md:w-64 md:h-[22rem] rounded-3xl overflow-hidden border border-white/10 shadow-[0_0_40px_rgba(99,102,241,0.2)] mb-8 glass cursor-pointer hover:border-indigo-500/50 transition-colors group"
          >
            <Image src="/profile.jpg" alt="Muhammad Hamza Azeem" fill className="object-cover group-hover:scale-105 transition-transform duration-500" unoptimized />
            <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 bg-black/40 transition-opacity duration-300">
              <span className="bg-indigo-600 text-white px-4 py-2 rounded-full font-bold text-sm shadow-lg shadow-indigo-600/30">Connect</span>
            </div>
          </motion.div>
          
          <motion.h1 
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.2 }}
            className="text-4xl md:text-5xl font-extrabold tracking-tight mb-3 text-gradient"
          >
            Muhammad Hamza Azeem
          </motion.h1>
          
          <motion.h2 
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.3 }}
            className="text-lg md:text-xl font-medium text-slate-400 mb-6"
          >
            AI/ML Engineer | Data Scientist
          </motion.h2>

          <motion.p 
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.4 }}
            className="text-slate-500 mb-8 max-w-sm leading-relaxed"
          >
            I build scalable AI solutions and state-of-the-art machine learning models to solve complex real-world problems, specializing in Computer Vision and Applied AI.
          </motion.p>
          
          {/* Prominent Social Links */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.45 }}
            className="flex items-center gap-5 mb-10"
          >
            <a href="https://github.com/ZentaCros" target="_blank" rel="noreferrer" className="w-12 h-12 rounded-full glass flex items-center justify-center text-slate-300 hover:text-white hover:bg-white/10 hover:scale-110 transition-all shadow-lg shadow-black/20 border border-white/10 hover:border-white/30">
              <span className="sr-only">GitHub</span>
              <FaGithub className="text-2xl" />
            </a>
            <a href="https://www.linkedin.com/in/hamza-azeem-data-scientist-86a99925a/" target="_blank" rel="noreferrer" className="w-12 h-12 rounded-full glass flex items-center justify-center text-slate-300 hover:text-blue-400 hover:bg-blue-400/10 hover:scale-110 transition-all shadow-lg shadow-black/20 border border-white/10 hover:border-blue-400/30">
              <span className="sr-only">LinkedIn</span>
              <FaLinkedin className="text-2xl" />
            </a>
            <button 
              onClick={() => {
                navigator.clipboard.writeText("hmzabizi602@gmail.com");
                setCopied(true);
                setTimeout(() => setCopied(false), 2000);
              }}
              className="relative w-12 h-12 rounded-full glass flex items-center justify-center text-slate-300 hover:text-rose-400 hover:bg-rose-400/10 hover:scale-110 transition-all shadow-lg shadow-black/20 border border-white/10 hover:border-rose-400/30"
            >
              <span className="sr-only">Email</span>
              <FaEnvelope className="text-2xl" />
              <AnimatePresence>
                {copied && (
                  <motion.div 
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 10 }}
                    className="absolute -top-10 left-1/2 -translate-x-1/2 px-3 py-1 bg-rose-500 text-white text-xs font-bold rounded-lg whitespace-nowrap shadow-lg shadow-rose-500/30"
                  >
                    Copied!
                  </motion.div>
                )}
              </AnimatePresence>
            </button>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.5 }}
            className="mb-10 flex"
          >
            <a href="/resume.pdf" target="_blank" rel="noreferrer" className="inline-flex items-center justify-center px-6 py-2.5 bg-indigo-600/10 hover:bg-indigo-600/20 text-indigo-300 font-bold rounded-lg border border-indigo-500/30 hover:border-indigo-500/60 transition-all shadow-[0_0_15px_rgba(79,70,229,0.15)] hover:shadow-[0_0_25px_rgba(79,70,229,0.3)]">
              View My Resume 📄
            </a>
          </motion.div>
        </header>

        {/* RIGHT COLUMN (Scrolling) */}
        <main className="lg:w-7/12 flex flex-col space-y-32 py-10">

          {/* Research Section */}
          <section id="research">
            <motion.h3 
              initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}
              className="text-sm font-bold mb-10 text-slate-500 uppercase tracking-[0.2em]"
            >
              My Research
            </motion.h3>
            
            <div className="flex flex-col space-y-12">
              {researchData.map((project) => (
                <motion.div 
                  key={project.id}
                  layoutId={`card-container-${project.id}`}
                  onClick={() => setSelectedId(project.id)}
                  className="group relative cursor-pointer"
                >
                  <div className="absolute -inset-4 rounded-2xl bg-white/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-lg" />
                  <div className="relative glass-card p-6 md:p-8 rounded-2xl overflow-hidden hover:border-indigo-500/30 transition-all duration-300">
                    <div className="flex justify-between items-start mb-4">
                      <motion.h4 layoutId={`title-${project.id}`} className="text-xl font-bold text-slate-200 group-hover:text-indigo-400 transition-colors">
                        {project.title}
                      </motion.h4>
                      <FaExternalLinkAlt className="text-slate-600 group-hover:text-indigo-400 transition-colors opacity-0 group-hover:opacity-100" />
                    </div>
                    <motion.p layoutId={`subtitle-${project.id}`} className="text-slate-400 text-sm mb-6 font-medium">
                      {project.company} &bull; {project.date}
                    </motion.p>
                    <div className="flex flex-wrap gap-2">
                      {project.tags.map((tag) => (
                        <span key={tag} className="text-xs font-medium px-3 py-1 bg-indigo-500/10 text-indigo-300 rounded-full border border-indigo-500/20">
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </section>

          {/* Projects Section */}
          <section id="projects">
            <motion.h3 
              initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}
              className="text-sm font-bold mb-10 text-slate-500 uppercase tracking-[0.2em]"
            >
              Selected Projects
            </motion.h3>
            
            <div className="flex flex-col space-y-12">
              {projectsData.map((project) => (
                <motion.div 
                  key={project.id}
                  layoutId={`card-container-${project.id}`}
                  onClick={() => setSelectedId(project.id)}
                  className="group relative cursor-pointer"
                >
                  <div className="absolute -inset-4 rounded-2xl bg-white/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-lg" />
                  <div className="relative glass-card p-6 md:p-8 rounded-2xl overflow-hidden hover:border-indigo-500/30 transition-all duration-300">
                    <div className="flex justify-between items-start mb-4">
                      <motion.h4 layoutId={`title-${project.id}`} className="text-xl font-bold text-slate-200 group-hover:text-indigo-400 transition-colors">
                        {project.title}
                      </motion.h4>
                      <FaExternalLinkAlt className="text-slate-600 group-hover:text-indigo-400 transition-colors opacity-0 group-hover:opacity-100" />
                    </div>
                    <motion.p layoutId={`subtitle-${project.id}`} className="text-slate-400 text-sm mb-6 font-medium">
                      {project.company} &bull; {project.date}
                    </motion.p>
                    <div className="flex flex-wrap gap-2">
                      {project.tags.map((tag) => (
                        <span key={tag} className="text-xs font-medium px-3 py-1 bg-indigo-500/10 text-indigo-300 rounded-full border border-indigo-500/20">
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </section>

          {/* Footer */}
          <footer className="pt-20 pb-10 border-t border-white/5">
            <p className="text-slate-500 text-sm">
              Designed & Built with <span className="text-indigo-400">Next.js</span>, <span className="text-indigo-400">Tailwind CSS</span> & <span className="text-indigo-400">Framer Motion</span>.
              <br/><br/>
              &copy; {new Date().getFullYear()} Muhammad Hamza Azeem
            </p>
          </footer>

        </main>
      </div>

      {/* --- CINEMATIC MODAL --- */}
      <AnimatePresence>
        {selectedId && (
          <>
            {/* Dark Overlay */}
            <motion.div 
              initial={{ opacity: 0 }} 
              animate={{ opacity: 1 }} 
              exit={{ opacity: 0 }} 
              onClick={() => setSelectedId(null)}
              className="fixed inset-0 bg-black/60 backdrop-blur-sm z-[110]"
            />
            
            {/* Modal Content */}
            <div className="fixed inset-0 flex items-center justify-center z-[120] p-4 md:p-12 pointer-events-none">
              <motion.div 
                layoutId={`card-container-${selectedId}`}
                className="w-full max-w-4xl max-h-[90vh] glass-modal rounded-3xl overflow-y-auto pointer-events-auto relative shadow-2xl"
              >
                {/* Close Button */}
                <button 
                  onClick={() => setSelectedId(null)}
                  className="absolute top-6 right-6 w-10 h-10 glass rounded-full flex items-center justify-center text-slate-300 hover:text-white hover:bg-white/10 transition-colors z-10"
                >
                  <FaTimes />
                </button>

                {selectedId === 'socials' ? (
                  // --- SOCIALS MODAL ---
                  <div className="p-8 md:p-12 flex flex-col md:flex-row items-center md:items-stretch gap-10 md:gap-16">
                    
                    {/* LEFT: Photo */}
                    <div className="relative w-56 h-72 md:w-80 md:h-auto rounded-3xl overflow-hidden border-4 border-indigo-500/30 shadow-[0_0_50px_rgba(99,102,241,0.3)] shrink-0">
                      <Image src="/profile.jpg" alt="Hamza Azeem" fill className="object-cover" unoptimized />
                    </div>
                    
                    {/* RIGHT: Content & Links */}
                    <div className="flex flex-col justify-center flex-1 text-center md:text-left py-4">
                      <motion.h4 layoutId="title-socials" className="text-3xl md:text-5xl font-extrabold text-white mb-4">
                        Let's Connect
                      </motion.h4>
                      
                      <p className="text-slate-400 text-lg mb-10 max-w-lg mx-auto md:mx-0">
                        Feel free to reach out to me on any of my social platforms. I'm always open to discussing AI, new projects, and creative ideas!
                      </p>
                      
                      <div className="flex flex-col gap-4 w-full max-w-md mx-auto md:mx-0">
                        <a href="https://instagram.com/hamza_azeem_rjpt" target="_blank" rel="noreferrer" className="flex items-center gap-6 p-4 md:p-5 glass-card rounded-2xl hover:bg-white/5 hover:translate-x-2 transition-all border border-pink-500/20 hover:border-pink-500/50 hover:shadow-[0_0_20px_rgba(236,72,153,0.2)]">
                          <FaInstagram className="text-4xl text-pink-500" />
                          <div className="text-left">
                            <div className="font-bold text-white mb-0.5 text-lg">Instagram</div>
                            <div className="text-slate-400">@hamza_azeem_rjpt</div>
                          </div>
                        </a>
                        
                        <a href="https://twitter.com/zenta_cross" target="_blank" rel="noreferrer" className="flex items-center gap-6 p-4 md:p-5 glass-card rounded-2xl hover:bg-white/5 hover:translate-x-2 transition-all border border-neutral-400/20 hover:border-neutral-400/50 hover:shadow-[0_0_20px_rgba(255,255,255,0.1)]">
                          <FaXTwitter className="text-4xl text-neutral-300" />
                          <div className="text-left">
                            <div className="font-bold text-white mb-0.5 text-lg">X (Twitter)</div>
                            <div className="text-slate-400">@zenta_cross</div>
                          </div>
                        </a>

                        <a href="https://discord.com/users/zentacross" target="_blank" rel="noreferrer" className="flex items-center gap-6 p-4 md:p-5 glass-card rounded-2xl hover:bg-white/5 hover:translate-x-2 transition-all border border-indigo-400/20 hover:border-indigo-400/50 hover:shadow-[0_0_20px_rgba(129,140,248,0.2)]">
                          <FaDiscord className="text-4xl text-indigo-400" />
                          <div className="text-left">
                            <div className="font-bold text-white mb-0.5 text-lg">Discord</div>
                            <div className="text-slate-400">@zentacross</div>
                          </div>
                        </a>
                      </div>
                    </div>
                  </div>
                ) : selectedProject && (
                  // --- PROJECT MODAL ---
                  <>
                    {/* Optional High-Res Image Header */}
                    {selectedProject.image && (
                      <div className="relative w-full h-64 md:h-80 bg-slate-900">
                        <Image src={selectedProject.image} alt={selectedProject.title} fill className="object-cover opacity-80" unoptimized />
                        <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent" />
                      </div>
                    )}

                <div className={`p-8 md:p-12 ${selectedProject.image ? 'pt-0 -mt-12 relative z-10' : ''}`}>
                  
                  <motion.h4 layoutId={`title-${selectedProject.id}`} className="text-3xl md:text-4xl font-extrabold text-white mb-2">
                    {selectedProject.title}
                  </motion.h4>
                  
                  <motion.p layoutId={`subtitle-${selectedProject.id}`} className="text-indigo-400 text-lg mb-8 font-medium">
                    {selectedProject.subtitle}
                  </motion.p>

                  <div className="flex flex-wrap gap-3 mb-10">
                    {selectedProject.tags.map((tag) => (
                      <span key={tag} className="text-sm font-semibold px-4 py-1.5 bg-white/5 text-slate-200 rounded-full border border-white/10">
                        {tag}
                      </span>
                    ))}
                  </div>

                  <div className="space-y-6 text-slate-300 leading-relaxed">
                    <h5 className="text-xs font-bold text-slate-500 uppercase tracking-widest border-b border-white/10 pb-2">Key Accomplishments</h5>
                    <ul className="list-none space-y-4">
                      {selectedProject.bullets.map((bullet, idx) => (
                        <li key={idx} className="flex items-start">
                          <span className="text-indigo-500 mr-4 mt-1">▹</span>
                          <span>{bullet}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="mt-12 pt-8 border-t border-white/10 flex flex-wrap gap-4">
                    {selectedProject.repo && (
                      <a 
                        href={selectedProject.repo} 
                        target="_blank" 
                        rel="noreferrer" 
                        className="inline-flex items-center gap-3 px-6 py-3 bg-indigo-600 hover:bg-indigo-500 text-white font-bold rounded-xl transition-all shadow-[0_0_20px_rgba(79,70,229,0.3)] hover:shadow-[0_0_30px_rgba(79,70,229,0.5)] hover:-translate-y-1"
                      >
                        <FaGithub className="text-xl" /> View Source Code
                      </a>
                    )}
                    {(selectedProject as any).liveUrl && (
                      <a 
                        href={(selectedProject as any).liveUrl} 
                        target="_blank" 
                        rel="noreferrer" 
                        className="inline-flex items-center gap-3 px-6 py-3 bg-white/10 hover:bg-white/20 text-white font-bold rounded-xl border border-white/10 transition-all hover:shadow-[0_0_20px_rgba(255,255,255,0.1)] hover:-translate-y-1"
                      >
                        <FaExternalLinkAlt className="text-lg" /> Live Demo
                      </a>
                    )}
                  </div>

                </div>
                  </>
                )}
              </motion.div>
            </div>
          </>
        )}
      </AnimatePresence>
    </main>
  );
}
