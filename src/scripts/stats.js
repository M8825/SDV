import State from './state';
class Stats {
    constructor(divEl, states) {
        this.divEl = divEl;
        this.state = states['Alabama'];
        divEl.appendChild(this.setUpStats(this.state));
    }

    setUpStats(state) {
        let ul = document.createElement('ul');
        let i = 0;
        let suffix = ['Mln', 'K']

        for (let key in state) {
            if (key === 'setUpLineChartHistorical') continue;

            let lastFourLetters = key.slice(key.length - 4);
            let lastSixLetters = key.slice(key.length - 6);
            if (lastFourLetters === 'Hist') continue;
            if (lastSixLetters === 'Status') continue;

            let liEl = document.createElement('li');
            let divName = document.createElement('div');
            let divValue = document.createElement('div');
            let capitalizeName = key.toUpperCase();
            let statsValue = state[key];

            divName.innerHTML = capitalizeName;
            divValue.innerHTML = statsValue;

            this.setValueColor(state, key, divValue);

            // let status = state[key + 'Status']
            // status || state[status] === 1 ? divValue.style = 'color: green' : divValue.style = 'color: red';

            liEl.appendChild(divName)
            liEl.appendChild(divValue)
            liEl.setAttribute('class', 'stats-item')

            if ( i !==0 ) {
               let divSuffix = document.createElement('div')

               let index = i % 2 === 0 ? 1 : 0;
               if (capitalizeName === 'EMPLOYMENT') {
                divSuffix.innerHTML = '%';
               } else {
                divSuffix.innerHTML = suffix[index];
               }

                divSuffix.style = 'font-size: 10px';
                divSuffix.style = 'height: 100hv';

                liEl.appendChild(divSuffix);
            }

            if (i > 0)  {
                liEl.classList.add('class', 'selectable')
            }

            ul.appendChild(liEl);

            i++;
        }
        ul.setAttribute('id', 'stats-ul')

        return ul;
    }

    update(state) {
        let lis = document.querySelectorAll('#stats ul li');
        // Object.keys(state).forEach((key, i) => {

        for (let i = 0; i < lis.length; i++) {
            let innerElements = lis[i].querySelectorAll('div');
            let stateAttribute = innerElements[0].innerText.toLowerCase();
            let divValue = lis[i].querySelectorAll('div')[1];

            this.setValueColor(state, stateAttribute, divValue);
            divValue.innerHTML = `${state[stateAttribute]}`;
        }
    }


    setValueColor(state, key, divValue) {
        if (key !== 'name') {
            let status = state[key + 'Status']
            status || state[status] === 1 ? divValue.style = 'color: green' : divValue.style = 'color: red';
        }
    }

    chartData(data) {
        window['usTotal'] = [];

        this.setCategory();
        let category = window['chartCategory'];
        let getStatsCensusHist = data['getStatsCensus'] // TODO: Determine which data api endpoint to use

        let allStatesHistValuesAllYears = []

        Object.keys(data[category][0]).forEach(stateName => {
            if (stateName !== 'dataType') {
                allStatesHistValuesAllYears.push(getStatsCensusHist(stateName, data[category]))
            }
        });

        let totalHistValuesAllYears = []
        for (let i = 0; i < 5; i++) {
            let count = 0;

            allStatesHistValuesAllYears.forEach((stateHistValues)=> {
                count += parseInt(stateHistValues[i]);
            })

            window['usTotal'].push(count);
            totalHistValuesAllYears.push(Math.round(count / 52));
        }

        return State.setUpLineChartHistorical(totalHistValuesAllYears);

    }

    setCategory() {
        if (window['chartCategory'] === undefined) {
            window['chartCategory'] = 'populationHistorical'
        }
    }

}

export default Stats;

