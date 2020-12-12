import { FC } from 'preact/compat';
import { ComponentChildren, h } from 'preact';
import { useObservable } from '../../../hooks/use-observable';

const styles = require('./row.pcss');

type Props = {
  children: ComponentChildren;
};

export const Row: FC<Props> = ({ children }) => {
  const [setRef, ii] = useObservable()
  return (
    <section ref={setRef}>
      <div className={styles.row} style={{opacity : ii ? 1 : 0}}>{children}</div>
    </section>
  );
}
