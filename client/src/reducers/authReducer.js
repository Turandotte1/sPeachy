import { USER_EXISTS } from '../actions/type.js';

export default function(state = null, action) {
  switch (action.type) {
    case USER_EXISTS:
      return action.payload || false;
    default:
      return state;
  }
}
