import { Box, Button, Collapse, Divider, Typography } from '@mui/material';
import { useState } from 'react';
import WorkIcon from '@mui/icons-material/Work';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import ExpandLessIcon from '@mui/icons-material/ExpandLess';
import LicenseItem from './LicenseItem';

const LicenseSection = () => {
  const [open, setOpen] = useState(true);

  const handleToggle = () => {
    setOpen(!open);
  };

  const licenses = [
    {
      thumbnail: 'certificate/simple.svgz',
      title: 'Kubernetes',
      issuer: 'Simplilearn',
      issueDate: 'Dec 2024',
      description:
        'Offers a comprehensive overview of Kubernetes, covering its origin, architecture, primary components, and building blocks. It teaches how to set up and access a Kubernetes cluster using Minikube, run applications on the deployed environment, and participate in Kubernetes communities..',
      skills: ['Kubernetes', 'Containers', 'Cloud'],
      credentialUrl:
        'https://drive.google.com/file/d/1f9VTeil7FJ5bgbudYbz849bozPQty0TD/view?usp=sharing',
    },
    {
      thumbnail: 'certificate/simple.svgz',
      title: 'Docker',
      issuer: 'Simplilearn',
      issueDate: 'Dec 2024',
      description:
        'Introduces Docker fundamentals, including installation, containerization, and building Docker images.',
      skills: [
        'Docker',
        'Docker Images',
        'Docker Containers',
        'Docker Swarm',
        'Docker Compose',
      ],
      credentialUrl:
        'https://drive.google.com/file/d/1dTSBF1k3nTYWpjiCtQEyt8P6P_NHc89Q/view?usp=sharing',
    },

    {
      thumbnail: 'certificate/udemy.svg',
      title: 'Python',
      issuer: 'Udemy',
      issueDate: 'Jan 2025',
      description:
        'provides a comprehensive Python programming bootcamp covering foundational concepts to advanced topics, including data structures, OOP, and real-world projects. It is designed for beginners and experienced developers looking to deepen their Python skills.',
      skills: ['Python'],
      credentialUrl:
        'https://drive.google.com/file/d/1ZFeR5TQrGf465kRWWvOnHEcnziahcCvX/view?usp=sharing',
    },
    {
      thumbnail: 'certificate/udemy.svg',
      title: 'Backend REST API with Node JS',
      issuer: 'Udemy',
      issueDate: 'Jan 2025',
      description:
        'provides a fundamental of building a robust RESTFul API with NodeJS based on an efficient N-tier architecture pattern.',
      skills: ['NodeJS'],
      credentialUrl:
        'https://drive.google.com/file/d/1kuQD5JQMurfp-VJ_-I-f1yF6SGeD9dmN/view?usp=sharing',
    },
  ];

  return (
    <Box sx={{ padding: '16px' }}>
      <Box sx={{ display: 'flex', alignItems: 'center' }}>
        <WorkIcon sx={{ marginRight: 1 }} />
        <Typography variant="h5" component="div">
          Licenses & Certifications
        </Typography>
        <Button onClick={handleToggle} sx={{ marginLeft: 'auto' }}>
          {open ? <ExpandLessIcon /> : <ExpandMoreIcon />}
        </Button>
      </Box>
      <Collapse in={open}>
        {licenses.map((license, index) => (
          <>
            <LicenseItem
              key={index}
              thumbnail={license.thumbnail}
              title={license.title}
              issuer={license.issuer}
              issueDate={license.issueDate}
              description={license.description}
              skills={license.skills}
              credentialUrl={license.credentialUrl}
            />
            {index < licenses.length - 1 && (
              <Divider sx={{ backgroundColor: 'rgba(128, 128, 128, 0.5)' }} />
            )}
          </>
        ))}
      </Collapse>
    </Box>
  );
};

export default LicenseSection;
