import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import Layout from './components/Layout'
import { ROUTES } from './constants/routes'
import Home from './pages/Home'

function App() {

  return (
    <>
     <BrowserRouter>
          <Routes>
            <Route element={<Layout />}>
              <Route path={ROUTES.HOME} element={<Home />} />
            </Route>
          </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
