import { useEffect, useMemo, useState } from 'preact/hooks';
import { StateUpdater } from 'preact/compat';

interface Props {
  rootMargin?: string;
  threshold?: number;
  root?: HTMLElement;
}

const defaultOptions = {
  rootMargin: '100px',
  threshold: 0.8,
};

export const useIntersectionObserver = <T>(options?: Props): [ setNode : StateUpdater<T>, isIntersecting : boolean, hasIntersected : boolean] => {
  const [node, setNode] = useState(null);
  const [isIntersecting, setIsIntersecting] = useState(false);
  const [hasIntersected, setHasIntersected] = useState(false);
  const memoizedOptions = useMemo(() => options ?? {}, [options])

  useEffect(() => {
    if (node) {
      const handleObserve = (entries: IntersectionObserverEntry[]) => {
        entries.forEach((entry) => {
          setIsIntersecting(entry.isIntersecting);
        });
      };
      const observer: IntersectionObserver = new IntersectionObserver(handleObserve, {
        ...defaultOptions,
        ...memoizedOptions,
      });
      observer.observe(node);

      return () => {
        observer.disconnect()
      }
    }
  }, [node, memoizedOptions]);

  useEffect(() =>{
    if(!hasIntersected && isIntersecting){
      setHasIntersected(true)
    }
  }, [isIntersecting, hasIntersected, setHasIntersected])

  return [setNode, isIntersecting, hasIntersected]
};
