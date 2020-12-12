import { useEffect, useState } from 'preact/hooks';
import { StateUpdater } from 'preact/compat';

export const useObservable = () : [ StateUpdater<HTMLElement>, boolean] => {
  const [node, setNode] = useState(null);
  const [isIntersecting, setIsIntersecting] = useState(false)
  useEffect(() => {
    if (node) {
      const handleObserve = (entries) => {
        entries.forEach(entry => {
          setIsIntersecting(entry.isIntersecting)
        })
      };
      const options = {
        rootMargin: '400px',
        threshold: 0.8,
      };
      const observer = new IntersectionObserver(handleObserve, options);
      observer.observe(node);
    }
  }, [node]);

  return [setNode, isIntersecting];
};
