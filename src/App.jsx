import { useEffect } from 'react';
import { motion } from 'framer-motion';

import Navbar from './components/Navbar.jsx';
import HeroSection from './components/HeroSection.jsx';
import ClassSubjectExplorer from './components/ClassSubjectExplorer.jsx';
import Footer from './components/Footer.jsx';

export default function App() {
  useEffect(() => {
    // Smooth scroll behavior for in-page links.
    if ('scrollBehavior' in document.documentElement.style) return;
    // Fallback: simple jump if smooth not supported.
  }, []);

  return (
    <div className="min-h-screen bg-white text-slate-900">
      <Navbar />
      <HeroSection />

      {/* About section with subtle motion */}
      <section id="about" className="py-16 bg-gradient-to-b from-white to-blue-50/50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4 }}
            className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm"
          >
            <h2 className="text-2xl font-bold">Why East Singhbhum Academy?</h2>
            <p className="mt-3 text-slate-700">
              We are a local coaching institute in East Singhbhum, Jharkhand dedicated to helping students of Classes 8–12 excel
              in Mathematics, Physics, Chemistry, and English. Our platform simplifies learning with downloadable PDFs, interactive
              quizzes, and instant feedback to help you track progress.
            </p>
            <ul className="mt-4 grid grid-cols-1 sm:grid-cols-3 gap-3 text-sm">
              <li className="rounded-xl border border-slate-200 p-4 bg-blue-50/40">
                Organized materials by class, subject, and topic.
              </li>
              <li className="rounded-xl border border-slate-200 p-4 bg-blue-50/40">
                Quick quizzes with instant scoring and summaries.
              </li>
              <li className="rounded-xl border border-slate-200 p-4 bg-blue-50/40">
                Student and admin dashboards for complete control.
              </li>
            </ul>
          </motion.div>
        </div>
      </section>

      <ClassSubjectExplorer />

      {/* Quizzes teaser section */}
      <section id="quizzes" className="py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4 }}
              className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm"
            >
              <h3 className="text-xl font-semibold">Practice with confidence</h3>
              <p className="mt-2 text-slate-700">
                Multiple-choice questions for each topic. Attempt quizzes, get instant scores, and review your answers.
                Your attempts are saved so you can track progress over time.
              </p>
              <div className="mt-4 flex flex-wrap gap-3">
                <a href="#student" className="rounded-lg bg-blue-600 px-4 py-2 text-white hover:bg-blue-700">Start a Quiz</a>
                <a href="#about" className="rounded-lg border border-slate-300 px-4 py-2 text-slate-800 hover:bg-slate-50">Learn More</a>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4 }}
              className="rounded-2xl border border-slate-200 bg-blue-50 p-6"
            >
              <div className="grid grid-cols-2 gap-4">
                <div className="rounded-xl bg-white p-4 shadow-sm">
                  <p className="text-2xl font-bold text-blue-700">10k+</p>
                  <p className="text-sm text-slate-600">Questions bank ready</p>
                </div>
                <div className="rounded-xl bg-white p-4 shadow-sm">
                  <p className="text-2xl font-bold text-blue-700">Instant</p>
                  <p className="text-sm text-slate-600">Auto grading & feedback</p>
                </div>
                <div className="rounded-xl bg-white p-4 shadow-sm">
                  <p className="text-2xl font-bold text-blue-700">Secure</p>
                  <p className="text-sm text-slate-600">Email-based login</p>
                </div>
                <div className="rounded-xl bg-white p-4 shadow-sm">
                  <p className="text-2xl font-bold text-blue-700">Track</p>
                  <p className="text-sm text-slate-600">Subject-wise progress</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Student/Admin anchors */}
      <section id="student" className="py-16 bg-blue-50/50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4 }}
            className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm"
          >
            <h3 className="text-xl font-semibold">Student Dashboard</h3>
            <p className="mt-2 text-slate-700">
              Log in with your email to see your attempts, average scores, and downloaded materials history. A responsive chart
              will summarize your subject-wise performance.
            </p>
            {/** Implementation guidance:
             * - Use Supabase Auth (email) for login and session management.
             * - Fetch results from the `results` table and aggregate by subject for charts.
             * - Use a chart library (e.g., chart.js) if desired, or simple progress bars.
             */}
          </motion.div>
        </div>
      </section>

      <section id="admin" className="py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4 }}
            className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm"
          >
            <h3 className="text-xl font-semibold">Admin Dashboard</h3>
            <p className="mt-2 text-slate-700">
              Secure role-based access for teachers. Add classes, subjects, topics; upload PDFs to storage; create/edit quizzes; and
              monitor student performance — all via clean forms, no coding required.
            </p>
            {/** Setup notes:
             * - Create storage bucket (e.g., `materials`) in Supabase for PDFs.
             * - Use RLS policies to restrict uploads/edits to admin role only.
             * - Example tables (SQL): students, materials, quizzes, results.
             * - Store file public URLs in `materials.pdf_url` for quick rendering.
             */}
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
