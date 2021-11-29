import React from "react";
import { thirdRowCategories } from "../../../data/publishCategories";
const PublishMainThirdRow = ({width}) => {
    return (    
        <>
        {thirdRowCategories.map(cat=>{
            return (
                <button className="publish-page__main__category">
                    {width<=620 && <img src={cat.logo} alt={cat.name} className="publish-page__main__category__icon"/>}
                    <div className="publish-page__main__category__title">{cat.name}</div>
                </button>
            )
        })}
        </>
    )
}

export default PublishMainThirdRow;