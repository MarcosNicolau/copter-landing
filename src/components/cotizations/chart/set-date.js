//Checks wheter the date is less than 10. If so it adds a 0 at the start because the api asks it
const getDate = (date) => (date < 10 ? `0${date}` : date);

//Gets the day from seven days ago
const weekInThePast = (date) => {
	date.setDate(date.getDate() - 7);
	const day = date.getDate();
	return getDate(day);
};

const setDate = (state, payload) => {
	const timestamp = payload.target.attributes[1].value;
	const ranges = state.ranges;

	//Get dates
	let date = new Date();
	const year = date.getFullYear();
	const month = getDate(date.getMonth() + 1);
	const week = weekInThePast(date);

	if (timestamp === ranges.HISTORIC) {
		return { ...state, date: { timestamp: "2009-01-01", active: ranges.HISTORIC } };
	}
	if (timestamp === ranges.YEARLY)
		return { ...state, date: { timestamp: `${year}-01-01`, active: ranges.YEARLY } };
	if (timestamp === ranges.MONTHLY)
		return { ...state, date: { timestamp: `${year}-${month}-01`, active: ranges.MONTHLY } };
	if (timestamp === ranges.WEEKLY)
		return { ...state, date: { timestamp: `${year}-${month}-${week}`, active: ranges.WEEKLY } };
	return { ...state };
};

export default setDate;
