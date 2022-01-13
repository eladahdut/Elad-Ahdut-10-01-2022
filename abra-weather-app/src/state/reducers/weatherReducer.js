const initState = {
    autoCompleteLocations: [],
    currLocation: "Tel Aviv, IL",
    currCondition: {},
    currCityKey: 215854,
    forecast: [],
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

        case "updateCurrLocation":
            return { ...state, currLocation: action.payload };

        case "updateForecast":
            return { ...state, forecast: action.payload };

        case "addToFavorites":
            return {
                ...state,
                favorites: [ ...state.favorites, action.payload ]
            };
        case "delFromFavorites":
            return {
                ...state,
                favorites: state.favorites.filter(item => item.currCityKey !== action.payload)
            };

        default:
            return state
    }
}

export default reducer;