import axios from 'axios';
import { USER_EXISTS } from './type.js';

export const UserExists = () => async dispatch => {
  const res = await axios.get('/api/current_user');
  dispatch({ type: USER_EXISTS, payload: res.data });
};

export const TokenHandler = token => async dispatch => {
  const res = await axios.post('/api/billing', token);
  dispatch({ type: USER_EXISTS, payload: res.data });
};
