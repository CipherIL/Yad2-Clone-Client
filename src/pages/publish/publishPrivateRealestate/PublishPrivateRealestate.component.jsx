import React, { useEffect, useReducer, useState } from "react";
import { publishRealestate } from "../../../server/user.requests";
import { useNavigate } from "react-router-dom";

// Component Imports
import Loader from '../../../components/custom/Loader.component';
import PublishPrivateRealestatePartOne from "./PublishPrivateRealestatePartOne.component";
import PublishPrivateRealestatePartTwo from "./PublishPrivateRealestatePartTwo.component";
import PublishPrivateRealestatePartThree from "./PublishPrivateRealestatePartThree.component";
import PublishPrivateRealestatePartFour from "./PublishPrivateRealestatePartFour.component";
import PublishPrivateRealestatePartFive from "./PublishPrivateRealestatePartFive.component";
import PublishPrivateRealestatePartSix from "./PublishPrivateRealestatePartSix.component";
import PublishPrivateRealestatePartSeven from "./PublishPrivateRealestatePartSeven.component";

// Form Reducers Imports
import PPRReducer, { PPR_FORM_INITIAL_STATE } from "../../../reducers/publishPrivateRealestate/PPR.reducer";
import { PPRFormAction } from "../../../actions/publishPrivateRealestateForm.actions";
import { PPRFormActionsTypes } from "../../../types/publishPrivateRealestateFormAction.types";

const PublishPrivateRealestate = () => {
    const navigate = useNavigate();
    const [formState,dispatchForm] = useReducer(PPRReducer,PPR_FORM_INITIAL_STATE);
    const [isLoading,setIsLoading] = useState(false);
    const changeFormValues = (actionType,values) => {
        dispatchForm(PPRFormAction(actionType,values))
        console.log(values)
    }
    const returnToPreviousForm = (selected)=> {
        if(formState.completed[selected])
            dispatchForm(PPRFormAction(PPRFormActionsTypes.CHANGE_SELECTED_FORM_STATE,selected));           
    }
    const getDefaultDescription = () => {
        let str = `ל${formState.values.category}, ${formState.values.estateType}, `;
        if(formState.values.floor !== "") str += `קומה ${formState.values.floor}, `;
        str += `ב${formState.values.city}`;
        return str;
    }
    
    useEffect(()=>{
        if(!isLoading && !Object.values(formState.completed).some(val=>val===false)) {
            setIsLoading(true);
            publishRealestate(formState.values)
            .then(res=>{
                navigate('/publish/finishArea');
            })
            .catch(err=>{
                navigate('/errorPage');
            })
        }
    },[formState,navigate,isLoading])
    
    return (
        isLoading ? <Loader/> : <>
        <div className="private-realestate__selections">
            <PublishPrivateRealestatePartOne 
            selectFunction={changeFormValues}
            reopen={()=>returnToPreviousForm("firstForm")}
            completed={formState.completed.firstForm}/>

            <PublishPrivateRealestatePartTwo 
            selected={formState.selected.secondForm}
            completed={formState.completed.secondForm}
            submitFunction={changeFormValues}
            reopen={()=>returnToPreviousForm("secondForm")}
            returnButton={()=>returnToPreviousForm("firstForm")}/>

            <PublishPrivateRealestatePartThree 
            selected={formState.selected.thirdForm}
            completed={formState.completed.thirdForm}
            submitFunction={changeFormValues}
            reopen={()=>returnToPreviousForm("thirdForm")}
            returnButton={()=>returnToPreviousForm("secondForm")}
            getDefaultDescription={getDefaultDescription}/>

            <PublishPrivateRealestatePartFour
            selected={formState.selected.fourthForm}
            completed={formState.completed.fourthForm}
            submitFunction={changeFormValues}
            reopen={()=>returnToPreviousForm("fourthForm")}
            returnButton={()=>returnToPreviousForm("thirdForm")}/>

            <PublishPrivateRealestatePartFive
            selected={formState.selected.fifthForm}
            completed={formState.completed.fifthForm}
            submitFunction={changeFormValues}
            reopen={()=>returnToPreviousForm("fifthForm")}
            returnButton={()=>returnToPreviousForm("fourthForm")}/>

            <PublishPrivateRealestatePartSix
            selected={formState.selected.sixthForm}
            completed={formState.completed.sixthForm}
            submitFunction={changeFormValues}
            reopen={()=>returnToPreviousForm("sixthForm")}
            returnButton={()=>returnToPreviousForm("fifthForm")}/>

            <PublishPrivateRealestatePartSeven
            selected={formState.selected.seventhForm}
            completed={formState.completed.seventhForm}
            submitFunction={changeFormValues}/>
        </div>
        </>
    )
}

export default PublishPrivateRealestate;