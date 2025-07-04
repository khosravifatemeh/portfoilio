import { BottomNavigation, BottomNavigationAction, Paper } from '@mui/material';
import RestoreIcon from '@mui/icons-material/Restore';
import ArticleIcon from '@mui/icons-material/Article';
import { useRouter } from 'next/router';
import { useState, useEffect } from 'react';

const MobileBottomNav = () => {
  const router = useRouter();
  const [value, setValue] = useState(0);

  useEffect(() => {
    if (router.pathname === '/') {
      setValue(0);
    } else if (router.pathname === '/article') {
      setValue(1);
    }
  }, [router.pathname]);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
    if (newValue === 0) {
      router.push('/');
    } else if (newValue === 1) {
      router.push('/article');
    }
  };

  return (
    <Paper sx={{ position: 'fixed', bottom: 0, left: 0, right: 0, zIndex: 1 }}>
      <BottomNavigation value={value} onChange={handleChange} showLabels>
        <BottomNavigationAction label="Resume" icon={<RestoreIcon />} />
        <BottomNavigationAction label="Article" icon={<ArticleIcon />} />
      </BottomNavigation>
    </Paper>
  );
};

export default MobileBottomNav;
