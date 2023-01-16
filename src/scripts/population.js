class Population {
    constructor() {
        this.linksByDate = {
            0: 'https://api.census.gov/data/2021/pep/population?get=POP_2021,NAME&for=state:*&key=80815206a6c8e5c391e74cfd3884b9b0d90f316d',
            1: 'https://api.census.gov/data/2021/pep/population?get=POP_2020,NAME&for=state:*&key=80815206a6c8e5c391e74cfd3884b9b0d90f316d',
            2: 'https://api.census.gov/data/2019/pep/population?get=POP,NAME&for=state:*&key=80815206a6c8e5c391e74cfd3884b9b0d90f316d',
            3: 'https://api.census.gov/data/2018/pep/population?get=POP,GEONAME&for=state:*&key=80815206a6c8e5c391e74cfd3884b9b0d90f316d',
            4: 'https://api.census.gov/data/2017/pep/population?get=POP,GEONAME&for=state:*&key=80815206a6c8e5c391e74cfd3884b9b0d90f316d'
        }
    }

    // Iterates over an object of links and fetches population data from census.gov for each year since 2017
    static async fetchPopulation(linksData) {
        let populationByYear = {};
        for (let i = 0; i < 5; i++) {
            // Grab link from object
            let apiLink = linksData.linksByDate[i];
            // Fetch data from API link
            const dataArray = await fetch(apiLink)
                .then((response) => {
                    if (!response.ok) {
                        throw new Error('Network response was not OK');
                    }
                    return response.json();
                })
                .then(data => data)
                .catch((error) => {
                    console.error('There has been a problem with your fetch operation:', error);
                });

            // Parse data into JSON, but because of the nature of the data, following code returns an 2D array
            const data = JSON.parse(JSON.stringify(dataArray));

            // Create key-value pair for each ear and its corresponding population data object
            populationByYear[i] = linksData.createPopulationObject(data);
            // debugger
        }

        // debugger
        return populationByYear;
    }


    // Create an object from the data array
    createPopulationObject(data) {
        let jsonObject;

        if (Array.isArray(data) && data.length > 0) {
            let keys = data[0]; // keys are the first row
            keys = keys.map((key) => key === 'POP_2021' || key === 'POP_2020' ? key = 'POP' : key);
            jsonObject = data.slice(1).reduce((acc, item) => {
                acc[item[1]] = keys.reduce((obj, key, index) => {
                    if (key !== 'NAME') {
                        obj[key] = item[index];
                    }

                    return obj;
                }, {});
                return acc;
            }, {});
        }

        return jsonObject;
    }

    getStatePopulation(state, data, year) {
        let population = [];
        if (year === undefined) {
            for (let i = 0; i < 5; i++) {
                let populationNumber = data[i][state]['POP'];
                population.push(populationNumber);
            }
        } else {
            // Year should be an integer value from 0 to 4
            population.push(data[year][state]['POP']);

            let currentYear = parseInt(data[year][state]['POP']);
            let lastYear = parseInt(data[1][state]['POP']);

            currentYear > lastYear ? population.push(1) : population.push(0)
        }

        return population;
    }
}

export default Population;
