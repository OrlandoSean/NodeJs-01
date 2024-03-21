function nombreElegante(nombre) {
    // Verificar si el nombre comienza y termina con la letra 'a'
    if (nombre.charAt(0) === 'a' && nombre.charAt(nombre.length - 1) === 'a') {
        return true;
    } else {
        return false;
    }
}

const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question('Ingrese un nombre : ', (nombre) => {
    // Llamar a la función y mostrar el resultado
    console.log(nombreElegante(nombre));
    rl.close();
});