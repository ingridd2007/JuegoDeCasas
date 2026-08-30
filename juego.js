const filas = 10;
const columnas = 10;

const cantCasas = 5;

const jugador1 = {
    id: 1,
    fichas: [
        {fila: 0, columna: 0}
    ]
};

const jugador2 = {
    id: 2,
    fichas: [
        {fila: 9, columna: 9}
    ]
};

const estadoInicial = {
    filas: filas,
    columnas: columnas,
    jugadores: [
        jugador1,
        jugador2
    ],
    casas:[]
};

function crearGenerador(semilla) {
    let estado = semilla;

    return function() {
        let numero = estado += 0xD2B79F5;

        numero = Math.imul(numero ^ numero >>> 15, numero | 1);
        numero ^= numero + Math.imul(numero ^ numero >>> 7, numero | 61);

        return((numero ^ numero >>> 14) >>> 0) / 4294967296;
    }; 
}

function numeroAPosicion(numero) {
    return {
        fila: Math.floor(numero/10),
        columna: numero % 10
    };
}

function posicionOcupada(posicion, casas) {
    for (const casa of casas) {
        if(
            casa.fila === posicion.fila &&
            casa.columna === posicion.columna
        ) {
            return true;
        }
    }
    return false;
}

function generarCasas(semilla) {
    const generador = crearGenerador(semilla);
    const casas = [];

    while (casas.length < cantCasas) {
        const numeroAleatorio = generador();
        const numero = Math.floor(numeroAleatorio * 100);
        const posicion = numeroAPosicion(numero);

        if(
            !posicionOcupada(posicion, casas) &&
            !(posicion.fila === 0 && posicion.columna === 0) &&
            !(posicion.fila === 9 && posicion.columna === 9)
        ) {
            casas.push(posicion);
        }
    }

    return casas;
}

const casas = generarCasas(789);

console.log("Casas generadas:");
console.log(casas);
