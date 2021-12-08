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

export const logoutUser = async () => {
    const link = apiUrl+"/user/logout";
    const response = await axios.get(link,{withCredentials:true});
    return response;
}

export const loginUser = async (email,password) => {
    const link = apiUrl+"/user/login";
    const response = await axios.post(link,{email,password},{withCredentials:true});
    return response;
}

export const publishRealestate = async (realestateData) => {
    const link = apiUrl+"/user/publish-realestate";
    const response = await axios.post(link,{...realestateData},{withCredentials:true});
    return response;
}