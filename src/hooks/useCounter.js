import { useState } from 'react';

const useCounter = (initialCount, { tick } = { tick: 1 }) => {
  const [counter, setCounter] = useState(initialCount);

  return {
    value: counter,
    setValue: e => setCounter(e.target ? Number(e.target.value) : e),
    increase: () => setCounter(prevCount => prevCount + tick),
    decrease: () =>
      setCounter(prevCount => (prevCount > 0 ? prevCount - tick : prevCount)),
    reset: () => setCounter(initialCount),
  };
};

export default useCounter;
