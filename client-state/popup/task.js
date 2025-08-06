document.addEventListener('DOMContentLoaded', function() {
    const modal = document.getElementById('subscribe-modal');
    const closeButton = document.querySelector('.modal__close');

    
    if (!localStorage.getItem('modalClosed')) {
        modal.classList.add('modal_active');
    }

    closeButton.addEventListener('click', function() {
        modal.classList.remove('modal_active');
        localStorage.setItem('modalClosed', true);
    });
});