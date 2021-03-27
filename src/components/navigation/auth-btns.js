import { useNavContext } from "../shared/states/nav-context";

const AuthBtns = ({ isMobileNav }) => {
	const {
		state: { loginColor, registerColor },
	} = useNavContext();
	return (
		<div className="flex-row-center button-container">
			<a
				className={isMobileNav ? "button auth auth--light" : loginColor}
				href="https://app.exchangecopter.com/login"
			>
				Acceder
			</a>
			<a
				className={
					isMobileNav
						? "button auth auth--light bg-neutral-1000 text-primary-100"
						: registerColor
				}
				href="https://app.exchangecopter.com/signup"
			>
				Registrate
			</a>
		</div>
	);
};

export default AuthBtns;
