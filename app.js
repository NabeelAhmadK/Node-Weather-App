const request = require('request');
const yargs = require('yargs');
const geocode = require('./geocode/geocode')
const weather = require('./weather/weather');

const argv = yargs
  .options({
    a: {
      demand: true,
      alias: 'address',
      describe: 'Address to fetch weather for',
      string: true
    }
  })
  .help()
  .alias('help', 'h')
  .argv;

geocode.geocodeAddress(argv.address, (error, result) => {
  if(error){
    console.log(error);
  }
  else if (result){
    console.log(result.address);
    weather.getWeather(result.latitude, result.longitude, (errorWeather, resultWeather) => {
      if(errorWeather){
       console.log(errorWeather);
      }
      else if(resultWeather){
         console.log(`Its currently ${resultWeather.temperature} Celcius. It feels like ${resultWeather.apparentTemperature} Celcius`);
      }
    })
  }
});

   
