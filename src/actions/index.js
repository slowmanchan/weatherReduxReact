import axios from 'axios';

const API_KEY = 'ddc2fcabe23293a4392f824dcae32290';
const ROOT_URL = `http://api.openweathermap.org/data/2.5/forecast?appid=${API_KEY}`
// actions as constants improve consistancy (I can change the string and )
// it will affect all reducers using it
export const FETCH_WEATHER = 'FETCH_WEATHER';

export function fetchweather(city) {
  const url = `${ROOT_URL}&q=${city},ca`;
  const request = axios.get(url);

  // redux-promise middleware look specifically at
  // this payload key and unwraps this promise (from the axios call)
  // the reducer gets the resolved promise (the actual data, not the promise object)
  // it stops the action until the promise is resolved.
  // a new action is sent to the reducer with payload: data object.
  return {
    type: FETCH_WEATHER,
    payload: request
  }
}
