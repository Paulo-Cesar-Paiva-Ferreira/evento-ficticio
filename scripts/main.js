

const dataDoEvento = new Date("jan 7, 2024 19:00:00");
const timeStampDoEvento = dataDoEvento.getTime();

const contaAsHoras = setInterval(function() {
    const agora = new Date();
    const timeStampAtual = agora.getTime();


    const diaEmMilesegundos = 1000 * 60 * 60 * 24;
    const horasEmMilessegundos = 1000 * 60 * 60;
    const minutoEmMilesegundos = 1000 * 60;

    const distanciaAteOEvento = timeStampDoEvento - timeStampAtual;
    // recupera os dias
    const diasAteOEvento = Math.floor(distanciaAteOEvento / diaEmMilesegundos);
    // recupera as horas
    const horasAteOEvento = Math.floor((distanciaAteOEvento % diaEmMilesegundos ) / horasEmMilessegundos);
    // recupera os minutos 
    const minutosAteOEvento = Math.floor((distanciaAteOEvento % horasEmMilessegundos) / minutoEmMilesegundos);
    //recupera os segundos 
    const segundosAteOEvento =  Math.floor((distanciaAteOEvento % minutoEmMilesegundos  / 1000));


    console.log(diasAteOEvento);
    console.log(horasAteOEvento);
    console.log(minutosAteOEvento);
    console.log(segundosAteOEvento);

    document.getElementById('contador').innerHTML = `${diasAteOEvento}d ${horasAteOEvento}h ${minutosAteOEvento}m ${segundosAteOEvento}s`;

    if (distanciaAteOEvento < 0 ) {
        clearInterval(contaAsHoras);
        document.getElementById('contador').innerHTML = 'Evento expirado'
    }
},1000);