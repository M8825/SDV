import State from "./state";

function map(us, stats, statesObject, setupLineChart) {
  var selection = d3.select("#smap");


  let width = selection._groups[0][0].clientWidth - 10;
  const height = selection._groups[0][0].clientHeight - 10;

  const path = d3.geoPath()

  function zoomed(event) {
    const {transform} = event;
    g.attr("transform", transform);
    g.attr("stroke-width", 1 / transform.k);
  }


  const svg = d3.create("svg")
      .attr("viewBox", [0, 0, width, height])
      .on("click", reset);

  const bBox = path.bounds(topojson.feature(us, us.objects.states));
  const scale = 0.95 / Math.max((bBox[1][0] - bBox[0][0]) / width, (bBox[1][1] - bBox[0][1]) / height);
  const translate = [(width - scale * (bBox[1][0] + bBox[0][0])) / 2, (height - scale * (bBox[1][1] + bBox[0][1])) / 2];

  const zoom = d3.zoom()
    .scaleExtent([scale, 8])  // Set the minimum scale to the calculated scale
    .on("zoom", zoomed);

  const g = svg.append("g");

  g.attr("transform", `translate(${translate}) scale(${scale})`);

  const states = g.append("g")
    .style("fill", "#29DEF2")
      .attr("fill", "#172573")
      .attr("cursor", "pointer")
    .selectAll("path")
    .data(topojson.feature(us, us.objects.states).features)
    .join("path")
      .on("click", clicked)
      .attr("d", path);

  states.append("title")
      .text(d => d.properties.name);

  g.append("path")
      .attr("fill", "none")
      .attr("stroke", "black")
      .attr("stroke-linejoin", "round")
      .attr("d", path(topojson.mesh(us, us.objects.states, (a, b) => a !== b)));

  g.append("g")
  .attr("transform", `translate(${translate}) scale(${scale})`);

  svg.call(zoom);

  function reset() {
      states.transition().style("fill", "#404040");
      svg.transition().duration(750).call(
        zoom.transform,
        d3.zoomIdentity.translate(translate[0], translate[1]).scale(scale)
      );
  }


  function clicked(event, d) {
    const [[x0, y0], [x1, y1]] = path.bounds(d);
    event.stopPropagation();
    states.transition().style("fill", "#262626")
    d3.select(this).transition().style("fill", "#29DEF2")
    svg.transition().duration(750).call(
      zoom.transform,
      d3.zoomIdentity
        .translate(width / 2, height / 2)
        .scale(Math.min(3, 0.4 / Math.max((x1 - x0) / width, (y1 - y0) / height)))
        .translate(-(x0 + x1) / 2, -(y0 + y1) / 2),

      d3.pointer(event, svg.node())
    );

    // stats.update(statesObject[d.properties.name])

    let clickedStateName = d.properties.name
    let clickedState = statesObject[clickedStateName]

    stats.update(clickedState)

    let stateData = State.setUpLineChartHistorical(statesObject[clickedStateName].populationHist, clickedStateName);
    let chart = setupLineChart(window['usData'].concat(stateData) )

    let lineChart = document.getElementById('chart');
    lineChart.innerHTML = '';
    lineChart.appendChild(chart)


    // let lineChart = document.getElementById('chart');
  }


  return svg.node();
}

export default map;
