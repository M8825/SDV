
class Stats {
    constructor(divEl, states) {
        this.divEl = divEl;
        this.state = states['Alabama'];
        divEl.appendChild(this.setUpStats(this.state));
    }

    setUpStats(state) {
        let ul = document.createElement('ul');

        for (let key in state) {
            let lastFourDigits = key.slice(key.length - 4);
            if ( lastFourDigits === 'Hist') continue;
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
        let lis = this.divEl.querySelectorAll('ul li');
        Object.keys(state).forEach((key, i) => {
            lis[i].innerText = `${key[0].toUpperCase() + key.slice(1)}: ${state[key]}`;
        })
    }
}


export default Stats;
