import { FC } from 'preact/compat';
import { h } from 'preact';
import classNames from 'classnames';

const styles = require('./round-image.pcss');

type Props = {
  src: string;
  alt?: string;
  className?: string;
  title?: string;
};

export const RoundImage: FC<Props> = ({ src, alt, title, className }) => (
  <img className={classNames(className, styles.round__image)} src={src} alt={alt} title={title} />
);
