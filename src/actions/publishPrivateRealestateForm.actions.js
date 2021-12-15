export const PPRFormAction = (type,values) => ({
    type,
    payload: {
        values
    }  
})

export const PPRSecondFormAction = (type,value,isValid) => ({
    type,
    payload: {
        value,
        isValid,
    }
});

export const PPRThirdFormAction = (type,value,key="") => ({
    type,
    payload: {
        key,
        value,
    }
})

export const PPRFourthFormAction = (type,value) => ({
    type,
    payload: {
        value
    }
})

export const PPRSixthFormAction = (type,value) => ({
    type,
    payload: {
        value
    }
})