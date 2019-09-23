import {useState, useEffect} from "react";

function useCustomFetch(url) {
	const [data, setData] = useState(null);
	const [error, setError] = useState(null);
	const [loading, setLoading] = useState(true);

	async function customFetch(url) {
		try {
			let response = await fetch(url);
			let rData = await response.json();
			setData({rData});
			//set rData as a property to object data
			setLoading(false);
		} catch(e) {
			setError(e);
			setLoading(false);
		}
	}

	useEffect(() => {
		setLoading(true);
		setTimeout(() => {
			if(url) {
				customFetch(url);
			}
		}, 3000)
	}, [url])
	//make a call when u get a new url

	return [data, loading, error];
}

export default useCustomFetch;