const apiUtil = {
    fetchEndpoint: async function(apiLink) {
        return fetch(apiLink)
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
    }
}


export default apiUtil;
