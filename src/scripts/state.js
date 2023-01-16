class State {
        constructor(name, data) {
            this.name = name;
            this.population = data.population(name, data.allYearsPop, 0);
            this.populationHist = data.population(name, data.allYearsPop);
        }
}


export default State;
