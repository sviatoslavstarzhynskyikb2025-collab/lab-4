function About() {
  return (
    <section className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl p-8 mb-8 shadow-sm">
      <h2 className="text-xl md:text-2xl font-bold text-slate-800 dark:text-slate-100 mb-3 pb-2 border-b border-slate-100 dark:border-slate-800">
        Про мене
      </h2>
      <p className="text-slate-600 dark:text-slate-300 leading-relaxed text-base">
        Студент 2-го курсу спеціальності «Кібербезпека» НУ «Львівська політехніка». 
        Активно розвиваю практичні навички з мережевої безпеки, Linux та програмування на Python.
      </p>
    </section>
  );
}

export default About;