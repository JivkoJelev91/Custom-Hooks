/* eslint-disable */
import { useEffect } from 'react';

/**
 * Use mount to execute callback on component mounting.
 *
 * @param {Function} callback
 * @returns {*}
 */
const useMount = callback => {
  useEffect(() => {
    callback();
  }, []);
};

export default useMount;
