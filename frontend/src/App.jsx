import { Route, Routes } from "react-router-dom"
import { ToastContainer } from "react-toastify"
import NavBar from "./components/NavBar"
import Footer from "./components/Footer"
import ErrorPage from "./pages/ErrorPage"
import AboutPage from "./pages/aboutPage"
import HomePage from "./pages/HomePage"
import SignUp from "./pages/SignUp"
import LogIn from "./pages/LogIn"
import CourseDetails from "./pages/course_details"
import Assignment from "./pages/assignment"
import Cource_content from "./pages/courseContent"
import Course_creation from "./pages/CourseCreationPage"


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
          <Route path="*" element={<ErrorPage/>} />
          <Route path="/cource-Content-Page" element={<Cource_content/>} /> 
          <Route path="/course-creation" element={<Course_creation/>} />
          
        </Routes>
        <Footer/>
    </div>
  )
}

export default App
