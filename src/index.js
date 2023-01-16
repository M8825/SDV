import map from './scripts/map';
import Census from './scripts/census';
import Stats from './scripts/stats';
import State from './scripts/state';

document.addEventListener('DOMContentLoaded', async () => {
  const mapDiv = document.getElementById('map');
  const statsEl = document.getElementById('stats');
  mapDiv.style.width = '100%';


  const res = await fetch(`https://cdn.jsdelivr.net/npm/us-atlas@3/states-albers-10m.json`)
  const mapJson = await res.json()


  // // MAP above
  const data = await setupData()
  const states = State.setupStates(data);
  const stats = new Stats(statsEl, states);

  const loadMap = map(mapJson, stats, states);
  mapDiv.appendChild(loadMap);
});


const setupData = async () => {
  const census = new Census();
  const populationHistorical = await Census.fetchData(census.populationLinks);
  const employmentHistorical = await Census.fetchData(census.employmentLinks);

  const data = {
    'name': '',
    'populationHistorical': populationHistorical,
    'employmentHistorical': employmentHistorical,
    'getStats': census.getStateStats,
  }

  return data;
}
