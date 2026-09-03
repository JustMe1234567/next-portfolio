"use client";

import { useEffect, useState } from "react";

const LoadingScreen = () => {
  const [hidden, setHidden] = useState(false);

  useEffect(() => {
    document.body.style.overflow = "hidden";

    const t1 = setTimeout(() => {
      document.body.style.overflow = "";
    }, 2600);
    const t2 = setTimeout(() => setHidden(true), 2700);

    return () => {
      clearTimeout(t1);
      clearTimeout(t2);
      document.body.style.overflow = "";
    };
  }, []);

  if (hidden) return null;

  return (
    <div className="loader-overlay" aria-hidden="true">
      <div className="loader-glow" />
    </div>
  );
};

export default LoadingScreen;