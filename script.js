const lugares = [
  {
    nombre: "Granada",
    foto: "img/granada1.png",
    foto2: "img/granada2.png",
    comunidad: "Andalucía",
    plato: "Remojón granadino",
    monumento: "La Alhambra",
    epoca: "Primavera y otoño",
    descripcion: "Granada es una ciudad a los pies de Sierra Nevada donde se mezclan la herencia árabe y la vida universitaria. Además de la Alhambra, merece la pena perderse por el Albaicín y subir al mirador de San Nicolás al atardecer. Aquí todavía se sigue la costumbre de que cada bebida venga con su tapa gratis."
  },
  {
    nombre: "San Sebastián",
    foto: "img/sansebastian1.png",
    foto2: "img/sansebastian2.png",
    comunidad: "País Vasco",
    plato: "Pintxos y bacalao al pil-pil",
    monumento: "Playa de La Concha",
    epoca: "Verano y septiembre",
    descripcion: "San Sebastián tiene una de las bahías más bonitas del norte, con la playa de La Concha en pleno centro. Es famosa por sus pintxos en los bares de la Parte Vieja y por el Festival de Cine que se celebra cada año. Desde el monte Igueldo se ve toda la bahía."
  },
  {
    nombre: "Asturias",
    foto: "img/asturias1.png",
    foto2: "img/asturias2.png",
    comunidad: "Principado de Asturias",
    plato: "Fabada asturiana",
    monumento: "Lagos de Covadonga",
    epoca: "Primavera y verano",
    descripcion: "Asturias es conocida como el paraíso natural por sus montañas, sus playas y sus pueblos marineros. Los Picos de Europa y los lagos de Covadonga son una parada obligada para quien le guste el senderismo. Para acompañar la fabada, lo típico es una botella de sidra escanciada."
  },
  {
    nombre: "Mallorca",
    foto: "img/mallorca1.png",
    foto2: "img/mallorca2.png",
    comunidad: "Islas Baleares",
    plato: "Ensaimada y sobrasada",
    monumento: "Catedral de Palma",
    epoca: "De mayo a octubre",
    descripcion: "Mallorca es la isla más grande de las Baleares y mezcla calas de agua turquesa con pueblos de montaña en la Sierra de Tramuntana. En Palma destaca la catedral, que se levanta frente al mar. Fuera de verano también es un buen sitio para tranquilizarse, ir en bici o caminar."
  }
];

const textoBienvenida = "Esta página recorre cuatro lugares de España: Granada, San Sebastián, Asturias y Mallorca. Pulsa en cualquier tarjeta para darle la vuelta y ver sus datos principales, y aquí abajo aparecerá una descripción más completa del sitio que elijas.";

const galeria = document.getElementById("galeria");
const imagenInfo = document.getElementById("imagen-info");
const tituloInfo = document.getElementById("titulo-info");
const parrafoInfo = document.getElementById("parrafo-info");

function mostrarBienvenida() {
  imagenInfo.src = "img/bienvenida.png";
  imagenInfo.alt = "Paisaje general de España";
  tituloInfo.textContent = "Bienvenido";
  parrafoInfo.textContent = textoBienvenida;
}

function mostrarLugar(lugar) {
  imagenInfo.src = lugar.foto2;
  imagenInfo.alt = "Otra vista de " + lugar.nombre;
  tituloInfo.textContent = lugar.nombre;
  parrafoInfo.textContent = lugar.descripcion;
}

function quitarGiros() {
  const todas = document.querySelectorAll(".tarjeta");
  todas.forEach(function (t) {
    t.classList.remove("girada");
  });
}

// crea una tarjeta con sus dos caras a partir de un lugar del array
function crearTarjeta(lugar) {
  const tarjeta = document.createElement("div");
  tarjeta.classList.add("tarjeta");
  tarjeta.tabIndex = 0;

  tarjeta.innerHTML = `
    <div class="interior">
      <div class="cara delante">
        <img src="${lugar.foto}" alt="${lugar.nombre}">
        <h3>${lugar.nombre}</h3>
      </div>
      <div class="cara detras">
        <h3>${lugar.nombre}</h3>
        <ul>
          <li><strong>Comunidad</strong>${lugar.comunidad}</li>
          <li><strong>Plato típico</strong>${lugar.plato}</li>
          <li><strong>Imprescindible</strong>${lugar.monumento}</li>
          <li><strong>Mejor época</strong>${lugar.epoca}</li>
        </ul>
      </div>
    </div>
  `;

  // al hacer clic se giran todas a su sitio y solo se da la vuelta la elegida
  tarjeta.addEventListener("click", function () {
    const yaGirada = tarjeta.classList.contains("girada");
    quitarGiros();

    if (yaGirada) {
      mostrarBienvenida();
    } else {
      tarjeta.classList.add("girada");
      mostrarLugar(lugar);
    }
  });

  tarjeta.addEventListener("keydown", function (e) {
    if (e.key === "Enter") {
      tarjeta.click();
    }
  });

  return tarjeta;
}

// recorre el array y mete cada tarjeta en la galería
lugares.forEach(function (lugar) {
  galeria.appendChild(crearTarjeta(lugar));
});

mostrarBienvenida();
