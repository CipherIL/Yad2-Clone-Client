import React, { useEffect, useState } from "react";
import { useLocation } from "react-router";
import useWindowDimensions from "../../../hooks/useWindowDimensions";
import PublishPrivateRealestate from "./PublishPrivateRealestate.component";
import PublishSelection from "./PublishSelection.component";


const PublishMain = () => {
    const {width} = useWindowDimensions();
    const [selectedCategory,setSelectedCategory] = useState("");
    const location = useLocation();

    useEffect(()=>{
        const searchParams = location.search;
        if(searchParams!=="") {
            const category = searchParams.split("=")[1];
            setSelectedCategory(category);
        }
    },[location.search])

    return (
        <>
            {selectedCategory === "" && <PublishSelection width={width}/>}
            {selectedCategory === "realestate-private" && <PublishPrivateRealestate width={width}/>}
        </>
    )
}

export default PublishMain;