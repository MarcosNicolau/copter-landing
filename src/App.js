import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Navigation from './components/navigation';
import './styles/style.scss';

const App = () => {
    return (
        <Router>
            <div className="container">
                <Switch>
                    <Route path="/" component={Navigation} />
                </Switch>
            </div>
        </Router>
    );
};

export default App;
