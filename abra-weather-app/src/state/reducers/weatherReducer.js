const initState = {
    autoCompleteLocations: [],
    currLocation: "Tel Aviv, IL",
    currCondition: {},
    currCityKey: 215854,
    weather: [],
    favorites: [],

};

const reducer = (state = initState, action) => {
    switch (action.type) {
        case "updateAutoComplete":
            return { ...state, autoCompleteLocations: action.payload };

        case "updateCurrCondition":
            return { ...state, currCondition: action.payload };

        case "updateCurrCityKey":
            return { ...state, currCityKey: action.payload };

        default:
            return state
    }
}

export default reducer;