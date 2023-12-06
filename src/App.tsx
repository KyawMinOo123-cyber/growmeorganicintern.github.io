import './App.css'
import { BrowserRouter as Router , Routes , Route } from 'react-router-dom'
import Login from './components/auth/Login'
import SignUp from './components/auth/SignUp'
import Page from './components/pages/page'
import Error from './components/Error/error'

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<SignUp />} />
        <Route path='/login' element={<Login />} />
        <Route path='/pages' element={<Page/>} />
        <Route path='*' element={<Error/>} />
      </Routes>
    </Router>
  )
}

export default App
