import { BrowserRouter, Route, Routes, Outlet } from 'react-router-dom'
import { PrivatePages } from '@components'
import { AuthPage, BooksPage, HomePage } from '@pages'

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        {/* PRIVATE ROUTES */}
        <Route path="/" element={<PrivatePages/>}>
          <Route path="home" element={<HomePage />} />
          <Route path="books" element={<BooksPage />} />
        </Route>

        {/* AUTH ROUTES */}
        <Route path="/auth/" element={<div><Outlet/></div>}>
          <Route path="login" element={<AuthPage />}/>
          <Route path="register" element={<p>Register</p>}/>
        </Route>

        {/* 404 Not Found Page */}
        <Route path="*" element={<p>404 no anda nada</p>} />

      </Routes>
    </BrowserRouter>
  )
}

export default Router
