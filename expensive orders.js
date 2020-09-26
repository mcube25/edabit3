const expensiveOrders = (orders, cost) => {
	for (let [k, v] of Object.entries(orders)) {
		if (v <= cost) delete orders[k];
	}
	return orders;
}