"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

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
    <main className="flex min-h-screen flex-col md:flex-row justify-center max-w-7xl mx-auto px-6 py-12 md:px-12 md:py-24 gap-12 lg:gap-24">
      
      {/* Left Column (Sticky Sidebar) */}
      <header className="md:w-1/2 lg:w-5/12 flex flex-col md:sticky md:top-24 h-auto md:max-h-[calc(100vh-6rem)]">
        
        <motion.div 
          initial="hidden" animate="visible" variants={fadeUp}
          className="relative w-32 h-32 md:w-48 md:h-48 rounded-full overflow-hidden border-4 border-indigo-500/30 shadow-[0_0_40px_rgba(67,97,238,0.3)] mb-6"
        >
          {/* Using unoptimized allows you to use external placeholder links or bypass strict next/image build checks if file is missing */}
          <Image src="/profile.jpg" alt="Muhammad Hamza Azeem" fill className="object-cover" unoptimized />
        </motion.div>
        
        <motion.h1 
          initial="hidden" animate="visible" variants={fadeUp}
          className="text-4xl md:text-5xl font-bold tracking-tight text-slate-200 mb-3"
        >
          Muhammad Hamza Azeem
        </motion.h1>
        
        <motion.h2 
          initial="hidden" animate="visible" variants={fadeUp}
          className="text-lg md:text-xl font-medium text-indigo-400 mb-6"
        >
          AI/ML Engineer | Data Scientist
        </motion.h2>

        <motion.p initial="hidden" animate="visible" variants={fadeUp} className="text-slate-400 mb-8 max-w-sm leading-relaxed">
          I build scalable AI solutions and state-of-the-art machine learning models to solve complex real-world problems.
        </motion.p>
        
        {/* Desktop Navigation */}
        <nav className="hidden md:block mb-12">
          <ul className="flex flex-col space-y-4 text-sm font-bold tracking-widest uppercase text-slate-500 w-max">
            <li><a href="#about" className="flex items-center group"><span className="w-8 h-px bg-slate-600 mr-4 group-hover:w-16 group-hover:bg-slate-200 transition-all duration-300"></span><span className="group-hover:text-slate-200 transition-colors">About</span></a></li>
            <li><a href="#experience" className="flex items-center group"><span className="w-8 h-px bg-slate-600 mr-4 group-hover:w-16 group-hover:bg-slate-200 transition-all duration-300"></span><span className="group-hover:text-slate-200 transition-colors">Experience</span></a></li>
            <li><a href="#projects" className="flex items-center group"><span className="w-8 h-px bg-slate-600 mr-4 group-hover:w-16 group-hover:bg-slate-200 transition-all duration-300"></span><span className="group-hover:text-slate-200 transition-colors">Projects</span></a></li>
            <li><a href="#contact" className="flex items-center group"><span className="w-8 h-px bg-slate-600 mr-4 group-hover:w-16 group-hover:bg-slate-200 transition-all duration-300"></span><span className="group-hover:text-slate-200 transition-colors">Contact</span></a></li>
          </ul>
        </nav>

        {/* Social Links */}
        <motion.div initial="hidden" animate="visible" variants={fadeUp} className="flex space-x-5 mt-auto pb-8 md:pb-0">
          <a href="https://github.com/ZentaCros" target="_blank" rel="noreferrer" className="text-slate-400 hover:text-white transition-colors">
            <FaGithub className="text-3xl" />
          </a>
          <a href="https://www.linkedin.com/in/hamza-azeem-data-scientist-86a99925a/" target="_blank" rel="noreferrer" className="text-slate-400 hover:text-blue-500 transition-colors">
            <FaLinkedin className="text-3xl" />
          </a>
          <a href="mailto:hmzabizi602@gmail.com" className="text-slate-400 hover:text-red-400 transition-colors">
            <FaEnvelope className="text-3xl" />
          </a>
        </motion.div>
      </header>

      {/* Right Column (Scrolling Content) */}
      <main className="md:w-1/2 lg:w-7/12 flex flex-col space-y-24">
        
        {/* Mobile Navigation (Only visible on small screens) */}
        <nav className="md:hidden sticky top-0 z-50 glass -mx-6 px-6 py-4 mb-8">
          <ul className="flex justify-between text-xs font-bold tracking-wider uppercase text-slate-300">
            <li><a href="#about">About</a></li>
            <li><a href="#experience">Experience</a></li>
            <li><a href="#projects">Projects</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </nav>

        {/* About Section */}
        <section id="about" className="scroll-mt-24">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={fadeUp}>
            <h3 className="text-xl font-bold mb-4 text-slate-200 md:hidden uppercase tracking-widest">About</h3>
            <p className="text-lg leading-relaxed text-slate-400">
              I am an AI/ML Engineer specializing in Computer Vision and Applied AI. With a proven track record of developing production-ready LLM applications, I've achieved state-of-the-art results (such as a 23.3% F1-score improvement in deep learning research). I bridge the gap between complex AI research and scalable, real-world data science solutions.
            </p>
          </motion.div>
        </section>

        {/* Experience Section */}
        <section id="experience" className="scroll-mt-24">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={fadeUp}>
            <h3 className="text-xl font-bold mb-8 text-slate-200 md:hidden uppercase tracking-widest">Experience</h3>
            <div className="group relative grid pb-1 transition-all sm:grid-cols-8 sm:gap-8 md:gap-4 lg:hover:!opacity-100 lg:group-hover/list:opacity-50">
              <header className="z-10 mb-2 mt-1 text-xs font-semibold uppercase tracking-wide text-slate-500 sm:col-span-2">2026</header>
              <div className="sm:col-span-6">
                <h3 className="font-medium leading-snug text-slate-200">
                  <div>Research Experience (Capstone)</div>
                  <div className="text-indigo-400 mt-1">Institute of Space Technology (IST)</div>
                </h3>
                <ul className="mt-4 list-disc list-inside space-y-2 text-sm text-slate-400">
                  <li>Pioneered a deforestation detection model using ConvNeXt architecture.</li>
                  <li>Outperformed existing SOTA architectures by achieving a 23.3% improvement in F1-score.</li>
                  <li>Evaluated transformer-based foundational models (Prithvi LULC) for complex geospatial analysis.</li>
                </ul>
              </div>
            </div>
          </motion.div>
        </section>

        {/* Projects Section */}
        <section id="projects" className="scroll-mt-24">
          <motion.h3 initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="text-xl font-bold mb-8 text-slate-200 md:hidden uppercase tracking-widest">Projects</motion.h3>
          
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={staggerContainer} className="flex flex-col space-y-8">
            
            {/* Project 1 */}
            <motion.div variants={fadeUp} className="group relative grid gap-4 transition-all sm:grid-cols-8 sm:gap-8 md:gap-4 lg:hover:!opacity-100 lg:group-hover/list:opacity-50 glass-card p-4 md:p-6 hover:bg-slate-800/50">
              <div className="sm:col-span-8">
                <h4 className="text-lg font-bold text-slate-200 mb-2 group-hover:text-indigo-400 transition-colors">ConvNeXt Deforestation Detection</h4>
                <p className="text-slate-400 text-sm mb-4 leading-relaxed">Advanced computer vision model utilizing deep learning to detect deforestation in the Amazon using geospatial imagery. Achieved SOTA results with Fourier Domain Adaptation.</p>
                <div className="flex flex-wrap gap-2">
                  <span className="text-xs font-medium px-3 py-1 bg-indigo-500/10 text-indigo-300 rounded-full">Python</span>
                  <span className="text-xs font-medium px-3 py-1 bg-indigo-500/10 text-indigo-300 rounded-full">PyTorch</span>
                </div>
              </div>
            </motion.div>

            {/* Project 2 */}
            <motion.div variants={fadeUp} className="group relative grid gap-4 transition-all sm:grid-cols-8 sm:gap-8 md:gap-4 glass-card p-4 md:p-6 hover:bg-slate-800/50">
              <div className="sm:col-span-8">
                <h4 className="text-lg font-bold text-slate-200 mb-2 group-hover:text-indigo-400 transition-colors">Prithvi LULC Multi-Temporal Analysis</h4>
                <p className="text-slate-400 text-sm mb-4 leading-relaxed">Deployed IBM's Prithvi geospatial foundational model on HLS imagery over Punjab, classifying crop and vegetation cover dynamics.</p>
                <div className="flex flex-wrap gap-2">
                  <span className="text-xs font-medium px-3 py-1 bg-indigo-500/10 text-indigo-300 rounded-full">Python</span>
                  <span className="text-xs font-medium px-3 py-1 bg-indigo-500/10 text-indigo-300 rounded-full">Transformers</span>
                </div>
              </div>
            </motion.div>

            {/* Project 3 */}
            <motion.div variants={fadeUp} className="group relative grid gap-4 transition-all sm:grid-cols-8 sm:gap-8 md:gap-4 glass-card p-4 md:p-6 hover:bg-slate-800/50">
              <div className="sm:col-span-8">
                <h4 className="text-lg font-bold text-slate-200 mb-2 group-hover:text-indigo-400 transition-colors">Market Basket Analysis</h4>
                <p className="text-slate-400 text-sm mb-4 leading-relaxed">Performed comprehensive Data Mining on the UCI Online Retail Dataset (540,000+ transactions). Implemented Apriori and FP-Growth algorithms.</p>
                <div className="flex flex-wrap gap-2">
                  <span className="text-xs font-medium px-3 py-1 bg-indigo-500/10 text-indigo-300 rounded-full">Python</span>
                  <span className="text-xs font-medium px-3 py-1 bg-indigo-500/10 text-indigo-300 rounded-full">Pandas</span>
                </div>
              </div>
            </motion.div>

            {/* Project 4 */}
            <motion.div variants={fadeUp} className="group relative grid gap-4 transition-all sm:grid-cols-8 sm:gap-8 md:gap-4 glass-card p-4 md:p-6 hover:bg-slate-800/50">
              <div className="sm:col-span-8">
                <h4 className="text-lg font-bold text-slate-200 mb-2 group-hover:text-indigo-400 transition-colors">Automated Data Extraction Pipeline</h4>
                <p className="text-slate-400 text-sm mb-4 leading-relaxed">Built scalable web scrapers for E-Commerce intelligence, bypassing anti-bot mechanisms and deploying data via robust REST APIs.</p>
                <div className="flex flex-wrap gap-2">
                  <span className="text-xs font-medium px-3 py-1 bg-indigo-500/10 text-indigo-300 rounded-full">Node.js</span>
                  <span className="text-xs font-medium px-3 py-1 bg-indigo-500/10 text-indigo-300 rounded-full">Playwright</span>
                </div>
              </div>
            </motion.div>

            {/* Project 5 */}
            <motion.div variants={fadeUp} className="group relative grid gap-4 transition-all sm:grid-cols-8 sm:gap-8 md:gap-4 glass-card p-4 md:p-6 hover:bg-slate-800/50">
              <div className="sm:col-span-8">
                <h4 className="text-lg font-bold text-slate-200 mb-2 group-hover:text-indigo-400 transition-colors">AskDoc AI (Enterprise RAG)</h4>
                <p className="text-slate-400 text-sm mb-4 leading-relaxed">Enterprise Document Q&A Chatbot powered by local RAG and Llama 3.3. Fast, private PDF search without external embedding APIs.</p>
                <div className="flex flex-wrap gap-2">
                  <span className="text-xs font-medium px-3 py-1 bg-indigo-500/10 text-indigo-300 rounded-full">Python</span>
                  <span className="text-xs font-medium px-3 py-1 bg-indigo-500/10 text-indigo-300 rounded-full">Llama 3</span>
                </div>
              </div>
            </motion.div>

            {/* Project 6 */}
            <motion.div variants={fadeUp} className="group relative grid gap-4 transition-all sm:grid-cols-8 sm:gap-8 md:gap-4 glass-card p-4 md:p-6 hover:bg-slate-800/50">
              <div className="sm:col-span-8">
                <h4 className="text-lg font-bold text-slate-200 mb-2 group-hover:text-indigo-400 transition-colors">Otsu's Thresholding (CV)</h4>
                <p className="text-slate-400 text-sm mb-4 leading-relaxed">Implementation of Otsu's Method for automatic, adaptive image binarization. Computes optimal global thresholds using OpenCV.</p>
                <div className="flex flex-wrap gap-2">
                  <span className="text-xs font-medium px-3 py-1 bg-indigo-500/10 text-indigo-300 rounded-full">Python</span>
                  <span className="text-xs font-medium px-3 py-1 bg-indigo-500/10 text-indigo-300 rounded-full">OpenCV</span>
                </div>
              </div>
            </motion.div>

          </motion.div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="scroll-mt-24 pb-24">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
            <h3 className="text-xl font-bold mb-4 text-slate-200 md:hidden uppercase tracking-widest">Contact</h3>
            <p className="text-slate-400 mb-8 max-w-md leading-relaxed">Currently open for new opportunities. Whether you have a question or just want to say hi, I'll try my best to get back to you!</p>
            <a href="mailto:hmzabizi602@gmail.com" className="inline-block px-8 py-4 bg-indigo-600 hover:bg-indigo-500 text-white font-bold rounded-lg transition-colors shadow-lg shadow-indigo-500/30">
              Say Hello
            </a>
          </motion.div>
        </section>
        
        <footer className="text-slate-500 text-sm mt-auto pb-12">
          <p>Built with Next.js, Tailwind CSS & Framer Motion.</p>
          <p>&copy; {new Date().getFullYear()} Muhammad Hamza Azeem</p>
        </footer>

      </main>
    </main>
  );
}
