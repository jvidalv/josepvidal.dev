import 'preact/debug';
import { h, render } from 'preact';
import { FC } from 'preact/compat';
import './index.pcss';
import { Row } from './components/containers/row/row';
import { FloatingRectangle } from './components/containers/floating-rectangle/floating-rectangle';
import { VerticalSlice } from './components/containers/vertical-slice/vertical-slice';
import { RoundImage } from './components/atoms/round-image/round-image';
import { Github } from './components/icons/github';
import { Linkedin } from './components/icons/linkedin';
import { Email } from './components/icons/email';
import { StackOverflow } from './components/icons/stack-overflow';

export const App: FC = () => (
  <div>
    <VerticalSlice>
      <div className="absolute w-full height-full">{/* IMPLEMENT BACKGROUND ITEMS */}</div>
      <FloatingRectangle>
        <RoundImage
          src={
            'https://josepvidal.dev/static/media/yo-romano.90506daa.png?__WB_REVISION__=90506daac606176589bd38801ade849e'
          }
          imageClassName="mx-auto -mt-24"
        />
        <p className="text-3xl w-5/6 text-center mx-auto my-10">
          I'm Josep, a <b>full-stack</b> developer specialized in React and PHP
        </p>
        <div className="flex items-center justify-evenly w-5/6 mx-auto">
          <a href="#" className="transition duration-300 transform hover:scale-110">
            <Github width="4rem" height="4rem" />
          </a>
          <a href="#" className="transition duration-300 transform hover:scale-110">
            <StackOverflow width="4rem" height="4rem" />
          </a>
          <a href="#" className="transition duration-300 transform hover:scale-110">
            <Linkedin width="4rem" height="4rem" />
          </a>
          <a href="#" className="transition duration-300 transform hover:scale-110">
            <Email width="4rem" height="4rem" />
          </a>
        </div>
      </FloatingRectangle>
    </VerticalSlice>
    <Row>1</Row>
    <Row>2</Row>
    <Row>3</Row>
  </div>
);

render(<App />, document.getElementById('root'));
