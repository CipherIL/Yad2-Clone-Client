import React from "react";
import { useNavigate } from "react-router-dom";
import { firstRowCategories } from "../../../../data/publishCategories";
import { nanoid } from 'nanoid';
const PublishMainFirstRow = ({width}) => {
    const navigate = useNavigate();
    const switchModalOn = (e) => {
        e.target.nextSibling.classList.add("show");
    }
    const switchModalOff = (e) => {
        e.target.classList.remove('show');
    }
    const navigateToForm = (url) => {
        if(url==="") alert("This link is not functional");
        else navigate(url);
    }
    return (
        <>
        {firstRowCategories.map(cat=>{
            return (
                <div className="publish-page__main__category" key={nanoid()}>
                    <button className="publish-page__main__category__button" onClick={switchModalOn}>
                        <img src={cat.logo} alt={cat.name} className="publish-page__main__category__icon"/>
                        <div className="publish-page__main__category__title">{cat.name}</div>
                        {width>620 && <div className="publish-page__main__category__subtitle">{cat.subtitle}</div>}
                        {width>620 && <div className="publish-page__main__category__button">מתחילים</div>}
                    </button>
                    <div className="publish-page__main__category__modal-background" onClick={switchModalOff}>
                        <div className="publish-page__main__category__modal">
                            <span className="publish-page__main__category__modal__close">&#10005;</span>
                            <span className="publish-page__main__category__modal__title">איזה סוג מודעה תרצו לפרסם?</span>
                            <div className="publish-page__main__category__modal__buttons">
                                {cat.buttons?.map(button=>{
                                    return (
                                        <div className="publish-page__main__category__modal__button" 
                                        onClick={()=>navigateToForm(button.url)} key={nanoid()}>{button.text}</div>
                                    )
                                })}
                            </div>
                        </div>
                    </div>
                </div>
            )
        })}
        </>
    )
}

export default PublishMainFirstRow;