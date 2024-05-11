import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom'
import './App.css'
import Layout from './components/Layout'
import { ROUTES } from './constants/routes'
import Home from './pages/Home'
import About from './pages/About'
import Category from './pages/Category'

function App() {

  return (
    <>
     <BrowserRouter>
          <Routes>
            <Route element={<Layout />}>
            <Route
                path="/"
                element={<Navigate to={ROUTES.HOME} replace />}
              />
              <Route path={ROUTES.HOME} element={<Home />} />
              <Route path={ROUTES.ABOUTUS} element={<About />} />
              <Route path="/category" element={<Category/>} />
            </Route>
          </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
