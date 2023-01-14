import map from './scripts/map';

document.addEventListener('DOMContentLoaded', async () => {
  const mapDiv = document.getElementById('map');
  mapDiv.style.width = '50%';


  const res = await fetch(`https://cdn.jsdelivr.net/npm/us-atlas@3/states-albers-10m.json`)
  const mapJson = await res.json()
  const foo = map(mapJson)

  mapDiv.appendChild(foo);


});
