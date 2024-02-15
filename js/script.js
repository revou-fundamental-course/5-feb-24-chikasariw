document.getElementById('temperatureForm').addEventListener('submit', function(event) {
    event.preventDefault();
});

document.getElementById('convertButton').addEventListener('click', function() {
    const celciusInput = document.getElementById('celciusInput');
    const farenheitInput = document.getElementById('farenheitInput');
    const kalkulasi = document.getElementById('kalkulasi');
    const rumusCelcius = document.getElementById('rumusCelcius');
    const rumusFarenheit = document.getElementById('rumusFarenheit');

    if (!isValidNumber(celciusInput.value) || !isValidNumber(farenheitInput.value)) {
        alert('Please enter a valid number in either Celsius or Fahrenheit field.');
        return;
    }

    if (celciusInput.value && !farenheitInput.value) {
        const fahrenheit = celciusToFahrenheit(celciusInput.value);
        farenheitInput.value = fahrenheit;
        kalkulasi.value = `(${celciusInput.value}°C x 9/5) + 32 = ${fahrenheit}°F`;
        rumusCelcius.style.display = 'block';
        rumusFarenheit.style.display = 'none';
    } else if (farenheitInput.value && !celciusInput.value) {
        const celsius = fahrenheitToCelsius(farenheitInput.value);
        celciusInput.value = celsius;
        kalkulasi.value = `(${farenheitInput.value}°F - 32) x 5/9 = ${celsius}°C`;
        rumusCelcius.style.display = 'none';
        rumusFarenheit.style.display = 'block';
    } else {
        alert('Please enter a value in either Celsius or Fahrenheit field.');
    }
});

document.getElementById('reverseButton').addEventListener('click', function() {
    const celciusGroup = document.getElementById('celciusGroup');
    const farenheitGroup = document.getElementById('farenheitGroup');

    const temp = celciusGroup.innerHTML;
    celciusGroup.innerHTML = farenheitGroup.innerHTML;
    farenheitGroup.innerHTML = temp;
});

document.getElementById('resetButton').addEventListener('click', function() {
    document.getElementById('celciusInput').value = '';
    document.getElementById('farenheitInput').value = '';
    document.getElementById('kalkulasi').value = '';
    document.getElementById('rumusCelcius').style.display = 'none';
    document.getElementById('rumusFarenheit').style.display = 'none';
});

function isValidNumber(value) {
    return !isNaN(value) && isFinite(value);
}

function celciusToFahrenheit(celsius) {
    return (celsius * 9 / 5) + 32;
}

function fahrenheitToCelsius(fahrenheit) {
    return (fahrenheit - 32) * 5 / 9;
}
