import './App.css'
import { Switch, BrowserRouter as Router, Route } from 'react-router-dom'
import Header from './components/Layout/Header'
function App() {
  return (
    <>
      <Router>
        <Header />
        <Switch>
          <Route />
        </Switch>
      </Router>
    </>
  )
}

export default App
