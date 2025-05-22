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
          Master’s degree in Software Engineering with a thesis on implementing
          an AI pattern recognition system and two published articles in AI.
          Taught technical courses at 6 universities and institutes to over 600
          students for 4 years. Over 7 years of experience as a frontend
          software engineer. Contributed to 15+ projects, ranging from small to
          large-scale systems serving 80,000 users. Collaborated with 7+
          cross-functional teams. Experienced in DevOps and backend development.
          Analyzed 80+ designs to ensure smooth technical integration and
          consistent UI/UX patterns. Known for getting things done with strong
          attention to quality. Currently learning to develop AI systems.
          Experienced in building testing solutions for large-scale systems.
          Strong background in performance optimization, achieving up to 98%
          improvement. Embracing T-shaped learning.
        </Typography>
        <Typography variant="body1" sx={{ mt: 2 }}>
          <Box component="span" sx={{ fontWeight: 'bold', mr: 1 }}>
            Top Skills:
          </Box>
          JavaScript, TypeScript, Angular, React, Vue.
        </Typography>
      </Collapse>
    </Box>
  );
};

export default AboutMe;
