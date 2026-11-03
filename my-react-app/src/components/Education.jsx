function Education() {
  return (
    <section className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl p-8 mb-8 shadow-sm">
      <h2 className="text-xl md:text-2xl font-bold text-slate-800 dark:text-slate-100 mb-4 pb-2 border-b border-slate-100 dark:border-slate-800">
        Освіта
      </h2>
      <ul className="space-y-3">
        <li className="flex items-start gap-3 p-4 rounded-xl bg-slate-50 dark:bg-slate-800/50 border border-slate-100 dark:border-slate-800/80">
          <span className="inline-block w-2 h-2 mt-2 rounded-full bg-purple-600 dark:bg-purple-400 shrink-0"></span>
          <span className="text-slate-600 dark:text-slate-300 text-base">
            <strong className="text-slate-800 dark:text-slate-100 font-semibold">Національний університет «Львівська політехніка»</strong> — Бакалавр, Кібербезпека (2-й курс)
          </span>
        </li>
      </ul>
    </section>
  );
}

export default Education;