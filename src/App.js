import './App.css';
import { AuthProvider } from "./Context";
import { Navigation } from './Components/navigation'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import routes from './config/routes';


const App = () => {
  return (
    <AuthProvider>
      <Router>
        <div>
          <Navigation />
          <Switch>
            {routes.map((route) => (
              <Route key={route.path} path={route.path} exact component={route.component} />
            ))}
          </Switch>
        </div>
      </Router>
    </AuthProvider>
  );
};

export default App;
