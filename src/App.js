import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './scss/style.scss';



const loading = (
  <div className="pt-3 text-center">
    <div className="sk-spinner sk-spinner-pulse"></div>
  </div>
)

// Containers
const TheLayout = React.lazy(() => import('./containers/TheLayout'));

// Pages
const Login = React.lazy(() => import('./views/pages/login/Login'));
const Register = React.lazy(() => import('./views/pages/register/Register'));
const HomePage = React.lazy(() => import('./views/pages/page404/Header'));
const Page500 = React.lazy(() => import('./views/pages/page500/Page500'));
// const HomePage=React.lazy(() => import('./views/pages/Home/HomePage'));

class App extends Component {

  render() {
    return (
      <BrowserRouter>
      <React.Suspense fallback={loading}>
        <Switch>
        {/* <Route exact path="/" name="Home Page" render={props => <HomePage {...props}/>}  /> */}
          <Route exact path="/login" name="Login Page" render={props => <Login {...props}/>} />
          <Route exact path="/register" name="Register Page" render={props => <Register {...props}/>} />
          <Route exact path="/" name="Home Page" render={props => <HomePage {...props}/>} />
          <Route exact path="/500" name="Page 500" render={props => <Page500 {...props}/>} />
          <Route exact path="/dashboard" name="Home" render={props => <TheLayout {...props}/>} />
         
        </Switch>
      </React.Suspense>
  </BrowserRouter>
    );
  }
}

export default App;
