import React from "react";
import { secondRowCategories } from "../../../../data/publishCategories";
import { nanoid } from 'nanoid';
const PublishMainSecondRow = ({width}) => {
    return (
        <>
        {secondRowCategories.map(cat=>{
            return (
                <div className="publish-page__main__category" key={nanoid()}>
                    <button className="publish-page__main__category__button">
                        <img src={cat.logo} alt={cat.name} className="publish-page__main__category__icon"/>
                        <div className="publish-page__main__category__title">{cat.name}</div>
                        {width>620 && <div className="publish-page__main__category__subtitle">{cat.subtitle}</div>}
                        {width>620 && <div className="publish-page__main__category__button">מתחילים</div>}
                    </button>
                </div>
            )
        })}
        </>
    )
}

export default PublishMainSecondRow;