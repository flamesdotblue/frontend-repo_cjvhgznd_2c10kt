import { motion } from 'framer-motion';
import { BookOpen, User } from 'lucide-react';

export default function Navbar() {
  return (
    <header className="sticky top-0 z-40 w-full backdrop-blur bg-white/70 border-b border-slate-200/60">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <motion.a
            href="#home"
            className="flex items-center gap-2"
            initial={{ y: -8, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.4 }}
          >
            <div className="inline-flex h-9 w-9 items-center justify-center rounded-xl bg-blue-600 text-white shadow-md">
              <BookOpen size={20} />
            </div>
            <div className="leading-tight">
              <p className="font-semibold text-slate-900">East Singhbhum Academy</p>
              <p className="text-xs text-slate-500">Jharkhand</p>
            </div>
          </motion.a>

          <div className="hidden md:flex items-center gap-6 text-sm">
            <a href="#materials" className="text-slate-600 hover:text-slate-900 transition">Materials</a>
            <a href="#quizzes" className="text-slate-600 hover:text-slate-900 transition">Quizzes</a>
            <a href="#about" className="text-slate-600 hover:text-slate-900 transition">About</a>
          </div>

          <div className="flex items-center gap-3">
            <a
              href="#student"
              className="hidden sm:inline-flex items-center gap-2 rounded-lg border border-slate-300 px-3 py-2 text-sm text-slate-700 hover:bg-slate-50"
            >
              <User size={16} /> Student Login
            </a>
            <a
              href="#admin"
              className="inline-flex items-center gap-2 rounded-lg bg-blue-600 px-3 py-2 text-sm font-medium text-white shadow hover:bg-blue-700"
            >
              Admin
            </a>
          </div>
        </div>
      </nav>
    </header>
  );
}
