import React from "react";
import { firstRowCategories } from "../../../data/publishCategories";
const PublishMainFirstRow = () => {
    return (
        <>
        {firstRowCategories.map(cat=>{
            return (
                <button className="publish-page__main__category">
                    <img src={cat.logo} alt={cat.name} className="publish-page__main__category__icon"/>
                    <div className="publish-page__main__category__title">{cat.name}</div>
                    <div className="publish-page__main__category__subtitle">{cat.subtitle}</div>
                </button>
            )
        })}
        </>
    )
}

export default PublishMainFirstRow;