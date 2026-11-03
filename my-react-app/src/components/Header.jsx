function Header({ theme, onToggleTheme }) {
  return (
    <header className="py-8 px-6 bg-white dark:bg-slate-900 border-b border-slate-200 dark:border-slate-800 shadow-sm rounded-b-2xl mb-8 text-center">
      <h1 className="text-3xl md:text-4xl font-bold text-slate-800 dark:text-slate-100 tracking-tight mb-2">
        Starzhynskyi Sviatoslav
      </h1>
      <p className="text-lg font-medium text-purple-600 dark:text-purple-400 mb-2">
        Junior Cybersecurity / SOC Analyst
      </p>
      <p className="text-sm text-slate-500 dark:text-slate-400 mb-4">
        Lviv, Ukraine
      </p>
      <div className="flex flex-wrap justify-center gap-4 text-sm text-slate-600 dark:text-slate-300">
        <a 
          href="mailto:starzinskijsvatoslav@gmail.com" 
          className="hover:text-purple-600 dark:hover:text-purple-400 underline transition-colors"
        >
          Email
        </a>
        <span>|</span>
        <a 
          href="https://github.com" 
          target="_blank" 
          rel="noreferrer"
          className="hover:text-purple-600 dark:hover:text-purple-400 underline transition-colors"
        >
          GitHub
        </a>
        <span>|</span>
        <a 
          href="https://linkedin.com" 
          target="_blank" 
          rel="noreferrer"
          className="hover:text-purple-600 dark:hover:text-purple-400 underline transition-colors"
        >
          LinkedIn
        </a>
      </div>
      <button
        type="button"
        onClick={onToggleTheme}
        className="mt-4 px-4 py-2 rounded-full border border-slate-300 dark:border-slate-600 text-sm hover:bg-slate-100 dark:hover:bg-slate-800 cursor-pointer"
      >
        {theme === 'light' ? '🌙 Темна тема' : '☀️ Світла тема'}
      </button>
    </header>
  );
}

export default Header;