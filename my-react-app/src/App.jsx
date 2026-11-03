import { useEffect, useState } from 'react';
import Header from './components/Header';
import About from './components/About';
import Skills from './components/Skills';
import Education from './components/Education';
import Certificates from './components/Certificates';
import Languages from './components/Languages';
import Footer from './components/Footer';
import Reviews from './components/Reviews';
import ContactForm from './components/ContactForm';

function App() {
  const [theme, setTheme] = useState('light');

  // Автоматичний вибір теми за часом: світла 07:00-21:00, інакше темна
  useEffect(() => {
    const hour = new Date().getHours();
    setTheme(hour >= 7 && hour < 21 ? 'light' : 'dark');
  }, []);

  // Щоразу, коли змінюється theme, додаємо/прибираємо клас "dark" на <html>
  useEffect(() => {
    document.documentElement.classList.toggle('dark', theme === 'dark');
  }, [theme]);

  const toggleTheme = () => setTheme((t) => (t === 'light' ? 'dark' : 'light'));

  return (
    <div className="min-h-screen bg-slate-100 dark:bg-slate-950 text-slate-800 dark:text-slate-100 font-sans antialiased">
      <div className="max-w-4xl mx-auto px-4 py-8">
        <Header theme={theme} onToggleTheme={toggleTheme} />
        <main className="space-y-6">
          <About />
          <Skills />
          <Education />
          <Certificates />
          <Languages />
        </main>
        <Reviews />
      </div>
      <Footer />
      <ContactForm />
    </div>
  );
}

export default App;
