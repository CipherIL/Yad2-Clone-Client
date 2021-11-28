import axios from "axios";

const apiUrl = process.env.REACT_APP_API_DOMAIN + ":" + process.env.REACT_APP_API_PORT;

export const checkEmailAvailability = async (email) => {
    const link = apiUrl + "/user/email-availability";
    const response = await axios.post(link,{email},{withCredentials:true})
    return response;
}

export const registerUser = async (data) => {
    const link = apiUrl + "/user/register";
    const response = await axios.post(link,data,{withCredentials:true});
    return response;
}

export const checkIfValidAuthToken = async () => {
    const link = apiUrl + "/user/check-token";
    const response = await axios.get(link,{withCredentials:true})
    return response;
}