import './App.css'
import React, { lazy, Suspense } from 'react'
import UsersState from './context/Users/UsersState'
import { ChakraProvider } from '@chakra-ui/react'

import { Switch, BrowserRouter as Router } from 'react-router-dom'
import Header from './components/Layout/Header'
import GlobalLoader from './components/GlobalLoader'
import AuthRoute from './components/routes/AuthRoute'
import PublicRoute from './components/routes/PublicRoute'
import useCart from './Hooks/useCart'
import PrivateRoute from './components/routes/PrivateRoute'
import AdminRoute from './components/routes/AdminRoute'

const Home = lazy(() => import('./components/Home'))
const Signup = lazy(() => import('./components/Signup'))
const Login = lazy(() => import('./components/Login'))
const Market = lazy(() => import('./components/Market'))
const Profile = lazy(() => import('./components/Profile'))
const About = lazy(() => import('./components/About'))
const Adress = lazy(() => import('./components/Adress'))
const CreateProduct = lazy(() => import('./components/CreateProduct.js'))
const CheckOut = lazy(() => import('./components/CheckOut'))
function App() {
  const cart = useCart()

  return (
    <ChakraProvider>
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
              <PrivateRoute exact path="/pagar">
                <CheckOut {...cart} />
              </PrivateRoute>
              <PrivateRoute exact path="/perfil-direccion/:id" component={Adress} />
              <AdminRoute exact path="/crear-producto" component={CreateProduct} />
            </Switch>
          </Router>
        </UsersState>
      </Suspense>
    </ChakraProvider>
  )
}

export default App
