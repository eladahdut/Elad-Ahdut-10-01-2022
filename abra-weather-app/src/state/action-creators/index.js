export const x = (amount) => {
    return (dispatch) => {
        dispatch({
            type: "x",
            payload: amount
        })
    }
}

export const y = (amount) => {
    return (dispatch) => {
        dispatch({
            type: "y",
            payload: amount
        })
    }
}