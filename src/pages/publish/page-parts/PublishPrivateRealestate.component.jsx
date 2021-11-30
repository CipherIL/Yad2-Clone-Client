import React, { useState } from "react";
import RealestateAddress from "./publishPrivateRealestate/RealestateAddress.component";
import RealestateTypeSelection from "./publishPrivateRealestate/RealestateTypeSelection.component";

const PublishPrivateRealestate = () => {

    const [realestateType,setRealestateType] = useState({completed:false,value:""});
    const [realestateAddress,setRealestateAddress] = useState({completed:false,
        value:{
            realestateType:"",
            realestateCondition:"",
            addressCity:"",
            addressStreet:"",
            addressNumber:"",
            addressFloor:"",
            addressTotalFloors:"",
            addressOnPillars: false,
            addressNeighbourhood:"",
            saleArea:"",
            addToMailingList: false,
        }})


    return (
        <div className="private-realestate__selections">
            <RealestateTypeSelection state={realestateType} setState={setRealestateType}/>
            <RealestateAddress state={realestateAddress} setState={setRealestateAddress} selected={realestateType.completed && !realestateAddress.completed}/>
        </div>
    )
}

export default PublishPrivateRealestate;