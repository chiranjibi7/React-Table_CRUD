import {combineReducers} from 'redux';
import {userDataReducer} from '../components/UserDataForrm/store/reducer';

export const rootReducer= combineReducers({
    userData: userDataReducer
});