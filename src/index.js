import Example from './scripts/example';
import chart from './scripts/map';
import * as topojson from "topojson";
import map from './scripts/map';


document.addEventListener('DOMContentLoaded', async () => {
  const res = await fetch(`https://cdn.jsdelivr.net/npm/us-atlas@3/states-albers-10m.json`)
  const mapJson = await res.json()
  const foo = map(mapJson)

  console.log(foo)
});
