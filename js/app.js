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
            break;  
        } else {
            alert("Respuesta incorrecta.");
            puntos--;
        }
    }
}

alert(puntos + "/2 aciertos");