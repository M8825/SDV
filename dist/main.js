/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (function() { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _scripts_map__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./scripts/map */ \"./src/scripts/map.js\");\n/* harmony import */ var _scripts_population__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./scripts/population */ \"./src/scripts/population.js\");\n\n\n\n// import a_api from './scripts/api_foo.js';\n// import census from 'citysdk'\n\ndocument.addEventListener('DOMContentLoaded', async () => {\n  const mapDiv = document.getElementById('map');\n  mapDiv.style.width = '50%';\n  const res = await fetch(`https://cdn.jsdelivr.net/npm/us-atlas@3/states-albers-10m.json`);\n  const mapJson = await res.json();\n  const foo = (0,_scripts_map__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(mapJson);\n  mapDiv.appendChild(foo);\n\n  // const population = new Population();\n  // const allYearsPop = await Population.fetchPopulation(population);\n  // const alabamaPopulation = population.getStatePopulation('Texas', allYearsPop, 0)\n  // const alabamaAll = population.getStatePopulation('Texas', allYearsPop)\n\n  debugger;\n  const data = await _scripts_population__WEBPACK_IMPORTED_MODULE_1__[\"default\"].fetchPopulation(links);\n  debugger;\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvaW5kZXguanMuanMiLCJtYXBwaW5ncyI6Ijs7O0FBQWdDO0FBQ2M7O0FBRTlDO0FBQ0E7O0FBR0FFLFFBQVEsQ0FBQ0MsZ0JBQWdCLENBQUMsa0JBQWtCLEVBQUUsWUFBWTtFQUN4RCxNQUFNQyxNQUFNLEdBQUdGLFFBQVEsQ0FBQ0csY0FBYyxDQUFDLEtBQUssQ0FBQztFQUM3Q0QsTUFBTSxDQUFDRSxLQUFLLENBQUNDLEtBQUssR0FBRyxLQUFLO0VBRzFCLE1BQU1DLEdBQUcsR0FBRyxNQUFNQyxLQUFLLENBQUUsZ0VBQStELENBQUM7RUFDekYsTUFBTUMsT0FBTyxHQUFHLE1BQU1GLEdBQUcsQ0FBQ0csSUFBSSxFQUFFO0VBQ2hDLE1BQU1DLEdBQUcsR0FBR1osd0RBQUcsQ0FBQ1UsT0FBTyxDQUFDO0VBRXhCTixNQUFNLENBQUNTLFdBQVcsQ0FBQ0QsR0FBRyxDQUFDOztFQUV2QjtFQUNBO0VBQ0E7RUFDQTs7RUFFQTtFQUVBLE1BQU1FLElBQUksR0FBRyxNQUFNYiwyRUFBMEIsQ0FBQ2UsS0FBSyxDQUFDO0VBRXBEO0FBQ0YsQ0FBQyxDQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vbXktd2VicGFjay1wcm9qZWN0Ly4vc3JjL2luZGV4LmpzP2I2MzUiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IG1hcCBmcm9tICcuL3NjcmlwdHMvbWFwJztcbmltcG9ydCBQb3B1bGF0aW9uIGZyb20gJy4vc2NyaXB0cy9wb3B1bGF0aW9uJztcblxuLy8gaW1wb3J0IGFfYXBpIGZyb20gJy4vc2NyaXB0cy9hcGlfZm9vLmpzJztcbi8vIGltcG9ydCBjZW5zdXMgZnJvbSAnY2l0eXNkaydcblxuXG5kb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdET01Db250ZW50TG9hZGVkJywgYXN5bmMgKCkgPT4ge1xuICBjb25zdCBtYXBEaXYgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbWFwJyk7XG4gIG1hcERpdi5zdHlsZS53aWR0aCA9ICc1MCUnO1xuXG5cbiAgY29uc3QgcmVzID0gYXdhaXQgZmV0Y2goYGh0dHBzOi8vY2RuLmpzZGVsaXZyLm5ldC9ucG0vdXMtYXRsYXNAMy9zdGF0ZXMtYWxiZXJzLTEwbS5qc29uYClcbiAgY29uc3QgbWFwSnNvbiA9IGF3YWl0IHJlcy5qc29uKClcbiAgY29uc3QgZm9vID0gbWFwKG1hcEpzb24pXG5cbiAgbWFwRGl2LmFwcGVuZENoaWxkKGZvbyk7XG5cbiAgLy8gY29uc3QgcG9wdWxhdGlvbiA9IG5ldyBQb3B1bGF0aW9uKCk7XG4gIC8vIGNvbnN0IGFsbFllYXJzUG9wID0gYXdhaXQgUG9wdWxhdGlvbi5mZXRjaFBvcHVsYXRpb24ocG9wdWxhdGlvbik7XG4gIC8vIGNvbnN0IGFsYWJhbWFQb3B1bGF0aW9uID0gcG9wdWxhdGlvbi5nZXRTdGF0ZVBvcHVsYXRpb24oJ1RleGFzJywgYWxsWWVhcnNQb3AsIDApXG4gIC8vIGNvbnN0IGFsYWJhbWFBbGwgPSBwb3B1bGF0aW9uLmdldFN0YXRlUG9wdWxhdGlvbignVGV4YXMnLCBhbGxZZWFyc1BvcClcblxuICBkZWJ1Z2dlclxuXG4gIGNvbnN0IGRhdGEgPSBhd2FpdCBQb3B1bGF0aW9uLmZldGNoUG9wdWxhdGlvbihsaW5rcyk7XG5cbiAgZGVidWdnZXJcbn0pO1xuIl0sIm5hbWVzIjpbIm1hcCIsIlBvcHVsYXRpb24iLCJkb2N1bWVudCIsImFkZEV2ZW50TGlzdGVuZXIiLCJtYXBEaXYiLCJnZXRFbGVtZW50QnlJZCIsInN0eWxlIiwid2lkdGgiLCJyZXMiLCJmZXRjaCIsIm1hcEpzb24iLCJqc29uIiwiZm9vIiwiYXBwZW5kQ2hpbGQiLCJkYXRhIiwiZmV0Y2hQb3B1bGF0aW9uIiwibGlua3MiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/index.js\n");

/***/ }),

/***/ "./src/scripts/map.js":
/*!****************************!*\
  !*** ./src/scripts/map.js ***!
  \****************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\nfunction map(us) {\n  const width = 975;\n  const height = 610;\n  const path = d3.geoPath();\n  function zoomed(event) {\n    const {\n      transform\n    } = event;\n    g.attr(\"transform\", transform);\n    g.attr(\"stroke-width\", 1 / transform.k);\n  }\n  const zoom = d3.zoom().scaleExtent([1, 100]).on(\"zoom\", zoomed);\n  const svg = d3.create(\"svg\").attr(\"viewBox\", [0, 0, width, height]).on(\"click\", reset);\n  const g = svg.append(\"g\");\n  const states = g.append(\"g\").attr(\"fill\", \"black\").attr(\"cursor\", \"pointer\").selectAll(\"path\").data(topojson.feature(us, us.objects.states).features).join(\"path\").on(\"click\", clicked).attr(\"d\", path);\n  states.append(\"title\").text(d => d.properties.name);\n  g.append(\"path\").attr(\"fill\", \"none\").attr(\"stroke\", \"white\").attr(\"stroke-linejoin\", \"round\").attr(\"d\", path(topojson.mesh(us, us.objects.states, (a, b) => a !== b)));\n  svg.call(zoom);\n  function reset() {\n    states.transition().style(\"fill\", null);\n    svg.transition().duration(750).call(zoom.transform, d3.zoomIdentity, d3.zoomTransform(svg.node()).invert([width / 2, height / 2]));\n  }\n  function clicked(event, d) {\n    const [[x0, y0], [x1, y1]] = path.bounds(d);\n    event.stopPropagation();\n    states.transition().style(\"fill\", null);\n    d3.select(this).transition().style(\"fill\", \"yellow\");\n    svg.transition().duration(750).call(zoom.transform, d3.zoomIdentity.translate(width / 2, height / 2).scale(Math.min(8, 0.9 / Math.max((x1 - x0) / width, (y1 - y0) / height))).translate(-(x0 + x1) / 2, -(y0 + y1) / 2), d3.pointer(event, svg.node()));\n  }\n  return svg.node();\n}\n/* harmony default export */ __webpack_exports__[\"default\"] = (map);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvc2NyaXB0cy9tYXAuanMuanMiLCJtYXBwaW5ncyI6IjtBQUFBLFNBQVNBLEdBQUcsQ0FBQ0MsRUFBRSxFQUFFO0VBQ2YsTUFBTUMsS0FBSyxHQUFHLEdBQUc7RUFDakIsTUFBTUMsTUFBTSxHQUFHLEdBQUc7RUFFbEIsTUFBTUMsSUFBSSxHQUFHQyxFQUFFLENBQUNDLE9BQU8sRUFBRTtFQUV6QixTQUFTQyxNQUFNLENBQUNDLEtBQUssRUFBRTtJQUNyQixNQUFNO01BQUNDO0lBQVMsQ0FBQyxHQUFHRCxLQUFLO0lBQ3pCRSxDQUFDLENBQUNDLElBQUksQ0FBQyxXQUFXLEVBQUVGLFNBQVMsQ0FBQztJQUM5QkMsQ0FBQyxDQUFDQyxJQUFJLENBQUMsY0FBYyxFQUFFLENBQUMsR0FBR0YsU0FBUyxDQUFDRyxDQUFDLENBQUM7RUFDekM7RUFFQSxNQUFNQyxJQUFJLEdBQUdSLEVBQUUsQ0FBQ1EsSUFBSSxFQUFFLENBQ2pCQyxXQUFXLENBQUMsQ0FBQyxDQUFDLEVBQUUsR0FBRyxDQUFDLENBQUMsQ0FDckJDLEVBQUUsQ0FBQyxNQUFNLEVBQUVSLE1BQU0sQ0FBQztFQUV2QixNQUFNUyxHQUFHLEdBQUdYLEVBQUUsQ0FBQ1ksTUFBTSxDQUFDLEtBQUssQ0FBQyxDQUN2Qk4sSUFBSSxDQUFDLFNBQVMsRUFBRSxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUVULEtBQUssRUFBRUMsTUFBTSxDQUFDLENBQUMsQ0FDdENZLEVBQUUsQ0FBQyxPQUFPLEVBQUVHLEtBQUssQ0FBQztFQUV2QixNQUFNUixDQUFDLEdBQUdNLEdBQUcsQ0FBQ0csTUFBTSxDQUFDLEdBQUcsQ0FBQztFQUV6QixNQUFNQyxNQUFNLEdBQUdWLENBQUMsQ0FBQ1MsTUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUN2QlIsSUFBSSxDQUFDLE1BQU0sRUFBRSxPQUFPLENBQUMsQ0FDckJBLElBQUksQ0FBQyxRQUFRLEVBQUUsU0FBUyxDQUFDLENBQzNCVSxTQUFTLENBQUMsTUFBTSxDQUFDLENBQ2pCQyxJQUFJLENBQUNDLFFBQVEsQ0FBQ0MsT0FBTyxDQUFDdkIsRUFBRSxFQUFFQSxFQUFFLENBQUN3QixPQUFPLENBQUNMLE1BQU0sQ0FBQyxDQUFDTSxRQUFRLENBQUMsQ0FDdERDLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FDVlosRUFBRSxDQUFDLE9BQU8sRUFBRWEsT0FBTyxDQUFDLENBQ3BCakIsSUFBSSxDQUFDLEdBQUcsRUFBRVAsSUFBSSxDQUFDO0VBRXBCZ0IsTUFBTSxDQUFDRCxNQUFNLENBQUMsT0FBTyxDQUFDLENBQ2pCVSxJQUFJLENBQUNDLENBQUMsSUFBSUEsQ0FBQyxDQUFDQyxVQUFVLENBQUNDLElBQUksQ0FBQztFQUVqQ3RCLENBQUMsQ0FBQ1MsTUFBTSxDQUFDLE1BQU0sQ0FBQyxDQUNYUixJQUFJLENBQUMsTUFBTSxFQUFFLE1BQU0sQ0FBQyxDQUNwQkEsSUFBSSxDQUFDLFFBQVEsRUFBRSxPQUFPLENBQUMsQ0FDdkJBLElBQUksQ0FBQyxpQkFBaUIsRUFBRSxPQUFPLENBQUMsQ0FDaENBLElBQUksQ0FBQyxHQUFHLEVBQUVQLElBQUksQ0FBQ21CLFFBQVEsQ0FBQ1UsSUFBSSxDQUFDaEMsRUFBRSxFQUFFQSxFQUFFLENBQUN3QixPQUFPLENBQUNMLE1BQU0sRUFBRSxDQUFDYyxDQUFDLEVBQUVDLENBQUMsS0FBS0QsQ0FBQyxLQUFLQyxDQUFDLENBQUMsQ0FBQyxDQUFDO0VBRTdFbkIsR0FBRyxDQUFDb0IsSUFBSSxDQUFDdkIsSUFBSSxDQUFDO0VBRWQsU0FBU0ssS0FBSyxHQUFHO0lBQ2ZFLE1BQU0sQ0FBQ2lCLFVBQVUsRUFBRSxDQUFDQyxLQUFLLENBQUMsTUFBTSxFQUFFLElBQUksQ0FBQztJQUN2Q3RCLEdBQUcsQ0FBQ3FCLFVBQVUsRUFBRSxDQUFDRSxRQUFRLENBQUMsR0FBRyxDQUFDLENBQUNILElBQUksQ0FDakN2QixJQUFJLENBQUNKLFNBQVMsRUFDZEosRUFBRSxDQUFDbUMsWUFBWSxFQUNmbkMsRUFBRSxDQUFDb0MsYUFBYSxDQUFDekIsR0FBRyxDQUFDMEIsSUFBSSxFQUFFLENBQUMsQ0FBQ0MsTUFBTSxDQUFDLENBQUN6QyxLQUFLLEdBQUcsQ0FBQyxFQUFFQyxNQUFNLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FDN0Q7RUFDSDtFQUVBLFNBQVN5QixPQUFPLENBQUNwQixLQUFLLEVBQUVzQixDQUFDLEVBQUU7SUFDekIsTUFBTSxDQUFDLENBQUNjLEVBQUUsRUFBRUMsRUFBRSxDQUFDLEVBQUUsQ0FBQ0MsRUFBRSxFQUFFQyxFQUFFLENBQUMsQ0FBQyxHQUFHM0MsSUFBSSxDQUFDNEMsTUFBTSxDQUFDbEIsQ0FBQyxDQUFDO0lBQzNDdEIsS0FBSyxDQUFDeUMsZUFBZSxFQUFFO0lBQ3ZCN0IsTUFBTSxDQUFDaUIsVUFBVSxFQUFFLENBQUNDLEtBQUssQ0FBQyxNQUFNLEVBQUUsSUFBSSxDQUFDO0lBQ3ZDakMsRUFBRSxDQUFDNkMsTUFBTSxDQUFDLElBQUksQ0FBQyxDQUFDYixVQUFVLEVBQUUsQ0FBQ0MsS0FBSyxDQUFDLE1BQU0sRUFBRSxRQUFRLENBQUM7SUFDcER0QixHQUFHLENBQUNxQixVQUFVLEVBQUUsQ0FBQ0UsUUFBUSxDQUFDLEdBQUcsQ0FBQyxDQUFDSCxJQUFJLENBQ2pDdkIsSUFBSSxDQUFDSixTQUFTLEVBQ2RKLEVBQUUsQ0FBQ21DLFlBQVksQ0FDWlcsU0FBUyxDQUFDakQsS0FBSyxHQUFHLENBQUMsRUFBRUMsTUFBTSxHQUFHLENBQUMsQ0FBQyxDQUNoQ2lELEtBQUssQ0FBQ0MsSUFBSSxDQUFDQyxHQUFHLENBQUMsQ0FBQyxFQUFFLEdBQUcsR0FBR0QsSUFBSSxDQUFDRSxHQUFHLENBQUMsQ0FBQ1QsRUFBRSxHQUFHRixFQUFFLElBQUkxQyxLQUFLLEVBQUUsQ0FBQzZDLEVBQUUsR0FBR0YsRUFBRSxJQUFJMUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUN6RWdELFNBQVMsQ0FBQyxFQUFFUCxFQUFFLEdBQUdFLEVBQUUsQ0FBQyxHQUFHLENBQUMsRUFBRSxFQUFFRCxFQUFFLEdBQUdFLEVBQUUsQ0FBQyxHQUFHLENBQUMsQ0FBQyxFQUM1QzFDLEVBQUUsQ0FBQ21ELE9BQU8sQ0FBQ2hELEtBQUssRUFBRVEsR0FBRyxDQUFDMEIsSUFBSSxFQUFFLENBQUMsQ0FDOUI7RUFDSDtFQUdBLE9BQU8xQixHQUFHLENBQUMwQixJQUFJLEVBQUU7QUFDbkI7QUFHQSwrREFBZTFDLEdBQUciLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9teS13ZWJwYWNrLXByb2plY3QvLi9zcmMvc2NyaXB0cy9tYXAuanM/ZjU2ZCJdLCJzb3VyY2VzQ29udGVudCI6WyJmdW5jdGlvbiBtYXAodXMpIHtcbiAgY29uc3Qgd2lkdGggPSA5NzU7XG4gIGNvbnN0IGhlaWdodCA9IDYxMDtcblxuICBjb25zdCBwYXRoID0gZDMuZ2VvUGF0aCgpXG5cbiAgZnVuY3Rpb24gem9vbWVkKGV2ZW50KSB7XG4gICAgY29uc3Qge3RyYW5zZm9ybX0gPSBldmVudDtcbiAgICBnLmF0dHIoXCJ0cmFuc2Zvcm1cIiwgdHJhbnNmb3JtKTtcbiAgICBnLmF0dHIoXCJzdHJva2Utd2lkdGhcIiwgMSAvIHRyYW5zZm9ybS5rKTtcbiAgfVxuXG4gIGNvbnN0IHpvb20gPSBkMy56b29tKClcbiAgICAgIC5zY2FsZUV4dGVudChbMSwgMTAwXSlcbiAgICAgIC5vbihcInpvb21cIiwgem9vbWVkKTtcblxuICBjb25zdCBzdmcgPSBkMy5jcmVhdGUoXCJzdmdcIilcbiAgICAgIC5hdHRyKFwidmlld0JveFwiLCBbMCwgMCwgd2lkdGgsIGhlaWdodF0pXG4gICAgICAub24oXCJjbGlja1wiLCByZXNldCk7XG5cbiAgY29uc3QgZyA9IHN2Zy5hcHBlbmQoXCJnXCIpO1xuXG4gIGNvbnN0IHN0YXRlcyA9IGcuYXBwZW5kKFwiZ1wiKVxuICAgICAgLmF0dHIoXCJmaWxsXCIsIFwiYmxhY2tcIilcbiAgICAgIC5hdHRyKFwiY3Vyc29yXCIsIFwicG9pbnRlclwiKVxuICAgIC5zZWxlY3RBbGwoXCJwYXRoXCIpXG4gICAgLmRhdGEodG9wb2pzb24uZmVhdHVyZSh1cywgdXMub2JqZWN0cy5zdGF0ZXMpLmZlYXR1cmVzKVxuICAgIC5qb2luKFwicGF0aFwiKVxuICAgICAgLm9uKFwiY2xpY2tcIiwgY2xpY2tlZClcbiAgICAgIC5hdHRyKFwiZFwiLCBwYXRoKTtcblxuICBzdGF0ZXMuYXBwZW5kKFwidGl0bGVcIilcbiAgICAgIC50ZXh0KGQgPT4gZC5wcm9wZXJ0aWVzLm5hbWUpO1xuXG4gIGcuYXBwZW5kKFwicGF0aFwiKVxuICAgICAgLmF0dHIoXCJmaWxsXCIsIFwibm9uZVwiKVxuICAgICAgLmF0dHIoXCJzdHJva2VcIiwgXCJ3aGl0ZVwiKVxuICAgICAgLmF0dHIoXCJzdHJva2UtbGluZWpvaW5cIiwgXCJyb3VuZFwiKVxuICAgICAgLmF0dHIoXCJkXCIsIHBhdGgodG9wb2pzb24ubWVzaCh1cywgdXMub2JqZWN0cy5zdGF0ZXMsIChhLCBiKSA9PiBhICE9PSBiKSkpO1xuXG4gIHN2Zy5jYWxsKHpvb20pO1xuXG4gIGZ1bmN0aW9uIHJlc2V0KCkge1xuICAgIHN0YXRlcy50cmFuc2l0aW9uKCkuc3R5bGUoXCJmaWxsXCIsIG51bGwpO1xuICAgIHN2Zy50cmFuc2l0aW9uKCkuZHVyYXRpb24oNzUwKS5jYWxsKFxuICAgICAgem9vbS50cmFuc2Zvcm0sXG4gICAgICBkMy56b29tSWRlbnRpdHksXG4gICAgICBkMy56b29tVHJhbnNmb3JtKHN2Zy5ub2RlKCkpLmludmVydChbd2lkdGggLyAyLCBoZWlnaHQgLyAyXSlcbiAgICApO1xuICB9XG5cbiAgZnVuY3Rpb24gY2xpY2tlZChldmVudCwgZCkge1xuICAgIGNvbnN0IFtbeDAsIHkwXSwgW3gxLCB5MV1dID0gcGF0aC5ib3VuZHMoZCk7XG4gICAgZXZlbnQuc3RvcFByb3BhZ2F0aW9uKCk7XG4gICAgc3RhdGVzLnRyYW5zaXRpb24oKS5zdHlsZShcImZpbGxcIiwgbnVsbCk7XG4gICAgZDMuc2VsZWN0KHRoaXMpLnRyYW5zaXRpb24oKS5zdHlsZShcImZpbGxcIiwgXCJ5ZWxsb3dcIik7XG4gICAgc3ZnLnRyYW5zaXRpb24oKS5kdXJhdGlvbig3NTApLmNhbGwoXG4gICAgICB6b29tLnRyYW5zZm9ybSxcbiAgICAgIGQzLnpvb21JZGVudGl0eVxuICAgICAgICAudHJhbnNsYXRlKHdpZHRoIC8gMiwgaGVpZ2h0IC8gMilcbiAgICAgICAgLnNjYWxlKE1hdGgubWluKDgsIDAuOSAvIE1hdGgubWF4KCh4MSAtIHgwKSAvIHdpZHRoLCAoeTEgLSB5MCkgLyBoZWlnaHQpKSlcbiAgICAgICAgLnRyYW5zbGF0ZSgtKHgwICsgeDEpIC8gMiwgLSh5MCArIHkxKSAvIDIpLFxuICAgICAgZDMucG9pbnRlcihldmVudCwgc3ZnLm5vZGUoKSlcbiAgICApO1xuICB9XG5cblxuICByZXR1cm4gc3ZnLm5vZGUoKTtcbn1cblxuXG5leHBvcnQgZGVmYXVsdCBtYXA7XG4iXSwibmFtZXMiOlsibWFwIiwidXMiLCJ3aWR0aCIsImhlaWdodCIsInBhdGgiLCJkMyIsImdlb1BhdGgiLCJ6b29tZWQiLCJldmVudCIsInRyYW5zZm9ybSIsImciLCJhdHRyIiwiayIsInpvb20iLCJzY2FsZUV4dGVudCIsIm9uIiwic3ZnIiwiY3JlYXRlIiwicmVzZXQiLCJhcHBlbmQiLCJzdGF0ZXMiLCJzZWxlY3RBbGwiLCJkYXRhIiwidG9wb2pzb24iLCJmZWF0dXJlIiwib2JqZWN0cyIsImZlYXR1cmVzIiwiam9pbiIsImNsaWNrZWQiLCJ0ZXh0IiwiZCIsInByb3BlcnRpZXMiLCJuYW1lIiwibWVzaCIsImEiLCJiIiwiY2FsbCIsInRyYW5zaXRpb24iLCJzdHlsZSIsImR1cmF0aW9uIiwiem9vbUlkZW50aXR5Iiwiem9vbVRyYW5zZm9ybSIsIm5vZGUiLCJpbnZlcnQiLCJ4MCIsInkwIiwieDEiLCJ5MSIsImJvdW5kcyIsInN0b3BQcm9wYWdhdGlvbiIsInNlbGVjdCIsInRyYW5zbGF0ZSIsInNjYWxlIiwiTWF0aCIsIm1pbiIsIm1heCIsInBvaW50ZXIiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/scripts/map.js\n");

/***/ }),

/***/ "./src/scripts/population.js":
/*!***********************************!*\
  !*** ./src/scripts/population.js ***!
  \***********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\nclass Population {\n  constructor() {\n    this.linksByDate = {\n      0: 'https://api.census.gov/data/2021/pep/population?get=POP_2021,NAME&for=state:*&key=80815206a6c8e5c391e74cfd3884b9b0d90f316d',\n      1: 'https://api.census.gov/data/2021/pep/population?get=POP_2020,NAME&for=state:*&key=80815206a6c8e5c391e74cfd3884b9b0d90f316d',\n      2: 'https://api.census.gov/data/2019/pep/population?get=POP,NAME&for=state:*&key=80815206a6c8e5c391e74cfd3884b9b0d90f316d',\n      3: 'https://api.census.gov/data/2018/pep/population?get=POP,GEONAME&for=state:*&key=80815206a6c8e5c391e74cfd3884b9b0d90f316d',\n      4: 'https://api.census.gov/data/2017/pep/population?get=POP,GEONAME&for=state:*&key=80815206a6c8e5c391e74cfd3884b9b0d90f316d'\n    };\n  }\n\n  // Iterates over an object of links and fetches population data from census.gov for each year since 2017\n  static async fetchPopulation(linksData) {\n    let populationByYear = {};\n    for (let i = 0; i < 5; i++) {\n      // Grab link from object\n      let apiLink = linksData.linksByDate[i];\n      // Fetch data from API link\n      const dataArray = await fetch(apiLink).then(response => {\n        if (!response.ok) {\n          throw new Error('Network response was not OK');\n        }\n        return response.json();\n      }).then(data => data).catch(error => {\n        console.error('There has been a problem with your fetch operation:', error);\n      });\n\n      // Parse data into JSON, but because of the nature of the data, following code returns an 2D array\n      const data = JSON.parse(JSON.stringify(dataArray));\n\n      // Create key-value pair for each ear and its corresponding population data object\n      populationByYear[i] = linksData.createPopulationObject(data);\n      // debugger\n    }\n\n    // debugger\n    return populationByYear;\n  }\n\n  // Create an object from the data array\n  createPopulationObject(data) {\n    let jsonObject;\n    if (Array.isArray(data) && data.length > 0) {\n      let keys = data[0]; // keys are the first row\n      keys = keys.map(key => key === 'POP_2021' || key === 'POP_2020' ? key = 'POP' : key);\n      jsonObject = data.slice(1).reduce((acc, item) => {\n        acc[item[1]] = keys.reduce((obj, key, index) => {\n          if (key !== 'NAME') {\n            obj[key] = item[index];\n          }\n          return obj;\n        }, {});\n        return acc;\n      }, {});\n    }\n    return jsonObject;\n  }\n  getStatePopulation(state, data, year) {\n    let population = [];\n    if (year === undefined) {\n      for (let i = 0; i < 5; i++) {\n        let populationNumber = data[i][state]['POP'];\n        population.push(populationNumber);\n      }\n    } else {\n      // Year should be an integer value from 0 to 4\n      population.push(data[year][state]['POP']);\n    }\n    return population;\n  }\n}\n/* harmony default export */ __webpack_exports__[\"default\"] = (Population);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUcsRUFBRTtJQUNuQixJQUFJRCxJQUFJLEtBQUtFLFNBQVMsRUFBRTtNQUNwQixLQUFLLElBQUlsQyxDQUFDLEdBQUcsQ0FBQyxFQUFFQSxDQUFDLEdBQUcsQ0FBQyxFQUFFQSxDQUFDLEVBQUUsRUFBRTtRQUN4QixJQUFJbUMsZ0JBQWdCLEdBQUcxQixJQUFJLENBQUNULENBQUMsQ0FBQyxDQUFDK0IsS0FBSyxDQUFDLENBQUMsS0FBSyxDQUFDO1FBQzVDRSxVQUFVLENBQUNHLElBQUksQ0FBQ0QsZ0JBQWdCLENBQUM7TUFDckM7SUFDSixDQUFDLE1BQU07TUFDSDtNQUNBRixVQUFVLENBQUNHLElBQUksQ0FBQzNCLElBQUksQ0FBQ3VCLElBQUksQ0FBQyxDQUFDRCxLQUFLLENBQUMsQ0FBQyxLQUFLLENBQUMsQ0FBQztJQUM3QztJQUVBLE9BQU9FLFVBQVU7RUFDckI7QUFDSjtBQUVBLCtEQUFldkMsVUFBVSIsInNvdXJjZXMiOlsid2VicGFjazovL215LXdlYnBhY2stcHJvamVjdC8uL3NyYy9zY3JpcHRzL3BvcHVsYXRpb24uanM/MzNlMCJdLCJzb3VyY2VzQ29udGVudCI6WyJjbGFzcyBQb3B1bGF0aW9uIHtcbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgdGhpcy5saW5rc0J5RGF0ZSA9IHtcbiAgICAgICAgICAgIDA6ICdodHRwczovL2FwaS5jZW5zdXMuZ292L2RhdGEvMjAyMS9wZXAvcG9wdWxhdGlvbj9nZXQ9UE9QXzIwMjEsTkFNRSZmb3I9c3RhdGU6KiZrZXk9ODA4MTUyMDZhNmM4ZTVjMzkxZTc0Y2ZkMzg4NGI5YjBkOTBmMzE2ZCcsXG4gICAgICAgICAgICAxOiAnaHR0cHM6Ly9hcGkuY2Vuc3VzLmdvdi9kYXRhLzIwMjEvcGVwL3BvcHVsYXRpb24/Z2V0PVBPUF8yMDIwLE5BTUUmZm9yPXN0YXRlOioma2V5PTgwODE1MjA2YTZjOGU1YzM5MWU3NGNmZDM4ODRiOWIwZDkwZjMxNmQnLFxuICAgICAgICAgICAgMjogJ2h0dHBzOi8vYXBpLmNlbnN1cy5nb3YvZGF0YS8yMDE5L3BlcC9wb3B1bGF0aW9uP2dldD1QT1AsTkFNRSZmb3I9c3RhdGU6KiZrZXk9ODA4MTUyMDZhNmM4ZTVjMzkxZTc0Y2ZkMzg4NGI5YjBkOTBmMzE2ZCcsXG4gICAgICAgICAgICAzOiAnaHR0cHM6Ly9hcGkuY2Vuc3VzLmdvdi9kYXRhLzIwMTgvcGVwL3BvcHVsYXRpb24/Z2V0PVBPUCxHRU9OQU1FJmZvcj1zdGF0ZToqJmtleT04MDgxNTIwNmE2YzhlNWMzOTFlNzRjZmQzODg0YjliMGQ5MGYzMTZkJyxcbiAgICAgICAgICAgIDQ6ICdodHRwczovL2FwaS5jZW5zdXMuZ292L2RhdGEvMjAxNy9wZXAvcG9wdWxhdGlvbj9nZXQ9UE9QLEdFT05BTUUmZm9yPXN0YXRlOioma2V5PTgwODE1MjA2YTZjOGU1YzM5MWU3NGNmZDM4ODRiOWIwZDkwZjMxNmQnXG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvLyBJdGVyYXRlcyBvdmVyIGFuIG9iamVjdCBvZiBsaW5rcyBhbmQgZmV0Y2hlcyBwb3B1bGF0aW9uIGRhdGEgZnJvbSBjZW5zdXMuZ292IGZvciBlYWNoIHllYXIgc2luY2UgMjAxN1xuICAgIHN0YXRpYyBhc3luYyBmZXRjaFBvcHVsYXRpb24obGlua3NEYXRhKSB7XG4gICAgICAgIGxldCBwb3B1bGF0aW9uQnlZZWFyID0ge307XG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgNTsgaSsrKSB7XG4gICAgICAgICAgICAvLyBHcmFiIGxpbmsgZnJvbSBvYmplY3RcbiAgICAgICAgICAgIGxldCBhcGlMaW5rID0gbGlua3NEYXRhLmxpbmtzQnlEYXRlW2ldO1xuICAgICAgICAgICAgLy8gRmV0Y2ggZGF0YSBmcm9tIEFQSSBsaW5rXG4gICAgICAgICAgICBjb25zdCBkYXRhQXJyYXkgPSBhd2FpdCBmZXRjaChhcGlMaW5rKVxuICAgICAgICAgICAgICAgIC50aGVuKChyZXNwb25zZSkgPT4ge1xuICAgICAgICAgICAgICAgICAgICBpZiAoIXJlc3BvbnNlLm9rKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ05ldHdvcmsgcmVzcG9uc2Ugd2FzIG5vdCBPSycpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiByZXNwb25zZS5qc29uKCk7XG4gICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAudGhlbihkYXRhID0+IGRhdGEpXG4gICAgICAgICAgICAgICAgLmNhdGNoKChlcnJvcikgPT4ge1xuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmVycm9yKCdUaGVyZSBoYXMgYmVlbiBhIHByb2JsZW0gd2l0aCB5b3VyIGZldGNoIG9wZXJhdGlvbjonLCBlcnJvcik7XG4gICAgICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgIC8vIFBhcnNlIGRhdGEgaW50byBKU09OLCBidXQgYmVjYXVzZSBvZiB0aGUgbmF0dXJlIG9mIHRoZSBkYXRhLCBmb2xsb3dpbmcgY29kZSByZXR1cm5zIGFuIDJEIGFycmF5XG4gICAgICAgICAgICBjb25zdCBkYXRhID0gSlNPTi5wYXJzZShKU09OLnN0cmluZ2lmeShkYXRhQXJyYXkpKTtcblxuICAgICAgICAgICAgLy8gQ3JlYXRlIGtleS12YWx1ZSBwYWlyIGZvciBlYWNoIGVhciBhbmQgaXRzIGNvcnJlc3BvbmRpbmcgcG9wdWxhdGlvbiBkYXRhIG9iamVjdFxuICAgICAgICAgICAgcG9wdWxhdGlvbkJ5WWVhcltpXSA9IGxpbmtzRGF0YS5jcmVhdGVQb3B1bGF0aW9uT2JqZWN0KGRhdGEpO1xuICAgICAgICAgICAgLy8gZGVidWdnZXJcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIGRlYnVnZ2VyXG4gICAgICAgIHJldHVybiBwb3B1bGF0aW9uQnlZZWFyO1xuICAgIH1cblxuXG4gICAgLy8gQ3JlYXRlIGFuIG9iamVjdCBmcm9tIHRoZSBkYXRhIGFycmF5XG4gICAgY3JlYXRlUG9wdWxhdGlvbk9iamVjdChkYXRhKSB7XG4gICAgICAgIGxldCBqc29uT2JqZWN0O1xuXG4gICAgICAgIGlmIChBcnJheS5pc0FycmF5KGRhdGEpICYmIGRhdGEubGVuZ3RoID4gMCkge1xuICAgICAgICAgICAgbGV0IGtleXMgPSBkYXRhWzBdOyAvLyBrZXlzIGFyZSB0aGUgZmlyc3Qgcm93XG4gICAgICAgICAgICBrZXlzID0ga2V5cy5tYXAoKGtleSkgPT4ga2V5ID09PSAnUE9QXzIwMjEnIHx8IGtleSA9PT0gJ1BPUF8yMDIwJyA/IGtleSA9ICdQT1AnIDoga2V5KTtcbiAgICAgICAgICAgIGpzb25PYmplY3QgPSBkYXRhLnNsaWNlKDEpLnJlZHVjZSgoYWNjLCBpdGVtKSA9PiB7XG4gICAgICAgICAgICAgICAgYWNjW2l0ZW1bMV1dID0ga2V5cy5yZWR1Y2UoKG9iaiwga2V5LCBpbmRleCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICBpZiAoa2V5ICE9PSAnTkFNRScpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIG9ialtrZXldID0gaXRlbVtpbmRleF07XG4gICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gb2JqO1xuICAgICAgICAgICAgICAgIH0sIHt9KTtcbiAgICAgICAgICAgICAgICByZXR1cm4gYWNjO1xuICAgICAgICAgICAgfSwge30pO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIGpzb25PYmplY3Q7XG4gICAgfVxuXG4gICAgZ2V0U3RhdGVQb3B1bGF0aW9uKHN0YXRlLCBkYXRhLCB5ZWFyKSB7XG4gICAgICAgIGxldCBwb3B1bGF0aW9uID0gW107XG4gICAgICAgIGlmICh5ZWFyID09PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgNTsgaSsrKSB7XG4gICAgICAgICAgICAgICAgbGV0IHBvcHVsYXRpb25OdW1iZXIgPSBkYXRhW2ldW3N0YXRlXVsnUE9QJ107XG4gICAgICAgICAgICAgICAgcG9wdWxhdGlvbi5wdXNoKHBvcHVsYXRpb25OdW1iZXIpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgLy8gWWVhciBzaG91bGQgYmUgYW4gaW50ZWdlciB2YWx1ZSBmcm9tIDAgdG8gNFxuICAgICAgICAgICAgcG9wdWxhdGlvbi5wdXNoKGRhdGFbeWVhcl1bc3RhdGVdWydQT1AnXSk7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gcG9wdWxhdGlvbjtcbiAgICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IFBvcHVsYXRpb247XG4iXSwibmFtZXMiOlsiUG9wdWxhdGlvbiIsImNvbnN0cnVjdG9yIiwibGlua3NCeURhdGUiLCJmZXRjaFBvcHVsYXRpb24iLCJsaW5rc0RhdGEiLCJwb3B1bGF0aW9uQnlZZWFyIiwiaSIsImFwaUxpbmsiLCJkYXRhQXJyYXkiLCJmZXRjaCIsInRoZW4iLCJyZXNwb25zZSIsIm9rIiwiRXJyb3IiLCJqc29uIiwiZGF0YSIsImNhdGNoIiwiZXJyb3IiLCJjb25zb2xlIiwiSlNPTiIsInBhcnNlIiwic3RyaW5naWZ5IiwiY3JlYXRlUG9wdWxhdGlvbk9iamVjdCIsImpzb25PYmplY3QiLCJBcnJheSIsImlzQXJyYXkiLCJsZW5ndGgiLCJrZXlzIiwibWFwIiwia2V5Iiwic2xpY2UiLCJyZWR1Y2UiLCJhY2MiLCJpdGVtIiwib2JqIiwiaW5kZXgiLCJnZXRTdGF0ZVBvcHVsYXRpb24iLCJzdGF0ZSIsInllYXIiLCJwb3B1bGF0aW9uIiwidW5kZWZpbmVkIiwicG9wdWxhdGlvbk51bWJlciIsInB1c2giXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/scripts/population.js\n");

/***/ }),

/***/ "./src/index.scss":
/*!************************!*\
  !*** ./src/index.scss ***!
  \************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvaW5kZXguc2Nzcy5qcyIsIm1hcHBpbmdzIjoiO0FBQUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9teS13ZWJwYWNrLXByb2plY3QvLi9zcmMvaW5kZXguc2Nzcz85NzQ1Il0sInNvdXJjZXNDb250ZW50IjpbIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpblxuZXhwb3J0IHt9OyJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/index.scss\n");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	!function() {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = function(exports) {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	}();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval-source-map devtool is used.
/******/ 	__webpack_require__("./src/index.js");
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.scss");
/******/ 	
/******/ })()
;