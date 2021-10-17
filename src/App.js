import './App.css'
import React, { lazy, Suspense } from 'react'
import UsersState from './context/Users/UsersState'
import { Switch, BrowserRouter as Router } from 'react-router-dom'
import Header from './components/Layout/Header'
import GlobalLoader from './components/GlobalLoader'
import AuthRoute from './components/routes/AuthRoute'
import PublicRoute from './components/routes/PublicRoute'
import PrivateRoute from './components/routes/PrivateRoute'
const Home = lazy(() => import('./components/Home'))
const Signup = lazy(() => import('./components/Signup'))
const Login = lazy(() => import('./components/Login'))
const Market = lazy(() => import('./components/Market'))
function App() {
  return (
    <Suspense fallback={<GlobalLoader />}>
      <UsersState>
        <Router>
          <Header />
          <Switch>
            <PublicRoute exact path="/" component={Home} />
            <PublicRoute exact path="/tienda" component={Market} />
            <AuthRoute exact path="/crear-cuenta" component={Signup} />
            <AuthRoute exact path="/iniciar-sesion" component={Login} />
          </Switch>
        </Router>
      </UsersState>
    </Suspense>
  )
}

export default App
