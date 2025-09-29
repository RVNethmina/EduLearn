import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link, useLocation } from 'react-router-dom';
import {
  Box,
  Typography,
  Button,
  Paper,
  Chip,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Container,
  Divider,
  styled
} from '@mui/material';
import {
  BarChart,
  List as ListIcon,
  Campaign,
  Forum,
  Group,
  Settings,
  Add,
  Announcement
} from '@mui/icons-material';
import CourseEvaluationPage from './courseevolutionpage';

const SidebarContainer = styled(Box)(({ theme }) => ({
  width: 320,
  backgroundColor: '#ffffff',
  borderRight: '1px solid #e5e5e5',
  height: '100vh',
  display: 'flex',
  flexDirection: 'column',
}));

const MainContent = styled(Box)(({ theme }) => ({
  flex: 1,
  backgroundColor: '#f9fafb',
  padding: '32px',
}));

const AnnouncementCard = styled(Paper)(({ theme }) => ({
  padding: '24px',
  marginBottom: '24px',
  display: 'flex',
  alignItems: 'flex-start',
  gap: '24px',
  border: '1px solid #e5e5e5',
  '&:hover': {
    boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)',
  },
}));

const DocumentPreview = styled(Box)(({ theme, bgcolor }) => ({
  width: 160,
  height: 96,
  background: bgcolor,
  borderRadius: '8px',
  border: '1px solid #e5e5e5',
  position: 'relative',
  overflow: 'hidden',
  flexShrink: 0,
}));

const DocumentContent = styled(Box)(({ theme }) => ({
  position: 'absolute',
  inset: '12px',
  backgroundColor: 'white',
  borderRadius: '4px',
  boxShadow: '0 1px 3px rgba(0, 0, 0, 0.1)',
  padding: '8px',
}));

const TextLine = styled(Box)(({ theme, width = '100%' }) => ({
  height: '4px',
  backgroundColor: '#d1d5db',
  borderRadius: '2px',
  marginBottom: '4px',
  width: width,
}));

function AppContent() {
  const location = useLocation();
  
  const menuItems = [
    { icon: <BarChart />, text: 'Overview', path: '/', active: false },
    { icon: <ListIcon />, text: 'Content', path: '/content', active: false },
    { icon: <Campaign />, text: 'Announcements', path: '/announcements', active: true },
    { icon: <Forum />, text: 'Discussions', path: '/discussions', active: false },
    { icon: <Group />, text: 'Members', path: '/members', active: location.pathname === '/members' },
  ];
  
  return (
    <Box sx={{ display: 'flex', minHeight: '100vh' }}>
      {/* Sidebar */}
      <SidebarContainer>
        {/* Course Header */}
        <Box sx={{ p: 3, borderBottom: '1px solid #e5e5e5' }}>
          <Typography variant="h6" sx={{ fontWeight: 600, color: '#111827' }}>
            Course Title
          </Typography>
          <Typography variant="body2" sx={{ color: '#6b7280', mt: 0.5 }}>
            Course subtitle
          </Typography>
        </Box>

        {/* Navigation */}
        <Box sx={{ flex: 1, p: 2 }}>
          <List sx={{ p: 0 }}>
            {menuItems.map((item, index) => (
              <ListItem
                key={index}
                component={Link}
                to={item.path}
                sx={{
                  borderRadius: '6px',
                  mb: 0.5,
                  backgroundColor: location.pathname === item.path ? '#eff6ff' : 'transparent',
                  color: location.pathname === item.path ? '#1d4ed8' : '#374151',
                  textDecoration: 'none',
                  '&:hover': {
                    backgroundColor: location.pathname === item.path ? '#eff6ff' : '#f3f4f6',
                  },
                }}
              >
                <ListItemIcon sx={{ minWidth: 36, color: 'inherit' }}>
                  {item.icon}
                </ListItemIcon>
                <ListItemText 
                  primary={item.text}
                  primaryTypographyProps={{
                    fontSize: '14px',
                    fontWeight: location.pathname === item.path ? 500 : 400,
                  }}
                />
              </ListItem>
            ))}
          </List>
        </Box>

        {/* Settings */}
        <Box sx={{ p: 2, borderTop: '1px solid #e5e5e5' }}>
          <ListItem sx={{ borderRadius: '6px', '&:hover': { backgroundColor: '#f3f4f6' } }}>
            <ListItemIcon sx={{ minWidth: 36, color: '#374151' }}>
              <Settings />
            </ListItemIcon>
            <ListItemText 
              primary="Settings"
              primaryTypographyProps={{ fontSize: '14px' }}
            />
          </ListItem>
        </Box>
      </SidebarContainer>

      {/* Main Content */}
      <MainContent>
        {/* Header */}
        <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 4 }}>
          <Typography variant="h3" sx={{ fontWeight: 700, color: '#111827' }}>
            Announcements
          </Typography>
          <Button 
            variant="contained" 
            startIcon={<Add />}
            sx={{
              backgroundColor: '#2563eb',
              '&:hover': { backgroundColor: '#1d4ed8' },
              textTransform: 'none',
              borderRadius: '6px',
            }}
          >
            New announcement
          </Button>
        </Box>

        {/* Drafts Section */}
        <Box sx={{ mb: 6 }}>
          <Typography variant="h4" sx={{ fontWeight: 600, color: '#111827', mb: 3 }}>
            Drafts
          </Typography>
          
          <AnnouncementCard elevation={0}>
            <Box sx={{ flex: 1 }}>
              <Box sx={{ mb: 2 }}>
                <Chip 
                  label="Draft" 
                  size="small"
                  sx={{ 
                    backgroundColor: '#dbeafe', 
                    color: '#1e40af',
                    fontSize: '12px',
                    height: '24px',
                  }}
                />
              </Box>
              <Typography variant="h6" sx={{ fontWeight: 600, color: '#111827', mb: 1 }}>
                Course update on upcoming changes
              </Typography>
              <Typography variant="body2" sx={{ color: '#6b7280' }}>
                Last edited on Jan 1, 2024
              </Typography>
            </Box>
            
            <DocumentPreview bgcolor="linear-gradient(135deg, #fef3c7 0%, #fed7aa 100%)">
              <DocumentContent>
                <Box sx={{ textAlign: 'center', mb: 1 }}>
                  <Typography sx={{ 
                    fontSize: '10px', 
                    fontWeight: 700, 
                    backgroundColor: '#f3f4f6',
                    py: 0.5,
                    borderRadius: '2px',
                  }}>
                    DRAFT
                  </Typography>
                </Box>
                <TextLine />
                <TextLine width="75%" />
                <TextLine width="50%" />
                <TextLine width="67%" />
              </DocumentContent>
            </DocumentPreview>
          </AnnouncementCard>
        </Box>

        {/* Published Section */}
        <Box>
          <Typography variant="h4" sx={{ fontWeight: 600, color: '#111827', mb: 3 }}>
            Published
          </Typography>
          
          {/* First Published Item */}
          <AnnouncementCard elevation={0}>
            <Box sx={{ flex: 1 }}>
              <Box sx={{ mb: 2 }}>
                <Chip 
                  label="Published" 
                  size="small"
                  sx={{ 
                    backgroundColor: '#dcfce7', 
                    color: '#166534',
                    fontSize: '12px',
                    height: '24px',
                  }}
                />
              </Box>
              <Typography variant="h6" sx={{ fontWeight: 600, color: '#111827', mb: 1 }}>
                Course update on upcoming changes
              </Typography>
              <Typography variant="body2" sx={{ color: '#6b7280' }}>
                Published on Jan 1, 2024
              </Typography>
            </Box>
            
            <DocumentPreview bgcolor="linear-gradient(135deg, #ecfdf5 0%, #d1fae5 100%)">
              <DocumentContent>
                <TextLine />
                <TextLine width="80%" />
                <TextLine width="60%" />
                <TextLine width="67%" />
                <TextLine width="80%" />
                {/* Plant decoration */}
                <Box sx={{ 
                  position: 'absolute', 
                  bottom: 4, 
                  right: 4,
                  width: 12,
                  height: 12,
                  backgroundColor: '#4ade80',
                  borderRadius: '50%',
                  opacity: 0.6,
                  '&::before': {
                    content: '""',
                    position: 'absolute',
                    top: -4,
                    left: -4,
                    width: 8,
                    height: 16,
                    backgroundColor: '#22c55e',
                    borderRadius: '50%',
                    transform: 'rotate(45deg)',
                    opacity: 0.4,
                  }
                }} />
              </DocumentContent>
            </DocumentPreview>
          </AnnouncementCard>

          {/* Second Published Item */}
          <AnnouncementCard elevation={0}>
            <Box sx={{ flex: 1 }}>
              <Box sx={{ mb: 2 }}>
                <Chip 
                  label="Published" 
                  size="small"
                  sx={{ 
                    backgroundColor: '#dcfce7', 
                    color: '#166534',
                    fontSize: '12px',
                    height: '24px',
                  }}
                />
              </Box>
              <Typography variant="h6" sx={{ fontWeight: 600, color: '#111827', mb: 1 }}>
                Course update on upcoming changes
              </Typography>
              <Typography variant="body2" sx={{ color: '#6b7280' }}>
                Published on Jan 1, 2024
              </Typography>
            </Box>
            
            <DocumentPreview bgcolor="linear-gradient(135deg, #f0fdfa 0%, #ccfbf1 100%)">
              <DocumentContent>
                <Typography sx={{ 
                  fontSize: '10px', 
                  fontWeight: 700, 
                  textAlign: 'center',
                  mb: 1,
                  color: '#111827'
                }}>
                  Artaud Naturel
                </Typography>
                <Box sx={{ height: '2px', backgroundColor: '#9ca3af', mb: '2px', borderRadius: '1px' }} />
                <Box sx={{ height: '2px', backgroundColor: '#9ca3af', mb: '2px', borderRadius: '1px' }} />
                <Box sx={{ height: '2px', backgroundColor: '#9ca3af', mb: '2px', borderRadius: '1px', width: '80%' }} />
                <Box sx={{ height: '2px', backgroundColor: '#9ca3af', mb: '2px', borderRadius: '1px', width: '60%' }} />
                <Box sx={{ height: '2px', backgroundColor: '#9ca3af', mb: '2px', borderRadius: '1px' }} />
                <Box sx={{ height: '2px', backgroundColor: '#9ca3af', mb: '2px', borderRadius: '1px', width: '80%' }} />
                <Box sx={{ height: '2px', backgroundColor: '#9ca3af', borderRadius: '1px', width: '67%' }} />
              </DocumentContent>
            </DocumentPreview>
          </AnnouncementCard>
        </Box>
      </MainContent>
    </Box>
  );
}

function Announcement() {
  return (
    <Router>
      <Routes>
        <Route path="/members" element={<CourseEvaluationPage />} />
        <Route path="/*" element={<AppContent />} />
      </Routes>
    </Router>
  );
}

export default Announcement;