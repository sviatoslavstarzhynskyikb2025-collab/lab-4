import { useEffect, useState } from 'react';

const FORMSPREE_URL = 'https://formspree.io/f/xwllrjyq';

function ContactForm() {
  // isOpen - чи показане модальне вікно (спочатку ні)
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    // якщо користувач уже закрив вікно в цій сесії - більше не показуємо
    if (sessionStorage.getItem('contactFormClosed')) return;

    // через 1 хвилину (60000 мс) відкриваємо вікно
    const timer = setTimeout(() => setIsOpen(true), 60000);

    // прибираємо таймер, якщо компонент зникає раніше
    return () => clearTimeout(timer);
  }, []);

  const handleClose = () => {
    setIsOpen(false);
    sessionStorage.setItem('contactFormClosed', 'true');
  };

  // умовний рендеринг: поки isOpen = false, нічого не показуємо
  if (!isOpen) return null;

  const inputClass =
    'w-full p-3 rounded-lg border border-slate-300 dark:border-slate-600 bg-white dark:bg-slate-800 text-slate-800 dark:text-slate-100 focus:outline-none focus:border-purple-500';

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 px-4">
      <div className="w-full max-w-md rounded-2xl bg-white dark:bg-slate-900 text-slate-800 dark:text-slate-100 p-6 shadow-xl">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-xl font-bold">Зворотний зв'язок</h2>
          <button
            type="button"
            onClick={handleClose}
            className="px-3 py-1 rounded-lg border border-slate-300 dark:border-slate-600 hover:bg-slate-100 dark:hover:bg-slate-800 cursor-pointer"
          >
            Закрити
          </button>
        </div>

        <form action={FORMSPREE_URL} method="POST" className="flex flex-col gap-3">
          <input type="text" name="name" placeholder="Ім'я" required className={inputClass} />
          <input type="email" name="email" placeholder="Email" required className={inputClass} />
          <input type="tel" name="phone" placeholder="Номер телефону" className={inputClass} />
          <textarea
            name="message"
            placeholder="Ваше повідомлення"
            required
            rows={4}
            className={inputClass}
          />
          <button
            type="submit"
            className="p-3 rounded-lg bg-purple-600 hover:bg-purple-700 text-white font-semibold cursor-pointer"
          >
            Надіслати
          </button>
        </form>
      </div>
    </div>
  );
}

export default ContactForm;
