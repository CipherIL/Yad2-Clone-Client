import loginFormActionTypes from '../types/loginFormAction.types';
import validator from 'validator';

export const LOGIN_FORM_INITIAL_STATE = {
    values: {
        email: "",
        password: "",
    },
    isValid: {
        email: false,
        password: false,
    },
    errorMessage: {
        email: "שדה זה חובה",
        password: "שדה זה חובה",
    },
    showErrorMessage: {
        email: false,
        password: false,
    },
    formMessage: {
        text: "",
        addClass: "",
    }
}

const loginFormReducer = (state,action) => {
    switch(action.type) {
        case loginFormActionTypes.CHANGE_EMAIL_STATE : {
            const {value} = action.payload;
            const isValidEmail = validator.isEmail(value);
            let emailErrorMessage = "";
            if(!isValidEmail) emailErrorMessage = "אימייל לא תקין";
            if(value === "") emailErrorMessage = "שדה זה חובה";
            
            const updatedValues = {...state.values, email:value};
            const updatedIsValid = {...state.isValid, email: isValidEmail};
            const updatedErrorMessages = {...state.errorMessage, email: emailErrorMessage};

            return {
                values: updatedValues,
                isValid: updatedIsValid,
                errorMessage: updatedErrorMessages,
                showErrorMessage: {...state.showErrorMessage, email: false},
                formMessage: {text:"",addClass:""}
            }
        }
        case loginFormActionTypes.CHANGE_PASSWORD_STATE : {
            let {value} = action.payload;
            value = value.trim();
            const isValidPassword = value !== "";
            let passwordErrorMessage = "";
            if(value === "") passwordErrorMessage = "שדה זה חובה";
            
            const updatedValues = {...state.values, password: value};
            const updatedIsValid = {...state.isValid, password: isValidPassword};
            const updatedErrorMessages = {...state.errorMessage, password: passwordErrorMessage};

            return {
                values: updatedValues,
                isValid: updatedIsValid,
                errorMessage: updatedErrorMessages,
                showErrorMessage: {...state.showErrorMessage, password: false},
                formMessage: {text:"",addClass:""}
            }
        }
        case loginFormActionTypes.CHANGE_FORM_MESSAGE_STATE : {
            const {value} = action.payload;
            return {
                values: {...state.values},
                isValid: {...state.isValid},
                errorMessage: {...state.errorMessage},
                showErrorMessage: {...state.showErrorMessage},
                formMessage: {text: value.text, addClass: value.addClass}
            }
        }
        case loginFormActionTypes.CHANGE_SHOW_ERROR_MESSAGES : {
            const {value} = action.payload;
            return {
                values: {...state.values},
                isValid: {...state.isValid},
                errorMessage: {...state.errorMessage},
                showErrorMessage: {...value},
                formMessage: {...state.formMessage}
            } 
        }
        default: return {...state};
    }
}

export default loginFormReducer;