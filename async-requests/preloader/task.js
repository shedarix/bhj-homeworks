document.addEventListener('DOMContentLoaded', function() {
    const loader = document.getElementById('loader');
    const itemsContainer = document.getElementById('items');

    function loadCurrencyData() {
        loader.classList.add('loader_active'); 

        fetch('https://students.netoservices.ru/nestjs-backend/slow-get-courses')
            .then(response => response.json())
            .then(data => {
                const currencies = data.response.Valute;
                itemsContainer.innerHTML = ''; 

                for (const currencyCode in currencies) {
                    const currency = currencies[currencyCode];
                    const item = document.createElement('div');
                    item.classList.add('item');

                    const code = document.createElement('div');
                    code.classList.add('item__code');
                    code.textContent = currency.CharCode;

                    const value = document.createElement('div');
                    value.classList.add('item__value');
                    value.textContent = currency.Value;

                    const currencySymbol = document.createElement('div');
                    currencySymbol.classList.add('item__currency');
                    currencySymbol.textContent = 'руб.';

                    item.appendChild(code);
                    item.appendChild(value);
                    item.appendChild(currencySymbol);
                    itemsContainer.appendChild(item);
                }

                loader.classList.remove('loader_active'); 
            })
            .catch(error => {
                console.error('Ошибка при загрузке данных:', error);
                loader.classList.remove('loader_active'); 
            });
    }

    loadCurrencyData();
});