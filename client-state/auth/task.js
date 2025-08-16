document.addEventListener('DOMContentLoaded', function() {
    const signinForm = document.getElementById('signin__form');
    const signinBtn = document.getElementById('signin__btn');
    const welcome = document.getElementById('welcome');
    const userIdElement = document.getElementById('user_id');

    function switchToWelcome(userId) {
        signinForm.classList.remove('signin_active');
        welcome.classList.add('welcome_active');
        userIdElement.textContent = userId;
    }


    const userId = localStorage.getItem('userId');
    if (userId) {
        switchToWelcome(userId);
    }

    signinForm.addEventListener('submit', function(event) {
        event.preventDefault();

        const formData = new FormData(signinForm);

        fetch('https://students.netoservices.ru/nestjs-backend/auth', {
            method: 'POST',
            body: formData
        })
        .then(response => response.json())
        .then(data => {
            if (data.success) {

                const userId = data.user_id;

                localStorage.setItem('userId', userId);

            
                switchToWelcome(userId);

                signinForm.reset();
            } else {
                alert('Неверный логин или пароль.');
            }
        })
        .catch(error => {
            console.error('Ошибка:', error);
        });
    });
});