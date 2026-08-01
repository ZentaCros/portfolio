import re

file_path = 'D:/Hamza/Uni/portfolio-v2/src/app/page.tsx'
with open(file_path, 'r', encoding='utf-8') as f:
    content = f.read()

# Imports
if 'ThemeToggle' not in content:
    content = content.replace('import { motion, AnimatePresence } from "framer-motion";', 
                              'import { motion, AnimatePresence } from "framer-motion";\nimport { ThemeToggle } from "@/components/theme-toggle";')

# Inject ThemeToggle into header
if '<ThemeToggle />' not in content:
    content = content.replace(
        '<div className="relative min-h-screen overflow-x-hidden text-slate-200 selection:bg-indigo-500/30 font-sans">',
        '<div className="fixed top-6 right-6 md:top-10 md:right-10 z-[9999]">\n        <ThemeToggle />\n      </div>\n      <div className="relative min-h-screen overflow-x-hidden text-slate-200 selection:bg-indigo-500/30 font-sans">'
    )

# Replacements mapping for High Contrast
replacements = {
    'text-slate-200': 'text-slate-900 dark:text-slate-200',
    'text-slate-400': 'text-slate-700 dark:text-slate-400',
    'text-slate-500': 'text-slate-600 dark:text-slate-500',
    'text-white': 'text-slate-900 dark:text-white',
    'bg-white/10': 'bg-black/5 dark:bg-white/10',
    'bg-white/20': 'bg-black/10 dark:bg-white/20',
    'bg-white/5': 'bg-slate-100 dark:bg-white/5',
    'border-white/10': 'border-slate-300 dark:border-white/10',
    'border-white/5': 'border-slate-200 dark:border-white/5',
    'border-white/30': 'border-slate-300 dark:border-white/30',
    'bg-black/40': 'bg-white/90 dark:bg-black/40',
    'bg-black/60': 'bg-white dark:bg-black/60',
    'text-slate-300 hover:text-white': 'text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white',
    'text-slate-300': 'text-slate-600 dark:text-slate-300',
    'bg-indigo-900/20': 'bg-indigo-100/50 dark:bg-indigo-900/20',
    'bg-purple-900/10': 'bg-purple-100/50 dark:bg-purple-900/10',
    'bg-blue-900/10': 'bg-blue-100/50 dark:bg-blue-900/10',
}

for old, new in replacements.items():
    content = re.sub(rf'(?<!dark:){old}', new, content)

with open(file_path, 'w', encoding='utf-8') as f:
    f.write(content)

print("Refactored page.tsx for High-Contrast Crisp Enterprise light mode.")
