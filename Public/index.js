const form = document.querySelector('form');
const resultado = document.querySelector('#resultado');

form.addEventListener('submit', (event) => {
  event.preventDefault();
  
  const peso = parseFloat(document.querySelector('#peso').value);
  const altura = parseFloat(document.querySelector('#altura').value);
  
  const imc = peso / (altura ** 2);
  
  resultado.innerHTML = `Seu IMC é: ${imc.toFixed(2)}`;
});