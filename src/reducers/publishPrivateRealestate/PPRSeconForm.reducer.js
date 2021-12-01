import { PPRSecondFormActionTypes } from "../../types/publishPrivateRealestateFormAction.types";

export const PPR_SECOND_FORM_INITIAL_STATE = {
    completed: false,
    values: {
        estateType:"",
        estateCondition:"",
        city:"",
        street:"",
        number:"",
        floor:"",
        totalFloors:"",
        onPillars: false,
        addToMailingList: false,
    },
    isValid: {
        estateType:false,
        estateCondition:false,
        city:false,
        street:false,
        number:false,
        floor:false,
        totalFloors:false,
    },
    disabled: {
        street: true,
        number:true,
        floor:true,
        totalFloors:true,
        onPillars: true,
        addToMailingList: true,
    },
    showError: {
        estateType:false,
        estateCondition:false,
        city:false,
        street:false,
        number:false,
        floor:false,
        totalFloors:false,
    },
    errorMessage: {
        estateType: "שדה חובה",
        estateCondition: "שדה חובה",
        city: "יש לבחור ישוב מתוך הרשימה",
        street: "יש לבחור רחוב מתוך הרשימה",
        number: "יש לבחור מס' בית מתוך הרשימה",
        floor: "שדה חובה",
        totalFloors: "שדה חובה",
    },
    showFloorsQuery: true,
    showTotalFloorsQuery: true,
    showOnPillarsQuery: true,
}

const floorsQueryConditionValues = [
    "דירה",
    "דירת גן",
    "גג/פנטהאוז",
    "דופלקס",
    "דירת נופש",
    "מרתף/פרטר",
    "טריפלקס",
    "יחידת דיור",
    "דיור מוגן",
    "סטודיו/לופט",
    "כללי",
]

const totalFloorsQueryConditionValues = [
    "דירה",
    "דירת גן",
    "גג/פנטהאוז",
    "דופלקס",
    "דירת נופש",
    "מרתף/פרטר",
    "טריפלקס",
    "יחידת דיור",
    "דיור מוגן",
    "בניין מגורים",
    "סטודיו/לופט",
    "כללי",
]

const onPillarsQueryConditionValues = [
    "דירה",
    "גג/פנטהאוז",
    "דופלקס",
    "דירת נופש",
    "טריפלקס",
    "יחידת דיור",
    "בניין מגורים",
    "סטודיו/לופט",
    "כללי",
]

const PPRSecondFormReducer = (state,action) => {
    switch(action.type) {
        case PPRSecondFormActionTypes.CHANGE_ESTATE_TYPE_STATE : {
            const {value} = action.payload;
            const isValidValue = (value !== "");

            const queries = {
                showQueries: {
                    showFloorsQuery: floorsQueryConditionValues.includes(value),
                    showTotalFloorsQuery: totalFloorsQueryConditionValues.includes(value),
                    showOnPillarsQuery: onPillarsQueryConditionValues.includes(value),
                },
            }
            queries.isValid = {
                floor:!queries.showQueries.showFloorsQuery,
                totalFloors:!queries.showQueries.showTotalFloorsQuery,
            }

            return {
                values: {...state.values, estateType:value},
                isValid: {...state.isValid, estateType: isValidValue, ...queries.isValid},
                disabled: {...state.disabled},
                showError: {...state.showError, estateType: false},
                errorMessage: {...state.errorMessage, estateType:""},
                ...queries.showQueries,
            }
        }
        case PPRSecondFormActionTypes.CHANGE_ESTATE_CONDITION_STATE : {
            const {value} = action.payload;
            const isValidValue = (value !== "");

            return {
                values: {...state.values, estateCondition:value},
                isValid: {...state.isValid, estateCondition: isValidValue},
                disabled: {...state.disabled},
                showError: {...state.showError, estateCondition: false},
                errorMessage: {...state.errorMessage, estateCondition:""},
                showFloorsQuery: state.showFloorsQuery,
                showTotalFloorsQuery: state.showTotalFloorsQuery,
                showOnPillarsQuery: state.showOnPillarsQuery,
            }

        }
        case PPRSecondFormActionTypes.CHANGE_CITY_STATE : {
            const {value} = action.payload;
            const isValidValue = (value !== "");
            let errorMessage = "";
            if(!isValidValue) errorMessage = "יש לבחור ישוב מתוך הרשימה";

            return {
                values: {...state.values, city: value},
                isValid: {...state.isValid, city: isValidValue},
                disabled: {...state.disabled, street: false},
                showError: {...state.showError, city: false},
                errorMessage: {...state.errorMessage, city: errorMessage},
                showFloorsQuery: state.showFloorsQuery,
                showTotalFloorsQuery: state.showTotalFloorsQuery,
                showOnPillarsQuery: state.showOnPillarsQuery,
            }
        }
        case PPRSecondFormActionTypes.CHANGE_STREET_STATE : {
            const {value} = action.payload;
            const isValidValue = (value !== "");
            let errorMessage = "";
            if(!isValidValue) errorMessage = "יש לבחור רחוב מתוך הרשימה";

            return {
                values: {...state.values, street: value},
                isValid: {...state.isValid, street: isValidValue},
                disabled: {...state.disabled, number: false, addToMailingList:false},
                showError: {...state.showError, street: false},
                errorMessage: {...state.errorMessage, street: errorMessage},
                showFloorsQuery: state.showFloorsQuery,
                showTotalFloorsQuery: state.showTotalFloorsQuery,
                showOnPillarsQuery: state.showOnPillarsQuery,
            }
        }
        case PPRSecondFormActionTypes.CHANGE_NUMBER_STATE : {
            const {value} = action.payload;
            const isValidValue = (value !== "");
            let errorMessage = "";
            if(!isValidValue) errorMessage = "יש לבחור מס' בית מתוך הרשימה";

            return {
                values: {...state.values, number: value},
                isValid: {...state.isValid, number: isValidValue},
                disabled: {...state.disabled, floor: false, totalFloors: false, onPillars: false},
                showError: {...state.showError, number: false},
                errorMessage: {...state.errorMessage, number: errorMessage},
                showFloorsQuery: state.showFloorsQuery,
                showTotalFloorsQuery: state.showTotalFloorsQuery,
                showOnPillarsQuery: state.showOnPillarsQuery,
            }
        }
        case PPRSecondFormActionTypes.CHANGE_FLOOR_STATE : {
            let {value} = action.payload;
            const isValidValue = (value !== "");
            let errorMessage = "";
            if(!isValidValue) errorMessage = "שדה חובה";

            const valueInt = parseInt(value);
            console.log(valueInt)
            if(isNaN(valueInt) && value!=="") { //do not accept the new value
                value = state.values.floor;
            }
            
            //FIXME: limit value to 200, cross check total floors, limit input to numbers only
            return {
                values: {...state.values, floor: value},
                isValid: {...state.isValid, floor: isValidValue},
                disabled: {...state.disabled},
                showError: {...state.showError, floor: false},
                errorMessage: {...state.errorMessage, floor: errorMessage},
                showFloorsQuery: state.showFloorsQuery,
                showTotalFloorsQuery: state.showTotalFloorsQuery,
                showOnPillarsQuery: state.showOnPillarsQuery,
            }
        }
        case PPRSecondFormActionTypes.CHANGE_TOTAL_FLOORS_STATE : {

        }
        case PPRSecondFormActionTypes.CHANGE_ON_PILLARS_STATE : {

        }
        case PPRSecondFormActionTypes.CHANGE_MAILING_LIST_STATE : {

        }
        default: return {...state};
    }
}

export default PPRSecondFormReducer;