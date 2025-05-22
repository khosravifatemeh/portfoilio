import { Box, Typography, Card, CardMedia, Chip, Divider } from '@mui/material';
import { useState } from 'react';
import LockIcon from '@mui/icons-material/Lock';
import Modal from '@mui/material/Modal';

interface ProjectItemProps {
  title: string;
  startDate: string;
  endDate: string;
  description: string;
  images: string[];
  skills: string[];
  company: string;
  side: string;
  isPrivate: boolean;
}

const ProjectItem: React.FC<ProjectItemProps> = ({
  title,
  startDate,
  endDate,
  description,
  images,
  skills,
  isPrivate = false,
  company,
  side,
}) => {
  const [open, setOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const handleOpen = (image: string) => {
    setSelectedImage(image);
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
    setSelectedImage(null);
  };

  return (
    <>
      <Box sx={{ padding: '16px 0' }}>
        <Box sx={{ display: 'flex', alignItems: 'center' }}>
          <Typography variant="h6">{title}</Typography>
          {isPrivate && (
            <Chip
              icon={<LockIcon fontSize="small" />}
              label="Private"
              size="small"
              sx={{
                ml: 1,
                backgroundColor: 'action.hover',
                color: 'error.main',
                borderColor: 'error.main',
                border: '1px solid',
                '& .MuiChip-icon': {
                  color: 'error.main',
                },
              }}
            />
          )}
        </Box>
        <Box
          sx={{
            display: 'flex',
            alignItems: 'center',
            gap: 1,
            marginBottom: 1,
          }}
        >
          <Typography variant="subtitle1" color="primary">
            {company}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            •
          </Typography>
          <Typography variant="subtitle2" color="text.secondary">
            {side}
          </Typography>
        </Box>
        <Typography variant="body2" color="textSecondary">
          {startDate} - {endDate}
        </Typography>
        <Typography variant="body1" sx={{ marginTop: 1 }}>
          {description}
        </Typography>
        {images.length !== 0 && (
          <Box sx={{ display: 'flex', overflowX: 'auto', marginTop: 2 }}>
            {images.map((image, index) => (
              <Card key={index} sx={{ minWidth: 200, marginRight: 2 }}>
                <CardMedia
                  component="img"
                  height="140"
                  image={image}
                  alt={`Project image ${index + 1}`}
                  onClick={() => handleOpen(image)}
                  sx={{ cursor: 'pointer' }}
                />
              </Card>
            ))}
          </Box>
        )}
        <Typography variant="h6" sx={{ marginTop: 2 }}>
          Skills
        </Typography>
        <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1 }}>
          {skills.map((skill, index) => (
            <Chip key={index} label={skill} />
          ))}
        </Box>
        <Modal open={open} onClose={handleClose}>
          <Box
            sx={{
              position: 'absolute',
              top: '50%',
              left: '50%',
              transform: 'translate(-50%, -50%)',
              width: '80%',
              bgcolor: 'background.paper',
              boxShadow: 24,
              p: 4,
            }}
          >
            {selectedImage && (
              <img
                src={selectedImage}
                alt="Selected project"
                style={{ width: '100%' }}
              />
            )}
          </Box>
        </Modal>
      </Box>
    </>
  );
};

export default ProjectItem;
