import QueryString from 'query-string';
import { requests } from '../helper/Agent';

export default class User {

  static createUser(data) {
    return requests.post('/users', data);
  }

  static getAllUsers() {
    return requests.get(`/users`);
  }

  static updateUser(id, data) {
    return requests.put(`/users/${id}`, data);
  }

}
