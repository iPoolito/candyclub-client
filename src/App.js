import './App.css'
import React, { lazy, Suspense } from 'react'
import UsersState from './context/Users/UsersState'
import { Switch, BrowserRouter as Router, Route } from 'react-router-dom'
import Header from './components/Layout/Header'
import GlobalLoader from './components/GlobalLoader'

const Home = lazy(() => import('./components/Home'))
const Signup = lazy(() => import('./components/Signup'))
const Login = lazy(() => import('./components/Login'))
function App() {
  return (
    <Suspense fallback={<GlobalLoader />}>
      <UsersState>
        <Router>
          <Header />
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/crear-cuenta" component={Signup} />
            <Route exact path="/iniciar-sesion" component={Login} />
          </Switch>
        </Router>
      </UsersState>
    </Suspense>
  )
}

export default App
