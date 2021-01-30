import { FC } from 'preact/compat';
import { ComponentChildren, h } from 'preact';

const styles = require('./about-me.pcss');

type Props = {
  children: ComponentChildren;
};

export const AboutMe: FC<Props> = ({ children }) => (
  <div className={styles.aboutMe}>
    <div className={styles.aboutMe__inner}>{children}</div>
  </div>
);
