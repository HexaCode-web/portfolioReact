import { useEffect, useState } from "react";

const useElementVisibility = (ref) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      const entry = entries[0];
      setIsVisible(entry.isIntersecting);
    });

    observer.observe(ref.current);

    return () => observer.disconnect();
  }, [ref]);

  return isVisible;
};
export default useElementVisibility;
