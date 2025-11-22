import { useEffect, useRef, useState } from 'react';

interface UseInViewOptions extends IntersectionObserverInit {
  // Trigger only once when element enters view
  triggerOnce?: boolean;
  // Delay before marking as in view (in ms)
  delay?: number;
}

interface UseInViewReturn {
  ref: React.RefObject<HTMLElement | null>;
  isInView: boolean;
}

/**
 * Custom hook to detect if an element is in the viewport
 * @param options - IntersectionObserver options with additional customizations
 * @returns Object containing ref to attach to element and isInView boolean
 * 
 * @example
 * const { ref, isInView } = useInView({ threshold: 0.5, triggerOnce: true });
 * return <div ref={ref}>{isInView ? 'Visible!' : 'Not visible'}</div>;
 */
export function useInView(options: UseInViewOptions = {}): UseInViewReturn {
  const {
    threshold = 0,
    root = null,
    rootMargin = '0px',
    triggerOnce = false,
    delay = 0,
  } = options;

  const ref = useRef<HTMLElement>(null);
  const [isInView, setIsInView] = useState(false);
  const [hasBeenInView, setHasBeenInView] = useState(false);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    // Skip if triggerOnce is true and element has already been in view
    if (triggerOnce && hasBeenInView) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            if (delay > 0) {
              setTimeout(() => {
                setIsInView(true);
                setHasBeenInView(true);
              }, delay);
            } else {
              setIsInView(true);
              setHasBeenInView(true);
            }
          } else if (!triggerOnce) {
            // Only update to false if not triggerOnce mode
            setIsInView(false);
          }
        });
      },
      {
        threshold,
        root,
        rootMargin,
      }
    );

    observer.observe(element);

    // Cleanup
    return () => {
      if (element) {
        observer.unobserve(element);
      }
    };
  }, [threshold, root, rootMargin, triggerOnce, delay, hasBeenInView]);

  return { ref, isInView };
}

