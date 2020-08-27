import React from 'react'

import { CartItemContainer, ImageContainer, ItemDetailsContainer } from './cart-item.styles'

const cartItem = ({ item: { imageUrl, price, name, quantity } }) => {
	return (
		<CartItemContainer>
			<ImageContainer src={imageUrl} alt='item'/>
			<ItemDetailsContainer>
				<span>{name}</span>
				<span>{quantity} x ${price}</span>
			</ItemDetailsContainer>
		</CartItemContainer>
	)
}

export default cartItem
