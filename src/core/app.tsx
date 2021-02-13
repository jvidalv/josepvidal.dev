import { h } from 'preact';
import { FC } from 'preact/compat';
import { Dots } from 'components/shapes/dots/dots';
import { Circle } from 'components/shapes/circle/circle';
import { Triangle } from 'components/shapes/red-triangle/triangle';
import { HalfMoon } from 'components/shapes/half-moon/half-moon';
import { VerticalSlice } from 'components/containers/vertical-slice/vertical-slice';
import { FloatingRectangle } from 'components/containers/floating-rectangle/floating-rectangle';
import { RoundImage } from 'components/atoms/round-image/round-image';
import { AboutMe } from 'components/containers/about-me/about-me';
import { Row } from 'components/containers/row/row';
import { NETWORKS } from '../constants/networks';

const me = require('assets/images/me.jpg');
const styles = require('./app.pcss');

export const App: FC = () => (
  <main>
    <div className={styles.constellation}>
      <Circle />
      <Dots />
      <Triangle />
      <HalfMoon />
    </div>
    <VerticalSlice>
      <FloatingRectangle>
        <RoundImage
          src={me}
          alt="Josep Vidal Vidal"
          title="Josep Vidal Vidal"
          className="mx-auto -mt-24"
        />
        <p className="text-3xl w-11/12 p-2 text-center mx-auto my-10 text-gray-800">
          I'm Josep, a <span className="bg-red-500 text-white font-thin">software</span> developer
          specialized in <span className="bg-react text-white font-thin">React</span>
        </p>
        <div className="flex items-center justify-evenly space-x-2 w-5/6 mx-auto">
          {NETWORKS.map(({ url, Icon, name }) => (
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
    <Row>
      <AboutMe>
        <h1 className="text-3xl">
          Welcome <span aria-label="hand wave">👋🏻</span>
        </h1>
        <div className="space-y-3 text-xl text-gray-700">
          <p>
            Currently working remotely for{' '}
            <a
              href="https://www.linkedin.com/company/zartis/"
              target="_blank"
              className="bg-blue-800 text-white font-thin">
              Zartis
            </a>{' '}
            as a software engineer. My role is to lead the frontend part of Agreeable, a brand new
            e-sign platform.
          </p>
          <p>
            My actual work requires me to code mostly in React (Preact &{' '}
            <span className="bg-typescript text-white font-thin  normal-case">TypeScript</span>),
            .NET and MongoDB, but my experience includes React Native, PHP, SQL and more.
          </p>
          <p>
            In{' '}
            <a
              href="https://github.com/jvidalv"
              target="_blank"
              className="bg-gray-900 text-white font-thin">
              Github
            </a>{' '}
            I have a collection of open source projects, like{' '}
            <a
              href="https://github.com/jvidalv/astrale"
              target="_blank"
              className="bg-purple-600 text-white font-thin">
              Astrale
            </a>
            , a mobile app powered by React Native and Python.
          </p>
          <p>
            From time to time I do side jobs for personal clients, if you are interested in having a
            cutting edge, well document codebase{' '}
            <a className="bg-red-500 text-white font-thin" href="mailto:josepvidalvidal@gmail.com">
              contact me
            </a>
            .
          </p>
          <p>🚀🌕</p>
        </div>
      </AboutMe>
    </Row>
  </main>
);
