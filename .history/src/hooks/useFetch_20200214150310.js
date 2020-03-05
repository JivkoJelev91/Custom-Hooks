import { useCallback, useState } from 'react';
import axiosInstance from '../redux/actions/axios-instance';
import { useMount, useUpdate } from '.';

const useFetch = (url, params = {}) => {
	const [ data, setData ] = useState(null);

	const fetch = useCallback(
		async () => {
			if (url) {
				const res = await axiosInstance.get(url, {
					params
				});

				setData(res);
			}
		},
		[ params, url ]
	);

	// fetch data when URL is updated
	useUpdate(
		() => {
			fetch();
		},
		[ url ]
	);

	useMount(fetch);

	return {
		data,
		refetch: fetch
	};
};

export default useFetch;
