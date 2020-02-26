import { useState } from 'react';

const useStateForInput = initialValue => {
  const [data, setData] = useState(initialValue);

  return [
    data,
    e => setData(e.target ? e.target.value : e),
    (value) => setData(value || initialValue),
  ];
};

export default useStateForInput;
