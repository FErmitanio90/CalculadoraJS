//Esto agrega a la pantalla el valor del botón que clickeemos en la calculadora
function agregar(valor){
    document.getElementById('pantalla').value += valor
}
//Esto vacía la pantalla
function borrar(){
    document.getElementById('pantalla').value = ''
}
//Esto ejecuta el cálculo
function calcular(){
    const valorPantalla = document.getElementById('pantalla').value
    const resultado = eval(valorPantalla)
    document.getElementById('pantalla').value = resultado
}