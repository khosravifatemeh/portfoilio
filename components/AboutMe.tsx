import { Box, Button, Collapse, Typography } from '@mui/material';
import { useState } from 'react';
import PersonIcon from '@mui/icons-material/Person';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import ExpandLessIcon from '@mui/icons-material/ExpandLess';

const AboutMe = () => {
  const [open, setOpen] = useState(true);

  function handleToggle() {
    setOpen(!open);
  }
  return (
    <Box sx={{ padding: '16px' }}>
      <Box sx={{ display: 'flex', alignItems: 'center' }}>
        <PersonIcon sx={{ marginRight: 1 }} />
        <Typography variant="h5" component="div">
          About Me
        </Typography>
        <Button onClick={handleToggle} sx={{ marginLeft: 'auto' }}>
          {open ? <ExpandLessIcon /> : <ExpandMoreIcon />}
        </Button>
      </Box>
      <Collapse in={open}>
        <Typography variant="body1" sx={{ mb: 2, mt: 2 }}>
          Software Engineer with 11+ years of experience — including 7+ years in Frontend Engineering and 4 years teaching programming and technical courses. Holds a Master’s degree in Software Engineering. Skilled in building scalable, high-performance web applications across diverse environments, from startups to enterprise platforms serving 80,000+ users.

Specialized in clean architecture and micro-frontend systems, with a strong focus on maintainability, performance, and robust testing practices such as unit and end-to-end testing. Known for applying UI/UX best practices to enhance user experience and consistency.

Experienced in leading and mentoring developers, establishing coding standards, and collaborating with cross-functional teams to deliver forward-thinking solutions. Strong sense of ownership and commitment to quality.

Proficient in React, Angular, TypeScript, Node.js, SQL, Docker, and CI/CD pipelines.

AI enthusiast with academic experience in advanced AI topics. Master’s thesis involved developing a cancer detection system using AI-based techniques.

Currently open to frontend opportunities in Europe or remote teams globally.
        </Typography>
        <Typography variant="body1" sx={{ mt: 2 }}>
          <Box component="span" sx={{ fontWeight: 'bold', mr: 1 }}>
            Top Skills:
          </Box>
          Angular • React • TypeScript • Node.js • Continuous Integration and Continuous Delivery (CI/CD)
        </Typography>
      </Collapse>
    </Box>
  );
};

export default AboutMe;
