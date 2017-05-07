var axios = require('axios');

const OPEN_WEATHER_MAP_URL = 'http://api.openweathermap.org/data/2.5/weather?appid=5d6bc9e51e2930ebb36bcdd58dd827f0&units=imperial';


//5d6bc9e51e2930ebb36bcdd58dd827f0
module.exports = {
    getTemp: function(location) {
        var encodedLocation = encodeURIComponent(location);
        var requestUrl = `${OPEN_WEATHER_MAP_URL}&q=${encodedLocation}`;

        return axios.get(requestUrl).then(function(res) {
            debugger;
            if(res.data.cod && res.data.message) {
                throw new Error(res.data.message);
            } else {
                return res.data.main.temp;
            }

        }, function(res) {
            throw new Error(res.data.message); 
        });
    }
}