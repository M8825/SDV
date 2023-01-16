import map from './scripts/map';
import Population from './scripts/population';
import Stats from './scripts/stats';
import State from './scripts/state';

document.addEventListener('DOMContentLoaded', async () => {
  const mapDiv = document.getElementById('map');
  let statsEl = document.getElementById('stats');
  mapDiv.style.width = '100%';


  const res = await fetch(`https://cdn.jsdelivr.net/npm/us-atlas@3/states-albers-10m.json`)
  const mapJson = await res.json()


  // MAP above
  const data = await setupData()
  const states = State.setupStates(data);
  const stats = new Stats(statsEl, states);

  const loadMap = map(mapJson, stats, states);
  mapDiv.appendChild(loadMap);
});


const setupData = async () => {
  const population = new Population();
  const allYearsPop = await Population.fetchPopulation(population);

  const data = {
    'name': '',
    'allYearsPop': allYearsPop,
    'population': population.getStatePopulation
  }

  return data;
}
