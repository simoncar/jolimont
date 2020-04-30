import { combineReducers } from 'redux';
import { IntlReducer as Intl } from 'react-redux-multilingual'

// Import custom components
import blogReducer from './blog';
import apartmentReducer from './apartment';


const rootReducer = combineReducers({
    news: blogReducer,
    apartments: apartmentReducer,
    Intl
});

export default rootReducer;