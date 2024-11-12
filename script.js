function calculatePay() {
    const hours = parseFloat(document.getElementById('hours').value) || 0;
    const minutes = parseFloat(document.getElementById('minutes').value) || 0;
    const basePay = parseFloat(document.getElementById('basePay').value) || 0;
  
    const pay = 23 * (hours + (minutes * 1.6666 / 100)) - basePay;
    document.getElementById('result').innerText = `Результат: ${pay.toFixed(2)}`;
}

function toggleInput() {
    const inputContainer = document.getElementById('input-container');
    if (inputContainer.classList.contains('visible')) {
        inputContainer.classList.remove('visible');
        inputContainer.classList.add('hidden');
    } else {
        inputContainer.classList.remove('hidden');
        inputContainer.classList.add('visible');
    }
}

// Регистрация service worker
if ('serviceWorker' in navigator) {
    window.addEventListener('load', () => {
        navigator.serviceWorker.register('/service-worker.js')
            .then((registration) => {
                console.log('Service Worker registered with scope:', registration.scope);
            })
            .catch((error) => {
                console.error('Service Worker registration failed:', error);
            });
    });
}
