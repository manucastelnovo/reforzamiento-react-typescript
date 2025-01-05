import { useState } from "react";

export const useCounter = () => {
  const [count, setCount] = useState<number>(10);

  const increaseBy = (value: number) => {
    setCount((current) => current + value);
  };

  return {
    // Properties
    count,

    // Actions
    increaseBy,
  };
};
