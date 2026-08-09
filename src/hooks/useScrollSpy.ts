import { useState, useEffect, useRef } from "react";

/**
 * Custom hook to track which section is currently visible on screen.
 *
 * @param categoryIds Array of section IDs to track
 * @param offset Header offset in pixels to trigger early (e.g., sticky nav height)
 * @returns The ID of the currently active section
 */
export function useScrollSpy(categoryIds: string[], offset: number = 100): string {
  const [activeId, setActiveId] = useState<string>(categoryIds[0] || "");
  const observer = useRef<IntersectionObserver | null>(null);

  useEffect(() => {
    // If no categories, do nothing
    if (categoryIds.length === 0) return;

    // Reset active ID if current one is not in the new list
    if (!categoryIds.includes(activeId)) {
      setActiveId(categoryIds[0]);
    }

    const handleIntersect = (entries: IntersectionObserverEntry[]) => {
      // Find the intersecting entry with the highest intersection ratio
      let maxRatio = 0;
      let mostVisibleId = "";

      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          // If a section takes up a significant portion of the screen, or is the first one we see
          if (entry.intersectionRatio > maxRatio) {
            maxRatio = entry.intersectionRatio;
            mostVisibleId = entry.target.id;
          }
        }
      });

      if (mostVisibleId) {
        setActiveId(mostVisibleId);
      }
    };

    // Calculate root margin based on offset
    // This shifts the detection window down by the offset amount
    const rootMargin = `-${offset}px 0px -40% 0px`;

    observer.current = new IntersectionObserver(handleIntersect, {
      root: null,
      rootMargin,
      threshold: [0, 0.1, 0.2, 0.3, 0.4, 0.5, 0.6, 0.7, 0.8, 0.9, 1.0],
    });

    const elements = categoryIds.map((id) => document.getElementById(id)).filter(Boolean) as HTMLElement[];

    elements.forEach((el) => observer.current?.observe(el));

    return () => {
      if (observer.current) {
        observer.current.disconnect();
      }
    };
  }, [categoryIds, offset]);

  return activeId;
}
