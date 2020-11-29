import { FC } from 'preact/compat';
import { h } from 'preact';
import classNames from 'classnames';

const styles = require('./round-image.pcss');

type Props = {
  src: string;
  alt?: string;
  imageClassName?: string;
};

export const RoundImage: FC<Props> = ({ src, alt, imageClassName }) => (
  <img className={classNames(imageClassName, styles.default)} src={src} alt={alt} />
);

RoundImage.defaultProps = {
  alt: 'Just a random image',
};
