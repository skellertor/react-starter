import React from 'react';
import ReactDOM from 'react-dom';
import {
  Router,
  Route,
  Switch
} from 'react-router';
import { createBrowserHistory } from 'history';
import { Provider } from 'react-redux';

import { renderDevTools } from './DevTools';
import configureStore from './store';

import ExampleComponent from './components/example/ExampleComponent';

const App = (
  <Provider store={configureStore()}>
    <div>
      {renderDevTools()}
      <Router history={createBrowserHistory()}>
        <Switch>
          <Route exact={true} path="/" component={ExampleComponent} />
        </Switch>
      </Router>
    </div>
  </Provider>
);

ReactDOM.render(App, document.getElementById('root'));
