document.addEventListener('DOMContentLoaded', () => {
    const rotators = document.querySelectorAll('.rotator');

    rotators.forEach(rotator => {
        const cases = rotator.querySelectorAll('.rotator__case');
        let currentIndex = 0;

        function rotate() {
            const speed = parseInt(cases[currentIndex].dataset.speed) || 1000;
            const color = cases[currentIndex].dataset.color || '#000';


            cases[currentIndex].classList.remove('rotator__case_active');
            cases[currentIndex].style.color = ''; 


            currentIndex = (currentIndex + 1) % cases.length;


            cases[currentIndex].classList.add('rotator__case_active');
            cases[currentIndex].style.color = color;

            setTimeout(() => rotate(), speed);
        }

        rotate();
    });
});