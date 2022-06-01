
import { Container } from 'react-bootstrap';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import './App.css';
import NavMenu from './components/NavMenu';
import About from './views/About';
import Home from './views/Home';
import Login from './views/Login';
import Post from './views/Post';
import Profile from './views/Profile';
import Setting from './views/Setting';
import SignUp from './views/SignUp';

function App() {
  return (
    <BrowserRouter>
      <NavMenu />
      <Switch>
        <Route exact path='/' component={Home} />
        <Route path='/about' component={About} />
        <Route path='/post' component={Post} />
        <Route path='/setting' component={Setting} />
        <Route path='/profile' component={Profile} />
        <Route path='/login' component={Login} />
        <Route path='/signup' component={SignUp} />
        <Route path='*' render={() => <Container><h1>404 Not Found</h1></Container>} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
