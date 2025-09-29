import { Route, Routes } from "react-router-dom"
import { ToastContainer } from "react-toastify"
import NavBar from "./components/NavBar"
import Footer from "./components/footer"
import ErrorPage from "./pages/ErrorPage"
import AboutPage from "./pages/aboutPage"
import HomePage from "./pages/homePage"
import SignUp from "./pages/SignUp"
import LogIn from "./pages/LogIn"
import ProgressTracking from "./pages/ProgressTracking"
import ContentUpload from "./pages/ContentUploadPage"



function App() {
  return (
    <div className="">
      <ToastContainer/>
        <NavBar/>
        <Routes>
          <Route path="/" element={<HomePage/>} />
          <Route path="/about" element={<AboutPage/>} />
          <Route path="/signup" element={<SignUp/>} />
          <Route path="/login" element={<LogIn/>} />
          <Route path="/progress" element={<ProgressTracking/>} />
          <Route path="/contentupload" element={<ContentUpload/>} />
          <Route path="/error" element={<ErrorPage/>} />
          
        </Routes>
        <Footer/>
    </div>
  )
}

export default App
