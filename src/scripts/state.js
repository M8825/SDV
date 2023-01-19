class State {
        static setupStates(data) {
                let states = {};
                let names = State.stateNames();

                for (let i = 0; i < 50; i++) {
                        data['name'] = names[i];
                        states[names[i]] = new State(names[i], data);
                }

               return states;
        }

        constructor(name, data) {
            this.name = name;

            let populationArray = data.getStatsCensus(name, data.populationHistorical, 0);
            this.population = (parseInt((populationArray[0])) / 1000000).toFixed(2);
            this.populationStatus = populationArray[1];
            this.populationHist = data.getStatsCensus(name, data.populationHistorical);


            let employmentArray = data.getStatsCensus(name, data.employmentHistorical, 0);
            this.employment = (parseInt((employmentArray[0])) / parseInt(populationArray[0]) * 100).toFixed(2)
        //     (parseInt((employmentArray[0])) / 1000).toFixed(2);
            this.employmentStatus = employmentArray[1];
            this.employmentHist = data.getStatsCensus(name, data.employmentHistorical);

            let gdpArray = data.getStatsBea(name, data.gdpHistorical, 4);
            this.gdp = (parseInt((gdpArray[0].split(',').join(''))) / 1000000).toFixed(2);
            this.gdpStatus = gdpArray[1];
            this.gdpHist = data.getStatsBea(name, data.gdpHistorical)

            let personalIncomeArray = data.getStatsBea(name, data.personalIncomeHistorical, 4);
            this.personalincome = personalIncomeArray[0];
            this.personalIncomeStatus = personalIncomeArray[1];
            this.personalIncomeHist = data.getStatsBea(name, data.personalIncomeHistorical);
        }

        static stateNames = () => {
                return ['Alabama', 'Alaska', 'Arizona', 'Arkansas', 'California', 'Colorado', 'Connecticut', 'Delaware', 'Florida', 'Georgia', 'Hawaii', 'Idaho', 'Illinois', 'Indiana', 'Iowa', 'Kansas', 'Kentucky', 'Louisiana', 'Maine', 'Maryland', 'Massachusetts', 'Michigan', 'Minnesota', 'Mississippi', 'Missouri', 'Montana', 'Nebraska', 'Nevada', 'New Hampshire', 'New Jersey', 'New Mexico', 'New York', 'North Carolina', 'North Dakota', 'Ohio', 'Oklahoma', 'Oregon', 'Pennsylvania', 'Rhode Island', 'South Carolina', 'South Dakota', 'Tennessee', 'Texas', 'Utah', 'Vermont', 'Virginia', 'Washington', 'West Virginia', 'Wisconsin', 'Wyoming']
        }


        static setUpLineChartHistorical = (dataArrayFiveYears, name='US') => {

                let dates = ['2021-04-02', '2020-04-02', '2019-04-02', '2018-04-02', '2017-04-02']
                let historicalData = [];

                dataArrayFiveYears.forEach((ele, i) => {
                        let lineData = {};

                        // let presentOfTotal = (parseInt(ele) / window['usTotal'][i] * 100).toFixed(10);
                        // lineData[window['chartCategory']] = parseFloat(presentOfTotal);
                        lineData['date'] = new Date(dates[i])
                        lineData[window['chartCategory']] = parseInt(ele) / 1000000;
                        lineData['state'] = name;

                        historicalData.push(lineData)
                });

                return historicalData;
        }
}


export default State;
