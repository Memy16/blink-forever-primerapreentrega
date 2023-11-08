console.log("conectado")
let puntos = 0;
let pregunta1 = prompt("Anota la suma de las fechas de nacimiento de todos los miembros de BLACKPINK. (en formato MMDD)");

if (pregunta1 !== null) {
    if (isNaN(pregunta1) || pregunta1 !== "757") {
        alert("Respuesta incorrecta.");
        puntos--;
    } else {
        alert("¡Respuesta correcta!");
        puntos++;
    }
}


for (let intento = 1; intento <= 3; intento++) {
    let pregunta2 = prompt("Escribe el título del primer vídeo de práctica de baile subido al canal oficial de YouTube de BLACKPINK. (Basado en canciones de BLACKPINK)");

    if (pregunta2 !== null) {
        if (!/^[a-zA-Z\s]+$/.test(pregunta2)) {
            alert("Respuesta incorrecta.");
        } else if (["whistle", "whistle", "휘파람"].includes(pregunta2.toLowerCase())) {
            alert("¡Respuesta correcta!");
            puntos++;
            break;  // Si la respuesta es correcta, salimos del bucle.
        } else {
            alert("Respuesta incorrecta.");
            puntos--;
        }
    }
}


/*let pregunta3 = prompt("");

if (pregunta3 !== null) {
    if (!/^[a-zA-Z\s]+$/.test(pregunta3))
        alert("Respuesta incorrecta. Debes responder verdadero o falso.")
    else if (pregunta3.toLowerCase() !== "Falso", "FALSO", "falso") {
        alert("¡Respuesta correcta!");
        puntos++;
    } else {
        alert("Respuesta incorrecta");
        puntos--;
    }
}*/

alert(puntos + "/3 aciertos");