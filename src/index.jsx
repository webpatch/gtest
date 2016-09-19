import React from 'react';
import ReactDOM from 'react-dom';
import { AppContainer } from 'react-hot-loader';
import Main from './main';

import './css/main.scss';

ReactDOM.render(
  (<AppContainer>
      <Main/>
    </AppContainer>
  ), document.getElementById('root')
);


if (module.hot) {
  module.hot.accept('./main', () => {
    // If you use Webpack 2 in ES modules mode, you can
    // use <App /> here rather than require() a <NextApp />.
    const NextApp = require('./main').default;
    ReactDOM.render(
      <AppContainer>
        <NextApp/>
      </AppContainer>,
      document.getElementById('root')
    );
  });
}