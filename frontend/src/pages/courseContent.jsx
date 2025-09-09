import { useState } from 'react'
import SidePanel from '../components/CourseContentSidePanel'
import CourseContent from '../components/CourseContentMEnu'


function Cource_content() {
  return (
   <section className='course_content-sec'>
    <div className ="side-panel-section">
      <SidePanel/>
    </div>
    <div className='content-section'>
      <CourseContent/>
    </div>
    
   </section>
  )

}

export default Cource_content
