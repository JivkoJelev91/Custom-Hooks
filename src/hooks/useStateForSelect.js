import { useState } from 'react';

const useStateForSelect = initialValue => {
  const [data, setData] = useState(initialValue);

  return [data, data => setData(data)];
};

export default useStateForSelect;
