import { useState } from 'react';

const useStateForSwitch = initialValue => {
  const [data, setData] = useState(initialValue);

  return [
    data,
    e => setData(e.target ? e.target.checked : e),
    value => setData(value || initialValue),
  ];
};

export default useStateForSwitch;
