import React, { Component, Fragment }from 'react';
import { Provider } from 'react-redux';
import store from './store';
import Index from './component/index';
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      loading: true,
      loaded: false,
    };
  }

  componentDidMount() {
    window.addEventListener('load', () => {
      this.setState({ loading: false });
      setTimeout(() => this.setState({ loaded: true }), 500);
    });
  }

  render() {
    const { loaded, loading } = this.state;
    return (
      <Provider store={store}>
          <Fragment>
            {!loaded
            && (
            <div className={`load${loading ? '' : ' loaded'}`}>
              <div className="load__icon-wrap">
                <svg className="load__icon">
                  <path fill="#4ce1b6" d="M12,4V2A10,10 0 0,0 2,12H4A8,8 0 0,1 12,4Z" />
                </svg>
              </div>
            </div>
            )
            }
            <div >
            <Index />
            </div>
          </Fragment>
      </Provider>
    );
  }

}

export default App;
