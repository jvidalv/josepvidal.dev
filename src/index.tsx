import 'preact/debug';
import { h, render } from 'preact';
import { App } from './core/app';
import './index.pcss';
import { Provider } from 'react-redux';
import { generateInitialAppStore } from 'store/app.redux';

if (process.env.NODE_ENV === 'development') {
  require('preact/debug');
}

if (module.hot) {
  module.hot.accept();
}

(() => {
  const appInitialState = generateInitialAppStore();
  render(
    <Provider store={appInitialState}>
      <App />
    </Provider>,
    document.getElementById('app'),
  );
})();
