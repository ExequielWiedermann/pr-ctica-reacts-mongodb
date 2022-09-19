import React, { useState } from 'react';
import '../styles/ProductItem.scss';

const ProductItem = () => {
	//State va a trabajar con un arreglo
	const [cart, setCart] = useState([]);
	const handleClick = () =>{
		setCart([]);
	}

	return (
		<div className="ProductItem">
			<img src={product.images[0]} alt={product.title} />
			<div className="product-info">
				<div>
					<p>${product.price}</p>
					<p>{product.title}</p>
				</div>
				<figure onClick={handleClick}>
					<img src={addToCart} alt="" />
				</figure>
			</div>
		</div>
	);
}

export default ProductItem;
