document.addEventListener('DOMContentLoaded', () => {
    const book = document.querySelector('.book');
    const fontSizeControls = document.querySelectorAll('.font-size');

    // Переключение размера шрифта
    fontSizeControls.forEach(button => {
        button.addEventListener('click', (event) => {
            event.preventDefault(); // предотвратим переход по ссылке

            // Снимаем класс active со всех кнопок
            fontSizeControls.forEach(btn => btn.classList.remove('font-size_active'));

            // Ставим класс active на текущую кнопку
            button.classList.add('font-size_active');

            // Определяем размер шрифта по атрибуту data-size
            const size = button.dataset.size;

            // Чистим предыдущие классы шрифта
            book.classList.remove('book_fs-small', 'book_fs-big');

            // Устанавливаем нужный класс
            if (size === 'small') {
                book.classList.add('book_fs-small');
            } else if (size === 'big') {
                book.classList.add('book_fs-big');
            }
        });
    });
});