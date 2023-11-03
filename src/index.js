import map from './scripts/map';
import Census from './scripts/census';
import Bea from './scripts/bea';
import Stats from './scripts/stats';
import State from './scripts/state';
import barChart from './scripts/barChart';

document.addEventListener('DOMContentLoaded', async () => {
    const mapDiv = document.getElementById('map');
    const statsEl = document.getElementById('stats');

    // Load map
    const res = await fetch(`https://cdn.jsdelivr.net/npm/us-atlas@3/states-albers-10m.json`)
    const mapJson = await res.json()

    // Fetch and setup data
    const data = await setupData()
    const states = State.setupStates(data);
    const stats = new Stats(statsEl, states);

    window['chartCategory'] = 'populationHistorical'
    window['usData'] = stats.chartData(data);

    const loadMap = map(mapJson, stats, states);
    mapDiv.appendChild(loadMap);

    const chart = barChart(window['usData']);
    const barChartEle = document.getElementById('chart');
    barChartEle.appendChild(chart)

    const loading = document.getElementsByClassName('loading');
    loading[0].style.display = 'none';

    let modButton = document.getElementById('modal_button')
    modButton.style.display = 'block';
    modButton.addEventListener('click', () => {
        document.getElementById('modal').remove();
    });

    window.addEventListener('resize', () => {
        const lineChart = document.getElementById('chart');
        lineChart.removeChild(lineChart.firstChild);

        const chart = barChart(window['usData']);

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
