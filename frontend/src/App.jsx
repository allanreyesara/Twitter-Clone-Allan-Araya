import { Route, Routes } from "react-router-dom"


import Sidebar from "./components/common/sidebar"
import RightPanel from "./components/common/RightPanel"

import HomePage from "./pages/auth/home/HomePage"
import ProfilePage from "./pages/profile/ProfilePage"
import SignUpPage from "./pages/auth/signup/SignUpPage"
import LogInPage from "./pages/auth/login/LogInPage"
import NotificationPage from "./pages/notification/NotificationPage"


function App() {
  return (
    <div className="flex max-w-6xl mx-auto">
      <Sidebar />
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/signup' element={<SignUpPage />} />
        <Route path='/login' element={<LogInPage />} />
        <Route path='/notifications' element={<NotificationPage />} />
        <Route path='/profile/:username' element={<ProfilePage />} />
      </Routes>
      <RightPanel />
    </div>
  )
}

export default App
