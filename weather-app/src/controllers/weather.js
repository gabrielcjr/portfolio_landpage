import fetch from 'node-fetch';

var locationURL = '';
var apiKey = '';
var pageKey = '';
var city = '';
// This function provides the city code
const getCityCode = async () => {
  // node-fetch package was used to fetch the JSON file from Accuweather API
  try {
    const response1 = await fetch(pageKey);
    
    const apiJsonKey = await response1.json();
    if (typeof(apiJsonKey[0]) === 'undefined') {
      return console.log(`wrong city's code`)
    } else {
      return apiJsonKey[0].Key
  }}
  catch (error) {
    console.log(`error in the function getCityCode ${error}`);
}}
// This function calls getCityCode to save the city code and request the final JSON with all current weather data
const getCityForecast = async () => {
  try {
    const keyLocation = await getCityCode();
    if (typeof(keyLocation) === 'string') {
      const weather = `http://dataservice.accuweather.com/forecasts/v1/hourly/1hour/${keyLocation}?apikey=${apiKey}&metric=true`
      const response2 = await fetch(weather);
      return await response2.json();
    } else {
      return console.log(`invalid city`);
    } 
  }
  catch (error) {
    return console.log(`error in the function getCityForecast ${error}`);
  }
}
// This function will separate the necessary info from the JSON received from Accuweather and display then in the page.
const getElements = async () => {
  try {
    const apiJsonWeather = await getCityForecast();
    if (typeof(apiJsonWeather) === 'object') {

      const temperature = `${apiJsonWeather[0].Temperature.Value}C`;
      const condition = apiJsonWeather[0].IconPhrase;
      const isDayLight = apiJsonWeather[0].IsDaylight;
      let icon = Number(apiJsonWeather[0].WeatherIcon);

        if (icon <= 10) {
          icon = `0${icon}`
        }
      const iconLink = `https://developer.accuweather.com/sites/default/files/${icon}-s.png`

      return `<h1>City: ${city}</h1> <h3>Temperature: ${temperature}</h3> <h3>Condition: ${condition}</h3> <h3>Is it Daylight? ${isDayLight}</h3> <image src="${iconLink}"></image><form><input type="button" value="Go back!" onclick="history.back()"></form>`;
    } else if (typeof(apiJsonWeather) === 'undefined') {
        return `Please, select a valid city's name <br><form><input type="button" value="Go back!" onclick="history.back()"></form>`;
    }}
  catch (error) {
    return console.log(`error in the function getElements ${error}`);
  }
}

const weather = async (req, res) => {
  // Changes city names with spaces to a encodeURI, that way it can be readable by the API
  city = req.city;
  locationURL = encodeURI(req.city);
  // the project to github without sending the api key tha is in .env file
  apiKey = process.env.API_KEY;

  pageKey = `http://dataservice.accuweather.com/locations/v1/cities/search?apikey=${apiKey}&q=${locationURL}`;

  res.send(await getElements());   
}

export default weather;