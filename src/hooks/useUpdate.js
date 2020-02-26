/* eslint-disable */
import { useEffect } from 'react';

/**
 * Use update to execute callback on specified list of dependencies changes.
 *
 * @param {Function} callback
 * @param {Array} deps
 * @returns {*}
 */
const useUpdate = (callback, deps = []) => {
  useEffect(() => {
    callback();
  }, deps);
};

export default useUpdate;
