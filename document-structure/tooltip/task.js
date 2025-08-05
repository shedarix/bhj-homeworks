document.addEventListener("DOMContentLoaded", function () {
    
    const tooltipContainer = document.createElement("div");
    tooltipContainer.classList.add("tooltip");
    document.body.appendChild(tooltipContainer);

    const tooltipElements = document.querySelectorAll(".has-tooltip");

    tooltipElements.forEach(function(el) {
        el.addEventListener("click", function(e) {
            e.preventDefault(); 
            const isCurrentLinkSameAsTooltip = this.title === tooltipContainer.textContent.trim();

            if (isCurrentLinkSameAsTooltip) {
                tooltipContainer.classList.toggle("tooltip_active");
            } else {
                tooltipContainer.textContent = this.title;
                tooltipContainer.classList.add("tooltip_active");

                const rect = this.getBoundingClientRect();
                tooltipContainer.style.left = `${rect.left + window.scrollX}px`;
                tooltipContainer.style.top = `${rect.bottom + window.scrollY}px`;
            }
        });
    });
});