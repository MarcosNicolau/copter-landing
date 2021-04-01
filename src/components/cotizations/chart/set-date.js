//Checks wheter the date is less than 10. If so it adds a 0 at the start because the api asks it
const getDate = (date) => (date < 10 ? `0${date}` : date);

//Gets the day from seven days ago
const weekInThePast = (date) => {
	date.setDate(date.getDate() - 7);
	const day = date.getDate();
	return getDate(day);
};

const setDate = (state, payload) => {
	const { target, getChartData } = payload;
	const timestamp = target.attributes[1].value;
	const { YEARLY, MONTHLY, WEEKLY } = state.ranges;

	//Get dates
	let date = new Date();
	const year = date.getFullYear();
	const month = getDate(date.getMonth());
	const week = weekInThePast(date);

	if (timestamp === YEARLY) getChartData(`${year}-01-01`, YEARLY);
	if (timestamp === MONTHLY) getChartData(`${year}-${month}-01`, MONTHLY);
	if (timestamp === WEEKLY) getChartData(`${year}-${month}-${week}`, WEEKLY);
	return { ...state };
};

export default setDate;
