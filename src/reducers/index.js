// Imports: Dependencies
import { combineReducers } from 'redux';
import LanguageReducer from './LanguageReducer';
import ThemeReducer from './ThemeReducer'


const rootReducer = combineReducers({
  Lang: LanguageReducer,
  Theme: ThemeReducer
});


export default rootReducer;