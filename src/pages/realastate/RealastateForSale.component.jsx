import React, { useEffect, useReducer, useState } from "react";
import { getRealestatePosts } from "../../server/realestate.requests";
import { useNavigate } from "react-router";

//Component Imports
import Loader from "../../components/custom/Loader.component";
import RealestatePost from "../../components/custom/RealestatePost.component";
import RealestateSearchForm from "./RealestateSearchForm.component";
import realestateSearchFormReducer, { REALESTATE_SEARCH_FORM_INITIAL_STATE } from "../../reducers/privateRealestate/privateRealestate.reducer";

const RealastateForSale = () => {
    const navigate = useNavigate();
    const [posts,setPosts] = useState([]);
    const [isLoading,setIsLoading] = useState(true);
    const [formState,dispatchForm] = useReducer(realestateSearchFormReducer,REALESTATE_SEARCH_FORM_INITIAL_STATE);
    
    useEffect(()=>{
        getRealestatePosts({'realestateData.category':'מכירה'})
        .then(res=>{
            setPosts(res.data);
            setIsLoading(false);
        })
        .catch(err=>{
            if(err.response.status===404) {
                return console.log("Bad Request")
            }
            if(err.response.status === 500) {
                return navigate("/error");
            }
            console.log(err);
        })
    },[]);

    return(
        <>
        {isLoading && <Loader/>}
        {!isLoading &&
        <div className="realestate-forsale">
    
            <RealestateSearchForm type={"מכירה"} formState={formState} dispatchForm={dispatchForm}/>
            <div className="realestate-forsale__posts">
                {posts.map(post=>{
                    return <RealestatePost post={post}/>
                })}
            </div>
        </div>}
        </>
    )
}

export default RealastateForSale;