import { Route, Routes } from 'react-router-dom'
import './app.css'
import { Home, Feed, Signin, Signup } from './pages' 

export function App() { 
  return (
    <>
       <Routes>
          <Route index path='/' element={<Home />} />
          <Route index path='/feed' element={<Feed />} />
          <Route index path='/signin' element={<Signin />} />
          <Route index path='/signup' element={<Signup />} />
       </Routes>
    </>
  )
}
