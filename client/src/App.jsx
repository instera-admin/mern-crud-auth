import { BrowserRouter, Routes, Route } from "react-router-dom";
import { AuthProvider } from "./context/AuthContext";

import LoginPage from "./pages/LoginPage.jsx";

function App(props) {
  return (
    <AuthProvider>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<h1>Home Page</h1>} />
          <Route path='/login' element={<LoginPage />} />
          <Route path='/register' element={<h1>Register</h1>} />
          <Route path='/tasks' element={<h1>Tasks</h1>} />
          <Route path='/add-task' element={<h1>New tasks</h1>} />
          <Route path='/task/:id' element={<h1>Update tasks</h1>} />
          <Route path='/profile' element={<h1>Profile</h1>} />
        </Routes>
      </BrowserRouter>
    </AuthProvider>
  )
}

export default App;