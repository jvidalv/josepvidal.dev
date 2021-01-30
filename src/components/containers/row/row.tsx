import { FC } from 'preact/compat';
import { ComponentChildren, h } from 'preact';
import classNames from 'classnames';
import { useIntersectionObserver } from 'hooks/use-intersection-observer';

const animations = require('styles/animations.pcss');
const styles = require('./row.pcss');

type Props = {
  children: ComponentChildren;
};

export const Row: FC<Props> = ({ children }) => {
  const [setNode, isIntersecting, hasIntersected] = useIntersectionObserver<HTMLElement>();
  const className = classNames({
    [styles.row]: true,
    [animations.scale__base]: true,
    [animations.scale__entered]: isIntersecting || hasIntersected,
  });

  return (
    <section ref={setNode}>
      <div className={className}>{children}</div>
    </section>
  );
};
