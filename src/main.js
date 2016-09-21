/**
 * Created by kiny on 16/9/7.
 */
import React from 'react';
import {Provider} from 'react-redux';
import App from './containers/App';
import configureStore from './store/configureStore';
import { syncHistoryWithStore } from 'react-router-redux-ie8'
import { Router, Route, browserHistory ,IndexRoute} from 'react-router';
import User from './user'
import AppIndex from './app-index'

const store = configureStore()
// const history = syncHistoryWithStore(browserHistory, store)

export default class Main extends React.Component {
  render() {
    return (
        <Provider store={store}>
        <Router history={browserHistory}>
            <Route path="/" component={AppIndex}>
                <Route path="app" component={App}/>
                <Route path="user" component={User}/>
            </Route>
        </Router>
        </Provider>
    );
  }
}
