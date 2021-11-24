import React from "react";

const LoginAd = () => {
    return (
        <div className="login__ad">
            <div className="login__ad__text">לקנות מהר, למכור מהר.</div>
            <div className="login__ad__text">ויש לנו אחלה כלים לזה.</div>
            <div className="login__ad__images__container">
                <div className="login__ad__image">
                    <img src="/svgs/icon_alert.svg" alt="alert" className="login__ad__image__image"/>
                    <span className="login__ad__image__text">התראות</span>
                </div>
                <div className="login__ad__image">
                    <img src="/svgs/icon_chat.svg" alt="chat" className="login__ad__image__image"/>
                    <span className="login__ad__image__text">צ'אט</span>
                </div>
                <div className="login__ad__image">
                    <img src="/svgs/icon_publish.svg" alt="publish" className="login__ad__image__image"/>
                    <span className="login__ad__image__text">פרסום מודעה</span>
                </div>
                <div className="login__ad__image">
                    <img src="/svgs/icon_profile.svg" alt="profile" className="login__ad__image__image"/>
                    <span className="login__ad__image__text">אזור אישי</span>
                </div>
            </div>
        </div>
    )
}

export default LoginAd;