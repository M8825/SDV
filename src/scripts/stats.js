
class Stats {
    constructor(divEl, states) {
        this.divEl = divEl;
        this.state = states['Alabama'];
        divEl.appendChild(this.setUpStats(this.state));
    }

    setUpStats(state) {
        let ul = document.createElement('ul');

        for (let key in state) {
            if (key === 'setUpLineChartHistorical') continue;
            let lastFourDigits = key.slice(key.length - 4);
            if (lastFourDigits === 'Hist') continue;
            let liEl = document.createElement('li');
            let divName = document.createElement('div');
            let divValue = document.createElement('div');
            let titlezeName = key[0].toUpperCase() + key.slice(1);
            let statsValue = state[key];

            divName.innerHTML = titlezeName;
            divValue.innerHTML = statsValue;

            liEl.appendChild(divName)
            liEl.appendChild(divValue)
            liEl.setAttribute('class', 'stats-item')

            ul.appendChild(liEl);
            ul.setAttribute('id', 'stats-ul')
        }

        return ul;
    }

    update(state) {
        let lis = document.querySelectorAll('#stats ul li');
        // Object.keys(state).forEach((key, i) => {

        for (let i = 0; i < lis.length; i++) {
            debugger
            // lis[i].querySelectorAll('div')[0].innerHTML = `${key[0].toUpperCase() + key.slice(1)}`
            let stateAttribute = lis[i].querySelectorAll('div')[0].innerText.toLowerCase();
            lis[i].querySelectorAll('div')[1].innerHTML = `${state[stateAttribute]}`;
        }
    }
}


export default Stats;
