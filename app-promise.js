const yargs = require('yargs');
const axios = require('axios');

const argv = yargs
  .options({
    a: {
      demand: true,
      alias: 'address',
      describe: 'Address to fetch weather for',
      string: true,
      default: 'Lahore, Pakistan'
    }
  })
  .help()
  .alias('help', 'h')
  .argv;

  var encodedAddress = encodeURIComponent(argv.address);
  var geoCodeURI = `http://maps.google.com/maps/api/geocode/json?address=${encodedAddress}`;

  axios.get(geoCodeURI).then((response)=>{
    
    if(response.data.status === 'ZERO_RESULTS'){
      throw new Error('Unable to find Address');
    }
    else if(response.data.status === 'OVER_QUERY_LIMIT'){
      throw new Error('API request Exceeded');
    }

    console.log(response.data.results[0].formatted_address);
    var lat = response.data.results[0].geometry.location.lat;
    var lon = response.data.results[0].geometry.location.lng;
    var weatherURI = `https://api.darksky.net/forecast/(PASTE YOUR DARK WEB API KEY HERE)/${lat},${lon}`;

    return axios.get(weatherURI);

  }).then((res)=>{

    var tempCelcius = (res.data.currently.temperature-32) * 5 / 9;
    var apparentTempCelcius = (res.data.currently.apparentTemperature-32) * 5 / 9;
    
    var temp = tempCelcius.toFixed(2);
    var apparentTemp = apparentTempCelcius.toFixed(2)

    console.log(`Its currently ${temp} Celcius. It feels like ${apparentTemp} Celcius`);

  }).catch((e)=>{
    if(e.status === '404')
      console.log("Unable to connect to API");
    else
      console.log(e.message);
    });
  


   

