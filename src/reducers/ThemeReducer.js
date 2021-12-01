// Initial State
const initialState = {
    theme: true
}

// Redux: Counter Reducer
const ThemeReducer = (state = initialState, action) => {
    switch (action.type) {
        case "UPDATE_THEME":
            return { theme: action.mode };
    }
    return state;
};

export default ThemeReducer;