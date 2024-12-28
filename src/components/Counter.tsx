import { useState } from "react";

export const Counter = () => {
  const [count, setCount] = useState<number>(10);

  const increaseBy = (value: number) => {
    setCount((current) => current + value);
  };
  return (
    <>
      <h3>
        Contador: <small>{count}</small>
      </h3>

      <div>
        <button
          onClick={() => {
            increaseBy(+1);
          }}
          className="p2 bg-blue-500 rounded-xl w-10 mx-2 test-white hover:bg-blue-700"
        >
          +1
        </button>
        <button
          onClick={() => {
            increaseBy(-1);
          }}
          className="p2 bg-blue-500 rounded-xl w-10 mx-2 test-white hover:bg-blue-700"
        >
          -1
        </button>
      </div>
    </>
  );
};
