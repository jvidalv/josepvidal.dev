import 'preact/debug';
import { h, render } from 'preact';
import { App } from './core/app';
import './index.css';
import ReactGA from 'react-ga';

if (process.env.NODE_ENV === 'development') {
  require('preact/debug');
}

ReactGA.initialize('UA-155356290-3', {
  testMode: process.env.NODE_ENV === 'test',
  debug: process.env.NODE_ENV === 'development',
});

ReactGA.pageview(window.location.pathname + window.location.search);

render(<App />, document.getElementById('app'));
