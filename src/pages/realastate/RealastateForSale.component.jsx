import React, { useEffect, useState } from "react";
import { getRealestatePosts } from "../../server/realestate.requests";
import { useNavigate } from "react-router";
import Loader from "../../components/custom/Loader.component";
import RealestatePost from "../../components/custom/RealestatePost.component";

const RealastateForSale = () => {
    const navigate = useNavigate();
    const [posts,setPosts] = useState([]);
    const [isLoading,setIsLoading] = useState(true);

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
            {posts.map(post=>{
                return <RealestatePost post={post}/>
            })}
        </div>}
        </>
    )
}

export default RealastateForSale;