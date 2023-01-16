const dataArray = await fetch('https://api.census.gov/data/2021/pep/population?get=POP_2021,NAME&for=state:*&key=80815206a6c8e5c391e74cfd3884b9b0d90f316d')
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

const data = JSON.parse(JSON.stringify(dataArray));

let jsonObject;

if (Array.isArray(data) && data.length > 0) {
  let keys = data[0]; // keys are the first row
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

function getPopulation(state) {
        return jsonObject[state]['POP_2021'];
}


export default jsonObject;
