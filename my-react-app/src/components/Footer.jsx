import { useEffect, useState } from 'react';

function Footer() {
  const [info, setInfo] = useState({});

  useEffect(() => {
    //зчитуємо дані з браузера і зберігаємо в localStorage
    localStorage.setItem('userAgent', navigator.userAgent);
    localStorage.setItem('platform', navigator.platform);

    //читаємо їх назад з localStorage і кладемо в стан
    setInfo({
      userAgent: localStorage.getItem('userAgent'),
      platform: localStorage.getItem('platform'),
    });
  }, []);

  return (
    <footer className="py-6 px-6 text-center text-sm text-slate-500 dark:text-slate-400 border-t border-slate-200 dark:border-slate-800 mt-auto">
      <p>© 2026 Святослав Старжинський. Усі права захищено.</p>

      <h3 className="mt-4 font-semibold">Інфо про систему</h3>
      <p className="break-all">User Agent: {info.userAgent}</p>
      <p>Platform: {info.platform}</p>
    </footer>
  );
}

export default Footer;