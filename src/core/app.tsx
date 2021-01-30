import { h } from 'preact';
import { FC } from 'preact/compat';
import { Dots } from 'components/shapes/dots/dots';
import { Circle } from 'components/shapes/circle/circle';
import { Triangle } from 'components/shapes/red-triangle/triangle';
import { HalfMoon } from 'components/shapes/half-moon/half-moon';
import { VerticalSlice } from 'components/containers/vertical-slice/vertical-slice';
import { FloatingRectangle } from 'components/containers/floating-rectangle/floating-rectangle';
import { RoundImage } from 'components/atoms/round-image/round-image';
import { NETWORKS } from '../constants/networks';
import { useTexts } from '../data/texts';
import { AboutMe } from 'components/containers/about-me/about-me';
import { Row } from 'components/containers/row/row';

const me = require('assets/images/me.jpg');
const styles = require('./app.pcss');

export const App: FC = () => {
  const {
    intro,
    contentTitle,
    contentParagraph1,
    contentParagraph2,
    contentParagraph3,
    contentParagraph4,
  } = useTexts();

  return (
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
          {intro}
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
          {contentTitle}
          <div className="space-y-3 text-xl text-gray-700">
            {contentParagraph1}
            {contentParagraph2}
            {contentParagraph3}
            {contentParagraph4}
            <p>🚀🌕</p>
          </div>
        </AboutMe>
      </Row>
    </main>
  );
};
