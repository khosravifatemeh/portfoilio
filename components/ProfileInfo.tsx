import { Email, GitHub, LinkedIn } from '@mui/icons-material';
import { Box, Typography } from '@mui/material';
import Link from 'next/link';
import { getPublicPath } from '../utils/path';

const ProfileInfo = () => {
  return (
    <Box sx={{ padding: '0 16px 16px' }}>
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          marginBottom: 2,
        }}
      >
        <Typography variant="h5" component="div" sx={{ mt: 1 }}>
          Monika(Fatemeh) Khosravi
        </Typography>
        {/* <Link
          href="https://drive.google.com/file/d/1oyIXkhocyC_MUq-ngHUuarzEholj-ozV/view?usp=sharing"
          target="_blank"
          style={{
            display: 'flex',
            alignItems: 'center',
            textDecoration: 'none',
            color: 'inherit',
          }}
        >
          <DescriptionIcon sx={{ marginRight: 1 }} />
          Resume
        </Link> */}
      </Box>
      <Typography variant="body1" gutterBottom>
        Software Engineer | Senior Frontend Engineer | AI Enthusiast | 15+
        successfull projects, including large-scale | Mentored 150+ engineers |
        led workshops for 600+ | Led a team of frontend engineers
      </Typography>
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'flex-start',
          flexWrap: 'wrap',
          gap: 2,
          marginTop: 2,
        }}
      >
        <Link
          href="mailto:uni.khosravi@gmail.com"
          target="_blank"
          color="inherit"
          style={{ display: 'flex', alignItems: 'center', color: 'black' }}
        >
          <Email sx={{ marginRight: 1, color: 'black' }} />
          uni.khosravi@gmail.com
        </Link>
        <Link
          href="https://github.com/khosravifatemeh"
          target="_blank"
          color="inherit"
          style={{ display: 'flex', alignItems: 'center', color: 'black' }}
        >
          <GitHub sx={{ marginRight: 1, color: 'black' }} />
        </Link>

        <Link
          href="https://medium.com/@uni.khosravi"
          target="_blank"
          color="inherit"
          style={{ display: 'flex', alignItems: 'center', color: 'black' }}
        >
          <Box
            component="img"
            src={getPublicPath('/profile-info/medium.svg')}
            alt="Medium"
            sx={{ marginRight: 1, width: 24, height: 24 }}
          />
        </Link>
        <Link
          href="https://join.skype.com/invite/CHsvz5yMrj5z"
          color="inherit"
          style={{
            display: 'flex',
            alignItems: 'center',
            color: 'black',
          }}
        >
          <Box
            component="img"
            src={getPublicPath('/profile-info/skype.svg')}
            alt="Skype"
            sx={{ marginRight: 1, width: 24, height: 24 }}
          />
        </Link>
        <Link
          href="https://linkedin.com/in/monikakhosravi"
          target="_blank"
          color="inherit"
          style={{ display: 'flex', alignItems: 'center', color: 'black' }}
        >
          <LinkedIn sx={{ marginRight: 1, color: 'black' }} />
        </Link>
      </Box>
    </Box>
  );
};
export default ProfileInfo;
