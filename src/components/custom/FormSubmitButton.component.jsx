import React from "react";

const FormSubmitButton = ({buttonText="",buttonFunction}) => {
    return (
        <button className="form-submit-button">{buttonText}</button>
    )
}

export default FormSubmitButton;