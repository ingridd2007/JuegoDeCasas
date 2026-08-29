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