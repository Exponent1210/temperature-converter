// DOM要素の取得
const celsiusInput = document.getElementById('celsius');
const fahrenheitInput = document.getElementById('fahrenheit');
const toFahrenheitBtn = document.getElementById('toFahrenheit');
const toCelsiusBtn = document.getElementById('toCelsius');
const resultDiv = document.getElementById('result');

// 摂氏から華氏への変換
toFahrenheitBtn.addEventListener('click', () => {
    const celsius = parseFloat(celsiusInput.value);
    if (isNaN(celsius)) {
        resultDiv.textContent = '摂氏の値を入力してください。';
        return;
    }
    const fahrenheit = (celsius * 9/5) + 32;
    resultDiv.textContent = `${celsius}°C は ${fahrenheit.toFixed(2)}°F です。`;
});

// 華氏から摂氏への変換
toCelsiusBtn.addEventListener('click', () => {
    const fahrenheit = parseFloat(fahrenheitInput.value);
    if (isNaN(fahrenheit)) {
        resultDiv.textContent = '華氏の値を入力してください。';
        return;
    }
    const celsius = (fahrenheit - 32) * 5/9;
    resultDiv.textContent = `${fahrenheit}°F は ${celsius.toFixed(2)}°C です。`;
});
