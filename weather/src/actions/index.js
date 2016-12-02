import axios from 'axios';

const API_KEY = '1422bc43c5e18baa4c47ffbb07607f2f';
const ROOT_URL = `http://api.openweathermap.org/data/2.5/forecast?appid=${API_KEY}`;

export FETCH_WEATHER = 'FETCH_WEATHER'

export  function fetchWeather(city) {
	const url = `${ROOT_URL}&q=${city},br`;

	const request = axios.get(url);

	return {
		type: FETCH_WEATHER,
		payload: request
	};
}
