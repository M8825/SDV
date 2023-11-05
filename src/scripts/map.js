import State from "./state";
import barChart from "./barChart";

function map(us, stats, statesObject) {
  const selection = d3.select("#map");

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

  svg.call(zoom);
  svg.call(zoom.transform, d3.zoomIdentity.translate(translate[0], translate[1]).scale(scale));

  function reset() {
    // 1. Clear any previous state names
      g.selectAll(".state-name").remove();
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

    // 1. Clear any previous state names
    g.selectAll(".state-name").remove();

    // 2. Calculate the position using bounding box
    let xPos = (x0 + x1) / 2;
    let yPos = (y0 + y1) / 2;

    const bboxWidth = x1 - x0;
    const bboxHeight = y1 - y0;
    let fontSize = Math.min(bboxWidth / 6, bboxHeight / 2, 10); // Adjust the divisors as needed

    const textWidth = this.getBBox().width;
    if(textWidth > bboxWidth) {
        yPos -= 10; // Adjust as needed
    }

    switch (d.properties.name) {
      case 'Tennessee':
        xPos -= 10;
        yPos += 15;
        break;
      case 'New Hampshire':
        fontSize = 5;
        yPos += 5;
        break;
      case 'New Jersey':
        fontSize = 7;
        xPos += 1;
        yPos -= 5;
        break;
      case 'New York':
        yPos += 10;
        break;
      case 'Kentucky':
        xPos += 20;
        yPos += 5;
        break;
      case 'Connecticut':
        yPos += 10;
        break;
      case 'Massachusetts':
        fontSize = 6;
        xPos -= 7;
        yPos += 11;
        break;
      case 'Mississippi':
        fontSize = 8;
        xPos += 3;
        break;
      case 'Florida':
        fontSize = 9;
        xPos += 37;
        break;
      case 'Georgia':
        yPos += 15;
        break;
      case 'Louisiana':
        yPos += 25;
        break;
      case 'Idaho':
        yPos += 35;
        break;
      case 'Virginia':
        xPos += 15;
        yPos += 25;
        break;
      case 'North Carolina':
        xPos += 10;
        yPos += 10;
        break;
      case 'South Carolina':
        xPos += 10;
        break;
      case 'Michigan':
        yPos += 20;
        xPos += 25;
        break;
      case 'Wisconsin':
        yPos += 10;
        break;
      case 'Minnesota':
        xPos -= 15;
        break;
      case 'Oklahoma':
        xPos += 25;
        yPos += 10;
        break;
      case 'Washington':
        xPos += 10;
        yPos += 15;
        break;
      case 'Oregon':
        xPos += 5;
        yPos += 15;
        break;
      case 'California':
        xPos -= 13;
        yPos += 15;
        break;
      case 'Alaska':
        xPos += 35;
        break;
      case 'West Virginia':
        yPos += 8;
        break;
      case 'Texas':
        fontSize = 38;
        xPos += 20;
        break;
    }
    const stateNameText = g.append("text")
        .attr("class", "state-name")
        .attr("x", xPos)
        .attr("y", yPos)
        .attr("text-anchor", "middle")
        .attr("font-size", `${fontSize}px`) // increased font size
        .attr("fill", "black")
        .text(d.properties.name);

    const name = g.selectAll(".state-name");

    if (name.text() === "New Hampshire") {
      name.attr("transform", `rotate(65, ${xPos}, ${yPos})`);
    } else if (name.text() === "West Virginia") {
      name.attr("transform", `rotate(-40, ${xPos}, ${yPos})`);
    } else if (name.text() === "New Jersey") {
      name.attr("transform", `rotate(70, ${xPos}, ${yPos})`);
    } else if (name.text() === "Texas") {
      name.attr("font-weight", "bold")
    } else if (name.text() === "New Mexico") {
      name.attr("transform", `rotate(55, ${xPos}, ${yPos})`);
      name.attr("font-size", "22px")
      name.attr("font-weight", "bold")
    } else if (name.text() === "Arizona") {
      name.attr("transform", `rotate(-40, ${xPos}, ${yPos})`);
      name.attr("font-size", "28px")
      name.attr("font-weight", "bold")
    } else if (name.text() === "Florida") {
      name.attr("transform", `rotate(55, ${xPos}, ${yPos})`);
      name.attr("font-size", "28px")
      name.attr("font-weight", "bold")
    } else if (name.text() === "California") {
      name.attr("transform", `rotate(55, ${xPos}, ${yPos})`);
      name.attr("font-size", "38px")
      name.attr("font-weight", "bold")
    }

    setTimeout(() => {
      stateNameText.style("opacity", 1);
    }, 10);

    let clickedStateName = d.properties.name
    let clickedState = statesObject[clickedStateName]

    // Update statistics box with clicked state data
    stats.update(clickedState)

    // Setup and update bar chart with clicked state and historical population data
    const historicalPopulationObj = State.setUpLineChartHistorical(clickedState.populationHist);
    const chart = barChart(historicalPopulationObj);

    // Grab HTML element and update with new chart instance.
    const barChartEle = document.getElementById('chart');
    barChartEle.removeChild(barChartEle.firstChild);
    barChartEle.appendChild(chart)
  }


  return svg.node();
}

export default map;
