import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { useEffect } from 'react';
import Aos from 'aos';
import Navigation from './components/navigation';
import './styles/style.scss';
import 'aos/dist/aos.css';

const App = () => {
    useEffect(() => Aos.init());
    return (
        <Router>
            <Switch>
                <Route path="/" component={Navigation} />
            </Switch>
        </Router>
    );
};

export default App;
