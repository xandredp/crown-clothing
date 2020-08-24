import React from 'react'
import StripeCheckout from 'react-stripe-checkout'

const StripeCheckoutButton = ({ price }) => {
	const priceForStripe = price * 100
	const publishableKey = 'pk_test_51HJTvHC97Ipe6JjuvIr40uxdVVSagEZ1QZE9XHTP14FH9ykCmzbIqpmyHONQzcDZqGTNir8CHiRWMGYDEXZZpjnE006xuWzkwt'

	const onToken = token => {
		console.log(token)
		alert('Paymeny Successful')
	}

	return (
		<StripeCheckout
			label='Pay Now'
			name='CRWN Clothing Ltd.'
			billingAddress
			shippingAddress
			image='https://svgshare.com/i/CUz.svg'
			description={`Your total is $${price}`}
			amount={priceForStripe}
			panelLabel='Pay Now'
			token={onToken}
			stripeKey={publishableKey}
		/>
	)
}

export default StripeCheckoutButton
