import { PPRThirdFormActionTypes } from "../../types/publishPrivateRealestateFormAction.types";

export const PPR_THIRD_FORM_INITIAL_STATE = {
    completed: false,
    values: {
        rooms: "",
        parkingSpots: "ללא",
        balconies: "ללא",
        features: {
            airConditioning: false,
            mamad: false,
            storage: false,
            furniture: false,
            accessibility: false,
            elevator: false,
            tadiran: false,
            renovated: false,
            kosherKitchen: false,
            waterTank: false,
            metalBars: false,
        },
        description: "",
    },
    isValid: {
        rooms: false,
        description: false,
    },
    showError: {
        rooms: false,
    },
    errorMessage: {
        rooms: "שדה חובה",
    }
}

const PPRThirdFormReducer = (state,action) => {

    switch(action.type) {
        case PPRThirdFormActionTypes.CHANGE_ROOMS_STATE : {
            const {value} = action.payload;
            console.log(value)
            return {
                completed: false,
                values: {...state.values, rooms: value},
                isValid: {...state.isValid},
                showError: {...state.showError},
                errorMessage:{...state.errorMessage, rooms: ""}
            }
        }
        case PPRThirdFormActionTypes.CHANGE_PARKING_STATE : {
            const {value} = action.payload;
            return {
                completed: false,
                values: {...state.values, parkingSpots: value},
                isValid: {...state.isValid},
                showError: {...state.showError},
                errorMessage:{...state.errorMessage}
            }
        }
        case PPRThirdFormActionTypes.CHANGE_BALCONIES_STATE : {
            const {value} = action.payload;
            return {
                completed: false,
                values: {...state.values, balconies: value},
                isValid: {...state.isValid},
                showError: {...state.showError},
                errorMessage:{...state.errorMessage}
            }
        }
        case PPRThirdFormActionTypes.CHANGE_FEATURES_STATE : {
            const {key,value} = action.payload;
            const updateFeatures = {...state.values.features};
            updateFeatures[key] = value;
            return {
                completed: false,
                values: {...state.values, features: updateFeatures},
                isValid: {...state.isValid},
                showError: {...state.showError},
                errorMessage:{...state.errorMessage}
            }
        }
        case PPRThirdFormActionTypes.CHANGE_DESCRIPTION_STATE : {
            const {value} = action.payload;
            const isValidValue = value !== "";
            return {
                completed: false,
                values: {...state.values, description: value},
                isValid: {...state.isValid, description: isValidValue},
                showError: {...state.showError},
                errorMessage:{...state.errorMessage}
            }
        }
        case PPRThirdFormActionTypes.CHANGE_SHOW_ERROR_STATE : {
            return {
                completed: false,
                values: {...state.values},
                isValid: {...state.isValid},
                showError: {rooms:true,},
                errorMessage:{...state.errorMessage}
            }
        }
        case PPRThirdFormActionTypes.CHANGE_COMPLETED_STATE : {
            const {value} = action.payload;
            return {
                completed: value,
                values: {...state.values},
                isValid: {...state.isValid},
                showError: {...state.showError},
                errorMessage:{...state.errorMessage}
            }
        }
        default : return {...state};
    }
}

export default PPRThirdFormReducer;