import { FC } from 'preact/compat';
import { ComponentChildren, h } from 'preact';

const styles = require('./vertical-slice.pcss');

type Props = {
  children: ComponentChildren;
};

export const VerticalSlice: FC<Props> = ({ children }) => (
  <section className={styles.default}>{children}</section>
);
