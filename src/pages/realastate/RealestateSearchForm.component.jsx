import React, { useRef } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import CustomCheckbox from "../../components/custom/CustomCheckbox.component";

//Import Reducer components
import { realestateSearchFormAction } from "../../actions/realestateSearchForm.actions";
import { realestateSearchFormActionTypes } from "../../types/realestateSearchFormAction.types";

const RealestateSearchForm = ({type,formState,dispatchForm}) => {

    const apartments = ["דירה","דירת גן","גג/פנטהאוז","דופלקס","דירת נופש","מרתף/פרטר","טריפלקס","יחידת דיור","סטודיו/לופט"];
    const houses = ["בית פרטי/קוטג'","דו משפחתי","משחק חקלאי/נחלה","משק עזר"];
    const others = ["מגרשים","דיור מוגן","בנייו מגורים","מחסן","חניה","קב' רכישה/ זכות לנכס","כללי"];
    
    const apartmentsRef = useRef();
    const housesRef = useRef();
    const othersRef = useRef();

    const getEstateTypeText = () => {
        const count = formState.values.types.apartments.length + 
                      formState.values.types.houses.length + 
                      formState.values.types.others.length;
        if(count===0) return <span>בחרו סוגי נכסים</span>;
        else return `${count} סוגי נכסים`;
    }
    const getRoomsText = () => {
        if(formState.values.maxRooms==="" && formState.values.minRooms==="")
            return <span>חדרים</span>;
        
    }
    const getEstateTypeCount = (type="all") => {
        if(type==="all") return formState.values.types.apartments.length + 
                                formState.values.types.houses.length + 
                                formState.values.types.others.length;
        if(type==="apartments") return formState.values.types.apartments.length;
        if(type==="houses") return formState.values.types.houses.length;
        if(type==="others") return formState.values.types.others.length;        
    }

    return (
        <div className="realestate__search-form">
            <div className="realestate__search-form__header">
                <div className="realestate__search-form__title">
                    איזה נכס ל<span className="realestate__search-form__title__type">
                        {type}
                    </span>
                    {" תרצו לחפש?"}
                </div>
                <div className="realestate__search-form__notification">
                    <button className="realestate__search-form__notification__button" onClick={(e)=>{
                        alert("This button is not functional");
                    }}>
                        <FontAwesomeIcon icon={"bell"} className="realestate__search-form__notification__button__icon"/>
                        קבלו התראות במייל על החיפוש
                    </button>
                </div>
            </div>
            <div className="realestate__search-form__basic-search">
                <form action={(e)=>e.preventDefault} className="realestate__search-form__basic-search__form">
                    <div className="form-field">
                        <label className="form-field__label">חפשו אזור, עיר, שכונה או רחוב</label>
                        <input type="text" className="form-field__input" placeholder="לדוגמא: שהם, רמת גן"/>
                    </div>

                    <div className="form-field">
                        <label className="form-field__label">סוג נכס</label>
                        <div className="form-field__input pointer" onClick={(e)=>{
                            e.preventDefault();
                            e.target.nextSibling.classList.toggle("show");
                        }}>
                            {getEstateTypeText()}
                            <img src="/images/button-arrow.png" alt="arrow" className="button-arrow"/>
                        </div>
                        <div className="form-field__expandable col">
                            <div className="form-field__expandable__section">
                                <div className="form-field__expandable__section__header" onClick={(e)=>{
                                    dispatchForm(realestateSearchFormAction(realestateSearchFormActionTypes.CHANGE_TYPES_ALL_STATE,{
                                        apartments: apartments,
                                        houses: houses,
                                        others: others
                                    }));
                                }}>
                                    <CustomCheckbox isChecked={getEstateTypeCount() > 0} 
                                                    isPartial={getEstateTypeCount() < 20}/>
                                    <span className="form-field__expandable__section__title">כל סוגי הנכסים</span>
                                </div>
                            </div>
                            <div className="form-field__expandable__section">
                                <div className="form-field__expandable__section__header" onClick={(e)=>{
                                    dispatchForm(realestateSearchFormAction(realestateSearchFormActionTypes.CHANGE_TYPES_APARTMENTS_STATE,apartments));
                                }}>
                                    <CustomCheckbox isChecked={getEstateTypeCount("apartments") > 0} 
                                                    isPartial={getEstateTypeCount("apartments") < 9}/>
                                    <span className="form-field__expandable__section__title">דירות</span>
                                    <span className="form-field__expandable__section__description"></span>
                                    <div className="button-arrow__container" onClick={(e)=>{
                                        e.stopPropagation();
                                        apartmentsRef.current.classList.toggle("show");
                                    }}>
                                        <img src="/images/button-arrow.png" alt="arrow" className="button-arrow"/>
                                    </div>
                                </div>
                                <div className="form-field__expandable__section__dropdown" ref={apartmentsRef}>
                                    {apartments.map(apartment=>{
                                        return (
                                            <div className="form-field__expandable__section__dropdown__item"
                                            onClick={(e)=>{
                                                dispatchForm(realestateSearchFormAction(realestateSearchFormActionTypes.CHANGE_TYPES_APARTMENTS_STATE,[apartment]))
                                            }}>
                                                <CustomCheckbox isChecked={formState.values.types.apartments.includes(apartment)}/>
                                                {apartment}
                                            </div>
                                        )
                                    })}
                                </div>
                            </div>
                            <div className="form-field__expandable__section">
                                <div className="form-field__expandable__section__header" onClick={(e)=>{
                                    dispatchForm(realestateSearchFormAction(realestateSearchFormActionTypes.CHANGE_TYPES_HOUSES_STATE,houses));
                                }}>
                                    <CustomCheckbox isChecked={getEstateTypeCount("houses") > 0} 
                                                    isPartial={getEstateTypeCount("houses") < 4}/>
                                    <span className="form-field__expandable__section__title">בתים</span>
                                    <span className="form-field__expandable__section__description"></span>
                                    <div className="button-arrow__container" onClick={(e)=>{
                                        e.stopPropagation();
                                        housesRef.current.classList.toggle("show");
                                    }}>
                                        <img src="/images/button-arrow.png" alt="arrow" className="button-arrow"/>
                                    </div>
                                </div>
                                <div className="form-field__expandable__section__dropdown" ref={housesRef}>
                                    {houses.map(house=>{
                                        return (
                                            <div className="form-field__expandable__section__dropdown__item"
                                            onClick={(e)=>{
                                                dispatchForm(realestateSearchFormAction(realestateSearchFormActionTypes.CHANGE_TYPES_HOUSES_STATE,[house]))
                                            }}>
                                                <CustomCheckbox isChecked={formState.values.types.houses.includes(house)}/>
                                                {house}
                                            </div>
                                        )
                                    })}
                                </div>
                            </div>
                            <div className="form-field__expandable__section">
                                <div className="form-field__expandable__section__header" onClick={(e)=>{
                                    dispatchForm(realestateSearchFormAction(realestateSearchFormActionTypes.CHANGE_TYPES_OTHERS_STATE,others));
                                }}>
                                    <CustomCheckbox isChecked={getEstateTypeCount("others") > 0} 
                                                    isPartial={getEstateTypeCount("others") < 7}/>
                                    <span className="form-field__expandable__section__title">סוגים נוספים</span>
                                    <span className="form-field__expandable__section__description"></span>
                                    <div className="button-arrow__container" onClick={(e)=>{
                                        e.stopPropagation();
                                        othersRef.current.classList.toggle("show");
                                    }}>
                                        <img src="/images/button-arrow.png" alt="arrow" className="button-arrow"/>
                                    </div>
                                </div>
                                <div className="form-field__expandable__section__dropdown" ref={othersRef}>
                                    {others.map(other=>{
                                        return (
                                            <div className="form-field__expandable__section__dropdown__item"
                                            onClick={(e)=>{
                                                dispatchForm(realestateSearchFormAction(realestateSearchFormActionTypes.CHANGE_TYPES_OTHERS_STATE,[other]))
                                            }}>
                                                <CustomCheckbox isChecked={formState.values.types.others.includes(other)}/>
                                                {other}
                                            </div>
                                        )
                                    })}
                                </div>
                            </div>
                            
                        </div>
                    </div>

                    <div className="form-field">
                        <label className="form-field__label">חדרים</label>
                        <div className="form-field__input pointer" onClick={(e)=>{
                            e.preventDefault();
                            e.target.nextSibling.classList.toggle("show");
                        }}>
                            {getRoomsText()}
                            <img src="/images/button-arrow.png" alt="arrow" className="button-arrow"/>
                        </div>
                        <div className="form-field__expandable">
                            <select name="rooms-from">

                            </select>
                            <span style={{fontSize:"20px",fontWeight:"bold",textAlign:"center"}}>-</span>
                            <select name="rooms-to">

                            </select>
                        </div>
                    </div>

                    <div className="form-field">
                        <label className="form-field__label">מחיר</label>
                        <div className="form-field__multi-input">
                            <input type="text" className="form-field__input" placeholder="מ-"/>
                            <input type="text" className="form-field__input" placeholder="עד-"/>
                        </div>
                    </div>
                    
                    <button className="form-button advanced" onClick={(e)=>{
                        e.preventDefault();
                    }}>
                        חיפוש מתקדם
                    </button>
                    <button className="form-button submit" onClick={(e)=>{
                        e.preventDefault(); 
                    }}>
                        <FontAwesomeIcon icon={"search"} className="form-button__icon"/>
                        חיפוש
                    </button>
                </form>
            </div>
        </div>
    )
}

export default RealestateSearchForm;