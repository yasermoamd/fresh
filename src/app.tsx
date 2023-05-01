import { Route, Routes } from 'react-router-dom'
import './app.css'
import { Home } from './pages'

export function App() { 
  return (
    <>
       <Routes>
          <Route index path='/' element={<Home />} />
       </Routes>
    </>
  )
}
