import LINKS from './links.js';

class Census {
    constructor() {
        this.populationLinks = Object.values(LINKS['population']);
        this.employmentLinks = Object.values(LINKS['employment']);
    }

    // Iterates over an object of links and fetches population data from census.gov for each year since 2017
    static async fetchData(links) {
        let populationByYear = {};
        for (let i = 0; i < 5; i++) {
            // Grab link from object
            // debugger
            let apiLink = links[i];
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
            populationByYear[i] = Census.createPopulationObject(data);
            // debugger
        }

        // debugger
        return populationByYear;
    }


    // Create an object from the data array
    static createPopulationObject(data) {
        let jsonObject;

        if (Array.isArray(data) && data.length > 0) {
            let keys = data[0]; // keys are the first row
            keys = keys.map((key) => key === 'POP_2021' || key === 'POP_2020' ? key = 'POP' : key);
            jsonObject = data.slice(1).reduce((acc, item) => {
                let nameIdx = keys.indexOf('NAME');
                acc[item[nameIdx]] = keys.reduce((obj, key, index) => {
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

    // getStateStats = (state, data, year) => {
    //     let population = [];
    //     if (year === undefined) {
    //         for (let i = 0; i < 5; i++) {
    //             let populationNumber = data[i][state]['POP'];
    //             population.push(populationNumber);
    //         }
    //     } else {
    //         // Year should be an integer value from 0 to 4
    //         population.push(data[year][state]['POP']);

    //         let currentYear = parseInt(data[year][state]['POP']);
    //         let lastYear = parseInt(data[1][state]['POP']);

    //         currentYear > lastYear ? population.push(1) : population.push(0)
    //     }

    //     return population;
    // }

    getStateStats = (state, data, year) => {
        let employment = [];
        let searchKey = this.searchKey(data);

        if (year === undefined) {
            for (let i = 0; i < 5; i++) {
                let employmentNumber = data[i][state][searchKey];
                employment.push(employmentNumber);
            }
        } else {
            employment.push(data[year][state][searchKey]);
            let currentYear = parseInt(data[year][state][searchKey]);
            let lastYear = parseInt(data[1][state][searchKey]);
            currentYear > lastYear ? employment.push(1) : employment.push(0)
        }

        return employment;
    }


     searchKey = (data) => {
        let stateObj = data[0]['Alabama']
        return stateObj['TOT_EMP'] ? 'TOT_EMP' : 'POP';
    }
}

export default Census;
