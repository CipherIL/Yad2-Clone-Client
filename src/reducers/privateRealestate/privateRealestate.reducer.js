import { realestateSearchFormActionTypes } from "../../types/realestateSearchFormAction.types";

export const REALESTATE_SEARCH_FORM_INITIAL_STATE = {
    values: {
        address: "",
        types: {
            apartments: [],
            houses: [],
            others: [],
        },
        minRooms: "0",
        maxRooms: "12.5",
        minPrice: "",
        maxPrice: "",
        features: [],
        minFloor: "",
        maxFloor: "",
        minSize: "",
        maxSize: "",
        entryDate: "",
        entryNow: false,
        freeText: "",
    },
}

const realestateSearchFormReducer = (state,action) => {
    switch (action.type) {
        case realestateSearchFormActionTypes.CHANGE_TYPES_APARTMENTS_STATE : {
            const {value} = action.payload;
            let updatedArray = [...state.values.types.apartments];

            if(value.length===1) {
                const index = updatedArray.indexOf(value[0]);
                if(index===-1) updatedArray.push(value[0]);
                else updatedArray.splice(index,1);
            }
            else {
                if(updatedArray.length === 0)
                    updatedArray = value;
                else updatedArray = [];
            }

            return {
                values: {...state.values, types:{
                    apartments: updatedArray,
                    houses: [...state.values.types.houses],
                    others: [...state.values.types.others]
                }},
            }
        }
        case realestateSearchFormActionTypes.CHANGE_TYPES_HOUSES_STATE : {
            const {value} = action.payload;
            let updatedArray = [...state.values.types.houses];
            
            if(value.length===1) {
                const index = updatedArray.indexOf(value[0]);
                if(index===-1) updatedArray.push(value[0]);
                else updatedArray.splice(index,1);
            }
            else {
                if(updatedArray.length === 0)
                    updatedArray = value;
                else updatedArray = [];
            }

            return {
                values: {...state.values, types:{
                    apartments: [...state.values.types.apartments],
                    houses: updatedArray,
                    others: [...state.values.types.others]
                }},
            }
        }
        case realestateSearchFormActionTypes.CHANGE_TYPES_OTHERS_STATE : {
            const {value} = action.payload;
            let updatedArray = [...state.values.types.others];

            if(value.length===1) {
                const index = updatedArray.indexOf(value[0]);
                if(index===-1) updatedArray.push(value[0]);
                else updatedArray.splice(index,1);
            }
            else {
                if(updatedArray.length === 0)
                    updatedArray = value;
                else updatedArray = [];
            }

            return {
                values: {...state.values, types:{
                    apartments: [...state.values.types.apartments],
                    houses: [...state.values.types.houses],
                    others: updatedArray
                }},
            }
        }
        case realestateSearchFormActionTypes.CHANGE_TYPES_ALL_STATE : {
            const {value} = action.payload;
            let isEmpty = true;
            let updatedTypes = {
                apartments: [...state.values.types.apartments],
                houses: [...state.values.types.houses],
                others: [...state.values.types.others]
            };

            for(let arr of Object.values(updatedTypes)){
                if(arr.length > 0) {
                    isEmpty = false;
                    break;
                }
            }

            if(isEmpty) {
                updatedTypes.apartments = value.apartments;
                updatedTypes.houses = value.houses;
                updatedTypes.others = value.others;
            }
            else {
                updatedTypes.apartments = [];
                updatedTypes.houses = [];
                updatedTypes.others = [];
            }

            return {
                values: {...state.values, types:updatedTypes},
            }

        }
        case realestateSearchFormActionTypes.CHANGE_ADDRESS_STATE : {
            const {value} = action.payload;
            return {
                values: {...state.values,address:value},
            }
        }
        case realestateSearchFormActionTypes.CHANGE_MIN_ROOMS_STATE : {
            const {value} = action.payload;
            return {
                values: {...state.values,minRooms:value}
            }
        }
        case realestateSearchFormActionTypes.CHANGE_MAX_ROOMS_STATE : {
            const {value} = action.payload;
            return {
                values: {...state.values,maxRooms:value}
            }
        }
        case realestateSearchFormActionTypes.CHANGE_MIN_PRICE_STATE : {
            const regex = /^[0-9]*$/;
            const {value} = action.payload;
            let updatedValue = value;
            if(!regex.test(value)) updatedValue = state.values.minPrice;
            //FIXME: something is wrong with numbers of 7 digits and up
            return {
                values: {...state.values,minPrice:updatedValue}
            }
        }
        case realestateSearchFormActionTypes.CHANGE_MAX_PRICE_STATE : {
            const {value} = action.payload;
            return {
                values: {...state.values,maxPrice:value}
            }
        }
        default: return {...state}; 
    }
}

export default realestateSearchFormReducer;