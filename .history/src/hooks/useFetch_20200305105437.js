import { useCallback, useState } from "react";
import { useUpdate } from ".";
import axiosInstance from "../redux/actions/axios-instance";

const useFetch = (url, params = {}) => {
  const [data, setData] = useState(null);

  const fetch = useCallback(async () => {
    if (url) {
      const res = await axiosInstance.get(url, {
        params
      });

      setData(res);
    }
  }, [params, url]);

  // fetch data when URL is updated
  useUpdate(() => {
    fetch();
  }, [url]);

  return {
    data,
    refetch: fetch
  };
};

export default useFetch;
