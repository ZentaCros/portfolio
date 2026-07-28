"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { FaGithub, FaLinkedin, FaEnvelope, FaExternalLinkAlt, FaTimes, FaPython, FaNodeJs, FaReact, FaDatabase } from "react-icons/fa";
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
    image: null,
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
    image: null,
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
        className="fixed top-0 left-0 w-4 h-4 bg-indigo-500 rounded-full pointer-events-none z-[100] mix-blend-screen"
        animate={{ x: mousePosition.x - 8, y: mousePosition.y - 8 }}
        transition={{ type: "spring", stiffness: 1000, damping: 40, mass: 0.1 }}
      />
      <motion.div
        className="fixed top-0 left-0 w-12 h-12 border border-indigo-400/30 rounded-full pointer-events-none z-[99]"
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
            initial={{ opacity: 0, scale: 0.8 }} 
            animate={{ opacity: 1, scale: 1 }} 
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="relative w-40 h-40 md:w-48 md:h-48 rounded-full overflow-hidden border border-white/10 shadow-[0_0_40px_rgba(99,102,241,0.2)] mb-8 glass"
          >
            <Image src="/profile.jpg" alt="Muhammad Hamza Azeem" fill className="object-cover" unoptimized />
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
            className="text-slate-500 mb-10 max-w-sm leading-relaxed"
          >
            I build scalable AI solutions and state-of-the-art machine learning models to solve complex real-world problems, specializing in Computer Vision and Applied AI.
          </motion.p>

          {/* Floating Tech Stack Orbits in Hero */}
          <motion.div 
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1, delay: 0.6 }}
            className="flex flex-wrap gap-4 mb-12"
          >
            {[SiPytorch, FaPython, SiNextdotjs, FaDatabase].map((Icon, idx) => (
              <div key={idx} className="w-10 h-10 rounded-full glass flex items-center justify-center text-slate-400 hover:text-indigo-400 hover:scale-110 transition-all duration-300">
                <Icon className="text-xl" />
              </div>
            ))}
          </motion.div>
          
          {/* Social Links */}
          <motion.div 
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.6, delay: 0.8 }}
            className="flex space-x-6 mt-auto pb-8 lg:pb-0"
          >
            <a href="https://github.com/ZentaCros" target="_blank" rel="noreferrer" className="text-slate-400 hover:text-indigo-400 transition-colors">
              <span className="sr-only">GitHub</span>
              <FaGithub className="text-2xl" />
            </a>
            <a href="https://www.linkedin.com/in/hamza-azeem-data-scientist-86a99925a/" target="_blank" rel="noreferrer" className="text-slate-400 hover:text-indigo-400 transition-colors">
              <span className="sr-only">LinkedIn</span>
              <FaLinkedin className="text-2xl" />
            </a>
            <a href="mailto:hmzabizi602@gmail.com" className="text-slate-400 hover:text-indigo-400 transition-colors">
              <span className="sr-only">Email</span>
              <FaEnvelope className="text-2xl" />
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
        {selectedId && selectedProject && (
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
                layoutId={`card-container-${selectedProject.id}`}
                className="w-full max-w-4xl max-h-[90vh] glass-modal rounded-3xl overflow-y-auto pointer-events-auto relative shadow-2xl"
              >
                {/* Close Button */}
                <button 
                  onClick={() => setSelectedId(null)}
                  className="absolute top-6 right-6 w-10 h-10 glass rounded-full flex items-center justify-center text-slate-300 hover:text-white hover:bg-white/10 transition-colors z-10"
                >
                  <FaTimes />
                </button>

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

                  {selectedProject.repo && (
                    <div className="mt-12 pt-8 border-t border-white/10">
                      <a 
                        href={selectedProject.repo} 
                        target="_blank" 
                        rel="noreferrer" 
                        className="inline-flex items-center gap-3 px-6 py-3 bg-indigo-600 hover:bg-indigo-500 text-white font-bold rounded-xl transition-all shadow-[0_0_20px_rgba(79,70,229,0.3)] hover:shadow-[0_0_30px_rgba(79,70,229,0.5)] hover:-translate-y-1"
                      >
                        <FaGithub className="text-xl" /> View Source Code
                      </a>
                    </div>
                  )}

                </div>
              </motion.div>
            </div>
          </>
        )}
      </AnimatePresence>
    </main>
  );
}
