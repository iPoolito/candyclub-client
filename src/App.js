import './App.css'
import { Switch, BrowserRouter as Router, Route } from 'react-router-dom'
import Header from './components/Layout/Header'
import Home from './components/Home'
import UsersState from './context/Users/UsersState'
import Login from './components/Login'
import Signup from './components/Signup'
function App() {
  return (
    <>
      <UsersState>
        <Router>
          <Header />
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/crear-cuenta" component={Signup} />
          </Switch>
        </Router>
      </UsersState>
    </>
  )
}

export default App
