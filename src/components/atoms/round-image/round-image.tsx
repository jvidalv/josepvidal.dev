import { FC } from 'preact/compat';
import { h } from 'preact';

type Props = {
  src: string;
  alt?: string;
};

export const RoundImage: FC<Props> = ({ src, alt }) => (
  <img
    className="rounded-full shadow-md w-32 h-32 transition duration-500 transform hover:scale-110"
    src={src}
    alt={alt}
  />
);

RoundImage.defaultProps = {
  alt: 'Just a random image',
};
