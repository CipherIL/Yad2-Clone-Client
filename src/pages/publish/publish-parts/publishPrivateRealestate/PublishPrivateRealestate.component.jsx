import React, { useState } from "react";
import PublishPrivateRealestatePartOne from "./PublishPrivateRealestatePartOne.component";
import PublishPrivateRealestatePartTwo from "./PublishPrivateRealestatePartTwo.component";

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
            <PublishPrivateRealestatePartOne state={realestateType} setState={setRealestateType}/>
            <PublishPrivateRealestatePartTwo state={realestateAddress} setState={setRealestateAddress} selected={realestateType.completed && !realestateAddress.completed}/>
        </div>
    )
}

export default PublishPrivateRealestate;