import { PPRSecondFormActionTypes, PPRSixthFormActionTypes } from "../../types/publishPrivateRealestateFormAction.types";

export const PPR_SIXTH_FROM_INITIAL_STATE = {
    values: {
        contactName: "",
        contactCellphone: "",
        contactEmail: "",
        contactVirtualNumber: false,
        contactWeekend: false,
        contactMailingList: false,
        contactTerms: false,
    },
    isValid: {
        contactName: false,
        contactCellphone: false,
        contactEmail: false,
        contactTerms: false,
    },
    errorMessage: {
        contactName: "שדה זה חובה",
        contactCellphone: "שדה זה חובה",
        contactEmail: "שדה זה חובה",
        contactTerms: "חובה לאשר את תנאי התקנון",
    },
    showError: {
        contactName: false,
        contactCellphone: false,
        contactEmail: false,
        contactTerms: false,
    }
}

const PPRSixthFormReducer = (state,action) => {
    switch(action.type) {
        case PPRSixthFormActionTypes.CHANGE_CONTACT_NAME_STATE : {
            const {value} = action.payload;
            const isValidValue = value.trim() !== "";

            let errorMessage = "";
            if(!isValidValue) errorMessage = "שדה זה חובה";

            return {
                values: {...state.values, contactName: value},
                isValid: {...state.isValid, contactName: isValidValue},
                errorMessage: {...state.errorMessage, contactName: errorMessage},
                showError: {...state.showError, contactName: false},
            }
        }
        case PPRSixthFormActionTypes.CHANGE_CONTACT_CELLPHONE_STATE : {
            const {value} = action.payload;
            const isValidValue = value.trim() !== "";

            let errorMessage = "";
            if(!isValidValue) errorMessage = "שדה זה חובה";

            return {
                values: {...state.values, contactCellphone: value},
                isValid: {...state.isValid, contactCellphone: isValidValue},
                errorMessage: {...state.errorMessage, contactCellphone: errorMessage},
                showError: {...state.showError, contactCellphone: false},
            }
        }
        case PPRSixthFormActionTypes.CHANGE_CONTACT_EMAIL_STATE : {
            const {value} = action.payload;
            const isValidValue = value.trim() !== "";

            let errorMessage = "";
            if(!isValidValue) errorMessage = "שדה זה חובה";

            return {
                values: {...state.values, contactEmail: value},
                isValid: {...state.isValid, contactEmail: isValidValue},
                errorMessage: {...state.errorMessage, contactEmail: errorMessage},
                showError: {...state.showError, contactEmail: false},
            }
        }
        case PPRSixthFormActionTypes.CHANGE_CONTACT_VIRTUAL_CELLPHONE_STATE : {

        }
        case PPRSixthFormActionTypes.CHANGE_CONTACT_WEEKEND_STATE : {

        }
        case PPRSixthFormActionTypes.CHANGE_CONTACT_TERMS_STATE : {

        }
        case PPRSixthFormActionTypes.CHANGE_CONTACT_MAILING_LIST_STATE : {

        }
        default: return {...state};
    }
}

export default PPRSixthFormReducer;