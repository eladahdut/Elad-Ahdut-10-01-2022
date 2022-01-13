export const updateAutoComplete = (locations) => {
    console.log(locations);
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
export const addToFavorites = (info) => {
    return (dispatch) => {
        dispatch({
            type: "addToFavorites",
            payload: info
        })
    }
}
export const delFromFavorites = (cityKey) => {
    return (dispatch) => {
        dispatch({
            type: "delFromFavorites",
            payload: cityKey
        })
    }
}
