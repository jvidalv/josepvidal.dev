import {useLayoutEffect, useRef} from 'preact/hooks';
import { Ref } from 'preact';

export const useImageOnload = (onLoad: (r: HTMLImageElement) => void): Ref<HTMLImageElement> => {
  const img = useRef<HTMLImageElement>();

  useLayoutEffect(() => {
    const { current } = img;
    if (current) {
      current.onload = () => onLoad(current);
    }
  }, [img.current]);

  return img;
};
