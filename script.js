function convertirTemperatura() {
  let entrada = prompt("Ingrese la temperatura en grados Celsius:");

  while (isNaN(entrada)) {
    alert("Por favor, ingrese numnero.");
    entrada = prompt("Ingrese la temperatura en grados Celsius:");
  }

  let celsius = parseFloat(entrada);
  let fahrenheit = (celsius * 9/5) + 32;
  let kelvin = celsius + 273.15;
  /*
  console.log("Grados Fahrenheit: " + fahrenheit);
  console.log("Grados Kelvin: " + kelvin);

  document.write("Grados Fahrenheit: " + fahrenheit);
  document.write("Grados Kelvin: " + kelvin);
  */
  let result = document.getElementById('resultados');
  result.innerHTML = `
    <p>Grados Fahrenheit: ${fahrenheit}</p>
    <p>Grados Kelvin: ${kelvin}</p>
  `;
}
convertirTemperatura();
