const contenedor = document.querySelector(".grupos");
const fragmento = document.createDocumentFragment();

// CAJEROS
let cajero = document.getElementById("nameCajeros");
let cajeros = [];

function crearCajero() {
  cajeros.push(cajero.value);
  cajero.value = "";
  console.log(cajeros);
};

// EMPACADORES
let empacador = document.getElementById("nameEmpacadores");
let empacadores = [];

function crearEmpacador() {
  empacadores.push(empacador.value);
  empacador.value = "";
  console.log(empacadores);
};

// FORMAR EQUIPOS
function generarEquipos() {
  let totalC = cajeros.length;
  let totalE = empacadores.length;

  for(i=0; i<totalC && i<totalE; i++) {
    cajeroAleatorio();
    empacadorAleatorio();
    const item = document.createElement("P");
    item.innerHTML = `${seleccionC} / ${seleccionE} </br>`;
    fragmento.appendChild(item);
  }
  contenedor.appendChild(fragmento);

  function cajeroAleatorio() {
    aleatorio_C = Math.floor(Math.random()*(cajeros.length));
    seleccionC = cajeros[aleatorio_C];
    cajeros.splice(aleatorio_C, 1);
  };

  function empacadorAleatorio() {
    aleatorio_E = Math.floor(Math.random()*(empacadores.length));
    seleccionE = empacadores[aleatorio_E];
    empacadores.splice(aleatorio_E, 1);
  }
};

