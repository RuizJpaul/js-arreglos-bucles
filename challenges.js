// Reto 1: Suma de Elementos
function sumarElementos(arreglo) {
    // Los estudiantes implementarán esta función
    // Debe retornar la suma de todos los elementos del arreglo
    let suma = 0;
    for(let i=0; i< arreglo.length; i++){
        suma += arreglo[i];
    }
    return suma;
}

// Reto 2: Número Mayor
function encontrarMayor(arreglo) {
    // Los estudiantes implementarán esta función
    // Debe retornar el número más grande del arreglo
    let mayor=0;
    let valor = 0;
    mayor = arreglo[0];
    for(let i = 0; i < arreglo.length; i++){
        if(arreglo[i]>mayor){
            mayor = arreglo[i];
        }
    }
    return mayor;
}

// Reto 3: Filtrar Pares
function filtrarPares(arreglo) {
    // Los estudiantes implementarán esta función
    // Debe retornar un nuevo arreglo solo con los números pares
    let arregloPares = [];
    for(let i = 0; i < arreglo.length; i++){
        if(arreglo[i]%2==0){
            arregloPares.push(arreglo[i])
        }
    }
    return arregloPares;
} 

// Reto 4: Contar Vocales
function contarVocales(texto) {
    // Los estudiantes implementarán esta función
    // Debe retornar el número de vocales en el texto
    let cant = 0;
    for(let i=0; i<texto.length; i++){
        if(texto[i]=="a" || texto[i]=="e" || texto[i]=="i" || texto[i]=="o" || texto[i]=="u"){
            cant++;
        }
    }
    return cant;
}

// Reto 5: Invertir Arreglo
function invertirArreglo(arreglo) {
    // Los estudiantes implementarán esta función
    // Debe retornar un nuevo arreglo con los elementos en orden inverso
    let nuevoArreglo = []
    for(let i=arreglo.length-1; i>-1; i--){
        nuevoArreglo.push(arreglo[i]);
    }
    return nuevoArreglo;
}

// Reto 6: Promedio de Notas
function calcularPromedio(notas) {
    // Los estudiantes implementarán esta función
    // Debe retornar el promedio de las notas
    let suma = 0;
    for(let i=0; i<notas.length; i++){
        suma += notas[i];
    }
    let promedio = suma/notas.length;
    return promedio;
}

// Reto 7: Contador de Letras
function contarLetra(texto, letra) {
    // Los estudiantes implementarán esta función
    // Debe retornar cuántas veces aparece la letra en el texto
    let cant = 0;
    for(let i=0; i<texto.length; i++){
        if(texto[i]==letra){
            cant++;
        }
    }
    return cant;
}

// Reto 8: Elementos Únicos
function obtenerUnicos(arreglo) {
    // Los estudiantes implementarán esta función
    // Debe retornar un nuevo arreglo sin elementos duplicados
    let nuevoArreglo = [];
    let cant;
    for(let i=0; i<arreglo.length; i++){ 
        cant = 0;
        for(let k=0; k<nuevoArreglo.length; k++){
            if(arreglo[i]==nuevoArreglo[k]){
                cant++;
            }
        }
        if(cant>0){
            continue;
        }
        else{
            nuevoArreglo.push(arreglo[i]);
        }
    }
    return nuevoArreglo;
}

// Reto 9: Palíndromo 
function esPalindromo(texto) {
    // Los estudiantes implementarán esta función
    // Debe retornar true si el texto es un palíndromo, false si no
    let ans;
    if(texto.length%2==0){
        let k=texto.length-1;
        for(let i=0; i<texto.length/2; i++){
            if(texto[i]==texto[k]){ 
                ans = true;
            }
            else{
                ans = false;
                break;
            }
            k--;
        }
    }
    else{
        let k=texto.length-1;
        for(let i=0; i<(texto.length-1)/2; i++){
            if(texto[i]==texto[k]){ 
                ans = true;
            }
            else{
                ans = false;
                break;
            }
            k--;
        }
    }
    return ans;
}