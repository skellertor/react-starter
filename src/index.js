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
import ExampleComponentTwo from './components/exampleTwo/ExampleTwoComponent';

const provider = (
  <Provider store={configureStore()}>
    <div>
      {renderDevTools()}
      <Router history={createBrowserHistory()}>
        <Switch>
          <Route exact path="/" component={withRouter(ExampleComponent)} />
          <Route exact path='/two' component={withRouter(ExampleComponentTwo)}/>
        </Switch>
      </Router>
    </div>
  </Provider>
);

ReactDOM.render(provider, document.getElementById('root'));
