import { h, render } from 'preact';
import { FC } from 'preact/compat';
import './index.pcss';
import { Row } from './components/containers/row/row';
import { FloatingRectangle } from './components/containers/floating-rectangle/floating-rectangle';
import { VerticalSlice } from './components/containers/vertical-slice/vertical-slice';
import { RoundImage } from './components/atoms/round-image/round-image';

export const App: FC = () => (
  <div>
    <VerticalSlice>
      <FloatingRectangle>
        <RoundImage
          src={
            'https://josepvidal.dev/static/media/yo-romano.90506daa.png?__WB_REVISION__=90506daac606176589bd38801ade849e'
          }
          imageClassName="mx-auto -mt-10"
        />
        <p>I'm Josep, a full-stack developer specialized in React and PHP</p>
      </FloatingRectangle>
    </VerticalSlice>
    <Row>1</Row>
    <Row>2</Row>
    <Row>3</Row>
  </div>
);

render(<App />, document.getElementById('root'));
