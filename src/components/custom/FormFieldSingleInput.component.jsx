import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const FormFieldSingleInput = ({
    labelText,inputType="text",
    updateFunction,errorMessage="",
    placeHolder="",
    passwordBubble=false,
    customClass="",
    isDisabled=false,
    defaultValue="",
    defaultChecked=false,
}) => {
    
    const toggleRevealPassword = (e) => {
        e.target.previousSibling.setAttribute('type',(e.target.previousSibling.type === "password" ? "text" : "password"));
    }
    return (
        <div className={"form-field"+customClass+(isDisabled?" disabled":"")}>
            <label className="form-field__label">{labelText}</label>
            <div className="form-field__input">
                {passwordBubble && <div className="form-field__input__bubble">
                    <div className="form-field__input__bubble__title">הסיסמה צריכה לכלול:</div>    
                    <ul className="form-field__input__bubble__list">
                        <li className="form-field__input__bubble__list-item">
                            <img src="/images/list-bullet.png" alt="" /> 
                            <div>8-20 תווים</div> 
                        </li>
                        <li className="form-field__input__bubble__list-item">
                            <img src="/images/list-bullet.png" alt="" /> 
                            <div>אותיות באנגלית ומספרים</div>
                        </li>
                    </ul>
                    <div className="tri-point">
                        <div className="gray-triangle"></div>
                        <div className="white-triangle"></div>
                    </div>
                </div>}
                <input onFocus={(e)=>{if(e.target.type==='password' && e.target.previousSibling) 
                                        e.target.previousSibling.classList.add('show')}}
                       onBlur={(e)=>{if(e.target.type==='password' && e.target.previousSibling) 
                                        e.target.previousSibling.classList.remove('show')}}
                    className={`form-field__input__input ${(errorMessage ? "error":"")}`}
                    type={inputType} 
                    onInput={updateFunction} 
                    placeholder={placeHolder}
                    disabled={isDisabled}
                    defaultValue={defaultValue}
                    defaultChecked={defaultChecked}
                />
                {inputType==="password" && <div onClick={toggleRevealPassword} className="form-field__input__icon">
                    <FontAwesomeIcon icon={["fas","eye"]}/>
                </div>}
            </div>
            {errorMessage!=="" && <span className="form-field__error">{errorMessage}</span>}
        </div>
    )
}

export default FormFieldSingleInput;