import React from "react";
import { thirdRowCategories } from "../../../../data/publishCategories";
import { nanoid } from 'nanoid';
const PublishMainThirdRow = ({width}) => {
    return (    
        <>
        {thirdRowCategories.map(cat=>{
            return (
                <div className="publish-page__main__category" key={nanoid()}>
                    <button className="publish-page__main__category__button">
                        {width<=620 && <img src={cat.logo} alt={cat.name} className="publish-page__main__category__icon"/>}
                        <div className="publish-page__main__category__title">{cat.name}</div>
                    </button>
                </div>
            )
        })}
        </>
    )
}

export default PublishMainThirdRow;