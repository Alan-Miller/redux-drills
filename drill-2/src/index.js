import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { Provider } from 'react-redux';
import store from './store'
import registerServiceWorker from './registerServiceWorker';
import { HashRouter as Router, Route, Switch } from 'react-router-dom';
import './index.css';

ReactDOM.render(
  <Router>
    <Switch>
      <Provider store={store}>
        <div>
          <Route exact path="/" render={() => (
            <App title="Smurfs" />
          )} />
          <Route path="/heroes" render={() => (
            <App title="Heroes" />
          )} />
        </div>
      </Provider>
    </Switch>
  </Router>
,document.getElementById('root'))
registerServiceWorker();
