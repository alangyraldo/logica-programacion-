const num1 = Number(prompt("ingresa el primer numero:"));
const num2 = Number(prompt("ingresa el segundo numero:"));
const num3 = Number(prompt("ingresa el tercer numero:"));

if (isNaN(num1) || isNaN(num2) || isNaN(num3)) {
  document.getElementById("entrada").textContent = "Solo se aceptan números. Recarga la página para intentar de nuevo.";
  console.log("Debes ingresar solo números.");
} else {

let mayor = num1;
if (num2 > mayor) {
    mayor = num2;
}
if (num3 > mayor) {
    mayor = num3;
}


let menor = num1;
if (num2 < menor) {
    menor = num2;
}
if (num3 < menor) {
    menor = num3;
}

const centro = num1 + num2 + num3 - mayor - menor;
document.getElementById("entrada").textContent = "Ingresaste: " + num1 + ", " + num2 + ", " + num3;
document.getElementById("mayor-a-menor").textContent = mayor + ", " + centro + ", " + menor + ".";
document.getElementById("menor-a-mayor").textContent = menor + ", " + centro + ", " + mayor + ".";

console.log(mayor + ", " + centro + ", " + menor + ".");
console.log(menor + ", " + centro + ", " + mayor + ".");
if (num1 === num2 && num2 === num3) {
  document.getElementById("iguales").hidden = false;
  console.log("Los tres números son iguales.");
}
}