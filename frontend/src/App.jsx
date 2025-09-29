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
import ActivityPage from "./pages/ActivityPage"
import PaymentHistory from "./pages/PaymentHistory"
import UserProfile from "./pages/user-profile"
import UserPasswordReset from "./pages/user-password-reset"


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
          <Route path="/coursedetails" element={<CourseDetails/>} />
          <Route path="/assignment" element={<Assignment/>} />
          <Route path="/activity" element={<ActivityPage />} />
          <Route path="/payment-history" element={<PaymentHistory />} />
          <Route path="/user-profile" element={<UserProfile/>} />
          <Route path="/user-password_reset" element={<UserPasswordReset/>} />          
        </Routes>
        <Footer/>
    </div>
  )
}

export default App
