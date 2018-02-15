const request = require('request');

var getWeather = (latitude, longitude, callback) => {
    var tempCelcius, apparentTempCelcius;

    request({
        url:`https://api.darksky.net/forecast/(PASTE YOUR DARK WEB API KEY HERE)/${latitude},${longitude}`,
        json:true
      
      }, (error, response, body) => {
          
          tempCelcius = (body.currently.temperature-32) * 5 / 9;
          apparentTempCelcius = (body.currently.apparentTemperature-32) * 5 / 9;

        if(!error && response.statusCode === 200){
            callback(undefined, {
                temperature: tempCelcius.toFixed(2),
                apparentTemperature: apparentTempCelcius.toFixed(2)
            });
          
        }else{
            callback('Unable to fetch Weather');
          
        }
      
        
      });
      

}

module.exports = {
    getWeather
}

