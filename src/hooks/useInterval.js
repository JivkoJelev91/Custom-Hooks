import { useEffect } from "react";

const useInterval = (callback, delay) => {
  useEffect(() => {
    const interval = setInterval(() => {
      callback();
    }, [delay]);
    return () => clearInterval(interval);
  }, [callback, delay]);
};

export default useInterval;
