import { useCallback, useMemo } from 'react';

const useQueryParams = (location, history) => {
  const query = useMemo(() => new URLSearchParams(location.search), [location.search])

  const setQueryParams = useCallback(
    params => {
      history.push({
        pathname: location.pathname,
        search: '?' + new URLSearchParams(params).toString()
      });
    },
    [history, location.pathname]
  );
  return {
    setQueryParams,
    query
  };
};

export default useQueryParams;
