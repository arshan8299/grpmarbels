import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom'
import './App.css'
import Layout from './components/Layout'
import { ROUTES } from './constants/routes'
import Home from './pages/Home'
import About from './pages/About'
import ContactUs from './pages/ContactUs'
import PageNotFound from './pages/PageNotFound'
import FAQs from './pages/FAQs'

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
            <Route path={ROUTES.CONTACTUS} element={<ContactUs />} />
            <Route path={ROUTES.FAQS} element={<FAQs />} />
            <Route path={ROUTES.NOTFOUND} element={<PageNotFound />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
