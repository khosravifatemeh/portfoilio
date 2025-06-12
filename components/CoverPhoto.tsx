import { Avatar, Box, Paper } from '@mui/material';
import { getPublicPath } from '../utils/path';

const CoverPhoto = () => {
  return (
    <Box sx={{ position: 'relative', width: '100%' }}>
      <Paper
        elevation={3}
        square
        sx={{
          width: '100%',
          height: '200px',
          backgroundImage: `url(${getPublicPath('/cover-photo/cover2.png')})`,
          backgroundSize: 'contain',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          backgroundColor: 'rgb(5 10 48)',
        }}
      />
      <Avatar
        src={getPublicPath('/cover-photo/avatar.jpg')}
        sx={{
          width: '20%',
          minWidth: '100px',
          height: 'auto',
          position: 'relative',
          bottom: 0,
          left: 20,
          marginTop: '-15%',
          border: '4px solid white',
        }}
      />
    </Box>
  );
};
export default CoverPhoto;
