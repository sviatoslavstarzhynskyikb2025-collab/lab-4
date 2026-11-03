const systemInfo = {
    userAgent: navigator.userAgent,
    platform: navigator.platform,
    language: navigator.language,
    screenSize: screen.width + 'x' + screen.height,
    cookiesEnabled: String(navigator.cookieEnabled),
    online: String(navigator.onLine)
};

for (const [key, value] of Object.entries(systemInfo)) {
    localStorage.setItem(key, value);
}

const storageList = document.getElementById('storage-info');

for (let i = 0; i < localStorage.length; i++) {
    const key = localStorage.key(i);
    const value = localStorage.getItem(key);

    const li = document.createElement('li');
    li.textContent = key + ': ' + value;
    storageList.appendChild(li);
}

//ВІДГУКИ

const VARIANT = 22;
async function loadReviews() {
    const container = document.getElementById('reviews-list');

    try {
        const response = await fetch(
            'https://jsonplaceholder.typicode.com/posts/' + VARIANT + '/comments'
        );
        const comments = await response.json();

        comments.forEach(function (comment) {
            const card = document.createElement('div');
            card.className = 'review-card';
            card.innerHTML =
                '<h4>' + comment.name + '</h4>' +
                '<p><i>' + comment.email + '</i></p>' +
                '<p>' + comment.body + '</p>';
            container.appendChild(card);
        });
    } catch (error) {
        container.textContent = 'не вдалося завантажити відгуки.';
        console.error('Помилка:', error);
    }
}

loadReviews();

//МОДАЛЬНЕ ВІКНО
const modal = document.getElementById('modal');

setTimeout(function () {
    modal.classList.add('open');
}, 60000); // 60000 мс = 1 хвилина

document.getElementById('close-modal').addEventListener('click', function () {
    modal.classList.remove('open');
});


//ТЕМА

const hour = new Date().getHours();

if (hour >= 7 && hour < 21) {
    document.body.classList.remove('dark');
} else {
    document.body.classList.add('dark');
}

document.getElementById('theme-toggle').addEventListener('click', function () {
    document.body.classList.toggle('dark');
});