import LINKS from './links.js';
import apiUtil from './apiUtil.js';

class Bea {
    constructor() {
        this.gdpLink = Object.values(LINKS['gdp']).join('');
        this.personalIncomeLink = Object.values(LINKS['personalIncome']).join('');
    }


    static async fetchData(apiLink) {
        const dataArray = await apiUtil.fetchEndpoint(apiLink);
        let twoDArrayOfData = dataArray['BEAAPI']['Results']['Data'];

        return Bea.createGdpObject(twoDArrayOfData);
    }


    static createGdpObject(dataArr) {
        var output = {};
        for (let i = 0; i < dataArr.length; i++) {
            let key = dataArr[i].TimePeriod - 2017;
            if(output[key]){
                output[key][dataArr[i].GeoName] = dataArr[i].DataValue
            } else{
                output[key] = {};
                output[key][dataArr[i].GeoName] = dataArr[i].DataValue
            }
        }
        return output;
    }


    getStateStats(state, data, year) {
        let gdp = []

        if (year === undefined) {
            for (let i = 0; i < 5; i++) {
                gdp.push(data[i][state]);
            }
        } else {
            let currentYear = data[year][state]
            let lastYear = data[1][state]
            gdp.push(currentYear);
            currentYear > lastYear ? gdp.push(1) : gdp.push(0);
        }

        return gdp
    }
}


export default Bea;
