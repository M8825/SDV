import State from "./state";

function map(us, stats, statesObject, setupLineChart) {
  var selection = d3.select("#map");

  selection.style("background-color", "#404040")

  let width = selection._groups[0][0].clientWidth;
  const height = selection._groups[0][0].clientHeight;

  const path = d3.geoPath()

  function zoomed(event) {
    const {transform} = event;
    g.attr("transform", transform);
    g.attr("stroke-width", 1 / transform.k);
  }

  const zoom = d3.zoom()
      .scaleExtent([1, 8])
      .on("zoom", zoomed);

  const svg = d3.create("svg")
      .attr("viewBox", [-200, -200, width, height])
      .on("click", reset);

  const g = svg.append("g");

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

  svg.call(zoom);

  function reset() {
    states.transition().style("fill", "#404040");
    svg.transition().duration(750).call(
      zoom.transform,
      d3.zoomIdentity,
      d3.zoomTransform(svg.node()).invert([width / 2, height / 2])
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
