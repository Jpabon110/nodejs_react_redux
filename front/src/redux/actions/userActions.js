/* eslint-disable no-console */
import Users from '../../api/User';
import {
  CREATE_USER,
  CREATE_USER_SUCCESS,
  CREATE_USER_FAILED,
  GET_USERS,
  GET_USER_SUCCESS,
  GET_USER_FAILED,
} from '../../api/Types';
import BasicNotification from '../../shared/components/Notifications/BasicNotification';
import closeSesion from '../../helper/functions';

export const createUser = (data, cb) => async (dispatch) => {
  dispatch({ type: CREATE_USER, cargando: true });
  // console.log(data);
  try {
    BasicNotification.info('Creando usuario...');
    const { body } = await Users.createUser(data);
    if (cb) {
      cb(body);
    }
    dispatch({ type: CREATE_USER_SUCCESS, cargando: false, payload: { caso: body } });
    BasicNotification.success('Usuario creado con éxito.');
  } catch (error) {
    console.error(error);
    BasicNotification.error('Ocurrió un error al intentar crear el usuario.');
    dispatch({ type: CREATE_USER_FAILED, cargando: false, error });
  }
};

export const updateUser = (id, data, cb) => async () => {
  BasicNotification.info('Actualizando usuario...');
  try {
    await Users.update(id, data);
    if (cb) {
      cb();
    }
    BasicNotification.success('Usuario actualizado con éxito.');
  } catch (error) {
    BasicNotification.error('Ocurrió un error al intentar actualizar el usuario');
  }
};

export const getUsers = (query, cb) => async (dispatch) => {
  dispatch({ type: GET_USERS });
  try {
    const { body } = await Users.getAllUsers(query);
    if (cb) {
      cb(body);
    }
    dispatch({ type: GET_USER_SUCCESS, payload: { users: body } });
  } catch (error) {
    dispatch({ type: GET_USER_FAILED, payload: { error } });
    if (error.status === 401) { closeSesion(); }
    BasicNotification.error('Ocurrió un error al intentar obtener los usuarios');
  }
};

