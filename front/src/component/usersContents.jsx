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
import React, { Component } from 'react';
import {
    FormGroup, Label, Button, Input,
  } from 'reactstrap';

class UsersList extends Component {
  
  render() {
    const { onChangeInput, onSubmitNewInfo, showErrorEmail, showErrorPass, email, pass } = this.props;
    return (
        <div className="dashboard container">
            <h2>Ingrese usuario y contraseña</h2>
            <br/>
            <div className="col-md-6">
                <FormGroup>
                    <Label className="label_autofin" for="type">Usuario:</Label>
                    <Input
                        type="text"
                        className="newArea"
                        name="description"
                        id="description"
                        maxLength="30"
                        value={email}
                        onChange={onChangeInput('email')}
                    />
                    <p style={{ color: '#dc3545' }} hidden={showErrorEmail} > Error, debe ingresar un valor. </p>
                </FormGroup>
            </div>
            <div className="col-md-6">
                <FormGroup>
                    <Label className="label_autofin" for="subtype">Contraseña:</Label>
                    <Input
                        type="password"
                        className="newArea"
                        name="description"
                        id="description"
                        maxLength="9"
                        value={pass}
                        onChange={onChangeInput('pass')}
                    />
                    <p style={{ color: '#dc3545' }} hidden={showErrorPass} > Error, debe ingresar una Contraseña. </p>
                </FormGroup>
            </div>
            <div className="mt-4">
                <Button
                    className="asignar just_this"
                    type="submit"
                    id="added"
                    onClick={onSubmitNewInfo}
                >Guardar
                </Button>
            </div>
        </div>
    );
  }
}

export default UsersList;
