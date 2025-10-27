import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FileText, ClipboardList, BarChart3 } from 'lucide-react';

const CLASSES = [8, 9, 10, 11, 12];
const SUBJECTS = ['Maths', 'Physics', 'Chemistry', 'English'];

export default function ClassSubjectExplorer() {
  const [selectedClass, setSelectedClass] = useState(null);

  return (
    <section id="materials" className="py-16 bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex items-end justify-between gap-4">
          <div>
            <h2 className="text-2xl sm:text-3xl font-bold text-slate-900">Study Materials</h2>
            <p className="mt-2 text-slate-600 max-w-2xl">
              Choose your class to explore subjects. Materials are organized by Class → Subject → Topics.
            </p>
          </div>
          <div className="hidden sm:flex items-center gap-2 text-slate-500 text-sm">
            <BarChart3 size={18} /> Smart organization for faster learning
          </div>
        </div>

        <div className="mt-8 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-3">
          {CLASSES.map((cls) => (
            <button
              key={cls}
              onClick={() => setSelectedClass(cls)}
              className={`rounded-xl border px-4 py-3 text-sm font-medium transition shadow-sm hover:shadow ${
                selectedClass === cls
                  ? 'border-blue-600 bg-blue-50 text-blue-700'
                  : 'border-slate-300 bg-white text-slate-800 hover:bg-slate-50'
              }`}
            >
              Class {cls}
            </button>
          ))}
        </div>

        <AnimatePresence mode="wait">
          {selectedClass && (
            <motion.div
              key={selectedClass}
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -12 }}
              transition={{ duration: 0.25 }}
              className="mt-10"
            >
              <h3 className="text-lg font-semibold text-slate-900">Class {selectedClass} Subjects</h3>
              <div className="mt-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                {SUBJECTS.map((subj) => (
                  <motion.div
                    key={subj}
                    initial={{ opacity: 0, y: 8 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: '-50px' }}
                    transition={{ duration: 0.3 }}
                    className="rounded-xl border border-slate-200 p-5 bg-white shadow-sm hover:shadow-md"
                  >
                    <div className="flex items-center justify-between">
                      <p className="font-medium text-slate-900">{subj}</p>
                      <span className="text-xs rounded-full bg-blue-50 text-blue-700 px-2 py-1">{selectedClass}</span>
                    </div>
                    <p className="mt-2 text-sm text-slate-600">Topics with PDFs and MCQ quizzes.</p>

                    <div className="mt-4 flex items-center gap-2">
                      <a
                        href="#quizzes"
                        className="inline-flex items-center gap-2 rounded-lg border border-slate-300 px-3 py-2 text-sm text-slate-800 hover:bg-slate-50"
                        aria-label={`Take a quiz in ${subj}`}
                      >
                        <ClipboardList size={16} /> Quiz
                      </a>
                      <a
                        href="#materials"
                        className="inline-flex items-center gap-2 rounded-lg bg-blue-600 px-3 py-2 text-sm font-medium text-white hover:bg-blue-700"
                        aria-label={`Open materials for ${subj}`}
                      >
                        <FileText size={16} /> Materials
                      </a>
                    </div>
                  </motion.div>
                ))}
              </div>

              {/* Notes for developers (comment only):
                 - Hook these buttons to Supabase queries.
                 - materials table: id, class, subject, topic, pdf_url, uploaded_at
                 - quizzes table: id, class, subject, topic, question, option_a, option_b, option_c, option_d, correct_answer
                 - results table: id, student_id, quiz_id, score, created_at
                 - Initialize a supabase client once and call from your data hooks.
              */}
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}
