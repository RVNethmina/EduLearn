import { Route, Routes } from "react-router-dom"
import { ToastContainer } from "react-toastify"
import NavBar from "./components/NavBar"
import Footer from "./components/footer"
import ErrorPage from "./pages/ErrorPage"
import AboutPage from "./pages/AboutPage"
import HomePage from "./pages/homePage"
import SignUp from "./pages/SignUp"
import LogIn from "./pages/LogIn"
import InstrcutorDashboard from "./pages/InstrcutorDashboard"
import CourseEditPage from "./pages/CourseEditPage"


function App() {
  return (
    <div className="">
      <ToastContainer/>
        <NavBar/>
        <Routes>
          <Route path="/" element={<InstrcutorDashboard/>} />
          <Route path="/about" element={<AboutPage/>} />
          <Route path="/signup" element={<SignUp/>} />
          <Route path="/login" element={<LogIn/>} />
          
        </Routes>
        <Footer/>
    </div>
  )
}

export default App
