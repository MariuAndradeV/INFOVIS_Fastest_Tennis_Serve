const dataset = {
  datosMujeres: [
    {
      Player: "Venus Williams",
      maxVelocity: 207.6,
      Event: "2007 US Open",
      Type: "Singles",
      Gender: "Female",
      Year: 2007,
      Imagen: "VenusWilliams.png",
    },
    {
      Player: "Kristina Mladenovic",
      maxVelocity: 200.0,
      Event: "2009 French Open",
      Type: "Singles",
      Gender: "Female",
      Year: 2009,
      Imagen: "KristinaMladenovic.jpg",
    },
    {
      Player: "Serena Williams",
      maxVelocity: 207.0,
      Event: "2013 Australian Open",
      Type: "Singles",
      Gender: "Female",
      Year: 2013,
      Imagen: "SerenaWilliams.jpg",
    },
    {
      Player: "Sabine Lisicki",
      maxVelocity: 210.8,
      Event: "2014 Stanford",
      Type: "Singles",
      Gender: "Female",
      Year: 2014,
      Imagen: "SabineLisicki.jpg",
    },
    {
      Player: "Caroline Garcia",
      maxVelocity: 203.0,
      Event: "2016 Fed Cup",
      Type: "Singles",
      Gender: "Female",
      Year: 2016,
      Imagen: "CarolineGarcia.jpeg",
    },
    {
      Player: "Georgina García Pérez",
      maxVelocity: 220.0,
      Event: "2018 Hungarian Ladies Open",
      Type: "Singles",
      Gender: "Female",
      Year: 2018,
      Imagen: "GeorginaGarcia.jpg",
    },
    {
      Player: "Alycia Parks",
      maxVelocity: 207.6,
      Event: "2021 US Open",
      Type: "Singles",
      Gender: "Female",
      Year: 2021,
      Imagen: "AlyciaParks.jpg",
    },
    {
      Player: "Coco Gauff",
      maxVelocity: 206.0,
      Event: "2022 US Open",
      Type: "Singles",
      Gender: "Female",
      Year: 2022,
      Imagen: "CocoGauff.jpeg",
    },
    {
      Player: "Naomi Osaka",
      maxVelocity: 205.0,
      Event: "2024 Abu Dhabi Open",
      Type: "Singles",
      Gender: "Female",
      Year: 2024,
      Imagen: "NaomiOsaka.jpg",
    },
  ],
  datosHombres: [
    {
      Player: "Andy Roddick",
      maxVelocity: 249.4,
      Event: "2004 Davis Cup",
      Type: "Singles",
      Gender: "Male",
      Year: 2004,
      Imagen: "AndyRoddick.jpg",
    },
    {
      Player: "Chris Guccione",
      maxVelocity: 248.0,
      Event: "2006 Davis Cup",
      Type: "Singles",
      Gender: "Male",
      Year: 2006,
      Imagen: "ChrisGuccione.jpg",
    },
    {
      Player: "Ivo Karlović",
      maxVelocity: 251.0,
      Event: "2011 Davis Cup",
      Type: "Doubles",
      Gender: "Male",
      Year: 2011,
      Imagen: "IvoKarlovic.jpg",
    },
    {
      Player: "Sam Groth",
      maxVelocity: 263.4,
      Event: "2012 Busan Open Challenger Tennis",
      Type: "Singles",
      Gender: "Male",
      Year: 2012,
      Imagen: "SamGroth.jpeg",
    },
    {
      Player: "John Isner",
      maxVelocity: 253.0,
      Event: "2016 Davis Cup",
      Type: "Singles",
      Gender: "Male",
      Year: 2016,
      Imagen: "JohnIsner.jpg",
    },
    {
      Player: "Oscar Otte",
      maxVelocity: 243.0,
      Event: "2021 US Open",
      Type: "Singles",
      Gender: "Male",
      Year: 2021,
      Imagen: "OscarOtte.png",
    },
    {
      Player: "Alexei Popyrin",
      maxVelocity: 243.0,
      Event: "2023 Tokyo",
      Type: "Singles",
      Gender: "Male",
      Year: 2023,
      Imagen: "AlexeiPopyrin.jpeg",
    },
    {
      Player: "Giovanni Mpetshi Perricard",
      maxVelocity: 244.6,
      Event: "2024 French Open",
      Type: "Doubles",
      Gender: "Male",
      Year: 2024,
      Imagen: "GiovanniMpetshi.jpg",
    },
    {
      Player: "Ben Shelton",
      maxVelocity: 241.4,
      Event: "2025 BNP Paribas Open (Indian Wells)",
      Type: "Singles",
      Gender: "Male",
      Year: 2025,
      Imagen: "BenShelton.png",
    },
  ],
};

const xMujeres = dataset.datosMujeres.map((jugadora) => jugadora.Year);
const yMujeres = dataset.datosMujeres.map((jugadora) => jugadora.maxVelocity);
const mujeresMinVel = Math.min(...dataset.datosMujeres.map(d => d.maxVelocity));
const mujeresMaxVel = Math.max(...dataset.datosMujeres.map(d => d.maxVelocity));

const mujeres = {
  x: xMujeres,
  y: yMujeres,
  type: "scatter",
  mode: "markers+lines",
  name: "Mujeres",
};

const xHombres = dataset.datosHombres.map((jugador) => jugador.Year);
const yHombres = dataset.datosHombres.map((jugador) => jugador.maxVelocity);
const hombresMaxVel = Math.max(...dataset.datosHombres.map(d => d.maxVelocity));
const hombresMinVel = Math.min(...dataset.datosHombres.map(d => d.maxVelocity));


const hombres = {
  x: xHombres,
  y: yHombres,
  type: "scatter",
  mode: "markers+lines",
  name: "Hombres",
};

const dataGrafica = [mujeres, hombres];

// Calcula primero los últimos puntos de cada serie
const últimoAñoH = xHombres[xHombres.length - 1];
const últimaVeloH = yHombres[yHombres.length - 1];
const últimoAñoM = xMujeres[xMujeres.length - 1];
const últimaVeloM = yMujeres[yMujeres.length - 1];

var layout = {
  // Ejes sin grid líneas
  xaxis: {
    title: {
      text: "Año",
      font: { size: 16, color: "#333", family: "Roboto, sans-serif" }
    },
    tickfont: { size: 14, color: "#333" },
    showgrid: false
  },
  yaxis: {
    title: {
      text: "Velocidad (km/h)",
      font: { size: 16, color: "#333", family: "Roboto, sans-serif" }
    },
    tickfont: { size: 14, color: "#333" },
    showgrid: false
  },
  hovermode: "closest",
  showlegend: false,  // ocultamos la leyenda estándar

  annotations: [
    // Pico masculino
    {
      x: 2012, y: 263.4, xref: "x", yref: "y",
      text: "El saque más rápido de hombres: 263 km/h",
      showarrow: true, arrowhead: 2, ax: 0, ay: -40,
      font: { size: 12, color: "#000" }
    },
    // Pico femenino
    {
      x: 2018, y: 220, xref: "x", yref: "y",
      text: "El saque más rápido de mujeres: 220 km/h",
      showarrow: true, arrowhead: 2, ax: 0, ay: -40,
      font: { size: 12, color: "#000" }
    },

    // Etiqueta final Hombres (junto al último punto)
    {
      x: últimoAñoH, y: últimaVeloH,
      xref: "x", yref: "y",
      text: "Hombres",
      showarrow: false,
      xanchor: "left",
      yanchor: "middle",
      xshift: 10,
      font: { size: 14, color: "#FF7F0E", family: "Roboto, sans-serif" }
    },
    // Etiqueta final Mujeres
    {
      x: últimoAñoM, y: últimaVeloM,
      xref: "x", yref: "y",
      text: "Mujeres",
      showarrow: false,
      xanchor: "left",
      yanchor: "middle",
      xshift: 10,
      font: { size: 14, color: "#1F77B4", family: "Roboto, sans-serif" }
    }
  ]
};

Plotly.newPlot("myDiv", dataGrafica, layout, {
  responsive: true,
  showSendToCloud: true, // si aún quieres esa funcionalidad
});

// hover + info jugador

var myPlot = document.getElementById("myDiv");
var hoverInfo = document.getElementById("hoverinfo");

myPlot.on("plotly_hover", function (dataHover) {
  var infotext = dataHover.points.map(function (d) {
    let playerName = "";
    let playerImage = "";
    let playerEvent = "";

    if (d.curveNumber === 0) {
      // Mujeres
      playerName = dataset.datosMujeres[d.pointIndex].Player;
      playerImage = dataset.datosMujeres[d.pointIndex].Imagen;
      playerEvent = dataset.datosMujeres[d.pointIndex].Event;
    } else if (d.curveNumber === 1) {
      // Hombres
      playerName = dataset.datosHombres[d.pointIndex].Player;
      playerImage = dataset.datosHombres[d.pointIndex].Imagen;
      playerEvent = dataset.datosHombres[d.pointIndex].Event;
    }
    // <strong>
    const imagePath = `img/${playerImage}`;

    return `
      <div class="hover-tooltip textCenter">
        <img src="${imagePath}" alt="${playerName}" class="hover-player-image">
        <div class="hover-text-content">
          <div class="player-name">${playerName}</div>
          <div class="player-detail">  Evento: ${playerEvent}</div>
        </div>
      </div>
  `;
  });

  hoverInfo.innerHTML = infotext.join("<br/>");
});

myPlot.on("plotly_hover", function (dataHover) {
  dataHover.points.map(function (d) {
    var data = [
      {
        type: "indicator",
        value: d.y,
        delta: { reference: 300 },
        gauge: { axis: { visible: false, range: [0, 263.4] } },
        domain: { row: 0, column: 0 },
      },
    ];

    var layout = {
      width: 600,
      height: 300,
      margin: { t: 25, b: 25, l: 25, r: 25 },
      grid: { rows: 2, columns: 2, pattern: "independent" },
      template: {
        data: {
          indicator: [
            {
              title: { text: "Velocidad" },
              mode: "number+gauge",
              delta: { reference: 263.4 },
            },
          ],
        },
      },
    };

    Plotly.newPlot("myDiv2", data, layout, {
      responsive: true,
    });
  });
});



let currentAudio = new Audio("cash-register.mp3");

myPlot.on("plotly_hover", function(dataHover) {
    if (dataHover.points && dataHover.points.length > 0) {
        // Solo necesitamos el primer punto para determinar la curva
        const point = dataHover.points[0];
        const maxVelo = point.curveNumber === 0 ? mujeresMaxVel : hombresMaxVel;
        const minVelo = point.curveNumber === 0 ? mujeresMinVel : hombresMinVel;
        myPlot.setAttribute('data-max-velo', maxVelo);
        myPlot.setAttribute('data-min-velo', minVelo);
    }
});

myPlot.on('plotly_click', function(data) {
    if (data.points && data.points.length > 0) {
        const velocidadAct = data.points[0].y;
        const maxVelo = parseFloat(myPlot.getAttribute('data-max-velo'));
        const minVelo = parseFloat(myPlot.getAttribute('data-min-velo'));
        
        if (isNaN(maxVelo)) {
            console.error("maxVelo is not a number. Hover over the plot first.");
            return;
        }
        
        // Calcular volumen asegurando que esté entre 0.1 y 1.0
        // Usamos 0.1 como mínimo para que siempre sea audible
        let volume = (velocidadAct - minVelo) / (maxVelo - minVelo);
        volume = 0.1 + (volume * 0.9);

        console.log(`Reproduciendo a volumen: ${volume.toFixed(2)}`);
        console.log(`Reproduciendo a act: ${velocidadAct}`);
        console.log(`Reproduciendo a max: ${maxVelo}`);
        console.log(`Reproduciendo a min: ${minVelo}`);
        
        currentAudio.pause();
        currentAudio.currentTime = 0;
        currentAudio.volume = volume;
        
        currentAudio.play().catch(e => {
          console.error("Error al reproducir audio:", e);
          // Intento alternativo para algunos navegadores
            currentAudio.play().catch(e => console.error("Segundo intento fallido:", e));
        });
    }
});
