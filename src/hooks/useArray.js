import { useState, useCallback } from "react";

/**
 * useArray hook
 *
 * @param {array} initial
 */
const useArray = initial => {
  const [value, setValue] = useState(initial);
  return {
    value,
    setValue,
    add: useCallback(a => setValue(v => [...v, a]), []),
    clear: useCallback(() => setValue(() => []), []),
    removeByElement: useCallback(
      ele =>
        setValue(arr =>
          arr.filter(v => (typeof v === "object" ? v[ele] !== ele : v !== ele))
        ),
      []
    ),
    removeIndex: useCallback(
      index => setValue(arr => arr.filter((v, i) => i !== index)),
      []
    )
  };
};

export default useArray;
