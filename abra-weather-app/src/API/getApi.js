import axios from "axios";

// const apiKey = "35L09RAlL0ITxpGA82yRa7BmN375GJ4k"
const apiKey = "xC8As2or5WtHRfh9zHDFAkkmdm3QqH7m"
// const apiKey = "mlNlIOut5zL8xGiDtG6vDdVsZaHuaIm6"


export async function getAutoComplete(q) {
    const response = await axios.get(`http://dataservice.accuweather.com/locations/v1/cities/autocomplete?apikey=${apiKey}&q=${q}`);
    return response.data;
}

export async function getCurrentCondition(locationKey = "215854") {
    const response = await axios.get(`http://dataservice.accuweather.com/currentconditions/v1/${locationKey}?apikey=${apiKey}`);
    return response.data;
}

export async function getFiveDays(locationKey = "215854") {
    const response = await axios.get(`http://dataservice.accuweather.com/forecasts/v1/daily/5day/${locationKey}?apikey=${apiKey}`);
    return response.data;
}

