"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { FaGithub, FaLinkedin, FaEnvelope, FaPython, FaNodeJs } from "react-icons/fa";
import { SiPytorch, SiPandas, SiTailwindcss, SiNextdotjs } from "react-icons/si";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.2 } }
};

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-6 md:p-24 max-w-6xl mx-auto w-full">
      
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 flex justify-center py-4 glass">
        <ul className="flex space-x-6 text-sm font-medium tracking-wider uppercase text-slate-300">
          <li><a href="#about" className="hover:text-white transition-colors">About</a></li>
          <li><a href="#experience" className="hover:text-white transition-colors">Experience</a></li>
          <li><a href="#projects" className="hover:text-white transition-colors">Projects</a></li>
          <li><a href="#contact" className="hover:text-white transition-colors">Contact</a></li>
        </ul>
      </nav>

      {/* Hero Section */}
      <section className="min-h-screen flex flex-col items-center justify-center pt-20" id="hero">
        <motion.div 
          initial="hidden" animate="visible" variants={fadeUp}
          className="relative w-40 h-40 md:w-56 md:h-56 rounded-full overflow-hidden border-4 border-indigo-500/30 shadow-[0_0_40px_rgba(67,97,238,0.3)] mb-8"
        >
          <Image src="/profile.jpg" alt="Muhammad Hamza Azeem" fill className="object-cover" />
        </motion.div>
        
        <motion.h1 
          initial="hidden" animate="visible" variants={fadeUp}
          className="text-4xl md:text-6xl font-bold text-center text-glow mb-4"
        >
          Muhammad Hamza Azeem
        </motion.h1>
        <motion.h2 
          initial="hidden" animate="visible" variants={fadeUp}
          className="text-xl md:text-2xl text-indigo-400 font-semibold mb-8"
        >
          AI/ML Engineer | Data Scientist
        </motion.h2>
        
        <motion.div initial="hidden" animate="visible" variants={fadeUp} className="flex space-x-6">
          <a href="https://github.com/ZentaCros" target="_blank" rel="noreferrer" className="p-3 glass-card hover:-translate-y-1 transition-transform">
            <FaGithub className="text-2xl" />
          </a>
          <a href="https://www.linkedin.com/in/hamza-azeem-data-scientist-86a99925a/" target="_blank" rel="noreferrer" className="p-3 glass-card hover:-translate-y-1 transition-transform">
            <FaLinkedin className="text-2xl text-blue-500" />
          </a>
          <a href="mailto:hmzabizi602@gmail.com" className="p-3 glass-card hover:-translate-y-1 transition-transform">
            <FaEnvelope className="text-2xl text-red-400" />
          </a>
        </motion.div>
      </section>

      {/* About Section */}
      <section id="about" className="py-24 w-full">
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="glass-card p-8 md:p-12">
          <h3 className="text-3xl font-bold mb-6 border-b border-white/10 pb-2 inline-block">About Me</h3>
          <p className="text-lg leading-relaxed text-slate-300">
            I am an AI/ML Engineer specializing in Computer Vision and Applied AI. With a proven track record of developing production-ready LLM applications, I've achieved state-of-the-art results (such as a 23.3% F1-score improvement in deep learning research). I bridge the gap between complex AI research and scalable, real-world data science solutions.
          </p>
        </motion.div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-24 w-full">
        <motion.h3 initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="text-3xl font-bold mb-10 text-center">Research & Experience</motion.h3>
        
        <div className="space-y-8">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.3 }} variants={fadeUp} className="glass-card p-6 border-l-4 border-l-indigo-500">
            <div className="flex justify-between items-start mb-2 flex-col md:flex-row">
              <h4 className="text-xl font-bold">Research Experience (Capstone)</h4>
              <span className="text-sm text-indigo-300 font-mono mt-2 md:mt-0">2026</span>
            </div>
            <h5 className="text-md text-slate-400 italic mb-4">Institute of Space Technology (IST)</h5>
            <ul className="list-disc list-inside space-y-2 text-slate-300">
              <li>Pioneered a deforestation detection model using ConvNeXt architecture.</li>
              <li>Outperformed existing SOTA architectures by achieving a 23.3% improvement in F1-score.</li>
              <li>Evaluated transformer-based foundational models (Prithvi LULC) for complex geospatial analysis.</li>
            </ul>
          </motion.div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-24 w-full">
        <motion.h3 initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="text-3xl font-bold mb-10 text-center">Selected Projects</motion.h3>
        
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.1 }} variants={staggerContainer} className="grid grid-cols-1 md:grid-cols-2 gap-8">
          
          {/* Project 1 */}
          <motion.div variants={fadeUp} className="glass-card p-6 flex flex-col h-full">
            <h4 className="text-xl font-bold mb-2">ConvNeXt Deforestation Detection</h4>
            <p className="text-slate-400 text-sm mb-4 flex-grow">Advanced computer vision model utilizing deep learning to detect deforestation in the Amazon using geospatial imagery. Achieved SOTA results.</p>
            <div className="flex flex-wrap gap-2 mb-4">
              <span className="text-xs px-2 py-1 bg-white/10 rounded-full flex items-center gap-1"><FaPython/> Python</span>
              <span className="text-xs px-2 py-1 bg-white/10 rounded-full flex items-center gap-1"><SiPytorch/> PyTorch</span>
            </div>
          </motion.div>

          {/* Project 2 */}
          <motion.div variants={fadeUp} className="glass-card p-6 flex flex-col h-full">
            <h4 className="text-xl font-bold mb-2">Prithvi LULC Multi-Temporal Analysis</h4>
            <p className="text-slate-400 text-sm mb-4 flex-grow">Deployed IBM's Prithvi geospatial foundational model on HLS imagery over Punjab, classifying crop and vegetation cover dynamics.</p>
            <div className="flex flex-wrap gap-2 mb-4">
              <span className="text-xs px-2 py-1 bg-white/10 rounded-full flex items-center gap-1"><FaPython/> Python</span>
              <span className="text-xs px-2 py-1 bg-white/10 rounded-full flex items-center gap-1"><SiPytorch/> Transformers</span>
            </div>
          </motion.div>

          {/* Project 3 */}
          <motion.div variants={fadeUp} className="glass-card p-6 flex flex-col h-full">
            <h4 className="text-xl font-bold mb-2">Market Basket Analysis</h4>
            <p className="text-slate-400 text-sm mb-4 flex-grow">Performed comprehensive Data Mining on the UCI Online Retail Dataset (540,000+ transactions). Implemented Apriori and FP-Growth algorithms.</p>
            <div className="flex flex-wrap gap-2 mb-4">
              <span className="text-xs px-2 py-1 bg-white/10 rounded-full flex items-center gap-1"><FaPython/> Python</span>
              <span className="text-xs px-2 py-1 bg-white/10 rounded-full flex items-center gap-1"><SiPandas/> Pandas</span>
            </div>
          </motion.div>

          {/* Project 4 */}
          <motion.div variants={fadeUp} className="glass-card p-6 flex flex-col h-full">
            <h4 className="text-xl font-bold mb-2">Automated Data Extraction Pipeline</h4>
            <p className="text-slate-400 text-sm mb-4 flex-grow">Built scalable web scrapers for E-Commerce intelligence, bypassing anti-bot mechanisms and deploying data via robust REST APIs.</p>
            <div className="flex flex-wrap gap-2 mb-4">
              <span className="text-xs px-2 py-1 bg-white/10 rounded-full flex items-center gap-1"><FaNodeJs/> Node.js</span>
              <span className="text-xs px-2 py-1 bg-white/10 rounded-full flex items-center gap-1"><FaPython/> Playwright</span>
            </div>
          </motion.div>

          {/* Project 5 */}
          <motion.div variants={fadeUp} className="glass-card p-6 flex flex-col h-full">
            <h4 className="text-xl font-bold mb-2">AskDoc AI (Enterprise RAG)</h4>
            <p className="text-slate-400 text-sm mb-4 flex-grow">Enterprise Document Q&A Chatbot powered by local RAG and Llama 3.3. Fast, private PDF search without external embedding APIs.</p>
            <div className="flex flex-wrap gap-2 mb-4">
              <span className="text-xs px-2 py-1 bg-white/10 rounded-full flex items-center gap-1"><FaPython/> Python</span>
              <span className="text-xs px-2 py-1 bg-white/10 rounded-full flex items-center gap-1">Llama 3</span>
            </div>
          </motion.div>

          {/* Project 6 */}
          <motion.div variants={fadeUp} className="glass-card p-6 flex flex-col h-full">
            <h4 className="text-xl font-bold mb-2">Otsu's Thresholding (CV)</h4>
            <p className="text-slate-400 text-sm mb-4 flex-grow">Implementation of Otsu's Method for automatic, adaptive image binarization. Computes optimal global thresholds using OpenCV.</p>
            <div className="flex flex-wrap gap-2 mb-4">
              <span className="text-xs px-2 py-1 bg-white/10 rounded-full flex items-center gap-1"><FaPython/> Python</span>
              <span className="text-xs px-2 py-1 bg-white/10 rounded-full flex items-center gap-1">OpenCV</span>
            </div>
          </motion.div>

        </motion.div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-24 w-full text-center">
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
          <h3 className="text-4xl font-bold mb-6 text-glow">Let's Connect</h3>
          <p className="text-slate-400 mb-8 max-w-lg mx-auto">Currently open for new opportunities. Whether you have a question or just want to say hi, I'll try my best to get back to you!</p>
          <a href="mailto:hmzabizi602@gmail.com" className="inline-block px-8 py-4 bg-indigo-600 hover:bg-indigo-500 text-white font-bold rounded-full transition-colors shadow-[0_0_20px_rgba(79,70,229,0.4)]">
            Say Hello
          </a>
        </motion.div>
      </section>
      
      <footer className="w-full text-center py-6 border-t border-white/10 text-slate-500 text-sm mt-auto">
        <p>Built with Next.js, Tailwind CSS & Framer Motion.</p>
        <p>&copy; {new Date().getFullYear()} Muhammad Hamza Azeem</p>
      </footer>

    </main>
  );
}
