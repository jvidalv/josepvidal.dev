import { FC } from 'preact/compat';
import { ComponentChildren, h } from 'preact';
import { useIntersectionObserver } from 'hooks/use-intersection-observer';
import classNames from 'classnames';

const animations = require('styles/animations.pcss');
const styles = require('./about-me.pcss');

type Props = {
  children: ComponentChildren;
};

export const AboutMe: FC<Props> = ({ children }) => {
  const [setNode, isIntersecting, hasIntersected] = useIntersectionObserver<HTMLElement>();
  const className = classNames({
    [styles.aboutMe__inner]: true,
    [animations.scale__base]: true,
    [animations.scale__entered]: isIntersecting || hasIntersected,
  });

  return (
    <div className={styles.aboutMe}>
      <div ref={setNode} className={className}>
        {children}
      </div>
    </div>
  );
};
