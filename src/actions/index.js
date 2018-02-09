const API_KEY = 'ddc2fcabe23293a4392f824dcae32290';
const ROOT_URL = `http://api.openweathermap.org/data/2.5/forecast?appid=${API_KEY}`
// actions as constants improve consistancy (I can change the string and )
// it will affect all reducers using it
export const FETCH_WEATHER = 'FETCH_WEATHER';

export function fetchweather(city) {
  const url = `${ROOT_URL}&q=${city},us`;
  const request = axios.get(url);

  return {
    type: FETCH_WEATHER,
    payload: request
  }
}
