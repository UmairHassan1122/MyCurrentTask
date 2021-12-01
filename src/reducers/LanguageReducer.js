// Initial State
const initialState = {
  language: true
}

// Redux: Counter Reducer
const LanguageReducer = (state = initialState, action) => {
  switch (action.type) {
    case "UPDATE_Language":
      return { language: action.mode };
  }
  return state;
};

export default LanguageReducer;