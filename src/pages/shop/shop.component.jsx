import React from 'react';

import CollectionsOverview from '../../components/collections-overview/collections-overview.component'

const ShopPage = ({ collections }) => {
	return (
		<div className="shopPage">
			<CollectionsOverview />
		</div>
	)
}

export default ShopPage;