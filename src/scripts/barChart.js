function barChart(data) {
  debugger
  // Declare the chart dimensions and margins.
  const width = 928;
  const height = 500;
  const marginTop = 30;
  const marginRight = 0;
  const marginBottom = 30;
  const marginLeft = 40;

  // Declare the x (horizontal position) scale.
  const x = d3.scaleBand()
      .domain(data.map(d => d.date.getFullYear()).sort((a, b) => a - b))
      .range([marginLeft, width - marginRight])
      .padding(0.5);

  // Declare the y (vertical position) scale.
  const yAxisMin = parseInt(data[0].populationHistorical) - 2;
  const y = d3.scaleLinear()
      .domain([yAxisMin, d3.max(data, (d) => d.populationHistorical + d.populationHistorical * 0.1)])
      .range([height - marginBottom, marginTop])

  // Create the SVG container.
  const svg = d3.create("svg")
      .attr("width", width)
      .attr("height", height)
      .attr("viewBox", [0, 0, width, height])
      .attr("style", "max-width: 100%; height: auto;");

  // Add a rect for each bar.
  svg.append("g")
      .attr("fill", "#29DEF2")
      .selectAll()
      .data(data)
      .join("rect")
      .attr("x", (d) => x(d.date.getFullYear()))
      .attr("y", (d) => y(d.populationHistorical))
      .attr("height", (d) => y(yAxisMin) - y(d.populationHistorical))
      .attr("width", x.bandwidth());

  // Add the x-axis and label.
  svg.append("g")
      .attr("transform", `translate(0,${height - marginBottom})`)
      .call(d3.axisBottom(x).tickSizeOuter(0));

  // Add the y-axis and label, and remove the domain line.
  svg.append("g")
      .attr("transform", `translate(${marginLeft},0)`)
      .call(d3.axisLeft(y).tickFormat((y) => (parseFloat(y).toFixed(2))))
      .call(g => g.select(".domain").remove())
      .call(g => g.append("text")
          .attr("x", -marginLeft)
          .attr("y", 10)
          .attr("fill", "currentColor")
          .attr("text-anchor", "start")
          .style("font-size", "12px") // Adjust font size as needed
          .text("Population in Millions"));

  // Return the SVG element.
  return svg.node();
}

export default barChart;
