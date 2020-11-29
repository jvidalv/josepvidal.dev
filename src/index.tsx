import { h, render } from 'preact'
import { FC } from 'preact/compat'
import './index.pcss'
import { Row } from './components/containers/row/row'
import { FloatingRectangle } from './components/containers/floating-rectangle/floating-rectangle'
import { VerticalSlice } from './components/containers/vertical-slice/vertical-slice'

export const App: FC = () => (
  <div>
    <VerticalSlice>
      <FloatingRectangle>asdsad</FloatingRectangle>
    </VerticalSlice>
    <Row>1</Row>
    <Row>2</Row>
    <Row>3</Row>
  </div>
)

render(<App />, document.getElementById('root'))
