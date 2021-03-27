import { useNavContext } from "../shared/states/nav-context";
import dropdown from "../../assets/miscellaneous/navigation/dropdown.svg";
import dropdownLight from "../../assets/miscellaneous/navigation/dropdown-light.svg";

const Dropdown = ({ children, type }) => {
	const {
		state: { areImgsLight },
	} = useNavContext();
	return (
		<div className="nav__dropdown">
			{type}
			<img
				src={areImgsLight ? dropdownLight : dropdown}
				alt="dropdown"
				className="nav__dropdown__img"
			/>
			<ul className="nav__dropdown__list bg-neutral-920">{children}</ul>
		</div>
	);
};

export default Dropdown;
