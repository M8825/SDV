
class Stats {
    constructor(divEl, state) {
        this.divEl = divEl;
        this.state = state;
        divEl.appendChild(this.setUpStats(state));
    }

    setUpStats(state) {
        let ul = document.createElement('ul');

        for (let key in state) {
            let li = document.createElement('li');
            let keyUppercase = key[0].toUpperCase() + key.slice(1)
            li.innerHTML = `${keyUppercase}: ${state[key]}`;
            ul.appendChild(li);
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
