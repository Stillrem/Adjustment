function calculate() {
    const hours = parseFloat(document.getElementById('hours').value);
    const basePay = parseFloat(document.getElementById('basePay').value);

    if (isNaN(hours) || isNaN(basePay)) {
        alert('Пожалуйста, введите корректные числовые значения');
        return;
    }

    const hourlyRate = basePay / hours;
    const difference = 23 - hourlyRate;
    const additionalPay = hours * difference;

    const resultElement = document.getElementById('result');
    resultElement.style.display = 'block';
    resultElement.innerHTML = `
        Почасовая ставка: $${hourlyRate.toFixed(2)}<br>
        Разница со ставкой $23: $${difference.toFixed(2)}<br>
        Дополнительная оплата: $${additionalPay.toFixed(2)}
    `;
}

// Регистрация service worker
if ('serviceWorker' in navigator) {
                navigator.serviceWorker.register('/service-worker.js')
                .then(registration => {
                    console.log('Service Worker registered with scope:', registration.scope);
                })
                .catch(error => {
                    console.error('Service Worker registration failed:', error);
                });
            }

            document.addEventListener('dblclick', function(event) {
                event.preventDefault();
            }, { passive: false })

function updateGradient() {
    const root = document.documentElement;
    root.style.setProperty('--hue1', Math.random() * 360);
    root.style.setProperty('--hue2', Math.random() * 360);
    root.style.setProperty('--hue3', Math.random() * 360);
    root.style.setProperty('--hue4', Math.random() * 360);
}

setInterval(updateGradient, 5000); // Обновляем цвета каждые 5 секунд
updateGradient(); // Инициализация цветов
