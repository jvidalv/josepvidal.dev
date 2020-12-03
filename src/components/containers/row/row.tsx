import { FC } from 'preact/compat';
import { ComponentChildren, h } from 'preact';

const styles = require('./row.pcss');

type Props = {
  children: ComponentChildren;
};

export const Row: FC<Props> = ({ children }) => (
  <section>
    <div className={styles.default}>{children}</div>
  </section>
);
