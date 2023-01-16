import map from './scripts/map';
import Population from './scripts/population';
import Stats from './scripts/stats';
import State from './scripts/state';

// import a_api from './scripts/api_foo.js';
// import census from 'citysdk'


document.addEventListener('DOMContentLoaded', async () => {
  const mapDiv = document.getElementById('map');
  mapDiv.style.width = '100%';


  const res = await fetch(`https://cdn.jsdelivr.net/npm/us-atlas@3/states-albers-10m.json`)
  const mapJson = await res.json()


  // MAP above
  const stateNames = ['Alabama', 'Alaska', 'Arizona', 'Arkansas', 'California', 'Colorado', 'Connecticut', 'Delaware', 'Florida', 'Georgia', 'Hawaii', 'Idaho', 'Illinois', 'Indiana', 'Iowa', 'Kansas', 'Kentucky', 'Louisiana', 'Maine', 'Maryland', 'Massachusetts', 'Michigan', 'Minnesota', 'Mississippi', 'Missouri', 'Montana', 'Nebraska', 'Nevada', 'New Hampshire', 'New Jersey', 'New Mexico', 'New York', 'North Carolina', 'North Dakota', 'Ohio', 'Oklahoma', 'Oregon', 'Pennsylvania', 'Rhode Island', 'South Carolina', 'South Dakota', 'Tennessee', 'Texas', 'Utah', 'Vermont', 'Virginia', 'Washington', 'West Virginia', 'Wisconsin', 'Wyoming']

  const population = new Population();
  const allYearsPop = await Population.fetchPopulation(population);
  const alabamaPopulation = population.getStatePopulation('Alabama', allYearsPop, 0)
  // const alabamaAll = population.getStatePopulation('Texas', allYearsPop)

  const data = {
    'name': '',
    'allYearsPop': allYearsPop,
    'population': population.getStatePopulation
  }
  const states = {};

  for (let i = 0; i < 50; i++) {
    data['name'] = stateNames[i];

    states[stateNames[i]] = new State(stateNames[i], data);
  }


  let alabama = new State('Alabama', data);
  let texas = new State('Texas', data);
  let statsEl = document.getElementById('stats')
  let stats = new Stats(statsEl, alabama);
  stats.update(texas)
  const foo = map(mapJson, stats, states)
  mapDiv.appendChild(foo);
});
