# Node-Weather-App
Weather app built with Node js to fetch the temperature of your location.

1. Run npm install.
2. Replace your Dark-Sky API key in app-promise.js file.

    var weatherURI = `https://api.darksky.net/forecast/(PASTE YOUR DARK WEB API KEY HERE)/${lat},${lon}`;
    (Without api key it will not work)
    
2. Run node app-promise -a "your-address" -u "Unit"

   i - "your-address" can be " ZIP Code or Street Address along with city name. "unit" cam be either 'F' for fahrenheit or 'C' for
   Celsius. 
   
   ii -  I/P:
           node app-promise -a "Lahore, Pakistan" -u "C"

         O/P:     
           Lahore, Pakistan
           Its currently 23.26 Celcius. It feels like 23.26 Celcius
           
   iii. Without Arguments It gives weather for default city : Lahore, Pakistan (It can be find in app-promise.js/app.js file)

