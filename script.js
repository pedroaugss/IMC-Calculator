const form = document.getElementById('form');
const resultado = document.getElementById('resultado');

form.addEventListener('submit', function (e) {
    e.preventDefault();

    const peso = parseFloat(document.getElementById('peso').value);
    const altura = parseFloat(document.getElementById('altura').value);

    if (isNaN(peso) || isNaN(altura) || peso <= 0 || altura <= 0) {
        resultado.textContent = 'Por favor, insira valores válidos.';
        return;
    }

    const imc = peso / (altura * altura);
    let classificacao = '';

    if (imc < 18.5) {
        classificacao = 'Magreza';
    } else if (imc < 24.9) {
        classificacao = 'Normal';
    } else if (imc < 29.9) {
        classificacao = 'Sobrepeso';
    } else if (imc < 39.9) {
        classificacao = 'Obesidade';
    } else {
        classificacao = 'Obesidade grave';
    }

    resultado.textContent = `Seu IMC é ${imc.toFixed(2)} (${classificacao}).`;
});