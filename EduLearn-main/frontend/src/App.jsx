import { Route, Routes } from "react-router-dom"
import { ToastContainer } from "react-toastify"
import NavBar from "./components/NavBar"
import Footer from "./components/footer"
import ErrorPage from "./pages/ErrorPage"
import AboutPage from "./pages/aboutPage"
import HomePage from "./pages/homePage"
import SignUp from "./pages/SignUp"
import LogIn from "./pages/LogIn"
import CourseDetails from "./pages/course_details"
import Assignment from "./pages/assignment"
import ForgotPassword from "./pages/ForgotPassword.jsx"


function App() {
  return (
    <div className="">
      <ToastContainer/>
        <NavBar/>
        <Routes>
          <Route path="/" element={<LogIn/>} />
          <Route path="/about" element={<AboutPage/>} />
          <Route path="/signup" element={<SignUp/>} />
          <Route path="/login" element={<LogIn/>} />
          <Route path="/coursedetails" element={<CourseDetails/>} />
          <Route path="/assignment" element={<Assignment/>} />
          <Route path="/forgot-password" element={<ForgotPassword />} />
          
        </Routes>
        <Footer/>
    </div>
  )
}

export default App
