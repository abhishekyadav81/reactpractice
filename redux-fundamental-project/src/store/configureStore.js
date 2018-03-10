// To set the store we need to create the configureStore.js

import {createStore} from 'redux';
import rootReducer from '../reducers';

export default function configureStore(initialState){
    return createStore(rootReducer,initialState);
}