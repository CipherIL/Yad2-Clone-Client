import { PPRFormActionsTypes } from "../../types/publishPrivateRealestateFormAction.types";

export const PPR_FORM_INITIAL_STATE = {
    values: {
        //firstFormValues
        category: "",
        //secondFormValues
        estateType:"",
        estateCondition:"",
        city:"",
        street:"",
        number:"",
        floor:"",
        totalFloors:"",
        onPillars: false,
        addToMailingList: false,
        //thirdFormValues
        rooms: "",
        parkingSpots: "ללא",
        balconies: "ללא",
        features: {
            airConditioning: false,
            mamad: false,
            storage: false,
            furniture: false,
            accessibility: false,
            elevator: false,
            tadiran: false,
            renovated: false,
            kosherKitchen: false,
            waterTank: false,
            metalBars: false,
        },
        description: "",
        //fourthFormValues

        //fifthFormValues

    },
    selected: {
        firstForm: true,
        secondForm: false,
        thirdForm: false,
        fourthForm: false,
        fifthForm: false,
        sixthForm: false,
        seventhForm: false,
    },
    completed: {
        firstForm: false,
        secondForm: false,
        thirdForm: false,
        fourthForm: false,
        fifthForm: false,
        sixthForm: false,
        seventhForm: false,
    }
}

const nextIncompleteForm = (completed) => {
    for(let key of Object.keys(completed))
        if(!completed[key]) return key;
}

const PPRReducer = (state,action) => {
    switch(action.type) {
        case PPRFormActionsTypes.CHANGE_FIRST_FORM_VALUES : {
            const {values} = action.payload;
            
            //select next form
            const updatedCompleted = {...state.completed, firstForm: true}
            const updatedSelected = {...state.selected,firstForm:false}
            updatedSelected[nextIncompleteForm(updatedCompleted)] = true;
            
            return {
                values:{...state.values,...values},
                selected: updatedSelected,
                completed: updatedCompleted,
            }
        }
        case PPRFormActionsTypes.CHANGE_SECOND_FORM_VALUES : {
            const {values} = action.payload;

            //select next form
            const updatedCompleted = {...state.completed, secondForm: true}
            const updatedSelected = {...state.selected, secondForm:false}
            updatedSelected[nextIncompleteForm(updatedCompleted)] = true;

            return {
                values:{...state.values,...values},
                selected: updatedSelected,
                completed: updatedCompleted,
            }
        }
        case PPRFormActionsTypes.CHANGE_THIRD_FORM_VALUES : {
            const {values} = action.payload;

            //select next form
            const updatedCompleted = {...state.completed, thirdForm: true}
            const updatedSelected = {...state.selected, thirdForm:false}
            updatedSelected[nextIncompleteForm(updatedCompleted)] = true;

            return {
                values:{...state.values,...values},
                selected: updatedSelected,
                completed: updatedCompleted,
            }
        }
        case PPRFormActionsTypes.CHANGE_FOURTH_FORM_VALUES : {
            const {values} = action.payload;

            //select next form
            const updatedCompleted = {...state.completed, fourthForm: true}
            const updatedSelected = {...state.selected, fourthForm: false}
            updatedSelected[nextIncompleteForm(updatedCompleted)] = true;

            return {
                values: {...state.values,...values},
                selected: updatedSelected,
                completed: updatedCompleted,
            }
        }
        case PPRFormActionsTypes.CHANGE_FIFTH_FORM_VALUES : {
            const {values} = action.payload;
            
            //select next form
            const updatedCompleted = {...state.completed, fifthForm: true}
            const updatedSelected = {...state.selected, fifthForm: false}
            updatedSelected[nextIncompleteForm(updatedCompleted)] = true;

            return {
                values: {...state.values,...values},
                selected: updatedSelected,
                completed: updatedCompleted,
            }        
        }
        case PPRFormActionsTypes.CHANGE_SIXTH_FORM_VALUES : {
            const {values} = action.payload;

            //select next form
            const updatedCompleted = {...state.completed, sixthForm: true}
            const updatedSelected = {...state.selected, sixthForm: false}
            updatedSelected[nextIncompleteForm(updatedCompleted)] = true;
            
            return {
                values: {...state.values,...values},
                selected: updatedSelected,
                completed: updatedCompleted,
            }     
        }
        case PPRFormActionsTypes.CHANGE_SEVENTH_FORM_VALUES : {
            const {values} = action.payload;

            //select next form
            const updatedCompleted = {...state.completed, seventhForm: true}
            const updatedSelected = {...state.selected, seventhForm: false}
            updatedSelected[nextIncompleteForm(updatedCompleted)] = true;
            
            return {
                values: {...state.values,...values},
                selected: updatedSelected,
                completed: updatedCompleted,
            } 
        }
        case PPRFormActionsTypes.CHANGE_SELECTED_FORM_STATE : {
            const {values} = action.payload;

            const updatedSelected = {};
            const updatedCompleted = {...state.completed};
            for(let key of Object.keys(state.selected))
                updatedSelected[key] = false;
                
            updatedSelected[values] = true;
            updatedCompleted[values] = false;

            return {
                values: {...state.values},
                selected: updatedSelected,
                completed: updatedCompleted,
            }
        }
        default : return {...state};
    }
}

export default PPRReducer;