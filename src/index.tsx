import 'preact/debug';
import { h, render } from 'preact';
import { App } from './core/app';
import './index.css';

if (process.env.NODE_ENV === 'development') {
  require('preact/debug');
}

render(<App />, document.getElementById('app'));
