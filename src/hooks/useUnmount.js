/* eslint-disable */
import { useEffect } from 'react';

/**
 * Use mount to execute callback on component mounting.
 *
 * @param {Function} callback
 * @returns {*}
 */
const useUnmount = (callback, deps = []) => {
  useEffect(() => callback, deps);
};

export default useUnmount;
