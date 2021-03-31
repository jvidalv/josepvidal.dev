import { FC } from 'preact/compat';
import { h } from 'preact';
import classNames from 'classnames';

import * as styles from './network-icon.css'

type Props = {
  src: string;
  alt?: string;
  imageClassName?: string;
};

export const NetworkIcon: FC<Props> = ({ src, alt, imageClassName }) => (
  <img className={classNames(imageClassName, styles.network__icon)} src={src} alt={alt} />
);

NetworkIcon.defaultProps = {
  alt: 'Just a random image',
};
