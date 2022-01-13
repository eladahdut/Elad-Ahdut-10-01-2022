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
export const updateCurrLocation = (name) => {
    return (dispatch) => {
        dispatch({
            type: "updateCurrLocation",
            payload: name
        })
    }
}

export const updateForecast = (info) => {
    return (dispatch) => {
        dispatch({
            type: "updateForecast",
            payload: info
        })
    }
}
export const addDelFavorite = (info) => {
    return (dispatch) => {
        dispatch({
            type: "addDelFavorite",
            payload: info
        })
    }
}