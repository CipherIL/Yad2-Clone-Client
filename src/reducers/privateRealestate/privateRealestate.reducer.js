import { realestateSearchFormActionTypes } from "../../types/realestateSearchFormAction.types";

export const REALESTATE_SEARCH_FORM_INITIAL_STATE = {
    values: {
        address: "",
        types: [],
        minRooms: "",
        maxRooms: "",
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

}

export default realestateSearchFormReducer;