import { useEffect, useRef } from 'preact/hooks';
import { Ref } from 'preact';

export const useImageOnload = (onLoad: (r: HTMLImageElement) => void): Ref<HTMLImageElement> => {
  const img = useRef<HTMLImageElement>();

  useEffect(() => {
    const { current } = img;
    if (current) {
      current.onload = () => onLoad(current);
    }
  }, [img]);

  return img;
};
