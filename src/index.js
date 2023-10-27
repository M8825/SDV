// import map from './scripts/map';
import Census from './scripts/census';
import Bea from './scripts/bea';
import Stats from './scripts/stats';
import State from './scripts/state';
import LineChart from '../dist/lineChart';

document.addEventListener('DOMContentLoaded', async () => {
    // const mapDiv = document.getElementById('map');
    const statsEl = document.getElementById('stats');
    // mapDiv.style.width = '100%';

    // Load map
    const res = await fetch(`https://cdn.jsdelivr.net/npm/us-atlas@3/states-albers-10m.json`)
    // const mapJson = await res.json()

    // Fetch and setup data
    const data = await setupData()
    const states = State.setupStates(data);
    const stats = new Stats(statsEl, states);

    window['chartCategory'] = 'populationHistorical'
    window['usData'] = stats.chartData(data);



    // const loadMap = map(mapJson, stats, states, setupLineChart);
    // mapDiv.appendChild(loadMap);


    const stateData = State.setUpLineChartHistorical(states['Ohio'].populationHist, 'Ohio');
    const chart = setupLineChart(window['usData'].concat(stateData));
    const lineChart = document.getElementById('chart');
    lineChart.appendChild(chart)

    const loading = document.getElementsByClassName('loading');
    loading[0].style.display = 'none';

    let modButton = document.getElementById('modul_button')
    modButton.style.display = 'block';
    modButton.addEventListener('click', () => {
        document.getElementById('modul').remove();
    });

    window.addEventListener('resize', () => {
        updateChart();
        const lineChart = document.getElementById('chart');
        lineChart.removeChild(lineChart.firstChild);

        const chart = setupLineChart(window['usData'].concat(stateData));

        lineChart.appendChild(chart);
    });
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

const getParentDimensions = () => {
    const parent = document.getElementsByClassName('chart_container')[0];
    const width = parent.offsetWidth;
    const height = parent.offsetHeight;

    return [width, height];
}

const setupLineChart = (data) => {
    const [width, height] = getParentDimensions();

    return LineChart(data, {
        x: d => d.date,
        y: d => d.populationHistorical,
        z: d => d.state,
        yDomain: [1, 30],
        yLabel: "↑ Unemployment (%)",
        width: width,
        height: height,
        color: "#29DEF2",
    });
}
