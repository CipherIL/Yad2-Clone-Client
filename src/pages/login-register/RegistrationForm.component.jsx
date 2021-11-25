import React from "react";
import FormFieldSingleInput from "../../components/custom/FormFieldSingleInput.component";
import FormSubmitButton from "../../components/custom/FormSubmitButton.component";

const RegistrationForm = ({toggleForm}) => {
    const handleRegistered = () => {
        toggleForm();
    }
    return (
        <div className="register__form__container">
            <div className="register__form__title">
                <img src="/svgs/icon_signup.svg" alt="login" class="register__form__title__icon"/>
                <h1 className="register__form__title__text">היי, נעים להכיר</h1>
            </div>
            <form className="register__form">
                <FormFieldSingleInput labelText={"מייל"} placeHolder={"yourmail@email.co.il"}/>
                <FormFieldSingleInput labelText={"סיסמה"} inputType={"password"} placeHolder={"הקלדת סיסמא"}/>
                <FormFieldSingleInput labelText={"סיסמה"} inputType={"password"} placeHolder={"הקלדת סיסמא"}/>
                <div className="submit-and-errors">
                    
                    <FormSubmitButton buttonText={"המשך"}/>
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