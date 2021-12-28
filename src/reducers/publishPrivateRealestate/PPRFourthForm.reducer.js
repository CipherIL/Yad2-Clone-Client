import { PPRFourthFormActionTypes } from "../../types/publishPrivateRealestateFormAction.types";

export const PPR_FOURTH_FORM_INITIAL_STATE = {
    values: {
        totalArea: "",
        builtArea: "",
        price: "",
        entryDate: "",
        entryNow: false,
        entryFlexible: false,
    },
    isValid: {
        totalArea: false,
        builtArea: false,
        price: false,
        entryDate: false,
    },
    errorMessage: {
        totalArea: "שדה חובה",
        builtArea: "שדה חובה",
        price: "שדה חובה",
        entryDate: "שדה חובה",
    },
    showError: {
        totalArea: false,
        builtArea: false,
        price: false,
        entryDate: false,
    },
    isDisabled: {
        entryDate: false,
    }
}

const PPRFourthFormReducer = (state,action) => {
    switch(action.type) {
        case PPRFourthFormActionTypes.CHANGE_BUILD_AREA_STATE : {
            const {value} = action.payload;
            const isValidValue = parseInt(value) > 0;

            let errorMessage = "";
            if(value==="") errorMessage = "שדה חובה";
            else if(!isValidValue) errorMessage = "אנא הזן ספרות בלבד"

            return {
                values: {...state.values, builtArea:value},
                isValid: {...state.isValid, builtArea:isValidValue},
                errorMessage: {...state.errorMessage, builtArea: errorMessage},
                showError: {...state.showError, builtArea: false},
                isDisabled: {...state.isDisabled},
            }
        }
        case PPRFourthFormActionTypes.CHANGE_TOTAL_AREA_STATE : {
            const {value} = action.payload;
            const isValidValue = parseInt(value) > 0;

            let errorMessage = "";
            if(value==="") errorMessage = "שדה חובה";
            else if(!isValidValue) errorMessage = "אנא הזן ספרות בלבד"

            return {
                values: {...state.values, totalArea:value},
                isValid: {...state.isValid, totalArea:isValidValue},
                errorMessage: {...state.errorMessage, totalArea: errorMessage},
                showError: {...state.showError, totalArea: false},
                isDisabled: {...state.isDisabled},
            }
        }
        case PPRFourthFormActionTypes.CHANGE_PRICE_STATE : {
            const {value} = action.payload;
            const isValidValue = parseInt(value) > 0;

            let errorMessage = "";
            if(value==="") errorMessage = "שדה חובה";
            else if(!isValidValue) errorMessage = "אנא הזן ספרות בלבד"

            return {
                values: {...state.values, price:value},
                isValid: {...state.isValid, price:isValidValue},
                errorMessage: {...state.errorMessage, price: errorMessage},
                showError: {...state.showError, price: false},
                isDisabled: {...state.isDisabled},
            }
        }
        case PPRFourthFormActionTypes.CHANGE_ENTRY_DATE_STATE : {
            const {value} = action.payload;
            const isValidValue = value !== "";
            console.log(value)
            let errorMessage = "";
            if(!isValidValue) errorMessage = "שדה חובה";
            
            return {
                values: {...state.values, entryDate:value},
                isValid: {...state.isValid, entryDate:isValidValue},
                errorMessage: {...state.errorMessage, entryDate: errorMessage},
                showError: {...state.showError, entryDate: false},
                isDisabled: {...state.isDisabled},
            }
        }
        case PPRFourthFormActionTypes.CHANGE_ENTRY_NOW_STATE : {
            const {value} = action.payload;
            const disableEntryDate = value;
            
            return {
                values: {...state.values,entryNow:value,entryFlexible:false},
                isValid: {...state.isValid},
                errorMessage: {...state.errorMessage},
                showError: {...state.showError},
                isDisabled: {...state.isDisabled, entryDate:disableEntryDate},
            }
        }
        case PPRFourthFormActionTypes.CHANGE_ENTRY_FLEXIBLE_STATE : {
            const {value} = action.payload;
            const disableEntryDate = value;
            
            return {
                values: {...state.values,entryNow:false,entryFlexible:value},
                isValid: {...state.isValid},
                errorMessage: {...state.errorMessage},
                showError: {...state.showError},
                isDisabled: {...state.isDisabled, entryDate:disableEntryDate},
            }
        }
        case PPRFourthFormActionTypes.CHANGE_SHOW_ERROR_STATE : {
            return {
                values: {...state.values},
                isValid: {...state.isValid},
                errorMessage: {...state.errorMessage},
                showError: {
                    totalArea: true,
                    builtArea: true,
                    price: true,
                    entryDate: true,
                },
                isDisabled: {...state.isDisabled},
            }
        }
        default: return {...state};
    }
}

export default PPRFourthFormReducer;