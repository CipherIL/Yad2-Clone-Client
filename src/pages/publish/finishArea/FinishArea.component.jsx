import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { UserContext } from '../../../contexts/User.context';

const FinishArea = () => {

    const {user} = useContext(UserContext);

    return (
        <div className="finish-area">
            <div className="finish-area__content">
                <img src="/svgs/stars.svg" alt="stars" />
                <span className="finish-area__content__title">תודה שבחרתם בלוח יד2</span>
                <div className="finish-area__content__subtitles">
                    <span className="finish-area__content__subtitle bold">שלום {user.name},</span>
                    <span className="finish-area__content__subtitle">בדיקה קצרה של הצוות שלנו, והמודעה מיד תעלה ללו"ח נדל"ן. לכל עניין, זה מספר המודעה שלך:</span>
                    <span className="finish-area__content__subtitle">בנתיים המודעה זמינה לצפייה ולעריכה <Link to="/personal">באזור האישי</Link></span>
                </div>
                <span className="finish-area__content__good-day">יום מצוין, צוות יד2</span>
                <div className="finish-area__content__catalog-redirects">
                    <img src="/images/man_stars.png" alt="man_stars" className="finish-area__content__catalog-redirects__image"/>
                    <span className="finish-area__content__catalog-redirects__title">מה תרצו לחפש היום?</span>
                    <div className="finish-area__content__catalog-redirects__links">
                        <Link to="/realestate" className="finish-area__content__catalog-redirects__link">נדל"ן</Link>
                        <Link to="" onClick={(e)=>{e.preventDefault();alert("This button is inactive")}} className="finish-area__content__catalog-redirects__link">רכב</Link>
                        <Link to="" onClick={(e)=>{e.preventDefault();alert("This button is inactive")}} className="finish-area__content__catalog-redirects__link">יד-שניה</Link>
                    </div>
                    <Link to="/publish" className="finish-area__content__catalog-redirects__new-publish">פרסום מודעה נוספת</Link>
                </div>
                <span className="finish-area__content__important"><b>חשוב לדעת</b> ששימוש במידע הפרטי שלך ללא רשות הוא לא חוקי. אנחנו ממליצים לך לסרב לגורמים שונים שמבקשים להפיץ את פרטייך האישיים, ואין להם קשר ליד2.</span>
                <div className="finish-area__content__redirects">
                    <Link to="/publish" className="finish-area__content__redirects__link">פרסום מודעה נוספת</Link>
                    <Link to="/personal" className="finish-area__content__redirects__link">לאזור האישי</Link>
                    <Link to="/" className="finish-area__content__redirects__link">לדף הבית</Link>
                </div>
            </div>
        </div>
    )
}

export default FinishArea;