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

if ('serviceWorker' in navigator) {
    navigator.serviceWorker.register('/sw.js')
    .then(function() { 
        console.log('Service Worker Registered'); 
    });
}
