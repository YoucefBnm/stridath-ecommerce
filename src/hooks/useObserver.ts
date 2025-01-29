import { useEffect, useRef } from "react";

export function useObserver(
  allLoaded: boolean,
  loadMore: () => void,
  itemsLength: number
) {
  const observerRef = useRef(null);
  useEffect(() => {
    const { current } = observerRef;
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !allLoaded && itemsLength > 0) {
          loadMore();
        }
      },
      { threshold: 1 }
    );

    if (current) {
      observer.observe(current);
    }

    return () => {
      if (current) {
        observer.unobserve(current);
      }
    };
  });

  return observerRef;
}
