import React, { useEffect, useReducer, useState } from "react";
import { getRealestatePosts } from "../../server/realestate.requests";
import { useNavigate } from "react-router";

//Component Imports
import Loader from "../../components/custom/Loader.component";
import RealestatePost from "../../components/custom/RealestatePost.component";
import RealestateSearchForm from "./RealestateSearchForm.component";
import realestateSearchFormReducer, { REALESTATE_SEARCH_FORM_INITIAL_STATE } from "../../reducers/privateRealestate/privateRealestate.reducer";
import { nanoid } from "nanoid";
import NoPostsPlaceholder from "./NoPostsPlaceholder.component";

const RealastateForSale = () => {
    const navigate = useNavigate();
    const [posts,setPosts] = useState([]);
    const [isLoading,setIsLoading] = useState(true);
    const [formState,dispatchForm] = useReducer(realestateSearchFormReducer,REALESTATE_SEARCH_FORM_INITIAL_STATE);
    const [filter,setFilter] = useState({category:'מכירה'});

    //infinite Scroll Vars
    const [postsSkip,setPostsSkip] = useState(0);
    const [scrollingEvents,setScrollingEvents] = useState(true);
    const postLimit = 8;

    const incSkipCount = () => {
        setPostsSkip(postsSkip+postLimit);
    }
    const zeroSkipCount = () => {
        setPostsSkip(0);
    }

    useEffect(()=>{
        getRealestatePosts(filter,postsSkip,postLimit)
        .then(res=>{
            if(postsSkip===0) {
                setPosts(res.data);
                setIsLoading(false);
            } else {
                setPosts([...posts,...res.data]);
                setScrollingEvents(true);
            }
        })
        .catch(err=>{
            if(err.response.status===404) {
                if(postsSkip===0) {
                    return setPosts([]);
                }
            }
            if(err.response.status === 500) {
                return navigate("/error");
            }
            else {
                console.log(err);
            }
        })
    },[filter,postsSkip]);

    window.onscroll = (e) => {
        if(scrollingEvents) {
            const scrollOffset = window.scrollY;
            const pageHeight = document.documentElement.clientHeight;
            const windowHeight = document.body.scrollHeight;
            if((scrollOffset+pageHeight) >= windowHeight) {
                setScrollingEvents(false);
                incSkipCount();
            }
        }
    }

    return(
        <>
        {isLoading && <Loader/>}
        {!isLoading &&
        <div className="realestate-forsale">
    
            <RealestateSearchForm type={"מכירה"} formState={formState} dispatchForm={dispatchForm} setFilter={setFilter} zeroSkipCount={zeroSkipCount}/>
            <div className="realestate-forsale__posts">
                {posts.length!==0 && posts.map(post=>{
                    return <RealestatePost post={post} key={nanoid()}/>
                })}
                {posts.length===0 && <NoPostsPlaceholder/>}
            </div>
        </div>}
        </>
    )
}

export default RealastateForSale;