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
            this.population = data.population(name, data.allYearsPop, 0);
        }

        static stateNames = () => {
                return ['Alabama', 'Alaska', 'Arizona', 'Arkansas', 'California', 'Colorado', 'Connecticut', 'Delaware', 'Florida', 'Georgia', 'Hawaii', 'Idaho', 'Illinois', 'Indiana', 'Iowa', 'Kansas', 'Kentucky', 'Louisiana', 'Maine', 'Maryland', 'Massachusetts', 'Michigan', 'Minnesota', 'Mississippi', 'Missouri', 'Montana', 'Nebraska', 'Nevada', 'New Hampshire', 'New Jersey', 'New Mexico', 'New York', 'North Carolina', 'North Dakota', 'Ohio', 'Oklahoma', 'Oregon', 'Pennsylvania', 'Rhode Island', 'South Carolina', 'South Dakota', 'Tennessee', 'Texas', 'Utah', 'Vermont', 'Virginia', 'Washington', 'West Virginia', 'Wisconsin', 'Wyoming']
        }
}


export default State;
