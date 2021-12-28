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
        minFloor: "-1",
        maxFloor: "18",
        minArea: "",
        maxArea: "",
        entryDate: new Date(),
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
            let updatedValue = value.replaceAll(",","");
            if(!regex.test(updatedValue)) updatedValue = state.values.minPrice;
            return {
                values: {...state.values,minPrice:updatedValue}
            }
        }
        case realestateSearchFormActionTypes.CHANGE_MAX_PRICE_STATE : {
            const regex = /^[0-9]*$/;
            const {value} = action.payload;
            let updatedValue = value.replaceAll(",","");
            if(!regex.test(updatedValue)) updatedValue = state.values.maxPrice;
            return {
                values: {...state.values,maxPrice:updatedValue}
            }
        }
        case realestateSearchFormActionTypes.CHANGE_FEATURES_STATE : {
            const {value} = action.payload;
            let updatedFeatures = [...state.values.features];
            const index = updatedFeatures.indexOf(value);
            if(index === -1) {
                updatedFeatures.push(value);
            }
            else {
                updatedFeatures.splice(index,1);
            }
            return {
                values: {...state.values, features:updatedFeatures}
            }
        }
        case realestateSearchFormActionTypes.CHANGE_MIN_FLOORS : {
            const {value} = action.payload;
            return {
                values: {...state.values,minFloor:value}
            }
        }
        case realestateSearchFormActionTypes.CHANGE_MAX_FLOORS : {
            const {value} = action.payload;
            return {
                values: {...state.values,maxFloor:value}
            }
        }
        case realestateSearchFormActionTypes.CHANGE_ENTRY_DATE_STATE : {
            const {value} = action.payload;
            return {
                values: {...state.values, entryDate:value}
            }
        }
        case realestateSearchFormActionTypes.CHANGE_ENTRY_NOW_STATE : {
            return {
                values: {...state.values, entryNow: !state.values.entryNow}
            }
        }
        case realestateSearchFormActionTypes.CHANGE_MIN_AREA_STATE : {
            const {value} = action.payload;
            return {
                values: {...state.values, minArea: value}
            }
        }
        case realestateSearchFormActionTypes.CHANGE_MAX_AREA_STATE : {
            const {value} = action.payload;
            return {
                values: {...state.values, maxArea: value}
            }
        }
        case realestateSearchFormActionTypes.CHANGE_FREE_TEXT_STATE : {
            const {value} = action.payload;
            return {
                values: {...state.values,freeText: value}
            }
        }
        default: return {...state}; 
    }
}

export default realestateSearchFormReducer;