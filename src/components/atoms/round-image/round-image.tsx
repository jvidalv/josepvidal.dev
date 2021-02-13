import { FC } from 'preact/compat';
import { h } from 'preact';
import classNames from 'classnames';
import { useImageOnload } from 'hooks/use-image-onload';

const styles = require('./round-image.pcss');

type Props = {
  src: string;
  alt?: string;
  className?: string;
  title?: string;
};

export const RoundImage: FC<Props> = ({ src, alt, title, className }) => {
  const ref = useImageOnload((i) => (i.style.opacity = '1'));
  return (
    <img
      ref={ref}
      className={classNames(className, styles.roundImage)}
      src={src}
      alt={alt}
      title={title}
    />
  );
};
