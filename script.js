function calculatePay() {
            const hours = parseFloat(document.getElementById('hours').value) || 0;
            const minutes = parseFloat(document.getElementById('minutes').value) || 0;
            const basePay = parseFloat(document.getElementById('basePay').value) || 0;
          
            const pay = 25 * (hours + (minutes / 100)) - basePay;
            document.getElementById('result').innerText = `Adjustment: ${pay.toFixed(2)}`;
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
            document.addEventListener('DOMContentLoaded', calculatePay);
