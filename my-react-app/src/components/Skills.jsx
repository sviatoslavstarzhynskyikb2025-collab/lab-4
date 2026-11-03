function Skills() {
  return (
    <section className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl p-8 mb-8 shadow-sm">
      <h2 className="text-xl md:text-2xl font-bold text-slate-800 dark:text-slate-100 mb-4 pb-2 border-b border-slate-100 dark:border-slate-800">
        Навички
      </h2>
      <ul className="space-y-3">
        <li className="flex items-start gap-3 p-3 rounded-xl bg-slate-50 dark:bg-slate-800/50 border border-slate-100 dark:border-slate-800/80">
          <span className="inline-block w-2 h-2 mt-2 rounded-full bg-purple-600 dark:bg-purple-400 shrink-0"></span>
          <span className="text-slate-600 dark:text-slate-300 text-base">
            Основи кібербезпеки та мережева безпека (Network Security)
          </span>
        </li>
        <li className="flex items-start gap-3 p-3 rounded-xl bg-slate-50 dark:bg-slate-800/50 border border-slate-100 dark:border-slate-800/80">
          <span className="inline-block w-2 h-2 mt-2 rounded-full bg-purple-600 dark:bg-purple-400 shrink-0"></span>
          <span className="text-slate-600 dark:text-slate-300 text-base">
            Основи ОС Linux та віртуалізації
          </span>
        </li>
        <li className="flex items-start gap-3 p-3 rounded-xl bg-slate-50 dark:bg-slate-800/50 border border-slate-100 dark:border-slate-800/80">
          <span className="inline-block w-2 h-2 mt-2 rounded-full bg-purple-600 dark:bg-purple-400 shrink-0"></span>
          <span className="text-slate-600 dark:text-slate-300 text-base">
            Програмування на Python (скрипти, ООП)
          </span>
        </li>
        <li className="flex items-start gap-3 p-3 rounded-xl bg-slate-50 dark:bg-slate-800/50 border border-slate-100 dark:border-slate-800/80">
          <span className="inline-block w-2 h-2 mt-2 rounded-full bg-purple-600 dark:bg-purple-400 shrink-0"></span>
          <span className="text-slate-600 dark:text-slate-300 text-base">
            Веб-технології (HTTP/HTTPS, клієнт-серверна архітектура)
          </span>
        </li>
      </ul>
    </section>
  );
}

export default Skills;