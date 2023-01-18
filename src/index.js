import map from './scripts/map';
import Census from './scripts/census';
import Bea from './scripts/bea';
import Stats from './scripts/stats';
import State from './scripts/state';
import * as Plot from "@observablehq/plot";
import LineChart from '../dist/lineChart';
import { display } from './scripts/treemap';
import { data } from './scripts/datajson';

document.addEventListener('DOMContentLoaded', async () => {
  const mapDiv = document.getElementById('map');
  const statsEl = document.getElementById('stats');
  mapDiv.style.width = '100%';


  // Load map
  const res = await fetch(`https://cdn.jsdelivr.net/npm/us-atlas@3/states-albers-10m.json`)
  const mapJson = await res.json()


  // Fetch and setup data
  const data = await setupData()
  const states = State.setupStates(data);
  const stats = new Stats(statsEl, states);

  const loadMap = map(mapJson, stats, states);
  mapDiv.appendChild(loadMap);

  let alabama = states['Alabama'].populationHist;

  let chartInput = []

  alabama['values'].forEach((ele, i) => {
    let obj = {};

    let date = new Date(`2000-0${i + 1}-01`)
    obj['date'] = date;
    obj['population'] = parseInt(ele.slice(0, 3))
    obj['state'] = 'Alabama'
    chartInput.push(obj)
  })


  let chart = LineChart(chartInput, {
    x: d => d.date,
    y: d => d.population,
    z: d => d.state,
    yDomain: [450, 550],
    yLabel: "↑ Unemployment (%)",
    height: 500,
    width: 500,
    color: "gray",
  })

  let bar = document.getElementById('chart');
  bar.appendChild(chart)


});



const setupData = async () => {
  const census = new Census();
  const bea = new Bea();
  const populationHistorical = await Census.fetchData(census.populationLinks);
  const employmentHistorical = await Census.fetchData(census.employmentLinks);
  const gdpHistorical = await Bea.fetchData(bea.gdpLink);
  const personalIncomeHistorical = await Bea.fetchData(bea.personalIncomeLink);

  const data = {
    'name': '',
    'populationHistorical': populationHistorical,
    'employmentHistorical': employmentHistorical,
    'gdpHistorical': gdpHistorical,
    'personalIncomeHistorical': personalIncomeHistorical,
    'getStatsCensus': census.getStateStats,
    'getStatsBea': bea.getStateStats,
  }

  return data;
}


// const setupLineChart = (data) => {
//   const chart = LineChart(data, {
//     x: d => d.date,
//     y: d => d.population,
//     z: d => d.state,
//     yDomain: [450, 550],
//     yLabel: "↑ Unemployment (%)",
//     height: 500,
//     width: 500,
//     color: "gray",
//   });

//   return chart;
// }
