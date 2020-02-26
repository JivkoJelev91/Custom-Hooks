import { useEffect, useRef } from 'react';

/**
 * User previous value of state property in functional react component.
 *
 * @param {*} value
 * @returns {*}
 */
const usePrevious = value => {
  const ref = useRef();

  useEffect(() => {
    ref.current = value;
  });

  return ref.current;
};

export default usePrevious;
