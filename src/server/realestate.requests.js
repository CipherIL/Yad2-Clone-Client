import axios from "axios";

const apiUrl = process.env.REACT_APP_API_DOMAIN + ":" + process.env.REACT_APP_API_PORT;
const addressAPIUrl = process.env.REACT_APP_ADDRESS_API_DOMAIN;

export const getRealestatePosts = async (searchParams,skip,limit) => {
    const link = apiUrl + "/realestate/get-posts";
    const response = await axios.post(link,{searchParams,skip,limit});
    return response;
}


export const getAddressAutocomplete = async (query) => {
    const cityUrl = addressAPIUrl+'/city';
    const streetUrl = addressAPIUrl+'/street';
    let returnData = {};

    //check if string in it entirety is a city or street
    let cityResponse = await fetch(`${cityUrl}?q=${query}&limit=5`);
    let streetResponse = await fetch(`${streetUrl}?q=${query}&limit=5&full=true`);
    
    //If either one of the requests returned data
    if(cityResponse.status === 200 || streetResponse.status === 200) {
        if(cityResponse.status === 200) {
            const parsedData = await cityResponse.json();
            returnData.cities = parsedData;
        }
        if(streetResponse.status === 200) {
            const parsedData = await streetResponse.json();
            returnData.streets = parsedData;
        }
        return returnData;
    }

    // if both requests returned no data
    else {
        const queryArr = query.split(" ");
        const streetQueries = [];

        //Prepare query combinations
        for (let i=0;i<queryArr.length;i++){
            streetQueries.push(queryArr[i]);
            for(let j=i+1;j<queryArr.length;j++) {
                streetQueries.push(`${queryArr[i]} ${queryArr[j]}`);
            }
        }

        returnData = {streets:[]}
        //For each combination
        for(let streetQuery of streetQueries) {
            //get the query            
            streetResponse = await fetch(`${streetUrl}?q=${streetQuery}&full=true`)
            if(streetResponse.status===200) {
                const parsedData = await streetResponse.json();
                //for each combination
                streetQueries.forEach(query=>{
                    //if it's not the one just queried
                    if(!streetQuery.includes(query) && !query.includes(streetQuery)) {
                        //for each street in the queried data
                        parsedData.forEach(street=>{
                            street.cities.forEach(city=>{
                                if(city.trim().includes(query))
                                returnData.streets.push({street:street.street,cities:[city.trim()]})
                            })
                        })
                    }
                })
            }
        }
        
        if(returnData.streets.length > 0) return returnData;
        return undefined
    }
}