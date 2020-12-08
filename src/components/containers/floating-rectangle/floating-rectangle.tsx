import { FC } from 'preact/compat';
import { ComponentChildren, h } from 'preact';

const styles = require('./floating-rectangle.pcss');

type Props = {
  children: ComponentChildren;
};

export const FloatingRectangle: FC<Props> = ({ children }) => (
  <div className={styles.floating__rectangle}>{children}</div>
);
