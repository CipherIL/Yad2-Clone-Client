import React from "react";
import { useResolvedPath } from "react-router";
import { Link, useLocation } from "react-router-dom";

const CustomLink = ({to,baseClass,exact,children}) => {
    const location = useLocation();
    const resolved = useResolvedPath(to);
    let match;
    if(!exact)
        match = location.pathname.includes(resolved.pathname);
    else match = location.pathname === resolved.pathname;

    return (
        <>
        <Link to={to} className={baseClass + (match?" active":"")} 
        onClick={(e)=>{
            if(exact || to==="/null") e.preventDefault();
            if(to==="/null") alert("This button is not functional");
        }}>
            {children}
        </Link>
        </>
    )
}

export default CustomLink;