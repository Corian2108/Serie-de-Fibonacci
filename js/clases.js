//Autor: Jeffo
//Tema: Tabla de Fibonacci

class Solver {
    constructor(p, s, m) {
        //Atributos
        this.primero = p;
        this.segundo = s;
        this.maximo = m;

        //Almacen
        this.serie = [1, 2];

        //Metodos
        this.generador = generar;
        this.mostrar = mostrar;
    }
}

//funciones

function generar(p, s, m) {
    if (p + s > m) {
    } else {

        nuevo = p + s;
        fibonacci.serie.push(nuevo);
        return generar(s, nuevo, m);

    }

}

function mostrar() {
    contador(0);
}
var contadorColumna = 0;

function contador(inicio) {
    tope = fibonacci.serie.length;
    if (inicio === tope) {
        fibonacci.serie = [];
    } else {
        insertarColumna(inicio);
        return contador(++inicio)
    }
}

var tr = document.createElement("tr");

function insertarColumna(item) {
    var td = document.createElement('td');
    td.appendChild(document.createTextNode(fibonacci.serie[item]));
    tr.appendChild(td);
    contarColumna();
}

function contarColumna() {
    ++contadorColumna
    if (contadorColumna === 3) {
        tr = document.createElement('tr');
        tablaDeDatos.appendChild(tr)
        contadorColumna = 0;
    }
}
