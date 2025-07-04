import ExpandLessIcon from '@mui/icons-material/ExpandLess';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import SchoolIcon from '@mui/icons-material/School';
import { Box, Button, Collapse, Typography } from '@mui/material';
import { useState } from 'react';

interface EducationItemProps {
  level: string;
  major: string;
  university: string;
  startDate: string;
  endDate: string;
  description?: string;
  universityLogo?: string;
  universityUrl?: string;
}

const EducationItem: React.FC<EducationItemProps> = ({
  level,
  major,
  university,
  startDate,
  endDate,
  description,
  universityLogo,
  universityUrl,
}) => (
  <Box sx={{ mb: 2, mt: 2 }}>
    <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
      <Box
        component={universityUrl ? 'a' : 'div'}
        href={universityUrl}
        target="_blank"
        rel="noopener noreferrer"
        sx={{
          display: 'flex',
          cursor: universityUrl ? 'pointer' : 'default',
          '&:hover': {
            opacity: universityUrl ? 0.8 : 1,
          },
        }}
      >
        <Box
          component="img"
          src={universityLogo || 'education/nophoto.png'}
          alt={`${university} logo`}
          sx={{
            width: 48,
            height: 48,
            objectFit: 'contain',
            borderRadius: 1,
          }}
        />
      </Box>
      <Box>
        <Typography variant="h6">
          {level} in {major}
        </Typography>
        <Typography variant="subtitle1" color="text.secondary">
          <Box sx={{ color: 'primary.main' }}>{university}</Box>
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {startDate} - {endDate}
        </Typography>
      </Box>
    </Box>
    {description && (
      <Typography variant="body1" sx={{ mt: 1, ml: 'calc(48px + 16px)' }}>
        {description}
      </Typography>
    )}
  </Box>
);

const Education = () => {
  const [open, setOpen] = useState(true);

  const educations: EducationItemProps[] = [
    {
      level: 'Master',
      major: 'Computer Software Engineering',
      university: 'Kashan University',
      universityUrl: 'https://www.linkedin.com/school/university-of-kashan/',
      universityLogo: 'education/kashan.jpg',

      startDate: 'Sep 2011',
      endDate: 'Jun 2014',
      description: '',
    },
  ];

  return (
    <Box sx={{ padding: '16px' }}>
      <Box sx={{ display: 'flex', alignItems: 'center' }}>
        <SchoolIcon sx={{ marginRight: 1 }} />
        <Typography variant="h5" component="div">
          Education
        </Typography>
        <Button onClick={() => setOpen(!open)} sx={{ marginLeft: 'auto' }}>
          {open ? <ExpandLessIcon /> : <ExpandMoreIcon />}
        </Button>
      </Box>
      <Collapse in={open}>
        {educations.map((edu, index) => (
          <EducationItem key={index} {...edu} />
        ))}
      </Collapse>
    </Box>
  );
};

export default Education;
