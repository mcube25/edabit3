function getDays(date1, date2) {
	const oneDay = 24 * 60 * 60 * 1000; // hours*minutes*seconds*milliseconds

return Math.round(Math.abs((date1-date2) / oneDay));
}