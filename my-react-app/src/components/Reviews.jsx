import { useEffect, useState } from 'react';

const VARIANT = 22;

function Reviews() {
  const [comments, setComments] = useState([]);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/posts/' + VARIANT + '/comments')
      .then((response) => response.json())
      .then((data) => setComments(data))
      .catch((error) => console.error('Помилка:', error));
  }, []);

  return (
    <section className="py-6">
      <h2 className="text-2xl font-bold mb-4">Відгуки роботодавців</h2>

      {comments.map((comment) => (
        <div
          key={comment.id}
          className="mb-3 p-4 rounded-lg border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 text-left"
        >
          <h4 className="font-semibold">{comment.name}</h4>
          <p className="italic text-sm">{comment.email}</p>
          <p>{comment.body}</p>
        </div>
      ))}
    </section>
  );
}

export default Reviews;