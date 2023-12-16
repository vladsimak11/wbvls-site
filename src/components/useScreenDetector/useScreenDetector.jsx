import { useEffect, useState } from "react";

export const useScreenDetector = () => {
  const [width, setWidth] = useState(window.innerWidth);

  const handleWindowSizeChange = () => {
    setWidth(window.innerWidth);
  };

  useEffect(() => {
    window.addEventListener("resize", handleWindowSizeChange);

    return () => {
      window.removeEventListener("resize", handleWindowSizeChange);
    };
  }, []);

  const isMobile = width < 767.99;
  const isTablet = width > 767.99;
  const isDesktop = width > 1279.99;

  return { isMobile, isTablet, isDesktop };
};