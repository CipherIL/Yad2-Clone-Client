import React from "react";
import FormFieldSingleInput from "../../../components/custom/FormFieldSingleInput.component";
import FormSubmitButton from "../../../components/custom/FormSubmitButton.component";
import registrationFirstFormActionTypes from "../../../types/registrationFirstFormAction.types";
import { registrationFormAction } from "../../../actions/registrationForm.actions";
import { checkEmailAvailability } from "../../../server/user.requests";

const RegistrationFormFirstStage = ({formState,dispatchForm,toggleForm,setFirstStageRegistration}) => {

    const handleEmailInput = (e) => {
        const email = e.target.value;
        dispatchForm(registrationFormAction(registrationFirstFormActionTypes.CHANGE_EMAIL_STATE,email));
    }
    const handlePasswordInput = (e) => {
        const password = e.target.value;
        dispatchForm(registrationFormAction(registrationFirstFormActionTypes.CHANGE_PASSWORD_STATE,password));
    }
    const handlePasswordRepeatInput = (e) => {
        const passwordRepeat = e.target.value;
        dispatchForm(registrationFormAction(registrationFirstFormActionTypes.CHANGE_PASSWORD_REAPET_STATE,passwordRepeat));
    }
    const handleRegistered = () => {
        toggleForm(formState.values.email);
    }
    const handleFormSubmit = (e) => {
        e.preventDefault();
        let isValidForm = true;
        for(let key in formState.isValid) {
            if(!formState.isValid[key]) {
                isValidForm = false;
                dispatchForm(registrationFormAction(registrationFirstFormActionTypes.CHANGE_SHOW_ERROR_MESSAGES_STATE));
                break;
            }
        }
        if(isValidForm) {
            checkEmailAvailability(formState.values.email,formState.values.password)
            .then(res=>{
                if(res.status === 200) setFirstStageRegistration(false);
            })
            .catch(err=>{
                dispatchForm(registrationFormAction(registrationFirstFormActionTypes.CHANGE_FORM_MESSAGE_STATE,{
                    text: err.response.data.message,
                    addClass: 'error'
                }));
            })
        }
    }

    return (
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
    )
}

export default RegistrationFormFirstStage;