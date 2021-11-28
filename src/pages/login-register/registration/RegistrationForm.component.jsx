import React, { useReducer, useState } from "react";
import { useNavigate } from 'react-router-dom';
import { registrationFormAction } from "../../../actions/registrationForm.actions";
import useWindowDemensions from "../../../hooks/useWindowDimensions"
//Reducer imports
import registrationFirstFormReducer, { REGISTRATION_FIRST_FORM_INITIAL_STATE } from "../../../reducers/registrationFirstForm.reducer";
import registrationSecondFormReducer, { REGISTRATION_SECOND_FORM_INITIAL_STATE } from "../../../reducers/registrationSecondForm.reducer";
import { registerUser } from "../../../server/user.requests";
import registrationSecondFormActionTypes from "../../../types/registrationSecondFormAction.types";

//Component imports
import RegistrationFormFirstStage from "./RegistrationFormFirstStage.component";
import RegistrationFormSecondStage from "./RegistrationFormSecondStage.component";

const RegistrationForm = ({toggleForm}) => {
    const navigate = useNavigate();
    const [firstFormState,dispatchFirstForm] = useReducer(registrationFirstFormReducer,REGISTRATION_FIRST_FORM_INITIAL_STATE);
    const [secondFormState,dispatchSecondForm] = useReducer(registrationSecondFormReducer,REGISTRATION_SECOND_FORM_INITIAL_STATE);
    const [firstStageRegistration,setFirstStageRegistration] = useState(true);
    const {width} = useWindowDemensions();
    
    const submitForm = (button) => {
        const data = {
            email: firstFormState.values.email,
            password : firstFormState.values.password,
            name: secondFormState.values.name,
            surname: secondFormState.values.surname,
            cellphone: secondFormState.values.cellphone,
            onMailingList: secondFormState.values.isOnMailingList,
        }
        registerUser(data)
        .then(res=>{
            button.disabled = false;
            navigate("/");
        })
        .catch(err=>{
            button.disabled = false;
            dispatchSecondForm(registrationFormAction(registrationSecondFormActionTypes.CHANGE_FORM_MESSAGE_STATE,
                {text:err.response.data,addClass:"error"}))
        })
    }
    return (
        <div className="register__form__container">
            <div className="register__form__title">
                {width <= 880 && <img src="/svgs/icon_signup.svg" alt="login" className="register__form__title__icon"/>}
                <h1 className="register__form__title__text">היי, נעים להכיר</h1>
            </div>
            {firstStageRegistration && <RegistrationFormFirstStage 
            formState={firstFormState}
            dispatchForm={dispatchFirstForm}
            toggleForm = {toggleForm}
            setFirstStageRegistration={setFirstStageRegistration}
            />}
            {!firstStageRegistration && <RegistrationFormSecondStage
            formState={secondFormState}
            dispatchForm={dispatchSecondForm}
            submitForm={submitForm}/>}
        </div>
    )
}

export default RegistrationForm;