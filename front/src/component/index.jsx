import React, { Component, Fragment }from 'react';
import { connect } from 'react-redux';
import UsersContents from './usersContents';
import UsersListContents from './usersListContents';
import {
  createUser,
  getUsers,
} from '../../src/redux/actions/userActions';

class Index extends Component {
  constructor() {
    super();
    this.state = {
      email: '',
      pass: '',
      showErrorEmail: true,
      showErrorPass: true,
      users: [],
    };
  }

  componentDidMount() {
    this.props.getUsers({}, body => {
      this.setState({ users: body })
    });
  }

  onChangeInput = key => (e) => {
    if ((key === 'email') || (key === 'pass')) {
        this.setState({ [key]: e.target.value.trim() });
      }
  }

  onSubmitNewInfo = (e) => {
    if (e) {
      e.preventDefault();
    }

    const {
        email,
        pass,
    } = this.state;

    this.setState({showErrorEmail: true, showErrorPass: true});

    if(email === ''){
        this.setState({showErrorEmail: false});
        return;
    }

    if(pass === ''){
        this.setState({showErrorPass: false});
        return;
    }

    this.props.createUser({ email, password: pass }, user => {
      this.props.getUsers({}, body => {
        this.setState({ users: body, email: '', pass: '' })
      });
    });

}

  render() {
    return (
      <Fragment>
        <div className="col-md-12" style={{ display: 'flex' }}>
          <div className="col-md-6">
            <UsersContents
              email={this.state.email}
              pass={this.state.pass}
              showErrorEmail={this.state.showErrorEmail}
              showErrorPass={this.state.showErrorPass}
              onChangeInput={this.onChangeInput}
              onSubmitNewInfo={this.onSubmitNewInfo}
            />
          </div>
          <div className="col-md-6">
            <UsersListContents
              users={this.state.users}
            />
          </div>
        </div>
      </Fragment>
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
export default connect(mapStateToProps, mapDispatchToProps, null, { forwardRef: true })(Index);
