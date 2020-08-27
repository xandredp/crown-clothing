import React from 'react'
import { connect } from 'react-redux'
import { createStructuredSelector } from 'reselect'
import { withRouter } from 'react-router-dom'

import CartItem from '../cart-item/cart-item.component'
import { selectCartItems } from '../../redux/cart/cart.selectors'
import { toggleCartHidden } from '../../redux/cart/cart.actions'
import { CartDropdownContainer, CartItemsContainer, EmptyMessageContainer, CustomButtonContainer } from './cart-dropdown.styles'

const CartDropdown = ({ cartItems, history, dispatch }) => {
	return (
		<CartDropdownContainer>
			<CartItemsContainer>
				{
					cartItems.length ?
						( cartItems.map(cartItem => <CartItem key={cartItem.id} item={cartItem} />) )
					:
						( <EmptyMessageContainer>Your cart is empty</EmptyMessageContainer> )
				}
			</CartItemsContainer>
			<CustomButtonContainer
				onClick={ () => {
					history.push('/checkout');
					dispatch(toggleCartHidden());
				}}
			>
				Go To Checkout
			</CustomButtonContainer>
		</CartDropdownContainer>
	)
}

const mapStateToProps = createStructuredSelector({
	cartItems: selectCartItems
})

export default withRouter(connect(mapStateToProps, null)(CartDropdown))
