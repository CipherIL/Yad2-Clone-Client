import React, { useReducer } from "react";
import FormFieldSingleInput from "../../components/custom/FormFieldSingleInput.component";
import FormSubmitButton from "../../components/custom/FormSubmitButton.component";
import useWindowDemensions from "../../hooks/useWindowDimensions"
//Reducer imports
import registrationFormReducer, { REGISTRATION_FORM_INITIAL_STATE } from "../../reducers/registrationForm.reducer";
import registrationFormActionTypes from "../../types/registrationFormAction.types";
import {registrationFormAction} from "../../actions/registrationForm.actions";

const RegistrationForm = ({toggleForm}) => {
    const [formState,dispatchForm] = useReducer(registrationFormReducer,REGISTRATION_FORM_INITIAL_STATE);
    const {width} = useWindowDemensions();
    
    //Handler Functions
    const handleEmailInput = (e) => {
        const email = e.target.value;
        dispatchForm(registrationFormAction(registrationFormActionTypes.CHANGE_EMAIL_STATE,email));
    }
    const handlePasswordInput = (e) => {
        const password = e.target.value;
        dispatchForm(registrationFormAction(registrationFormActionTypes.CHANGE_PASSWORD_STATE,password));
    }
    const handlePasswordRepeatInput = (e) => {
        const passwordRepeat = e.target.value;
        dispatchForm(registrationFormAction(registrationFormActionTypes.CHANGE_PASSWORD_REAPET_STATE,passwordRepeat));
    }
    const handleFormSubmit = (e) => {
        e.preventDefault();
        let isValidForm = true;
        for(let key in formState.isValid)
            if(!formState.isValid[key]) {
                isValidForm = false;
                dispatchForm(registrationFormAction(registrationFormActionTypes.CHANGE_SHOW_ERROR_MESSAGES_STATE));
                break;
            }
        if(isValidForm) {
            console.log(formState)
        }
    }
    const handleRegistered = () => {
        toggleForm(formState.values.email);
    }

    
    return (
        <div className="register__form__container">
            <div className="register__form__title">
                {width <= 880 && <img src="/svgs/icon_signup.svg" alt="login" className="register__form__title__icon"/>}
                <h1 className="register__form__title__text">היי, נעים להכיר</h1>
            </div>
            <form className="register__form">
                <FormFieldSingleInput labelText={"מייל"} placeHolder={"yourmail@email.co.il"} 
                                      errorMessage={formState.showErrorMessages.email && formState.errorMessages.email} updateFunction={handleEmailInput}/>

                <FormFieldSingleInput labelText={"סיסמה"} inputType={"password"} errorMessage={formState.showErrorMessages.password && formState.errorMessages.password}
                                      placeHolder={"הקלדת סיסמא"} passwordBubble={true} updateFunction={handlePasswordInput}/>

                <FormFieldSingleInput labelText={"סיסמה"} inputType={"password"} placeHolder={"הקלדת סיסמא"} 
                                      errorMessage={formState.showErrorMessages.passwordRepeat && formState.errorMessages.passwordRepeat} updateFunction={handlePasswordRepeatInput}/>

                <div className="submit-and-errors">
                    {formState.formMessage.text!=="" && <div className={`register__form__form-message ${formState.formMessage.addClass}`}>
                        {formState.formMessage.text}</div>}
                    <FormSubmitButton buttonText={"המשך"} buttonFunction={handleFormSubmit}/>
                </div>
                <div className="go-to-login">
                    כבר יש לך חשבון? 
                    <span className="go-to-login__button" onClick={handleRegistered}>להתחברות</span>
                </div>
            </form>
        </div>
    )
}

export default RegistrationForm;