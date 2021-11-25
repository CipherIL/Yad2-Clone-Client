import React from "react";
import FormFieldSingleInput from "../../components/custom/FormFieldSingleInput.component";
import FormSubmitButton from "../../components/custom/FormSubmitButton.component";
const LoginForm = ({toggleForm}) => {
    const handleNotRegistered = () => {
        toggleForm();
    }
    return (
        <div className="login__form__container">
            <div className="login__form__title">
                <img src="/svgs/icon_login.svg" alt="login" class="login__form__title__icon"/>
                <h1 className="login__form__title__text">היי, טוב לראות אותך</h1>
            </div>
            <form className="login__form">
                <FormFieldSingleInput labelText={"מייל"} placeHolder={"yourmail@email.co.il"}/>
                <FormFieldSingleInput labelText={"סיסמה"} inputType={"password"} placeHolder={"הקלדת סיסמא"}/>
                <div className="login__form__password-reset" onClick={()=>{alert("This button is not functional");}}>
                    שכחתי סיסמה</div>
                <div className="submit-and-errors">
                    
                    <FormSubmitButton buttonText={"התחברות"}/>
                </div>
                <div className="go-to-register">
                    אין לך חשבון? 
                    <span className="go-to-register__button" onClick={handleNotRegistered}>להרשמה</span>
                </div>
            </form>
        </div>
    )
}

export default LoginForm;