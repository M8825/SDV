import map from './scripts/map';
import Population from './scripts/population';

// import a_api from './scripts/api_foo.js';
// import census from 'citysdk'


document.addEventListener('DOMContentLoaded', async () => {
  const mapDiv = document.getElementById('map');
  mapDiv.style.width = '50%';


  const res = await fetch(`https://cdn.jsdelivr.net/npm/us-atlas@3/states-albers-10m.json`)
  const mapJson = await res.json()
  const foo = map(mapJson)

  mapDiv.appendChild(foo);

  // const population = new Population();
  // const allYearsPop = await Population.fetchPopulation(population);
  // const alabamaPopulation = population.getStatePopulation('Texas', allYearsPop, 0)
  // const alabamaAll = population.getStatePopulation('Texas', allYearsPop)

  debugger

  const data = await Population.fetchPopulation(links);

  debugger
});
