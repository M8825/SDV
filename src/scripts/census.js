import LINKS from './links.js';
import apiUtil from './apiUtil.js';

class Census {
    constructor() {
        this.populationLinks = Object.values(LINKS['population']);
        this.employmentLinks = Object.values(LINKS['employment']);
    }

    static async fetchData(links) {
        let populationByYear = {};

        for (let i = 0; i < 5; i++) {
            let apiLink = links[i];
            const dataArrayOfCurrYear = await apiUtil.fetchEndpoint(apiLink);

            const jsonData = JSON.parse(JSON.stringify(dataArrayOfCurrYear));
            populationByYear[i] = Census.createPopulationObject(jsonData);
        }

        return populationByYear;
    }

    static createPopulationObject(data) {
        let jsonObject;

        if (Array.isArray(data) && data.length > 0) {
            let keys = data[0]; // keys are the first row
            keys = keys.map((key) => key === 'POP_2021' || key === 'POP_2020' ? key = 'POP' : key);

            jsonObject = data.slice(1).reduce((acc, item) => {
                let nameIdx = keys.includes('NAME') ? keys.indexOf('NAME') : keys.indexOf("GEONAME");
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
