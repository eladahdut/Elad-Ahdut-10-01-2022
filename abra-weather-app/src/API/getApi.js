import axios from "axios";

const apiKey = "xC8As2or5WtHRfh9zHDFAkkmdm3QqH7m"

export async function getAutoComplete(q) {
    const response = await axios.get(`http://dataservice.accuweather.com/locations/v1/cities/autocomplete?apikey=${apiKey}&q=Island`);
    console.log(response.data);
    return response.data;
}