// import {Choropleth, Legend} from d3
const Papa = require('papaparse');


function Choropleth(data, {
  id = d => d.id, // given d in data, returns the feature id
  value = () => undefined, // given d in data, returns the quantitative value
  title, // given a feature f and possibly a datum d, returns the hover text
  format, // optional format specifier for the title
  scale = d3.scaleSequential, // type of color scale
  domain, // [min, max] values; input of color scale
  range = d3.interpolateBlues, // output of color scale
  width = 640, // outer width, in pixels
  height, // outer height, in pixels
  // projection, // a D3 projection; null for pre-projected geometry
  features, // a GeoJSON feature collection
  featureId = d => d.id, // given a feature, returns its id
  borders, // a GeoJSON object for stroking borders
  // outline = projection && projection.rotate ? { type: "Sphere" } : null, // a GeoJSON object for the background
  unknown = "#ccc", // fill color for missing data
  // fill = "white", // fill color for outline
  stroke = "white", // stroke color for borders
  strokeLinecap = "round", // stroke line cap for borders
  strokeLinejoin = "round", // stroke line join for borders
  strokeWidth, // stroke width for borders
  strokeOpacity, // stroke opacity for borders
} = {}) {


  debugger
  // Compute values.
  const N = d3.map(data, id);
  const V = d3.map(data, value).map(d => d == null ? NaN : +d);
  const Im = new d3.InternMap(N.map((id, i) => [id, i]));
  const If = d3.map(features.features, featureId);

  // Compute default domains.
  if (domain === undefined) domain = d3.extent(V);

  // Construct scales.
  const color = scale(domain, range);
  debugger
  if (color.unknown && unknown !== undefined) color.unknown(unknown);

  // Compute titles.
  if (title === undefined) {
    format = color.tickFormat(100, format);
    title = (f, i) => `${f.properties.name}\n${format(V[i])}`;
  } else if (title !== null) {
    const T = title;
    const O = d3.map(data, d => d);
    title = (f, i) => T(f, O[i]);
  }

  // Compute the default height. If an outline object is specified, scale the projection to fit
  // the width, and then compute the corresponding height.
  const projection = d3.geoMercator()
    .scale(130)
    .translate([width / 2, height / 1.5]);

  // Construct a path generator.
  const path = d3.geoPath().projection(projection);

  const svg = d3.create("svg")
    .attr("width", width)
    .attr("height", height)
    .attr("viewBox", [0, 0, width, height])
    .attr("style", "width: 100%; height: auto; height: intrinsic;");

  // if (outline != null) svg.append("path")
  //   .attr("fill", fill)
  //   .attr("stroke", "currentColor")
  //   .attr("d", path(outline));

  svg.append("g")
    .selectAll("path")
    .data(features.features)
    .join("path")
    .attr("fill", (d, i) => color(V[Im.get(If[i])]))
    .attr("d", path)
    .append("title")
    .text((d, i) => title(d, Im.get(If[i])));

  if (borders != null) svg.append("path")
    .attr("pointer-events", "none")
    .attr("fill", "none")
    .attr("stroke", stroke)
    .attr("stroke-linecap", strokeLinecap)
    .attr("stroke-linejoin", strokeLinejoin)
    .attr("stroke-width", strokeWidth)
    .attr("stroke-opacity", strokeOpacity)
    .attr("d", path(borders));

  return Object.assign(svg.node(), { scales: { color } });
}


async function parseCsv() {
  const response = await fetch("../src/imgs/hale.csv");
  const data = await response.text();
  const parsedData = Papa.parse(data).data;
  return parsedData;
}


async function worldMapDraw(d) {
  const hale = await parseCsv();

  const countries = topojson.feature(d, d.objects.countries)
  const countriesMap = new Map(countries.features.map(d => [d.id, d]))
  const countrymesh = topojson.mesh(d, d.objects.countries, (a, b) => a !== b)

  debugger
  const chart = Choropleth(hale, {
    id: d => d.id,
    value: d => d.rate,
    scale: d3.scaleQuantize,
    domain: [1, 10],
    range: d3.schemeBlues[9],
    title: f => `${f.properties.name}`,
    features: countries,
    borders: countrymesh,
    width: 975,
    height: 610
  });


  return chart;
}

// const worldMapDraw = (worldMapJson) => {
//   const width = 960;
//   const height = 500;


//   function zoomed(event) {
//     const { transform } = event;
//     g.attr("transform", transform);
//     g.attr("stroke-width", 1 / transform.k);
//   }

//   const zoom = d3.zoom()
//     .scaleExtent([1, 100])
//     .on("zoom", zoomed);

//   const projection = d3.geoMercator()
//     .scale(130)
//     .translate([width / 2, height / 1.5]);

//   const path = d3.geoPath().projection(projection);


//   const svg = d3.create("svg")
//     .attr("viewBox", [0, 0, width, height])
//     .on("click", reset);

//   const g = svg.append("g");

//   const countries = g.append("g")
//     .attr("fill", "black")
//     .attr("cursor", "pointer")
//     .selectAll("path")
//     .data(topojson.feature(worldMapJson, worldMapJson.objects.countries).features)
//     .join("path")
//     .on("click", clicked)
//     .attr("d", path);

//   countries.append("title")
//     .text(d => d.properties.name);

//   g.append("path")
//     .attr("fill", "none")
//     .attr("stroke", "white")
//     .attr("stroke-linejoin", "round")
//     .attr("d", path(topojson.mesh(worldMapJson, worldMapJson.objects.countries, (a, b) => a !== b)));

//   svg.call(zoom);

//   function reset() {
//     countries.transition().style("fill", null);
//     svg.transition().duration(750).call(
//       zoom.transform,
//       d3.zoomIdentity,
//       d3.zoomTransform(svg.node()).invert([width / 2, height / 2])
//     );
//   }

//   function clicked(event, d) {
//     const [[x0, y0], [x1, y1]] = path.bounds(d);
//     event.stopPropagation();
//     countries.transition().style("fill", null);
//     d3.select(this).transition().style("fill", "yellow");
//     svg.transition().duration(750).call(
//       zoom.transform,
//       d3.zoomIdentity
//         .translate(width / 2, height / 2)
//         .scale(Math.min(8, 0.9 / Math.max((x1 - x0) / width, (y1 - y0) / height)))
//         .translate(-(x0 + x1) / 2, -(y0 + y1) / 2),
//       d3.pointer(event, svg.node())
//     );
//   }

//   return svg.node();
// }


export default worldMapDraw;



// Move into DOMContentLoaded
  // world map
  const worldMap = await fetch('https://cdn.jsdelivr.net/npm/world-atlas@2/countries-50m.json')
  const worldMapJson = await worldMap.json()
  const worldMapRes = await worldMapDraw(worldMapJson)

  const worldMapDiv = document.getElementById('world-map');
  debugger
  worldMapDiv.append(worldMapRes)
