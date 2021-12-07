import React, { useState } from "react";

const PublishPrivateRealestatePartSeven = ({selected,submitFunction,completed}) => {

    const [adMailingList,setAdMailingList] = useState(true);
    const handleSubmit = (plan) => {
        submitFunction("CHANGE_SEVENTH_FORM_VALUES",{publishPlan:plan,adMailingList:adMailingList})
    }
    return (
        <div className={"private-realestate__selection realestate__plan"+(completed?" completed":"")}>
            <div className="private-realestate__selection__title">
                <div className={"private-realestate__selection__title__number"+(selected?" selected":"")}>
                {"7"}</div>
                <div className="private-realestate__selection__title__text">בחירת מסלול</div>
            </div>
            {selected && <>
            <div className="private-realestate__selection__description">
                <span className="private-realestate__selection__description__line bold">
                    זהו, אנחנו בסוף. לנו נשאר לשמור את המודעה שלך, לך נשאר לבחור את מסלול הפרסום.
                </span>
                <span className="private-realestate__selection__description__line">
                    להוסיף פה משהו פרסומי על מסלול בתשלום
                </span>
                <span className="private-realestate__selection__description__line">
                    להוסיף פה משהו פרסומי על מסלול בתשלום   
                </span>
            </div>
            <div className="private-realestate__selection__options-container">
                <div className="private-realestate__selection__options__title">
                    באיזה מסלול לפרסם את המודעה? זה הרגע לבלוט מעל כולם
                </div>
                <div className="private-realestate__selection__options">
                    <div className="private-realestate__selection__option free">
                        <span className="private-realestate__selection__option__title">בסיסי</span>
                        <img src="/images/rocketShip_Free.png" alt="rocketFree" className="private-realestate__selection__option__image"/>
                        <span className="private-realestate__selection__option__pro">מודעה רגילה</span>
                        <span className="private-realestate__selection__option__con">הקפצה אוטומטית לחסכון בזמן</span>
                        <button className="private-realestate__selection__option__button" onClick={()=>{handleSubmit("free")}}><b>חינם</b> / 120 ימים</button>
                    </div>
                    <div className="private-realestate__selection__option vip">
                        <span className="private-realestate__selection__option__title">VIP</span>
                        <div className="private-realestate__selection__option__recommended"><img src="/images/crown.png" alt="crown" /> מומלץ</div>
                        <img src="/images/rocketShip_VIP.png" alt="rocketVIP" className="private-realestate__selection__option__image"/>
                        <span className="private-realestate__selection__option__pro">מודעה מודגשת בצבע צהוב</span>
                        <span className="private-realestate__selection__option__pro">הקפצה אוטומטית לחסכון בזמן</span>
                        <span className="private-realestate__selection__option__pro">הופעה לפני מודעות רגילות וורודות</span>
                        <span className="private-realestate__selection__option__pro">מסלול זה מייצר יותר חשיפות ופניות!</span>
                        <button className="private-realestate__selection__option__button" onClick={()=>{handleSubmit("VIP")}}><b>₪ 199</b> / 28 ימים</button>
                    </div>
                    <div className="private-realestate__selection__option bolded">
                    <span className="private-realestate__selection__option__title">מודגשת</span>
                        <img src="/images/rocketShip_Bold.png" alt="rocketFree" className="private-realestate__selection__option__image"/>
                        <span className="private-realestate__selection__option__pro">מודעה מודגשת בצבע ורוד</span>
                        <span className="private-realestate__selection__option__pro">הקפצה אוטומטית לחסכון בזמן</span>
                        <span className="private-realestate__selection__option__pro">הופעה לפני מודעות רגילות</span>
                        <button className="private-realestate__selection__option__button" onClick={()=>{handleSubmit("bolded")}}><b>₪ 99</b> / 28 ימים</button>
                    </div>
                </div>
            </div>
            <div className="form-field">
                <input type="checkbox" checked={adMailingList} onChange={(e)=>setAdMailingList(e.target.checked)}/>
                <label className="form-field__label">אני מאשר קבלת דיוור פרסומי הקשור למודעה שפרסמתי באתר יד 2 (להסרה - יש להוריד את הסימון בתיבה)</label>
            </div>
            </>}
        </div>
    )
}

export default PublishPrivateRealestatePartSeven;