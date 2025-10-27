export default function Footer() {
  return (
    <footer className="mt-16 border-t border-slate-200 bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-10">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 text-sm">
          <div>
            <p className="font-semibold text-slate-900">East Singhbhum Academy</p>
            <p className="mt-2 text-slate-600">Coaching for Classes 8–12 • Maths, Physics, Chemistry, English</p>
          </div>
          <div>
            <p className="font-semibold text-slate-900">Contact</p>
            <p className="mt-2 text-slate-600">East Singhbhum, Jharkhand</p>
            <p className="text-slate-600">Email: info@eastsinghbhumacademy.in</p>
            <p className="text-slate-600">Phone: +91 9XXXXXXXXX</p>
          </div>
          <div>
            <p className="font-semibold text-slate-900">Quick Links</p>
            <div className="mt-2 flex flex-col gap-1 text-slate-600">
              <a href="#home" className="hover:text-slate-900">Home</a>
              <a href="#materials" className="hover:text-slate-900">Materials</a>
              <a href="#quizzes" className="hover:text-slate-900">Quizzes</a>
              <a href="#about" className="hover:text-slate-900">About</a>
            </div>
          </div>
        </div>
        <div className="mt-8 text-xs text-slate-500">© {new Date().getFullYear()} East Singhbhum Academy. All rights reserved.</div>
      </div>
    </footer>
  );
}
