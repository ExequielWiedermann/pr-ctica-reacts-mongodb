import { useEffect, useState } from 'react';
import axios from axios;

const useGetProduct = () => {
    const [products, setProducts] = useState([]);

	useEffect(async () =>{
		const response = await axios(API);
		setProducts(response.data);
	}, [])
};

export default useGetProduct;