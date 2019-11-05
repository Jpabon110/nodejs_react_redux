/* eslint-disable max-len */
import {
  GET_USERS,
  GET_USER_SUCCESS,
  GET_USER_FAILED,
  CREATE_USER,
  CREATE_USER_SUCCESS,
  CREATE_USER_FAILED,
} from '../../api/Types';

const initial = {
  collection: [],
  cargando: false,
  currentUser: {
    firstName: '',
    lastName: '',
    avatar: '',
  },
};
export default (state = initial, action) => {
  switch (action.type) {
    case CREATE_USER:
      return { ...state, loadingCurrentUser: true };
    case CREATE_USER_SUCCESS:
      return {
        ...state,
        loadingCurrentUser: false,
        currentUser: action.payload.currentUser,
      };
    case CREATE_USER_FAILED:
      return { ...state, loadingCurrentUser: false, error: action.payload.error };
    case GET_USERS:
      return { ...state, cargando: true };
    case GET_USER_SUCCESS:
      return { ...state, cargando: false, users: action.payload.users };
    case GET_USER_FAILED:
    default:
      return state;
  }
};
