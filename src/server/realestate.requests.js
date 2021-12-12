import axios from "axios";

const apiUrl = process.env.REACT_APP_API_DOMAIN + ":" + process.env.REACT_APP_API_PORT;

export const getRealestatePosts = async (searchParams) => {
    const link = apiUrl + "/realestate/get-posts";
    const response = await axios.post(link,searchParams);
    return response;
}