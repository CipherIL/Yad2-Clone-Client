import { nanoid } from "nanoid";
import React from "react";

const CustomCheckbox = ({isChecked,isPartial,clickCallback}) => {
    return (
        <div className={"custom-checkbox"+(isChecked?" checked":"")}
             onClick={clickCallback}>
            {isChecked && isPartial && <span className="custom-checkbox__symbol">&#8722;</span>}
            {isChecked && !isPartial && <span className="custom-checkbox__symbol">&#10003;</span>}
        </div>
    )
}

export default CustomCheckbox