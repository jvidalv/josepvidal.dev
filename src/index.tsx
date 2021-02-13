import 'preact/debug';
import { h, render } from 'preact';
import { App } from './core/app';
import './index.pcss';

if (process.env.NODE_ENV === 'development') {
  require('preact/debug');
}

if (module.hot) {
  module.hot.accept();
}

render(<App />, document.getElementById('app'));
