"use client";

import { createContext, useContext, useState } from "react";

const SizeContext = createContext();

export function SizeProvider({ children }) {
  // number of columns (default 6)
  const [cols, setCols] = useState(13);

  const increase = () => setCols((c) => Math.max(2, c - 1)); // fewer cols = bigger images
  const decrease = () => setCols((c) => Math.min(20, c + 1)); // more cols = smaller images

  return (
    <SizeContext.Provider value={{ cols, increase, decrease }}>
      {children}
    </SizeContext.Provider>
  );
}

export function useSize() {
  return useContext(SizeContext);
}
