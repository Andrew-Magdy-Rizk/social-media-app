import { ArrowLeft, HelpCircle } from "lucide-react";
import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <>
      {/* Main Content Area (404 Page) */}
      <main className="flex-1 flex flex-col items-center justify-center px-6 py-12">
        <div className="max-w-2xl w-full text-center space-y-8">
          {/* Visual Element */}
          <div className="relative inline-block">
            <div className="text-[120px] md:text-[180px] font-black text-primary/10 leading-none select-none">
              404
            </div>
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="bg-white dark:bg-background-dark p-6 rounded-3xl shadow-xl border border-slate-100 dark:border-slate-800 transform -rotate-3 hover:rotate-0 transition-transform duration-300">
                <span className="material-symbols-outlined text-primary text-6xl md:text-8xl">link_off</span>
              </div>
            </div>
          </div>
          {/* Content */}
          <div className="space-y-4">
            <h1 className="text-3xl md:text-5xl font-bold text-slate-900 dark:text-white tracking-tight">
              Page Not Found
            </h1>
            <p className="text-slate-500 dark:text-slate-400 text-lg md:text-xl max-w-md mx-auto leading-relaxed">
              Oops! It looks like this page has gone private, been moved, or the link is just plain broken.
            </p>
          </div>
          {/* Actions */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
            <Link to={"/"} className="group w-full sm:w-auto px-8 py-4 bg-primary text-white rounded-xl font-bold text-lg hover:bg-blue-600 shadow-lg shadow-primary/20 transition-all flex items-center justify-center gap-2" href="#">
              <ArrowLeft className="group-hover:-translate-x-0.5 duration-300" />
              Back to Home Feed
            </Link>
            <Link to={"/"} className="w-full sm:w-auto px-8 py-4 bg-white dark:bg-slate-800 text-slate-700 dark:text-slate-200 border border-slate-200 dark:border-slate-700 rounded-xl font-semibold text-lg hover:bg-slate-50 dark:hover:bg-slate-700 transition-all flex items-center justify-center gap-2">
              <HelpCircle />
              Help Center
            </Link>
          </div>
          {/* Secondary Links */}
          <div className="pt-8 flex flex-wrap justify-center gap-6 text-sm text-slate-400 dark:text-slate-500">
            <a className="hover:text-primary underline underline-offset-4 decoration-primary/30" href="#">Report a problem</a>
            <a className="hover:text-primary underline underline-offset-4 decoration-primary/30" href="#">Status page</a>
            <a className="hover:text-primary underline underline-offset-4 decoration-primary/30" href="#">Terms of Service</a>
          </div>
        </div>
      </main>

    </>
  )
}
