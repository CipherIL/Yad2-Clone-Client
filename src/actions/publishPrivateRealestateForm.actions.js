export const PPRFormAction = (type,values) => ({
    type,
    payload: {
        values
    }  
})

export const PPRSecondFormAction = (type,value) => ({
    type,
    payload: {
        value,
    }
});

export const PPRThirdFormAction = (type,value,key="") => ({
    type,
    payload: {
        key,
        value,
    }
})