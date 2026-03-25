import { useRef, useState } from 'react';
import vector00 from "../assets/img/course_details/vector-00.svg";
import vector01 from "../assets/img/course_details/vector-01.svg";
import vector02 from "../assets/img/course_details/vector-02.svg";
import vector03 from "../assets/img/course_details/vector-03.svg";
import vector04 from "../assets/img/course_details/vector-04.svg";
import videoimg from "../assets/img/course_details/depth-5-frame-09.png";
import ins from "../assets/img/course_details/depth-7-frame-08.png";
import '../assets/css/course_details.css';
 



function Tabs({ tabs }) {
  const [active, setActive] = useState(0);
  const tabRefs = useRef([]);

  const onKeyDown = (e) => {
    const count = tabs.length;
    let nextIndex = active;

    switch (e.key) {
      case 'ArrowRight':
        nextIndex = (active + 1) % count;
        break;
      case 'ArrowLeft':
        nextIndex = (active - 1 + count) % count;
        break;
      case 'Home':
        nextIndex = 0;
        break;
      case 'End':
        nextIndex = count - 1;
        break;
      default:
        return;
    }
    e.preventDefault();
    setActive(nextIndex);
    tabRefs.current[nextIndex]?.focus();
  };

  return (
    <section className="tabs">
      <div
        className="tablist"
        role="tablist"
        aria-label="Course tabs"
        aria-orientation="horizontal"
        onKeyDown={onKeyDown}
      >
        {tabs.map((t, i) => {
          const selected = active === i;
          const tabId = `tab-${t.id}`;
          const panelId = `panel-${t.id}`;
          return (
            <button
              key={t.id}
              role="tab"
              aria-selected={selected}
              aria-controls={panelId}
              id={tabId}
              tabIndex={selected ? 0 : -1}
              ref={(el) => (tabRefs.current[i] = el)}
              onClick={() => setActive(i)}
            >
              {t.label}
            </button>
          );
        })}
      </div>

      {tabs.map((t, i) => {
        const selected = active === i;
        const tabId = `tab-${t.id}`;
        const panelId = `panel-${t.id}`;
        return (
          <div
            key={t.id}
            role="tabpanel"
            id={panelId}
            aria-labelledby={tabId}
            hidden={!selected}
          >
            {t.content}
          </div>
        );
      })}
    </section>
  );
}

export default function App() {
  const tabs = [
    {
      id: 'overview',
      label: 'Overview',
      content: (
        <>
          <h2>Course Overview</h2>
          <p>This course provides a comprehensive introduction to data science, covering essential concepts and techniques used in the field. You will learn how to analyze data, build machine learning models, and create insightful visualizations. The course is designed for beginners with no prior experience in data science.</p>
        </>
      ),
    },
    {
      id: 'syllabus',
      label: 'Syllabus',
      content: (
        <>
          <h2>Syllabus</h2>
          <p>Week 1: Introduction to Data Science</p>
        </>
      ),
    },
    {
      id: 'Reviews',
      label: 'Reviews',
      content: (
        <>
          <h2>Reviews</h2>
          <p>Reviews will be displayed here.</p>
        </>
      ),
    },
  ];

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    const q = new FormData(e.currentTarget).get('q');
    console.log('Search:', q);
  };

  return (
    <>
      <a href="#main" className="skip-link">Skip to content</a>

      <header className="site-header">
        <div className="left">
          <a className="brand" href="/">
            <img
              src={vector00}
              alt=""
              aria-hidden="true"
              width="16"
              height="16"
            />
            <span>EduLearn</span>
          </a>

          <nav className="primary-nav" aria-label="Primary">
            <ul className="nav-list">
              <li><a href="/" aria-current="page">Home</a></li>
              <li><a href="/">Courses</a></li>
              <li><a href="/">Instructors</a></li>
            </ul>
          </nav>
        </div>

        <div className="right">
          <div className="header-actions">
            <form role="search" className="search-form" onSubmit={handleSearchSubmit}>
              <label htmlFor="site-search" className="visually-hidden">Search</label>
              <input id="site-search" name="q" type="search" placeholder="Search courses" />
              <button type="submit" aria-label="Search">
                <img
                  src={vector01}
                  alt=""
                  aria-hidden="true"
                  width="24"
                  height="24"
                />
              </button>
            </form>

            <div className="auth">
              <a href="/login">Log in</a>
              <a href="/signup">Sign up</a>
            </div>
          </div>
        </div>
      </header>

      <main id="main">
        <nav className="breadcrumb" aria-label="Breadcrumb">
          <ol>
            <li><a href="/courses">Courses</a></li>
            <li aria-current="page">Introduction to Data Science</li>
          </ol>
        </nav>

        <section className="course-hero">
          <h1>Introduction to Data Science</h1>
          <p className="course-tagline">
            Learn the fundamentals of data science, including data analysis, machine learning, and data visualization techniques.
          </p>
        </section>

        <Tabs tabs={tabs} />
        <h2 className='high'>Course Highlights</h2>
        <ul className="highlights">
          
          <li>
            <img src={vector02} alt="aa"  width="24" height="24" />
            <span>Data Analysis</span>
          </li>
          <li>
            <img src={vector03} alt="" aria-hidden="true" width="24" height="24" />
            <span>Machine Learning</span>
          </li>
          <li>
            <img src={vector04}alt="" aria-hidden="true" width="24" height="24" />
            <span>Data Visualization</span>
          </li>
        </ul>

        <figure className="instructor">
          <img
            src={ins}
            alt="Instructor"
            width="128"
            height="128"
          />
          <figcaption>
            <strong>Dr. Evelyn Reed</strong>
            <span>— Data Science Expert</span>
          </figcaption>
          
        </figure>
        <p>Dr. Reed is a renowned data scientist with over 10 years of experience in the industry. She has worked on numerous projects, ranging from predictive modeling to data-driven decision-making.</p>

        <figure className="sample-content">
          <h3>Sample Content</h3>
          <img
            src={videoimg}
            alt="Course preview screenshot"
          />
          
        </figure>

        <div className="cta">
          <a className="button" href="/signup">Enroll now</a>
        </div>
      </main>

      <footer className="site-footer">
        <div className="footer-links">
          <a href="/">About</a>
          <a href="/">Contact</a>
          <a href="/">Privacy Policy</a>
          <a href="/">Terms of Service</a>
        </div>
        <p>© 2024 EduLearn. All rights reserved.</p>
      </footer>
    </>
  );
}