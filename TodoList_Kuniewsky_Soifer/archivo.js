let listaTareas = [];
let i = 0;


function AgregarTarea() {
    let nombreTarea = document.getElementById("Tarea").value;
    console.log(nombreTarea)
    const fechaActual = new Date();
    const horas = fechaActual.getHours();
    const minutos = fechaActual.getMinutes();
    const segundos = fechaActual.getSeconds();

    i++;
    const obj = {
        id: i,
        nombre: nombreTarea,
        fechaCreacionMostrar: horas + ':' + minutos + ':' + segundos,
        fechaCreacion: Date.now(),
        fechaTachado: null,
        check: false
    };
    listaTareas.push(obj);
    MostrarTodos();

}

function TacharTarea(id) {

    listaTareas.map(obj => {
        if (obj.id == id) {
            if (obj.check == false) {
                console.log(obj.check)
                obj.check = true;
                const fechaActual = new Date();
                const horas = fechaActual.getHours();
                const minutos = fechaActual.getMinutes();
                const segundos = fechaActual.getSeconds();
                obj.fechaTachadoMostrar = horas + ':' + minutos + ':' + segundos;
                obj.fechaTachado = Date.now();
            } else {
                console.log(obj.check)
                obj.check = false;
                obj.fechaTachado = null;
            }
        }

    })
    MostrarTodos();

}

function MostrarTodos() {
    let elemento = document.querySelector("#contenedor");
    elemento.innerHTML = ' ';

    listaTareas.map((obj) => {
        const { id, nombre, fechaCreacion, check } = obj;
        if (obj.check == true) {
            elemento.innerHTML +=
                `
            <li id="${obj.id}">
                <input checked name="tarea" type="checkbox" onchange="TacharTarea(${obj.id})"/> 
                <label for="tarea" class="textoTachado">(${obj.nombre}) tachado a las: (${obj.fechaTachadoMostrar})</label>

            </li>
            `;
        } else {
            elemento.innerHTML +=
                `
            <li id="${obj.id}">
                <input name="tarea" type="checkbox" onchange="TacharTarea(${obj.id})"/>
                <label for="tarea">${obj.nombre} creado a las (${obj.fechaCreacionMostrar})</label>                
               
            `;
        }
    });

}





function TareaMasRapida() {

    var tareamasrapida = 99999999999999999999999999999999999999999999999999999999999999999999999;
    var aux = 0;
    var tarea;

    for (let i = 0; i < listaTareas.length; i++) {
        if (listaTareas[i].check == true) {
            aux = listaTareas[i].fechaTachado = listaTareas[i].fechaCreacion
            if (aux < tareamasrapida) {
                tareamasrapida = aux;
                tarea = listaTareas[i].nombre
            }
        }
    }


    var elemento = document.querySelector("#fridu").innerHTML += "<p>-La tarea que mas rapido se realizo fue " + tarea + "</p>"
}