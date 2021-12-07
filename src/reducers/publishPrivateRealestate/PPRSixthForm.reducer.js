import { PPRSixthFormActionTypes } from "../../types/publishPrivateRealestateFormAction.types";

export const PPR_SIXTH_FROM_INITIAL_STATE = {
    values: {
        contactName: "",
        contactCellphone: "",
        contactEmail: "",
        contactVirtualNumber: false,
        contactWeekend: false,
        contactMailingList: false,
        contactTerms: false,
        secondaryContactName: "",
        secondaryContactCellphone: "",
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
    },
    isDisabled: {
        contactWeekend: true,
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
                isDisabled: {...state.isDisabled}
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
                isDisabled: {...state.isDisabled}
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
                isDisabled: {...state.isDisabled}
            }
        }
        case PPRSixthFormActionTypes.CHANGE_CONTACT_VIRTUAL_CELLPHONE_STATE : {
            const {value} = action.payload;

            return {
                values: {...state.values, contactVirtualNumber: value, contactWeekend:false},
                isValid: {...state.isValid},
                errorMessage: {...state.errorMessage},
                showError: {...state.showError},
                isDisabled: {...state.isDisabled, contactWeekend: !value}
            }
        }
        case PPRSixthFormActionTypes.CHANGE_CONTACT_WEEKEND_STATE : {
            const {value} = action.payload;

            return {
                values: {...state.values, contactWeekend: value},
                isValid: {...state.isValid},
                errorMessage: {...state.errorMessage},
                showError: {...state.showError},
                isDisabled: {...state.isDisabled}
            }
        }
        case PPRSixthFormActionTypes.CHANGE_CONTACT_TERMS_STATE : {
            const {value} = action.payload;
            let errorMessage = "";
            if(!value) errorMessage = "חובה לאשר את תנאי התקנון";

            return {
                values: {...state.values, contactTerms: value},
                isValid: {...state.isValid, contactTerms: value},
                errorMessage: {...state.errorMessage, contactTerms: errorMessage},
                showError: {...state.showError, contactTerms: false},
                isDisabled: {...state.isDisabled}
            }
        }
        case PPRSixthFormActionTypes.CHANGE_CONTACT_MAILING_LIST_STATE : {
            const {value} = action.payload;

            return {
                values: {...state.values, contactMailingList: value},
                isValid: {...state.isValid},
                errorMessage: {...state.errorMessage},
                showError: {...state.showError, contactMailingList: false},
                isDisabled: {...state.isDisabled}
            }
        }
        default: return {...state};
    }
}

export default PPRSixthFormReducer;