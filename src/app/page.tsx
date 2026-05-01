"use client";

import Image from "next/image";
import { Mail, ExternalLink, Code2, Database, BrainCircuit, Terminal, ArrowRight } from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { motion } from "framer-motion";

export default function Home() {
  const fadeIn = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.5 }
  };

  const skills = [
    { name: "PyTorch", icon: <BrainCircuit className="w-4 h-4" /> },
    { name: "Large Language Models (LLMs)", icon: <BrainCircuit className="w-4 h-4" /> },
    { name: "Retrieval Augmented Generation (RAG)", icon: <Database className="w-4 h-4" /> },
    { name: "FastAPI", icon: <Terminal className="w-4 h-4" /> },
    { name: "Python", icon: <Code2 className="w-4 h-4" /> },
    { name: "Computer Vision", icon: <BrainCircuit className="w-4 h-4" /> },
    { name: "SQL", icon: <Database className="w-4 h-4" /> },
    { name: "Java", icon: <Code2 className="w-4 h-4" /> },
  ];

  const projects = [
    {
      title: "AskDoc AI: Enterprise RAG Chatbot",
      description: "An enterprise document Q&A system that uses Retrieval Augmented Generation to prevent LLM hallucinations on proprietary data. Features smart sentence-boundary chunking, custom local TF-IDF retrieval, and Groq API integration.",
      image: "/images/askdoc.png",
      tags: ["Python", "FastAPI", "Llama 3.3", "RAG", "TF-IDF"],
      liveUrl: "https://askdoc-ai-pi.vercel.app/",
      githubUrl: "https://github.com/ZentaCros/askdoc-ai"
    },
    {
      title: "Cross-Domain Deforestation Detection",
      description: "A deep learning computer vision system using domain adaptation for satellite imagery. Achieved a +17.6% F1-score improvement over published baselines by overcoming geographic domain shifts.",
      image: "/images/deforestation.png",
      tags: ["PyTorch", "Computer Vision", "Domain Adaptation", "NumPy"],
      githubUrl: "https://github.com/ZentaCros"
    },
    {
      title: "HealMap AI (Hackathon)",
      description: "Predictive healthcare application that tracks disease progression, forecasts recovery times using historical medical data, and suggests non-drug measures.",
      image: "/images/healmap.png",
      tags: ["Machine Learning", "Data Analysis", "Predictive Modeling"],
      githubUrl: "https://github.com/ZentaCros"
    }
  ];

  return (
    <div className="min-h-screen bg-[#050505] text-zinc-300 font-sans selection:bg-indigo-500/30">
      {/* Navigation */}
      <nav className="fixed w-full top-0 z-50 bg-[#050505]/80 backdrop-blur-md border-b border-zinc-800">
        <div className="max-w-5xl mx-auto px-6 h-16 flex items-center justify-between">
          <span className="text-xl font-bold bg-gradient-to-r from-indigo-400 to-purple-400 bg-clip-text text-transparent">
            HA.
          </span>
          <div className="flex gap-4">
            <a href="https://github.com/ZentaCros" target="_blank" rel="noreferrer" className="p-2 hover:text-white transition-colors">
              <FaGithub className="w-5 h-5" />
            </a>
            <a href="https://www.linkedin.com/in/hamza-azeem-data-scientist-86a99925a" target="_blank" rel="noreferrer" className="p-2 hover:text-white transition-colors">
              <FaLinkedin className="w-5 h-5" />
            </a>
            <a href="mailto:hmzabizi602@gmail.com" className="p-2 hover:text-white transition-colors">
              <Mail className="w-5 h-5" />
            </a>
          </div>
        </div>
      </nav>

      <main className="max-w-5xl mx-auto px-6 pt-32 pb-24 space-y-32">
        {/* Hero Section */}
        <motion.section 
          className="space-y-6 pt-10"
          initial="initial" animate="animate" variants={fadeIn}
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-500/10 text-indigo-400 text-sm font-medium border border-indigo-500/20">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-indigo-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-indigo-500"></span>
            </span>
            Available for remote roles
          </div>
          <h1 className="text-5xl md:text-7xl font-bold tracking-tight text-white">
            Hi, I'm Hamza Azeem.
            <span className="block mt-2 text-zinc-500">I build AI systems.</span>
          </h1>
          <p className="text-lg md:text-xl max-w-2xl text-zinc-400 leading-relaxed">
            I'm an <strong className="text-zinc-200">AI/ML Engineer & Data Scientist</strong> focused on building robust machine learning pipelines, fine-tuning models, and developing enterprise-grade AI agents. Let's build something intelligent.
          </p>
          <div className="flex gap-4 pt-4">
            <a href="#projects" className="flex items-center gap-2 px-6 py-3 rounded-lg bg-white text-black font-medium hover:bg-zinc-200 transition-colors">
              View Work <ArrowRight className="w-4 h-4" />
            </a>
            <a href="mailto:hmzabizi602@gmail.com" className="flex items-center gap-2 px-6 py-3 rounded-lg bg-zinc-900 text-white font-medium hover:bg-zinc-800 transition-colors border border-zinc-800">
              Contact Me
            </a>
          </div>
        </motion.section>

        {/* Projects Section */}
        <motion.section id="projects" className="space-y-12" initial="initial" whileInView="animate" viewport={{ once: true }} variants={fadeIn}>
          <div className="space-y-2">
            <h2 className="text-3xl font-bold text-white tracking-tight">Featured Projects</h2>
            <p className="text-zinc-400">A selection of my recent AI and Machine Learning work.</p>
          </div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {projects.map((project, idx) => (
              <div key={idx} className="group rounded-2xl border border-zinc-800 bg-[#0a0a0a] overflow-hidden hover:border-zinc-700 transition-colors flex flex-col">
                <div className="relative h-48 w-full overflow-hidden border-b border-zinc-800">
                  <Image 
                    src={project.image} 
                    alt={project.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="p-6 flex flex-col flex-grow">
                  <h3 className="text-xl font-bold text-white mb-2">{project.title}</h3>
                  <p className="text-zinc-400 text-sm leading-relaxed mb-6 flex-grow">{project.description}</p>
                  
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.tags.map((tag, i) => (
                      <span key={i} className="px-2 py-1 text-xs font-medium bg-zinc-900 text-zinc-300 rounded border border-zinc-800">
                        {tag}
                      </span>
                    ))}
                  </div>

                  <div className="flex gap-4 pt-4 border-t border-zinc-800/50 mt-auto">
                    {project.liveUrl && (
                      <a href={project.liveUrl} target="_blank" rel="noreferrer" className="flex items-center gap-2 text-sm font-medium text-white hover:text-indigo-400 transition-colors">
                        <ExternalLink className="w-4 h-4" /> Live Demo
                      </a>
                    )}
                    <a href={project.githubUrl} target="_blank" rel="noreferrer" className="flex items-center gap-2 text-sm font-medium text-zinc-400 hover:text-white transition-colors">
                      <FaGithub className="w-4 h-4" /> Source
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </motion.section>

        {/* Skills Section */}
        <motion.section className="space-y-12" initial="initial" whileInView="animate" viewport={{ once: true }} variants={fadeIn}>
          <div className="space-y-2">
            <h2 className="text-3xl font-bold text-white tracking-tight">Technical Skills</h2>
            <p className="text-zinc-400">Tools and technologies I use to build ML pipelines.</p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {skills.map((skill, idx) => (
              <div key={idx} className="flex items-center gap-3 p-4 rounded-xl border border-zinc-800 bg-[#0a0a0a] hover:border-zinc-700 transition-colors">
                <div className="p-2 rounded-lg bg-zinc-900 text-indigo-400">
                  {skill.icon}
                </div>
                <span className="text-sm font-medium text-zinc-300">{skill.name}</span>
              </div>
            ))}
          </div>
        </motion.section>

      </main>

      {/* Footer */}
      <footer className="border-t border-zinc-900 bg-[#050505]">
        <div className="max-w-5xl mx-auto px-6 py-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-zinc-500 text-sm">© {new Date().getFullYear()} Muhammad Hamza Azeem. All rights reserved.</p>
          <div className="flex gap-4">
            <a href="https://github.com/ZentaCros" className="text-zinc-500 hover:text-white"><FaGithub className="w-4 h-4" /></a>
            <a href="https://www.linkedin.com/in/hamza-azeem-data-scientist-86a99925a" className="text-zinc-500 hover:text-white"><FaLinkedin className="w-4 h-4" /></a>
          </div>
        </div>
      </footer>
    </div>
  );
}
