import {combineReducers} from 'redux';
import contacts from './contactReducer';

// combineReducer function:

export default combineReducers({
    contacts: contacts
})