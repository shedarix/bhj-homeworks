document.addEventListener('DOMContentLoaded', function() {
    const modal = document.getElementById('subscribe-modal');
    const closeButton = document.querySelector('.modal__close');


    if (!readCookie('modalClosed')) {
        modal.classList.add('modal_active');
    }

    closeButton.addEventListener('click', function() {
        modal.classList.remove('modal_active');
        createCookie('modalClosed', true, 365); 
    });
});

function readCookie(name) {
    const value = '; ' + document.cookie;
    const parts = value.split('; ' + name + '=');
    if (parts.length === 2) return parts.pop().split(';').shift();
}

function createCookie(name, value, days) {
    const date = new Date();
    date.setTime(date.getTime() + (days*24*60*60*1000));
    const expires = "expires="+date.toGMTString();
    document.cookie = name+"="+value+"; "+expires+"; path=/";
}