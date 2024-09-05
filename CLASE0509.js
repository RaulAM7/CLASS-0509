
console.log("Mensaje inicial")

console.log(0.1)

console.log("Esto es un n/ un salto de línea")

let frasePrimera = "Esta es la primera frase"
let fraseSegunda = "Esta es la segunda frase "

let sumaFrases = frasePrimera + " y " + fraseSegunda

console.log(sumaFrases)



// Condicionales

let valor1 = true
let valor2 = false

console.log(valor1 != valor2)


let age = 18
let dni = false
let nomina = true


if (age ==18 || dni == true && nomina == false){
    console.log("Decente 1")
} else {
    console.log("Delincuente 1")
}

if (age == 18 || (dni == true && nomina == false)) { // Los parentesis construyen bloques en los condicionales
    console.log("Decente 2")
} else {
    console.log("Delincuente 2")
}


if ( age <= 30){
    console.log("Joven")
} else if ( age <= 40) {
    console.log("Interesante")
} else {
    console.log("Casi jubilado")
}


switch (age){
    case 30:
        console.log("Joven")
    break;
    
    case 40:
        console.log("Interesante")
    default: console.log("Jubilado")
}


for (let i=0; i < 10; i+=1) {
    console.log(i);
}


let a = 0
while (a<10){
   console.log("Print a")
   a++ 
}


let array1 = [1, 2, 3]
let array2 = array1

/* Esto NO solo le da el valor de array 1 al array 2, significa que estan entrelazados
    SI CAMBIAS EL VALOR DE ARRAY 2 CAMBIARAS EL VALOR DE ARRAY 1 TAMBIEN
    WHY?
    PORQUE CUANDO DECLARAS UN ARRAY EL PC LE DA UN ESPACIO EN MEMORIA AL ARRAY DEFINIDO COMO [1, 2, 3]
    Y ESE ARRAY GUARDADO EN MEMORIA SE LLAMA ARRAY 1 Y 2
*/

