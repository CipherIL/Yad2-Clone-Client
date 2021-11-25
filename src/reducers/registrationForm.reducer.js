import registrationFormActionTypes from '../types/registrationFormAction.types';
import validator from 'validator';
import {passwordRegex} from '../utils/passwordRegex';

export const REGISTRATION_FORM_INITIAL_STATE = {
    values: {
        email:"",
        password:"",
        passwordRepeat:"",
    },
    isValid: {
        email: false,
        password: false,
        passwordRepeat: false,
    },
    errorMessages: {
        email:"זה שדה חובה",
        password:"זה שדה חובה",
        passwordRepeat:"זה שדה חובה",
    },
    showErrorMessages: {
        email:false,
        password:false,
        passwordRepeat:false,
    },
    formMessage:{
        text: "",
        addClass:"",
    },
}

const registrationFormReducer = (state,action) => {
    switch(action.type) {
        case registrationFormActionTypes.CHANGE_EMAIL_STATE : {
            const {value} = action.payload;
            const isValidEmail = validator.isEmail(value);
            let emailErrorMessage = ""
            if(value==="") emailErrorMessage = "שדה זה חובה";
            else if(!isValidEmail) emailErrorMessage = "מייל לא חוקי";

            const updatedValues = {...state.values, email: value};
            const updatedIsValid = {...state.isValid, email: isValidEmail};
            const updatedErrorMessages = {...state.errorMessages, email: emailErrorMessage};
            const updateShowErrorMessages = {...state.showErrorMessages, email: false}

            return {
                values: updatedValues,
                isValid: updatedIsValid,
                errorMessages: updatedErrorMessages,
                showErrorMessages: updateShowErrorMessages,
                formMessage: {text:"",addClass:""},
            }
        }
        case registrationFormActionTypes.CHANGE_PASSWORD_STATE : {
            const {value} = action.payload;
            const isValidPassword = passwordRegex.test(value);
            let passwordErrorMessage = "";
            if(value === "") passwordErrorMessage = "שדה זה חובה";
            else if(!isValidPassword) passwordErrorMessage = "מבנה סיסמה לא תקין"; 


            const updatedValues = {...state.values,password:value};
            const updatedIsValid = {...state.isValid,password:isValidPassword};
            const updatedErrorMessages = {...state.errorMessages,password:passwordErrorMessage};
            const updateShowErrorMessages = {...state.showErrorMessages,password:false}

            return {
                values: updatedValues,
                isValid: updatedIsValid,
                errorMessages: updatedErrorMessages,
                showErrorMessages: updateShowErrorMessages,
                formMessage: {text:"",addClass:""},
            }
        }
        case registrationFormActionTypes.CHANGE_PASSWORD_REAPET_STATE : {
            const {value} = action.payload;
            const isValidPasswordRepeat = value === state.values.password;
            let passwordRepeatErrorMessage = "";
            if(value === "") passwordRepeatErrorMessage = "שדה זה חובה";
            else if (value !== state.values.password) passwordRepeatErrorMessage = "הסיסמאות לא זהות";

            const updatedValues = {...state.values,passwordRepeat:value};
            const updatedIsValid = {...state.isValid,passwordRepeat:isValidPasswordRepeat};
            const updatedErrorMessages = {...state.errorMessages,passwordRepeat:passwordRepeatErrorMessage};
            const updateShowErrorMessages = {...state.showErrorMessages,passwordRepeat:false}
            return {
                values: updatedValues,
                isValid: updatedIsValid,
                errorMessages: updatedErrorMessages,
                showErrorMessages: updateShowErrorMessages,
                formMessage: {text:"",addClass:""},
            }
            
        }
        case registrationFormActionTypes.CHANGE_FORM_MESSAGE_STATE : {
            const {value} = action.payload;
            return {
                ...state,
                formMessage: {text: value.text,addClass: value.addClass},
            }
        }
        case registrationFormActionTypes.CHANGE_SHOW_ERROR_MESSAGES_STATE : {
            return {
                ...state,
                showErrorMessages: {email: true,password: true,passwordRepeat: true,},
            }
        }
        default : return {...state};
    }
}

export default registrationFormReducer;