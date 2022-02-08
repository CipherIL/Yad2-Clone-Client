import registrationSecondFormActionTypes from '../types/registrationSecondFormAction.types';
import validator from 'validator';

export const REGISTRATION_SECOND_FORM_INITIAL_STATE = {
    values: {
        name:"",
        surname:"",
        cellphone:"",
        terms: true,
        isOnMailingList: false,
    },
    isValid: {
        name: false,
        surname: false,
        cellphone: false,
    },
    errorMessages: {
        name:"זה שדה חובה",
        surname:"זה שדה חובה",
        cellphone:"זה שדה חובה",
    },
    showErrorMessages: {
        name:false,
        surname:false,
        cellphone:false,
    },
    formMessage:{
        text: "",
        addClass:"",
    },
}

const registrationSecondFormReducer = (state,action) => {
    switch(action.type) {
        case registrationSecondFormActionTypes.CHANGE_NAME_STATE : {
            const {value} = action.payload;
            const isValidName = value !== "";
            let nameErrorMessage = ""
            if(!isValidName) nameErrorMessage = "שדה זה חובה";
            
            const updatedValues = {...state.values, name: value};
            const updatedIsValid = {...state.isValid, name: isValidName};
            const updatedErrorMessages = {...state.errorMessages, name: nameErrorMessage};
            const updateShowErrorMessages = {...state.showErrorMessages, name: false}

            return {
                values: updatedValues,
                isValid: updatedIsValid,
                errorMessages: updatedErrorMessages,
                showErrorMessages: updateShowErrorMessages,
                formMessage: {text:"",addClass:""},
            }
        }
        case registrationSecondFormActionTypes.CHANGE_SURNAME_STATE : {
            const {value} = action.payload;
            const isValidSurname = value !=="";
            let surnameErrorMessage = "";
            if(!isValidSurname) surnameErrorMessage = "שדה זה חובה";

            const updatedValues = {...state.values,surname:value};
            const updatedIsValid = {...state.isValid,surname:isValidSurname};
            const updatedErrorMessages = {...state.errorMessages,surname:surnameErrorMessage};
            const updateShowErrorMessages = {...state.showErrorMessages,surname:false}

            return {
                values: updatedValues,
                isValid: updatedIsValid,
                errorMessages: updatedErrorMessages,
                showErrorMessages: updateShowErrorMessages,
                formMessage: {text:"",addClass:""},
            }
        }
        case registrationSecondFormActionTypes.CHANGE_CELLPHONE_STATE : {
            const {value} = action.payload;
            const isValidCellphone = (validator.isMobilePhone(value) && value.length === 10);
            let cellphoneErrorMessage = "";
            if(!isValidCellphone) cellphoneErrorMessage = "מספר טלפון לא תקין";
            if(value === "") cellphoneErrorMessage = "שדה זה חובה";

            const updatedValues = {...state.values,cellphone:value};
            const updatedIsValid = {...state.isValid,cellphone:isValidCellphone};
            const updatedErrorMessages = {...state.errorMessages,cellphone:cellphoneErrorMessage};
            const updateShowErrorMessages = {...state.showErrorMessages,cellphone:false}
            return {
                values: updatedValues,
                isValid: updatedIsValid,
                errorMessages: updatedErrorMessages,
                showErrorMessages: updateShowErrorMessages,
                formMessage: {text:"",addClass:""},
            }
            
        }
        case registrationSecondFormActionTypes.CHANGE_TERMS_STATE : {
            const {value} = action.payload;
            const updatedValues = {...state.values, terms:value};
            return {
                values: updatedValues,
                isValid: {...state.isValid},
                errorMessages: {...state.errorMessages},
                showErrorMessages: {...state.showErrorMessages},
                formMessage: {text:"",addClass:""},
            }
        }
        case registrationSecondFormActionTypes.CHANGE_MAILING_LIST_STATE : {
            const {value} = action.payload;
            const updatedValues = {...state.values, isOnMailingList:value};
            return {
                values: updatedValues,
                isValid: {...state.isValid},
                errorMessages: {...state.errorMessages},
                showErrorMessages: {...state.showErrorMessages},
                formMessage: {...state.formMessage},
            }
        }
        case registrationSecondFormActionTypes.CHANGE_FORM_MESSAGE_STATE : {
            const {value} = action.payload;
            return {
                values: {...state.values},
                isValid: {...state.isValid},
                errorMessages: {...state.errorMessages},
                showErrorMessages: {...state.showErrorMessages},
                formMessage: {text: value.text,addClass: value.addClass},
            }
        }
        case registrationSecondFormActionTypes.CHANGE_SHOW_ERROR_MESSAGES_STATE : {
            return {
                values: {...state.values},
                isValid: {...state.isValid},
                errorMessages: {...state.errorMessages},
                showErrorMessages: {email: true,password: true,Cellphone: true,},
                formMessage: {text:"",addClass:""},
            }
        }
        default : return {...state};
    }
}

export default registrationSecondFormReducer;