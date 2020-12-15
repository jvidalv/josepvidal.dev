import { FC } from 'preact/compat';
import { ComponentChildren, h } from 'preact';
import classNames from 'classnames'
import { useObservable } from '../../../hooks/use-observable';

const styles = require('./row.pcss');
const animations = require('../../../styles/animations.pcss')

type Props = {
  children: ComponentChildren;
};

export const Row: FC<Props> = ({ children }) => {
  const [setNode, isIntersecting] = useObservable<HTMLElement>();
  const className = classNames({
    [styles.row] : true,
    [animations.scale__base] : true,
    [animations.scale__entered]: isIntersecting
  })
  return (
    <section ref={setNode}>
      <div className={className} >
        {children}
      </div>
    </section>
  );
};
