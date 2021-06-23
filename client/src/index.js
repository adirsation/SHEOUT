import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { createEpicMiddleware } from 'redux-observable';
import { composeWithDevTools } from 'redux-devtools-extension';
import reducers from './redux/reducers/index';
import epics from './redux/epics/index';
import Amplify, { API } from 'aws-amplify';
import awsconfig from './aws-exports';
import { withAuthenticator } from '@aws-amplify/ui-react';

import './index.css';
import Sheout from './Sheout';

const epicMiddleware = createEpicMiddleware();

const composedEnhancer = composeWithDevTools(applyMiddleware(epicMiddleware));

const store = createStore(
  reducers,
  composedEnhancer
);

epicMiddleware.run(epics);

Amplify.configure(awsconfig);
API.configure(awsconfig);

const App = () => (
  <Provider store={store}>
    <Sheout />
  </Provider>
)

const AuthApp = withAuthenticator(App);

ReactDOM.render(
  <AuthApp />,
  document.getElementById('root')
);
