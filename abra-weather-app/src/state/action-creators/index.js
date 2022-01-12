export const updateAutoComplete = (locations) => {
    return (dispatch) => {
        dispatch({
            type: "updateAutoComplete",
            payload: locations
        })
    }
}

export const updateCurrCondition = (info) => {
    return (dispatch) => {
        dispatch({
            type: "updateCurrCondition",
            payload: info
        })
    }
}

export const updateCurrCityKey = (key) => {
    return (dispatch) => {
        dispatch({
            type: "updateCurrCityKey",
            payload: key
        })
    }
}