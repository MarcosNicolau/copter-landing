import { Link } from 'react-router-dom';
import dropdown from '../../../assets/miscellaneous/navigation/dropdown.svg';
import dropdownLight from '../../../assets/miscellaneous/navigation/dropdown-light.svg';

const Dropdown = ({ children, type, isLight }) => {
    return (
        <div className="nav__dropdown">
            <Link>
                {type}{' '}
                <img
                    src={isLight ? dropdownLight : dropdown}
                    alt="dropdown"
                    className="nav__dropdown__img"
                />
            </Link>
            <ul className="nav__dropdown__list bg-neutral-920">{children}</ul>
        </div>
    );
};

export default Dropdown;
