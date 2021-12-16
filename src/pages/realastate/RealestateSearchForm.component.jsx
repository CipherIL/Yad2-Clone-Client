import React from "react";

const RealestateSearchForm = ({type,formState,dispatchForm}) => {

    

    return (
        <div className="realestate__search-form">
            <div className="realestate__search-form__header">
                <div className="realestate__search-form__title">
                    איזה נכס ל<span className="realestate__search-form__title__type">
                        {type+" "}
                    </span>
                    תרצו לחפש?
                </div>
            </div>
            <div className="realestate__search-form__basic-search">
                <form action={(e)=>e.preventDefault} className="realestate__search-form__basic-search__form">
                    <div className="form-field">
                        <label className="form-field__label">חפשו אזור, עיר, שכונה או רחוב</label>
                        <input type="text" className="form-field__input"/>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default RealestateSearchForm;