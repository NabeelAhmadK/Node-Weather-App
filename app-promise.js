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
    },
    
    u: {
      demand: false,
      alias: 'unit',
      string: true,
      describe: 'Enter Unit C or F',
      default: 'C'
    }

  })
  .help()
  .alias('help', 'h')
  .argv;

  const degreeSymbol = String.fromCharCode(176);
  var encodedAddress = encodeURIComponent(argv.address);
  var geoCodeURI = `http://maps.google.com/maps/api/geocode/json?address=${encodedAddress}`;
  var unitTemp = argv.u;

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

    
      var temp = res.data.currently.temperature;
      var apparentTemp = res.data.currently.apparentTemperature;
          
    if(unitTemp === 'C')
          console.log(`Its currently ${convertToCelsius(temp)}${degreeSymbol}C. It feels like ${convertToCelsius(apparentTemp)}${degreeSymbol}C`);
    else
      console.log(`Its currently ${temp}${degreeSymbol}F. It feels like ${apparentTemp}${degreeSymbol}F.`);

  }).catch((e)=>{
    if(e.status === '404')
      console.log("Unable to connect to API");
    else
      console.log(e.message);
    });
  

    const convertToCelsius = (temperature)=>{
      debugger
      var tempInCelcius = (temperature -32) * 5 / 9;
      return Math.round(tempInCelcius);
  }


   

