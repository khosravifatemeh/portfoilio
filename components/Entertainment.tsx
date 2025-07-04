import { Box, Button, Collapse, Typography } from '@mui/material';
import { useState } from 'react';
import SportsIcon from '@mui/icons-material/Sports';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import ExpandLessIcon from '@mui/icons-material/ExpandLess';

interface EntertainmentItemProps {
  title: string;
  description: string;
  date?: string;
}

const EntertainmentItem: React.FC<EntertainmentItemProps> = ({
  title,
  description,
  date,
}) => (
  <Box sx={{ mb: 2 }}>
    <Typography variant="h6">{title}</Typography>
    {date && (
      <Typography variant="body2" color="text.secondary">
        {date}
      </Typography>
    )}
    <Typography variant="body1" sx={{ mt: 1 }}>
      {description}
    </Typography>
  </Box>
);

const Entertainment = () => {
  const [open, setOpen] = useState(true);

  const activities: EntertainmentItemProps[] = [
    {
      title: 'Travelling',
      description:
        'Explored Switzerland and Italy, experiencing diverse cultures and stunning landscapes',
      date: 'Fall 2024',
    },
    {
      title: 'Swimming',
      description: 'Professional swimmer with regular training',
    },
  ];

  return (
    <Box sx={{ padding: '16px 16px 0' }}>
      <Box sx={{ display: 'flex', alignItems: 'center', mb: 3 }}>
        <SportsIcon sx={{ marginRight: 1 }} />
        <Typography variant="h5" component="div">
          Entertainment
        </Typography>
        <Button onClick={() => setOpen(!open)} sx={{ marginLeft: 'auto' }}>
          {open ? <ExpandLessIcon /> : <ExpandMoreIcon />}
        </Button>
      </Box>
      <Collapse in={open}>
        {activities.map((activity, index) => (
          <EntertainmentItem key={index} {...activity} />
        ))}
      </Collapse>
    </Box>
  );
};

export default Entertainment;
