const caloriasPorEjercicio = {
    correr: { baja: 8, media: 10, alta: 12 },
    nadar: { baja: 6, media: 8, alta: 11 },
    bicicleta: { baja: 5, media: 7, alta: 9 }
};

const rutinas = [];
let continuar = true;

while (continuar) {
    const tipoEjercicio = prompt("¿Qué ejercicio realizaste? (correr, nadar, bicicleta)").toLowerCase();
    if (!caloriasPorEjercicio[tipoEjercicio]) {
        alert("Tipo de ejercicio no válido.");
        continue;
    }

    const intensidad = prompt("¿Cuál fue la intensidad? (baja, media, alta)").toLowerCase();
    if (!caloriasPorEjercicio[tipoEjercicio][intensidad]) {
        alert("Intensidad no válida.");
        continue;
    }

    const duracion = parseInt(prompt("¿Cuántos minutos duró el ejercicio?"), 10);
    if (isNaN(duracion) || duracion <= 0) {
        alert("Duración no válida.");
        continue;
    }

    rutinas.push({ tipoEjercicio, intensidad, duracion });

    const respuesta = prompt("¿Deseas ingresar otra rutina? (sí / no)").toLowerCase();
    continuar = (respuesta === "sí" || respuesta === "si");
}

rutinas.forEach((rutina, index) => {
    const caloriasPorMinuto = caloriasPorEjercicio[rutina.tipoEjercicio][rutina.intensidad];
    const totalCalorias = caloriasPorMinuto * rutina.duracion;

    console.log(`Rutina ${index + 1}:`);
    console.log(`  Ejercicio: ${rutina.tipoEjercicio}`);
    console.log(`  Intensidad: ${rutina.intensidad}`);
    console.log(`  Duración: ${rutina.duracion} min`);
    console.log(`  Calorías quemadas: ${totalCalorias} kcal\n`);
});
