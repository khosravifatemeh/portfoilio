import Head from 'next/head';
import CoverPhoto from '../components/CoverPhoto';
import ProfileInfo from '../components/ProfileInfo';
import { Box } from '@mui/material';
import Project from '../components/Project';
import LicenseSection from '../components/license/LicenseSection';
import AboutMe from '../components/AboutMe';
import Experience from '../components/Experience';
import Education from '../components/Education';
import Languages from '../components/Language';
import Entertainment from '../components/Entertainment';

const Home = () => {
  return (
    <div>
      <Head>
        <title>Monika(Fatemeh) Khosravi</title>
        <meta name="description" content="My Website" />
      </Head>
      <Box sx={{ marginBottom: 1, backgroundColor: 'white' }}>
        <CoverPhoto />
        <ProfileInfo />
      </Box>
      <Box sx={{ marginBottom: 1, backgroundColor: 'white' }}>
        <AboutMe />
      </Box>
      <Box sx={{ marginBottom: 1, backgroundColor: 'white' }}>
        <Experience />
      </Box>
      <Box sx={{ marginBottom: 1, backgroundColor: 'white' }}>
        <Education />
      </Box>
      <Box sx={{ marginBottom: 1, backgroundColor: 'white' }}>
        <Project />
      </Box>
      <Box sx={{ marginBottom: 1, backgroundColor: 'white' }}>
        <LicenseSection />
      </Box>
      <Box sx={{ marginBottom: 1, backgroundColor: 'white' }}>
        <Languages />
      </Box>
      <Box sx={{ marginBottom: 1, backgroundColor: 'white' }}>
        <Entertainment />
      </Box>
    </div>
  );
};
export default Home;
