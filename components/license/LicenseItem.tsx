import {
  Box,
  Typography,
  Card,
  CardMedia,
  Chip,
  Button,
  Divider,
  useTheme,
  useMediaQuery,
} from '@mui/material';
import OpenInNewIcon from '@mui/icons-material/OpenInNew';

interface LicenseItemProps {
  thumbnail: string;
  title: string;
  issuer: string;
  issueDate: string;
  description: string;
  skills: string[];
  credentialUrl: string;
}

const LicenseItem: React.FC<LicenseItemProps> = ({
  thumbnail,
  title,
  issuer,
  issueDate,
  description,
  skills,
  credentialUrl,
}) => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  return (
    <>
      <Box
        sx={{
          display: 'flex',
          padding: '16px 0',
          alignItems: 'flex-start',
        }}
      >
        <CardMedia
          component="img"
          image={thumbnail}
          alt="License thumbnail"
          sx={{
            width: isMobile ? '48px' : '100px',
            height: isMobile ? '48px' : '100px',
            marginRight: 2,
            objectFit: 'contain',
            borderRadius: 1,
          }}
        />
        <Box sx={{ flex: 1 }}>
          <Typography variant="h6">{title}</Typography>
          <Typography variant="body2" color="textSecondary">
            {issuer} | Issued {issueDate}
          </Typography>
          <Typography variant="body1" sx={{ marginTop: 1 }}>
            {description}
          </Typography>
          <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1, marginTop: 1 }}>
            {skills.map((skill, index) => (
              <Chip key={index} label={skill} />
            ))}
          </Box>
          <Button
            variant="outlined"
            color="inherit"
            href={credentialUrl}
            startIcon={<OpenInNewIcon fontSize="small" />}
            target="_blank"
            sx={{ marginTop: 2 }}
          >
            Show Credential
          </Button>
        </Box>
      </Box>
    </>
  );
};

export default LicenseItem;
