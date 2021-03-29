import { useNavContext } from "../shared/states/nav-context";

const Dropdown = ({ children, type }) => {
	const {
		state: { dropdown },
	} = useNavContext();
	return (
		<div className="nav__dropdown">
			{type}
			<img src={dropdown} alt="dropdown" className="nav__dropdown__img" />
			<ul className="nav__dropdown__list bg-neutral-920">{children}</ul>
		</div>
	);
};

export default Dropdown;
