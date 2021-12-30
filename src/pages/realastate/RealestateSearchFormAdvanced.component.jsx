import { nanoid } from "nanoid";
import React from "react";
import DatePicker from "react-date-picker";
import { realestateSearchFormAction } from "../../actions/realestateSearchForm.actions";
import CustomCheckbox from "../../components/custom/CustomCheckbox.component";
import { realestateSearchFormActionTypes } from "../../types/realestateSearchFormAction.types";

const features = ["חניה","מעלית","מיזוג","מרפסת",'ממ"ד',"סורגים","מחסן","גישה לנכים","משופצת","מרוהטת","בבלעדיות"];
const RealestateSearchFormAdvanced = ({formState,dispatchForm,handleSearch,width}) => {

    const getMinFloor = () => {
        const max = parseInt(formState.values.maxFloor);
        const floors = ["-1","מרתף/פרטר","0"];
        for(let i=1;i<=max && i<18;i+=1) {
            floors.push(""+i);
        }
        return floors;
    }
    const getMaxFloor = () => {
        let min = parseInt(formState.values.minFloor);
        if(formState.values.minFloor==="מרתף/פרטר" || formState.values.minFloor==="-1") min = 0;
        const floors = ["18"];
        for(let i=min;i<18;i++) {
            floors.push(""+i);
        }
        return floors;
    }

    return (
        <div className="realestate__search-form__advanced">
            <section className="realestate__search-form__advanced__input-section first">
                <h2 className="realestate__search-form__advanced__input-section__title">מאפנייני דירה</h2>
                <div className="realestate__search-form__advanced__input-section__features">
                    {features.map((feature,i)=>{
                        return (
                            <>
                            {i!==0 && i%(width>650?5:3)===0 && <div className="realestate__search-form__advanced__input-section__features__break" key={nanoid()}></div>}
                            <span className="realestate__search-form__advanced__input-section__feature" key={nanoid()}>
                                <CustomCheckbox isChecked={formState.values.features.includes(feature)}
                                clickCallback={(e)=>{dispatchForm(realestateSearchFormAction(realestateSearchFormActionTypes.CHANGE_FEATURES_STATE,feature))}}/>
                                <span style={{pointerEvents:"none"}}>{feature}</span>
                            </span>
                            </>
                        )
                    })}
                </div>
            </section>
            <section className="realestate__search-form__advanced__input-section second">
                <div className="realestate__search-form__advanced__input-section__floor">
                    <h3 className="realestate__search-form__advanced__input-section__title">קומה</h3>
                    <select className="realestate__search-form__advanced__input-section__floor__select"
                    value={formState.values.minFloor}
                    onChange={(e)=>dispatchForm(realestateSearchFormAction(realestateSearchFormActionTypes.CHANGE_MIN_FLOORS,e.target.value))}>
                        {getMinFloor().map(floor=>{
                            return (
                                floor==="-1"?
                                (<option value="-1" key={nanoid()} 
                                className="realestate__search-form__advanced__input-section__select__option">
                                הכל</option>)
                                :
                                <option value={floor} key={nanoid()}
                                className="realestate__search-form__advanced__input-section__select__option">
                                {floor}</option> 
                            )
                        })}
                    </select>
                    <select className="realestate__search-form__advanced__input-section__floor__select"
                    value={formState.values.maxFloor}
                    onChange={(e)=>dispatchForm(realestateSearchFormAction(realestateSearchFormActionTypes.CHANGE_MAX_FLOORS,e.target.value))}>
                        {getMaxFloor().map(floor=>{
                            return (
                                floor==="18" ?
                                <option value="18" key={nanoid()}
                                className="realestate__search-form__advanced__input-section__floor__option">
                                הכל</option>
                                :
                                <option value={floor} key={nanoid()} 
                                className="realestate__search-form__advanced__input-section__floor__option">
                                {floor}</option>
                            )
                        })}
                    </select>
                </div>
                <div className="realestate__search-form__advanced__input-section__area">
                    <h3 className="realestate__search-form__advanced__input-section__title">גודל דירה (במ"ר)</h3>
                    <input type="number" placeholder="מ-" 
                    className="realestate__search-form__advanced__input-section__area__title__input"
                    value={formState.values.minArea}
                    onChange={(e)=>{
                        dispatchForm(realestateSearchFormAction(realestateSearchFormActionTypes.CHANGE_MIN_AREA_STATE,e.target.value))
                    }}/>
                    <input type="number" placeholder="עד-" 
                    className="realestate__search-form__advanced__input-section__area__title__input"
                    value={formState.values.maxArea}
                    onChange={(e)=>{
                        dispatchForm(realestateSearchFormAction(realestateSearchFormActionTypes.CHANGE_MAX_AREA_STATE,e.target.value))
                    }}/>
                </div>
                <div className="realestate__search-form__advanced__input-section__date">
                    <h3 className="realestate__search-form__advanced__input-section__title">תאריך כניסה</h3>
                    <DatePicker
                    value={formState.values.entryDate}
                    className={"realestate__search-form__advanced__input-section__date__input"}
                    locale="heb"
                    onChange={(date) => {
                        dispatchForm(realestateSearchFormAction(realestateSearchFormActionTypes.CHANGE_ENTRY_DATE_STATE,date));
                    }}
                    />
                    <div className="realestate__search-form__advanced__input-section__entry-now">
                        <CustomCheckbox isChecked={formState.values.entryNow} clickCallback={(e)=>{
                            e.preventDefault();
                            dispatchForm(realestateSearchFormAction(realestateSearchFormActionTypes.CHANGE_ENTRY_NOW_STATE));
                        }}/> כניסה מיידית
                    </div>
                </div>
            </section>
            <section className="realestate__search-form__advanced__input-section third">
                <h3 className="realestate__search-form__advanced__input-section__title">חיפוש חופשי</h3>
                <input type="text" value={formState.values.freeText}
                onChange={(e)=>dispatchForm(realestateSearchFormAction(realestateSearchFormActionTypes.CHANGE_FREE_TEXT_STATE,e.target.value))}/>
            </section>
            <div className="realestate__search-form__advanced__buttons">
                <button className="realestate__search-form__advanced__buttons__submit" onClick={(e)=>{
                    e.preventDefault();
                    handleSearch();
                }}
                >חיפוש</button>
                <button className="realestate__search-form__advanced__buttons__clear">נקה</button>
            </div>
        </div>
    )
}

export default RealestateSearchFormAdvanced;