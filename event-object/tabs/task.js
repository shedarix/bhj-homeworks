// Получаем контейнер с вкладками и содержанием
const tabsContainer = document.querySelector('#tabs1');
if (!tabsContainer) throw new Error('Нет контейнера вкладок');

// Получаем навигацию (названия вкладок) и содержимое вкладок
const navigationTabs = tabsContainer.querySelectorAll('.tab');
const contentTabs = tabsContainer.querySelectorAll('.tab__content');

// Назначаем обработчик событий на каждую вкладку
navigationTabs.forEach((navItem, index) => {
    navItem.addEventListener('click', () => {
        // Убираем активные классы со всех вкладок и их содержимого
        navigationTabs.forEach(nav => nav.classList.remove('tab_active'));
        contentTabs.forEach(content => content.classList.remove('tab__content_active'));

        // Ставим активные классы на текущую вкладку и её содержимое
        navItem.classList.add('tab_active');
        contentTabs[index].classList.add('tab__content_active');
    });
});