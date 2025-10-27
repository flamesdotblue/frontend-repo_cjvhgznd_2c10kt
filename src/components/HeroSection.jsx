import { motion } from 'framer-motion';
import Spline from '@splinetool/react-spline';

export default function HeroSection() {
  return (
    <section id="home" className="relative w-full h-[90vh] overflow-hidden">
      {/* Interactive Spline background (full-bleed). The gradient overlay below has pointer-events-none so it doesn't block interaction. */}
      <div className="absolute inset-0">
        <Spline
          scene="https://prod.spline.design/zhZFnwyOYLgqlLWk/scene.splinecode"
          style={{ width: '100%', height: '100%' }}
        />
      </div>

      {/* Subtle top-to-bottom gradient for text legibility; does not intercept pointer events. */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-white/80 via-white/40 to-white/90" />

      {/* Content */}
      <div className="relative z-10 mx-auto flex h-full max-w-7xl flex-col items-center justify-center px-4 text-center">
        <motion.h1
          className="text-3xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-slate-900"
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
        >
          Learn Better. Score Higher.
        </motion.h1>
        <motion.p
          className="mt-4 max-w-2xl text-base sm:text-lg md:text-xl text-slate-700"
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, ease: 'easeOut', delay: 0.1 }}
        >
          A modern platform for Classes 8–12 in Maths, Physics, Chemistry, and English.
          Access study materials, take quizzes, and track your progress — all in one place.
        </motion.p>
        <motion.div
          className="mt-8 flex flex-col sm:flex-row items-center gap-3"
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, ease: 'easeOut', delay: 0.2 }}
        >
          <a
            href="#materials"
            className="inline-flex items-center justify-center rounded-lg bg-blue-600 px-5 py-3 text-white shadow hover:bg-blue-700"
          >
            Explore Materials
          </a>
          <a
            href="#quizzes"
            className="inline-flex items-center justify-center rounded-lg border border-slate-300 px-5 py-3 text-slate-800 hover:bg-slate-50"
          >
            Take a Quiz
          </a>
        </motion.div>

        {/* Quick setup guidance for Supabase (comment only) */}
        {/**
         * Supabase Setup (env):
         * 1) Create a project in supabase.com → Settings → API.
         * 2) Add a .env file at the project root with:
         *    VITE_SUPABASE_URL=https://YOUR_PROJECT_ID.supabase.co
         *    VITE_SUPABASE_ANON_KEY=YOUR_PUBLIC_ANON_KEY
         * 3) In your code, initialize the client:
         *    import { createClient } from '@supabase/supabase-js';
         *    export const supabase = createClient(import.meta.env.VITE_SUPABASE_URL, import.meta.env.VITE_SUPABASE_ANON_KEY);
         * 4) Deploy on Netlify/Vercel by adding the same env vars in their dashboard.
         */}
      </div>
    </section>
  );
}
