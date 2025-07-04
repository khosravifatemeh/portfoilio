import { Box, Button, Collapse, Typography } from '@mui/material';
import { useState } from 'react';
import TranslateIcon from '@mui/icons-material/Translate';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import ExpandLessIcon from '@mui/icons-material/ExpandLess';

interface LanguageItem {
  language: string;
  proficiency: string;
}

const Languages = () => {
  const [open, setOpen] = useState(true);

  const languages: LanguageItem[] = [
    {
      language: 'Persian',
      proficiency: 'Native',
    },
    {
      language: 'English',
      proficiency: 'Professional working proficiency',
    },
    {
      language: 'German',
      proficiency: 'A1 Level',
    },
  ];

  return (
    <Box sx={{ padding: '16px' }}>
      <Box sx={{ display: 'flex', alignItems: 'center' }}>
        <TranslateIcon sx={{ marginRight: 1 }} />
        <Typography variant="h5" component="div">
          Languages
        </Typography>
        <Button onClick={() => setOpen(!open)} sx={{ marginLeft: 'auto' }}>
          {open ? <ExpandLessIcon /> : <ExpandMoreIcon />}
        </Button>
      </Box>
      <Collapse in={open}>
        <Box sx={{ mt: 2 }}>
          {languages.map((item, index) => (
            <Box
              key={index}
              sx={{ display: 'flex', alignItems: 'flex-start', mb: 1 }}
            >
              <Typography variant="body1" sx={{ mr: 1 }}>
                •
              </Typography>
              <Typography variant="body1">
                <Box component="span" sx={{ fontWeight: 'bold' }}>
                  {item.language}
                </Box>
                {' - '}
                {item.proficiency}
              </Typography>
            </Box>
          ))}
        </Box>
      </Collapse>
    </Box>
  );
};

export default Languages;
