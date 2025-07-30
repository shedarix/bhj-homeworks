// Получаем все элементы с классом "reveal"
const reveals = document.querySelectorAll('.reveal');

// Функция для определения видимости элемента
function isInViewport(el) {
    const rect = el.getBoundingClientRect();
    return (
        rect.top <= (window.innerHeight || document.documentElement.clientHeight) &&
        rect.bottom >= 0
    );
}

// Обработчик события прокрутки
function revealOnScroll() {
    reveals.forEach((el) => {
        if (isInViewport(el)) {
            el.classList.add('reveal_active');
        }
    });
}

// Добавляем обработчик события прокрутки
window.addEventListener('scroll', revealOnScroll);

// Сразу выполняем проверку при загрузке страницы
revealOnScroll();