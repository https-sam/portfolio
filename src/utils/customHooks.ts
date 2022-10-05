import { useEffect } from "react";

export function useOutsideClickDetector(
  mainRef: any,
  action: () => void,
  optionalRef?: any
) {
  useEffect(() => {
    function handleClickOutside(event: any) {
      if (!optionalRef) {
        if (mainRef.current && !mainRef.current.contains(event.target)) {
          action();
        }
      } else {
        if (
          mainRef.current &&
          optionalRef.current &&
          !mainRef.current.contains(event.target) &&
          !optionalRef.current.contains(event.target)
        ) {
          action();
        }
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [mainRef, optionalRef, action]);
}
