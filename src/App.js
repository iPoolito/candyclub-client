import './App.css'
import React, { lazy, Suspense } from 'react'
import UsersState from './context/Users/UsersState'
import { Switch, BrowserRouter as Router } from 'react-router-dom'
import Header from './components/Layout/Header'
import GlobalLoader from './components/GlobalLoader'
import AuthRoute from './components/routes/AuthRoute'
import PublicRoute from './components/routes/PublicRoute'
import useCart from './Hooks/useCart'
import PrivateRoute from './components/routes/PrivateRoute'

const Home = lazy(() => import('./components/Home'))
const Signup = lazy(() => import('./components/Signup'))
const Login = lazy(() => import('./components/Login'))
const Market = lazy(() => import('./components/Market'))
const Profile = lazy(() => import('./components/Profile'))
const About = lazy(() => import('./components/About'))
const Adress = lazy(() => import('./components/Adress'))
function App() {
  const cart = useCart()

  return (
    <Suspense fallback={<GlobalLoader />}>
      <UsersState>
        <Router>
          <Header {...cart} />
          <Switch>
            <PublicRoute exact path="/">
              <Home />
            </PublicRoute>
            <PublicRoute exact path="/tienda">
              <Market {...cart} />
            </PublicRoute>
            <PublicRoute exact path="/sobre-nosotros" component={About} />
            <AuthRoute exact path="/crear-cuenta" component={Signup} />
            <AuthRoute exact path="/iniciar-sesion" component={Login} />
            <PrivateRoute exact path="/perfil" component={Profile} />
            <PrivateRoute exact path="/perfil-direccion/:id" component={Adress} />
          </Switch>
        </Router>
      </UsersState>
    </Suspense>
  )
}

export default App
