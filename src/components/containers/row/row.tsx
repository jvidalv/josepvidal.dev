import { FC } from 'preact/compat';
import { h } from 'preact';
import { useIntersectionObserver } from 'hooks/use-intersection-observer';
import classNames from 'classnames';

import * as styles from './row.css'
import * as animations from 'styles/animations.css'


export const Row: FC = ({ children }) => {
  const [setRef, isIntersecting, hasIntersected] = useIntersectionObserver<HTMLElement>();
  const className = classNames({
    [styles.row]: true,
    [animations.scale__base]: true,
    [animations.scale__entered]: isIntersecting || hasIntersected,
  });

  return (
      <div ref={setRef} className={className}>
        {children}
      </div>
  );
};
