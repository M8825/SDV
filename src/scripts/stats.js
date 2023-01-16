
class Stats {
    constructor(divEl, states) {
        this.divEl = divEl;
        this.state = states['Alabama'];
        divEl.appendChild(this.setUpStats(this.state));
    }

    setUpStats(state) {
        let ul = document.createElement('ul');

        for (let key in state) {
            let liEl = document.createElement('li');
            let upperCaseName = key[0].toUpperCase() + key.slice(1);
            let stateAttributeValue = state[key];

            liEl.innerHTML = `${upperCaseName}: ${stateAttributeValue}`;
            ul.appendChild(liEl);
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
