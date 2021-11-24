import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const FormFieldSingleInput = ({labelText,inputType="text",updateFunction,errorMessage="",placeHolder=""}) => {
    
    const handleInput = (e) => {
        const value = e.target.value;
        console.log(value)
        // updateFunction(value);
    }
    const toggleRevealPassword = (e) => {
        console.log(e.target.previousSibling)
        e.target.previousSibling.setAttribute('type',(e.target.previousSibling.type === "password" ? "text" : "password"));
    }
    return (
        <div className="form-field">
            <label className="form-field__label">{labelText}</label>
            <div className="form-field__input">
                <input 
                    className="form-field__input__input" 
                    type={inputType} 
                    onInput={handleInput} 
                    placeholder={placeHolder}
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