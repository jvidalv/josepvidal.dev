import { useEffect, useState } from 'preact/hooks';
import { StateUpdater } from 'preact/compat';

interface Return<T> {
  ref: StateUpdater<T>;
  isIntersecting: boolean;
}

interface Props {
  rootMargin?: string;
  threshold?: number;
  root?: HTMLElement;
}

const defaultOptions = {
  rootMargin: '100px',
  threshold: 0.8,
};

export const useObservable = <T>(options: Props = {}): Return<T> => {
  const [node, setNode] = useState(null);
  const [isIntersecting, setIsIntersecting] = useState(false);

  useEffect(() => {
    if (node) {
      const handleObserve = (entries: IntersectionObserverEntry[]) => {
        entries.forEach((entry) => {
          setIsIntersecting(entry.isIntersecting);
        });
      };
      const observer: IntersectionObserver = new IntersectionObserver(handleObserve, {
        ...defaultOptions,
        ...options,
      });
      observer.observe(node);
    }
  }, [node]);

  return {
    ref: setNode,
    isIntersecting,
  };
};
