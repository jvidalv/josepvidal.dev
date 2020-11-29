import { FC } from 'preact/compat';
import { h } from 'preact';
import classNames from 'classnames';

type Props = {
  src: string;
  alt?: string;
  imageClassName?: string;
};

export const NetworkIcon: FC<Props> = ({ src, alt, imageClassName }) => {
  const classes = classNames(
    imageClassName,
    'rounded-full shadow-md w-36 h-36 transition duration-500 transform hover:scale-110',
  );

  return <img className={classes} src={src} alt={alt} />;
};

NetworkIcon.defaultProps = {
  alt: 'Just a random image',
};
