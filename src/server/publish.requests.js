import axios from "axios";

const apiUrl = process.env.REACT_APP_ADDRESS_API_DOMAIN;

export const getCitySuggestions = async (query) => {
    const link = apiUrl + "/city?limit=5&q=" + query;
    const response = await axios.get(link);
    return response;
}