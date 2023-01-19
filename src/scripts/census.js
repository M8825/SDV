import LINKS from './links.js';
import apiUtil from './apiUtil.js';

class Census {
    constructor() {
        this.populationLinks = Object.values(LINKS['population']);
        this.employmentLinks = Object.values(LINKS['employment']);
    }

    static async fetchData(links) {
        let dataByYear = {};
        dataByYear['data'] = links[0].includes('population') ? 'population' : 'employment';

        for (let i = 0; i < 5; i++) {
            let apiLink = links[i];
            const dataArrayOfCurrYear = await apiUtil.fetchEndpoint(apiLink);

            const jsonData = JSON.parse(JSON.stringify(dataArrayOfCurrYear));
            dataByYear[i] = Census.createPopulationObject(jsonData);
        }

        return dataByYear;
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
                acc['dataType'] = keys[0]
                return acc;
            }, {});
        }

       return jsonObject;
    }

    getStateStats = (state, data, year) => {
        let searchKey = this.searchKey(data);

        if (year === undefined) {
            return this.historicalData(state, data, searchKey);
        } else {
            return this.mostRecentYear(state, data, year, searchKey)
        }
    }


     searchKey = (data) => {
        let stateObj = data[0]['Alabama']
        return stateObj['TOT_EMP'] ? 'TOT_EMP' : 'POP';
    }


    mostRecentYear = (state, data, year, searchKey) => {
            let outputData = [data[year][state][searchKey]];

            let currentYear = parseInt(data[year][state][searchKey]);
            let lastYear = parseInt(data[1][state][searchKey]);

            let status = currentYear > lastYear ? 1 : 0
            outputData.push(status);

            return outputData;
    }


    historicalData = (state, data, searchKey) => {
        let outputData = [];

        for (let i = 0; i < 5; i++) {
            let statValue = data[i][state][searchKey];
            if (statValue === undefined) continue;

            outputData.push(statValue);
        }

        // let histObj = {
        //     values: outputData,
        //     dataType: data['data']
        // }

        return outputData;
    }



}

export default Census;
