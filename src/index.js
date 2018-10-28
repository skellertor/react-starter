import React from 'react';
import ReactDOM from 'react-dom';
import {
  Router,
  Route,
  Switch,
  withRouter
} from 'react-router-dom';
import { createBrowserHistory } from 'history';
import { Provider } from 'react-redux';

import { renderDevTools } from './DevTools';
import configureStore from './store';

import ExampleComponent from './components/example/ExampleComponent';

const provider = (
  <Provider store={configureStore()}>
    <div>
      {renderDevTools()}
      <Router history={createBrowserHistory()}>
        <Switch>
          <Route exact={true} path="/" component={withRouter(ExampleComponent)} />
        </Switch>
      </Router>
    </div>
  </Provider>
);

ReactDOM.render(provider, document.getElementById('root'));
