import React from "react";

const FormSubmitButton = ({buttonText="",buttonFunction}) => {
    return (
        <button className="form-submit-button" onClick={buttonFunction}>{buttonText}</button>
    )
}

export default FormSubmitButton;