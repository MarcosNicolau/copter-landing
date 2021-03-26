const AuthBtns = ({ isLight, areButtonsLight }) => {
    return (
        <div className="flex-row-center button-container">
            <a
                className={`button auth ${isLight || areButtonsLight ? 'login-light' : 'login'}`}
                href="https://app.exchangecopter.com/login"
            >
                Acceder
            </a>
            <a
                className={`button auth ${
                    isLight || areButtonsLight ? 'register-light' : 'register'
                }`}
                href="https://app.exchangecopter.com/signup"
            >
                Registrate
            </a>
        </div>
    );
};

export default AuthBtns;
