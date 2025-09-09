import React from 'react'
import videoSrc from '../assets/videos/sample_video.mp4'


function CourseContentMEnu() {
  return (
    <div className='module-data'>
        <h1><a href="">Introduction to Data Science</a>/ <span>Module 1: Introduction</span> </h1>

        <div className='module-title'>
            <h1>Module 1: Introduction</h1>
        </div>

        <div>
            <video width="600"  controls>
                <source src={videoSrc} type="video/mp4" />
                Your browser does not support the video tag.
            </video>
        </div>

        <div className='reading-material'>
            <h1>Reading Material</h1>
            <p>Download the cource materials for this module.</p>

            <button>Download PDF</button>
        </div>

        <div className='quiz-assignment'>
            <h1>Quiz</h1>
            <p>Test your knowledge with a short quiz.</p>

            <button>Start Quiz</button>
        </div>

        <div className='assignment'>
            <h1>Assignment</h1>
            <p>Submit your assignment for this module.</p>

            <button>Submit Assignment</button>
        </div>
    </div>
  )
}

export default CourseContentMEnu