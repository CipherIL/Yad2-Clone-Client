import React, { useReducer, useState } from "react";

// Component Imports
import PublishPrivateRealestatePartOne from "./PublishPrivateRealestatePartOne.component";
import PublishPrivateRealestatePartTwo from "./PublishPrivateRealestatePartTwo.component";

// Form Reducers Imports
import PPRSecondFormReducer, { PPR_SECOND_FORM_INITIAL_STATE } from "../../../../reducers/publishPrivateRealestate/PPRSeconForm.reducer";


const PublishPrivateRealestate = () => {
    
    const [firstFormState,setFirstFormState] = useState({completed:false,value:""});
    const [secondFormState,dispatchSecondForm] = useReducer(PPRSecondFormReducer,PPR_SECOND_FORM_INITIAL_STATE);

        


    return (
        <div className="private-realestate__selections">
            <PublishPrivateRealestatePartOne 
            state={firstFormState} setState={setFirstFormState}/>

            <PublishPrivateRealestatePartTwo 
            state={secondFormState} setState={dispatchSecondForm} 
            selected={firstFormState.completed && !secondFormState.completed}/>


        </div>
    )
}

export default PublishPrivateRealestate;