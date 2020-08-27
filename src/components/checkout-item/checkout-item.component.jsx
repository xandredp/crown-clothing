import React from 'react'
import { connect } from 'react-redux'
import { clearItem, addItem, removeItem } from '../../redux/cart/cart.actions'

import { CheckoutItemContainer, ItemImageContainer, TextContainer, QuantityContainer, RemoveButton } from './checkout-item.styles'

const CheckoutItem = ({ cartItem, clearItem, removeItem, addItem }) => {
const { name, imageUrl, price, quantity } = cartItem
	return (
		<CheckoutItemContainer>
			<ItemImageContainer>
				<img src={imageUrl} alt='item'></img>
			</ItemImageContainer>
			<TextContainer>{name}</TextContainer>
			<QuantityContainer>
				<div onClick={() => removeItem(cartItem)}>&#10094;</div>
				<span>{quantity}</span>
				<div onClick={() => addItem(cartItem)}>&#10095;</div>
			</QuantityContainer>
			<TextContainer>${price}</TextContainer>
			<RemoveButton onClick={() => clearItem(cartItem)}>&#10005;</RemoveButton>
		</CheckoutItemContainer>
	)
}

const mapDispatchToProps = dispatch => ({
	clearItem: item => dispatch(clearItem(item)),
	addItem: item => dispatch(addItem(item)),
	removeItem: item => dispatch(removeItem(item))
})

export default connect(null, mapDispatchToProps)(CheckoutItem)
