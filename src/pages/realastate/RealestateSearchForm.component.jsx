import React, { useRef, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import CustomCheckbox from "../../components/custom/CustomCheckbox.component";
import { nanoid } from 'nanoid'

//Import Reducer components
import { realestateSearchFormAction } from "../../actions/realestateSearchForm.actions";
import { realestateSearchFormActionTypes } from "../../types/realestateSearchFormAction.types";
import { getAddressAutocomplete } from "../../server/realestate.requests";

const RealestateSearchForm = ({type,formState,dispatchForm}) => {

    const apartments = ["דירה","דירת גן","גג/פנטהאוז","דופלקס","דירת נופש","מרתף/פרטר","טריפלקס","יחידת דיור","סטודיו/לופט"];
    const houses = ["בית פרטי/קוטג'","דו משפחתי","משחק חקלאי/נחלה","משק עזר"];
    const others = ["מגרשים","דיור מוגן","בנייו מגורים","מחסן","חניה","קב' רכישה/ זכות לנכס","כללי"];

    const [autocompleteResults,setAutocompleteResults] = useState(undefined);
    const [timer,setTimer] = useState(undefined);

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
        if(formState.values.maxRooms==="12.5" && formState.values.minRooms==="0")
            return <span>חדרים</span>;
        else if(formState.values.maxRooms==="12.5" && formState.values.minRooms!=="0") {
            return <div>{`מ- ${formState.values.minRooms}`}</div>
        }
        else if(formState.values.maxRooms!=="12.5" && formState.values.minRooms==="0") {
            return <div>{`עד- ${formState.values.maxRooms}`}</div>
        }
        else {
            return <div>{`${formState.values.minRooms} - ${formState.values.maxRooms}`}</div>
        }
        
    }
    const getEstateTypeCount = (type="all") => {
        if(type==="all") return formState.values.types.apartments.length + 
                                formState.values.types.houses.length + 
                                formState.values.types.others.length;
        if(type==="apartments") return formState.values.types.apartments.length;
        if(type==="houses") return formState.values.types.houses.length;
        if(type==="others") return formState.values.types.others.length;        
    }
    const convertToHebrew = (title) => {
        switch(title) {
            case "cities" : return "עיר";
            case "streets" : return "רחוב";
            default : return "";
        }
    }
    const boldText = (text,toBold) => {
        const arr = text.split(toBold.trim());
        if(arr.length===1) return text;
        return (
            <>
            {arr[0]}
            {arr[0].endsWith(" ") && <>؜</>}
            <b>{toBold}</b>
            {arr[1]?.startsWith(" ") && <>؜</>}
            {arr[1]}
            </>
        );
    }
    const getRoomsFromOptions = () => {
        const max = parseFloat(formState.values.maxRooms);
        const roomsFrom = ["0"];
        for(let i=1;i<=max && i<12.5;i+=0.5) {
            roomsFrom.push(""+i);
        }
        return roomsFrom;
    }
    const getRoomsToOptions = () => {
        const min = parseFloat(formState.values.minRooms);
        const roomsTo = ["12.5"];
        for(let i=min;i<=12;i+=0.5) {
            roomsTo.push(""+i);
        }
        return roomsTo;
    }
    const numberWithCommas = (num) => {
        return num.replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    }


    const handleAddressInput = (value,isValid) => {
        clearTimeout(timer);
        if(!isValid && value.length >= 3) {
            setTimer(
                setTimeout(()=>{
                    getAddressAutocomplete(value)
                    .then(res=>{
                        setAutocompleteResults(res)
                    })
                    .catch(err=>{
                        setAutocompleteResults(undefined)
                    })
                },500)
            )
        }
        //clear results if input is to short
        else if(autocompleteResults) setAutocompleteResults(undefined);
        dispatchForm(realestateSearchFormAction(realestateSearchFormActionTypes.CHANGE_ADDRESS_STATE,value))
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
                <form onSubmit={(e)=>{e.preventDefault()}} className="realestate__search-form__basic-search__form">
                    <div className="form-field">
                        <label className="form-field__label">חפשו אזור, עיר, שכונה או רחוב</label>
                        <input type="text" className="form-field__input" placeholder="לדוגמא: שהם, רמת גן" 
                        value={formState.values.address.street?`${formState.values.address.street}, ${formState.values.address.cities[0]}`:formState.values.address}
                        onChange={(e)=>{handleAddressInput(e.target.value,false)}}/>
                        <div className={"form-field__expandable col"+(autocompleteResults?" show":"")}>
                            {autocompleteResults && Object.keys(autocompleteResults).map(key=>{
                                return (
                                    <div className="form-field__expandable__address-section" key={nanoid()}>
                                    <span className="form-field__expandable__section-title">{convertToHebrew(key)}</span>
                                    <div className="form-field__expandable__section-content">
                                        {key==="cities" && autocompleteResults[key].map(city=>{
                                            return (
                                                <span className="form-field__expandable__section-content__item" key={nanoid()}
                                                onClick={(e)=>{handleAddressInput(city,true)}}>
                                                    {boldText(city,formState.values.address)}
                                                </span>
                                            )
                                        })}
                                        {key==="streets" && autocompleteResults[key].map(street=>{
                                            return (
                                                <span className="form-field__expandable__section-content__item" key={nanoid()}
                                                onClick={(e)=>{handleAddressInput(street,true)}}>
                                                    {boldText(street.street,formState.values.address)}
                                                    {`, ${street.cities[0]}`}
                                                </span>
                                            )
                                        })}
                                    </div>
                                    </div>
                                )
                            })}
                        </div>
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
                                            key={nanoid()}
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
                                            key={nanoid()}
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
                                            key={nanoid()}
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
                            <select name="rooms-from" value={formState.values.minRooms}
                            onChange={(e)=>{
                                dispatchForm(realestateSearchFormAction(realestateSearchFormActionTypes.CHANGE_MIN_ROOMS_STATE,e.target.value))
                            }}>
                                {getRoomsFromOptions().map(option=>{
                                    if(option==="0") {
                                        return <option value={option} key={nanoid()}>הכל</option>
                                    }
                                    return <option value={option} key={nanoid()} onClick={(e)=>{
                                        dispatchForm(realestateSearchFormAction(realestateSearchFormActionTypes.CHANGE_MIN_ROOMS_STATE,option))
                                    }}>{option}</option>
                                })}
                            </select>
                            <span style={{fontSize:"20px",fontWeight:"bold",textAlign:"center"}}>-</span>
                            <select name="rooms-to" value={formState.values.maxRooms}
                            onChange={(e)=>{
                                            dispatchForm(realestateSearchFormAction(realestateSearchFormActionTypes.CHANGE_MAX_ROOMS_STATE,e.target.value))
                                        }}>
                                {getRoomsToOptions().map(option=>{
                                    if(option==="12.5") {
                                        return <option value={option} key={nanoid()}>הכל</option>
                                    }
                                    return <option value={option} key={nanoid()}>{option}</option>
                                })}
                            </select>
                        </div>
                    </div>

                    <div className="form-field">
                        <label className="form-field__label">מחיר</label>
                        <div className="form-field__multi-input">
                            <input type="text" className="form-field__input" placeholder="מ-"
                            value={formState.values.minPrice===""?"":numberWithCommas(formState.values.minPrice)}
                            onChange={(e)=>{dispatchForm(realestateSearchFormAction(realestateSearchFormActionTypes.CHANGE_MIN_PRICE_STATE,e.target.value.replace(",","")))}}/>
                            <input type="text" className="form-field__input" placeholder="עד-"
                            value={formState.values.maxPrice===""?"":numberWithCommas(formState.values.maxPrice)}
                            onChange={(e)=>{dispatchForm(realestateSearchFormAction(realestateSearchFormActionTypes.CHANGE_MAX_PRICE_STATE,e.target.value.replace(",","")))}}/>
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