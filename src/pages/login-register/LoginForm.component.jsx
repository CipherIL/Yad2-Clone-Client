import React, { useReducer, useContext } from "react";
import { UserContext } from '../../contexts/User.context';
import { loginUser } from '../../server/user.requests';
//Component Imports
import FormFieldSingleInput from "../../components/custom/FormFieldSingleInput.component";
import FormSubmitButton from "../../components/custom/FormSubmitButton.component";
import useWindowDimensions from '../../hooks/useWindowDimensions';

//Reducer Imports
import loginFormReducer, {LOGIN_FORM_INITIAL_STATE} from '../../reducers/loginForm.reducer';
import { loginFormAction } from "../../actions/loginForm.actions";
import loginFormActionTypes from "../../types/loginFormAction.types";

//Component
const LoginForm = ({toggleForm}) => {
    const {width} = useWindowDimensions();
    const [formState,dispatchForm] = useReducer(loginFormReducer,LOGIN_FORM_INITIAL_STATE);
    const {setUser} = useContext(UserContext)

    const handleNotRegistered = () => {
        toggleForm();
    }

    const handleEmailInput = (e) => {
        const email = e.target.value;
        dispatchForm(loginFormAction(loginFormActionTypes.CHANGE_EMAIL_STATE,email));
    }
    const handlePasswordInput = (e) => {
        const password = e.target.value;
        dispatchForm(loginFormAction(loginFormActionTypes.CHANGE_PASSWORD_STATE,password));
    }
    const handleFormSubmit = (e) => {
        e.preventDefault();
        if(Object.values(formState.isValid).some(el=>el===false)) {
            dispatchForm(loginFormAction(loginFormActionTypes.CHANGE_SHOW_ERROR_MESSAGES,{email:true,password:true}));
        }
        else {
            loginUser(formState.values.email,formState.values.password)
            .then(res=>{
                console.log(res)
                setUser(res.data);
            })
            .catch(err=>{
                dispatchForm(loginFormAction(loginFormActionTypes.CHANGE_FORM_MESSAGE_STATE,{text:err.response.data,addClass:"error"}));
            })
        }
    }
    return (
        <div className="login__form__container">
            <div className="login__form__title">
                {width<=880 && <img src="/svgs/icon_login.svg" alt="login" className="login__form__title__icon"/>}
                <h1 className="login__form__title__text">היי, טוב לראות אותך</h1>
            </div>

            <form className="login__form">
                <FormFieldSingleInput 
                labelText={"מייל"} 
                placeHolder={"yourmail@email.co.il"} 
                updateFunction={handleEmailInput} 
                errorMessage={formState.showErrorMessage.email && formState.errorMessage.email}/>

                <FormFieldSingleInput 
                labelText={"סיסמה"} 
                inputType={"password"} 
                placeHolder={"הקלדת סיסמא"} 
                updateFunction={handlePasswordInput}
                errorMessage={formState.showErrorMessage.password && formState.errorMessage.password}/>

                <div className="login__form__password-reset" onClick={()=>{alert("This button is not functional");}}>
                    שכחתי סיסמה</div>
                <div className="submit-and-errors">
                    <div className={`login__form__message `+formState.formMessage.addClass}>
                        {formState.formMessage.text !== "" && formState.formMessage.text}</div>
                    <FormSubmitButton buttonText={"התחברות"} buttonFunction={handleFormSubmit}/>
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