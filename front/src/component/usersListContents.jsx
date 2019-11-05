/* eslint-disable no-unused-expressions */
/* eslint-disable react/no-did-update-set-state */
/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable react/jsx-no-target-blank */
/* eslint-disable no-shadow */
/* eslint-disable prefer-destructuring */
/* eslint-disable no-param-reassign */
/* eslint-disable no-nested-ternary */
/* eslint-disable react/jsx-indent */
/* eslint-disable object-curly-newline */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable react/no-access-state-in-setstate */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable no-underscore-dangle */
/* eslint-disable max-len */
/* eslint-disable react/prop-types */
import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import TableCell from '@material-ui/core/TableCell';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableRow from '@material-ui/core/TableRow';
import Checkbox from '@material-ui/core/Checkbox';
import Head from './Head';

import {
    createUser,
    getUsers,
  } from '../redux/actions/userActions';

  const headers = [
    {
      id: 'email', disablePadding: false, label: 'Usuario',
    },
    {
      id: 'password', disablePadding: true, label: 'Constraseña',
    },
  ];

class Users extends Component {
  constructor() {
    super();
    this.state = {
        users: [],
    };
  }

  render() {
    const { users } = this.props;
    return (
      <div className="material-table__wrap">
        <h2>Lista de usuarios y contraseñas</h2>
        <br />
      <Table className="material-table border_bot table-hover">
        <Head
          headers={headers}
        />
        <TableBody>
          {
           (users) && (
            users.map((d) => {
              return (
                <TableRow
                  className="material-table__row"
                  role="checkbox"
                >
                  <TableCell className="material-table__cell" padding="checkbox">
                    <Checkbox
                      className="material-table__checkbox"
                      hidden="true"
                      style={{ color: 'rgba(0, 0, 0, 0.54)' }}
                    />
                  </TableCell>
                  <TableCell className="material-table__cell" style={{ borderBottom: '0px' }} align="left">{d.email}</TableCell>
                  <TableCell className="material-table__cell" style={{ borderBottom: '0px' }} align="left">{d.password}</TableCell>

                </TableRow>
              );
            })
           ) 
          }
        </TableBody>
      </Table>
    </div>
    );
  }
}

const mapStateToProps = ({ users }) => ({
  users: users.users,
});


const mapDispatchToProps = {
  createUser,
  getUsers,
};
export default connect(mapStateToProps, mapDispatchToProps, null, { forwardRef: true })(Users);
