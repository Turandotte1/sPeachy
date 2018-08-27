import { combineReducers } from 'redux';
import authReducer from './authReducer';
import { reducer as reducerForm } from 'redux-form';

export default combineReducers({
  auth: authReducer,
  form: reducerForm
});
