document.addEventListener("DOMContentLoaded", function() {
    const tooltipElements = document.querySelectorAll(".has-tooltip");

    tooltipElements.forEach(function(el) {
        el.addEventListener("click", function(e) {
            e.preventDefault(); // предотвращаем стандартный переход по ссылке

            // Проверяем, существует ли уже активная подсказка
            const currentActiveTooltip = document.querySelector(".tooltip_active");
            if (currentActiveTooltip) {
                currentActiveTooltip.classList.remove("tooltip_active"); // прячем предыдущую подсказку
            }

            // Создаем блок подсказки
            const tooltip = document.createElement("div");
            tooltip.classList.add("tooltip");
            tooltip.textContent = this.title; // используем текст из атрибута title

            // Позиционируем подсказку близко к элементу
            const rect = this.getBoundingClientRect();
            tooltip.style.left = `${rect.left + window.scrollX}px`;
            tooltip.style.top = `${rect.bottom + window.scrollY}px`;

            // Добавляем подсказку в документ
            document.body.appendChild(tooltip);

            // Делаем видимую подсказку
            tooltip.classList.add("tooltip_active");

            // Удаляем подсказку при следующем клике
            this.addEventListener("click", removeTooltip);
        });
    });

    // Удаляет подсказку при втором клике
    function removeTooltip() {
        const currentTooltip = document.querySelector(".tooltip_active");
        if (currentTooltip) {
            currentTooltip.parentNode.removeChild(currentTooltip);
        }
    }
});