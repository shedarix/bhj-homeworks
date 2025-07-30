// Ищем все элементы с классом ".reveal"
const reveals = document.querySelectorAll('.reveal');

// Настройки нашего наблюдателя
const options = {
    rootMargin: '-50px 0px', // Параметр rootMargin смещает начало активации элемента ближе к верху окна
    threshold: 0.1 // Часть элемента, которая должна появиться на экране, чтобы началась анимация
};

// Callback-обработчик для IntersectionObserver
const callback = (entries, observer) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('reveal_active');
            observer.unobserve(entry.target); // После появления больше не наблюдаем за данным элементом
        }
    });
};

// Создаем наблюдатель
const observer = new IntersectionObserver(callback, options);

// Начинаем наблюдать за каждым элементом с классом '.reveal'
reveals.forEach(reveal => {
    observer.observe(reveal);
});