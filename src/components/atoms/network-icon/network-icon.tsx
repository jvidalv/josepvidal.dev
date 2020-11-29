import { FC } from 'preact/compat';
import { h } from 'preact';
import classNames from 'classnames';

const styles = require('./network-icon.pcss');

type Props = {
  src: string;
  alt?: string;
  imageClassName?: string;
};

export const NetworkIcon: FC<Props> = ({ src, alt, imageClassName }) => (
  <img className={classNames(imageClassName, styles.default)} src={src} alt={alt} />
);

NetworkIcon.defaultProps = {
  alt: 'Just a random image',
};
