import 'preact/debug';
import { h, render } from 'preact';
import { FC } from 'preact/compat';
import './index.pcss';
import { Row } from './components/containers/row/row';
import { FloatingRectangle } from './components/containers/floating-rectangle/floating-rectangle';
import { VerticalSlice } from './components/containers/vertical-slice/vertical-slice';
import { RoundImage } from './components/atoms/round-image/round-image';
import { HalfMoon } from './components/shapes/half-moon/half-moon';
import { Triangle } from './components/shapes/red-triangle/triangle';
import { Dots } from './components/shapes/dots/dots';
import { Circle } from './components/shapes/circle/circle';
import { networks } from './constants/networks';

export const App: FC = () => (
  <main>
    <VerticalSlice>
      <div className="absolute w-full h-full">
        <Circle />
        <Dots />
        <Triangle />
        <HalfMoon />
      </div>
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
          {networks.map(({ url, Icon, name }) => (
            <a
              href={url}
              className="transition duration-300 transform hover:scale-110"
              title={name}
              target="_blank">
              <Icon width="3rem" height="3rem" />
            </a>
          ))}
        </div>
      </FloatingRectangle>
    </VerticalSlice>
    <Row>1</Row>
    <Row>2</Row>
    <Row>3</Row>
  </main>
);

render(<App />, document.getElementById('root'));
