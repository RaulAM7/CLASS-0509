
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