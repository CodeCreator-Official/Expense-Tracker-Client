import { Routes, Route } from 'react-router-dom'
import NotFound from './pages/NotFound'
import Home from './pages/Home'
import ExpensesByCategory from './pages/ExpensesByCategory'
import AllCategories from './pages/AllCategories'
import AuthLayout from './layout/AuthLayout'
import Signup from './pages/auth/Signup'
import Signin from './pages/auth/Signin'

function App() {
  return (
    <Routes>
      <Route element={<AuthLayout />}>
        <Route path='/signup' element={<Signup />} />
        <Route path='/signin' element={<Signin />} />
      </Route>


      <Route path='/' element={<Home />} />
      <Route path='/expense/:name' element={<ExpensesByCategory />} />
      <Route path='/all-categories' element={<AllCategories />} />
      <Route path='*' element={<NotFound />} />
    </Routes>
  )
}

export default App
