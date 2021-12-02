import React, { useReducer, useState } from "react";

// Component Imports
import PublishPrivateRealestatePartOne from "./PublishPrivateRealestatePartOne.component";
import PublishPrivateRealestatePartTwo from "./PublishPrivateRealestatePartTwo.component";
import PublishPrivateRealestatePartThree from "./PublishPrivateRealestatePartThree.component";
import PublishPrivateRealestatePartFour from "./PublishPrivateRealestatePartFour.component";
import PublishPrivateRealestatePartFive from "./PublishPrivateRealestatePartFive.component";
import PublishPrivateRealestatePartSix from "./PublishPrivateRealestatePartSix.component";
import PublishPrivateRealestatePartSeven from "./PublishPrivateRealestatePartSeven.component";
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
            selected={firstFormState.completed && !secondFormState.completed}
            returnButton={()=>{setFirstFormState({completed:false,value:firstFormState.value})}}/>

            <PublishPrivateRealestatePartThree 
            state={{completed:false}}
            selected={secondFormState.completed}/>

            <PublishPrivateRealestatePartFour state={{completed:false}} selected={false}/>
            <PublishPrivateRealestatePartFive state={{completed:false}} selected={false}/>
            <PublishPrivateRealestatePartSix state={{completed:false}} selected={false}/>
            <PublishPrivateRealestatePartSeven state={{completed:false}} selected={false}/>
        </div>
    )
}

export default PublishPrivateRealestate;