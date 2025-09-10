import React from 'react';

function CourseEvaluationPage() {
  const students = [
    { name: 'Sophia Clark', assignment: 'Project 1', submissionDate: '2024-03-15', status: 'Submitted', grade: '85/100' },
    { name: 'Ethan Miller', assignment: 'Project 1', submissionDate: '2024-03-15', status: 'Submitted', grade: '92/100' },
    { name: 'Olivia Davis', assignment: 'Project 1', submissionDate: '2024-03-15', status: 'Submitted', grade: '78/100' },
    { name: 'Liam Wilson', assignment: 'Project 1', submissionDate: '2024-03-15', status: 'Submitted', grade: '95/100' },
    { name: 'Ava Taylor', assignment: 'Project 1', submissionDate: '2024-03-15', status: 'Submitted', grade: '88/100' },
  ];

  const headerStyle = {
    backgroundColor: '#ffffff',
    borderBottom: '1px solid #e5e7eb',
    boxShadow: '0 1px 3px rgba(0, 0, 0, 0.1)',
    padding: '16px 0',
  };

  const navStyle = {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    maxWidth: '1200px',
    margin: '0 auto',
    padding: '0 24px',
  };

  const logoStyle = {
    display: 'flex',
    alignItems: 'center',
    gap: '8px',
    fontSize: '18px',
    fontWeight: '600',
    color: '#000000',
  };

  const navLinksStyle = {
    display: 'flex',
    alignItems: 'center',
    gap: '32px',
  };

  const linkStyle = {
    color: '#6b7280',
    textDecoration: 'none',
    fontSize: '14px',
    fontWeight: '500',
  };

  const activeLinkStyle = {
    ...linkStyle,
    color: '#1976d2',
    fontWeight: '600',
  };

  const containerStyle = {
    maxWidth: '1200px',
    margin: '0 auto',
    padding: '32px 24px',
  };

  const tableContainerStyle = {
    border: '1px solid #e5e7eb',
    borderRadius: '8px',
    overflow: 'hidden',
    backgroundColor: '#ffffff',
    marginBottom: '24px',
  };

  const tableStyle = {
    width: '100%',
    borderCollapse: 'collapse',
  };

  const thStyle = {
    backgroundColor: '#f9fafb',
    padding: '16px',
    textAlign: 'left',
    fontWeight: '600',
    color: '#374151',
    fontSize: '14px',
    borderBottom: '1px solid #e5e7eb',
  };

  const tdStyle = {
    padding: '16px',
    borderBottom: '1px solid #f3f4f6',
    fontSize: '14px',
  };

  const submittedChipStyle = {
    backgroundColor: '#f3f4f6',
    color: '#374151',
    padding: '4px 12px',
    borderRadius: '16px',
    fontSize: '12px',
    fontWeight: '500',
    display: 'inline-block',
  };

  const buttonStyle = {
    padding: '8px 16px',
    border: 'none',
    borderRadius: '6px',
    fontSize: '14px',
    fontWeight: '500',
    cursor: 'pointer',
    textDecoration: 'none',
    display: 'inline-block',
  };

  const primaryButtonStyle = {
    ...buttonStyle,
    backgroundColor: '#2563eb',
    color: '#ffffff',
  };

  const secondaryButtonStyle = {
    ...buttonStyle,
    backgroundColor: 'transparent',
    color: '#6b7280',
    border: '1px solid #d1d5db',
  };

  const viewButtonStyle = {
    ...buttonStyle,
    backgroundColor: 'transparent',
    color: '#1976d2',
    padding: '4px 8px',
    minWidth: 'auto',
  };

  const cardStyle = {
    border: '1px solid #e5e7eb',
    borderRadius: '8px',
    padding: '24px',
    backgroundColor: '#ffffff',
    boxShadow: 'none',
  };

  const gridStyle = {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
    gap: '24px',
  };

  const footerStyle = {
    marginTop: '80px',
    paddingTop: '40px',
    borderTop: '1px solid #e5e7eb',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    color: '#6b7280',
  };

  const footerLinksStyle = {
    display: 'flex',
    gap: '32px',
  };

  const footerLinkStyle = {
    color: '#6b7280',
    textDecoration: 'none',
    fontSize: '14px',
  };

  return (
    <div>
      {/* Header */}
      <header style={headerStyle}>
        <nav style={navStyle}>
          <div style={logoStyle}>
            <span style={{ fontSize: '20px' }}>🎓</span>
            EduLearn
          </div>
          
          <div style={navLinksStyle}>
            <a href="#" style={activeLinkStyle}>Home</a>
            <a href="#" style={linkStyle}>Courses</a>
            <a href="#" style={linkStyle}>Calendar</a>
            <a href="#" style={linkStyle}>Messages</a>
            
            <div style={{ position: 'relative', marginLeft: '16px' }}>
              <span style={{ fontSize: '20px', color: '#6b7280' }}>🔔</span>
              <span style={{
                position: 'absolute',
                top: '-2px',
                right: '-2px',
                width: '8px',
                height: '8px',
                backgroundColor: '#ef4444',
                borderRadius: '50%',
              }}></span>
            </div>
            
            <div style={{
              width: '32px',
              height: '32px',
              borderRadius: '50%',
              backgroundColor: '#f3f4f6',
              backgroundImage: 'url(https://images.unsplash.com/photo-1494790108755-2616b332c5ae?w=32&h=32&fit=crop&crop=face)',
              backgroundSize: 'cover',
              backgroundPosition: 'center',
            }}></div>
          </div>
        </nav>
      </header>

      {/* Main Content */}
      <main style={containerStyle}>
        {/* Page Header */}
        <div style={{ marginBottom: '32px' }}>
          <h1 style={{ 
            fontSize: '36px', 
            fontWeight: '700', 
            color: '#111827', 
            margin: '0 0 8px 0' 
          }}>
            Course Evaluation
          </h1>
          <p style={{ color: '#6b7280', margin: '0', fontSize: '16px' }}>
            Course: <span style={{ color: '#1976d2' }}>Introduction to Web Development</span>
          </p>
        </div>

        {/* Student Submissions Section */}
        <section style={{ marginBottom: '48px' }}>
          <h2 style={{ 
            fontSize: '24px', 
            fontWeight: '600', 
            color: '#111827', 
            marginBottom: '24px' 
          }}>
            Student Submissions
          </h2>
          
          <div style={tableContainerStyle}>
            <table style={tableStyle}>
              <thead>
                <tr>
                  <th style={thStyle}>Student Name</th>
                  <th style={thStyle}>Assignment</th>
                  <th style={thStyle}>Submission Date</th>
                  <th style={thStyle}>Status</th>
                  <th style={thStyle}>Grade</th>
                  <th style={thStyle}>Comments</th>
                </tr>
              </thead>
              <tbody>
                {students.map((student, index) => (
                  <tr key={index} style={{
                    '&:hover': { backgroundColor: '#f9fafb' }
                  }}>
                    <td style={tdStyle}>
                      <span style={{ fontWeight: '500', color: '#111827' }}>
                        {student.name}
                      </span>
                    </td>
                    <td style={tdStyle}>
                      <a href="#" style={{ 
                        color: '#1976d2', 
                        textDecoration: 'none' 
                      }}>
                        {student.assignment}
                      </a>
                    </td>
                    <td style={tdStyle}>
                      <a href="#" style={{ 
                        color: '#1976d2', 
                        textDecoration: 'none' 
                      }}>
                        {student.submissionDate}
                      </a>
                    </td>
                    <td style={tdStyle}>
                      <span style={submittedChipStyle}>
                        {student.status}
                      </span>
                    </td>
                    <td style={tdStyle}>
                      <span style={{ fontWeight: '600', color: '#374151' }}>
                        {student.grade}
                      </span>
                    </td>
                    <td style={tdStyle}>
                      <button style={viewButtonStyle}>
                        View
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Action Buttons */}
          <div style={{ display: 'flex', justifyContent: 'flex-end', gap: '16px' }}>
            <button style={secondaryButtonStyle}>
              Release Grades
            </button>
            <button style={primaryButtonStyle}>
              Download Grades
            </button>
          </div>
        </section>

        {/* Class Performance Section */}
        <section style={{ marginBottom: '48px' }}>
          <h2 style={{ 
            fontSize: '24px', 
            fontWeight: '600', 
            color: '#111827', 
            marginBottom: '24px' 
          }}>
            Class Performance
          </h2>
          
          <div style={gridStyle}>
            <div style={cardStyle}>
              <h3 style={{ 
                fontSize: '18px', 
                fontWeight: '500', 
                color: '#6b7280', 
                margin: '0 0 8px 0' 
              }}>
                Average Grade
              </h3>
              <div style={{ 
                fontSize: '48px', 
                fontWeight: '700', 
                color: '#111827',
                margin: '0'
              }}>
                86.6
              </div>
            </div>
            
            <div style={cardStyle}>
              <h3 style={{ 
                fontSize: '18px', 
                fontWeight: '500', 
                color: '#6b7280', 
                margin: '0 0 8px 0' 
              }}>
                Highest Grade
              </h3>
              <div style={{ 
                fontSize: '48px', 
                fontWeight: '700', 
                color: '#111827',
                margin: '0'
              }}>
                95
              </div>
            </div>
            
            <div style={cardStyle}>
              <h3 style={{ 
                fontSize: '18px', 
                fontWeight: '500', 
                color: '#6b7280', 
                margin: '0 0 8px 0' 
              }}>
                Lowest Grade
              </h3>
              <div style={{ 
                fontSize: '48px', 
                fontWeight: '700', 
                color: '#111827',
                margin: '0'
              }}>
                78
              </div>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer style={footerStyle}>
          <div style={footerLinksStyle}>
            <a href="#" style={footerLinkStyle}>Terms of Service</a>
            <a href="#" style={footerLinkStyle}>Privacy Policy</a>
            <a href="#" style={footerLinkStyle}>Contact Us</a>
          </div>
          <div style={{ fontSize: '14px' }}>
            @2024 EduLearn. All rights reserved.
          </div>
        </footer>
      </main>
    </div>
  );
}

export default CourseEvaluationPage;