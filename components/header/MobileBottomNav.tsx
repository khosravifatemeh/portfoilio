import { BottomNavigation, BottomNavigationAction, Paper } from '@mui/material';
import RestoreIcon from '@mui/icons-material/Restore';
import ArticleIcon from '@mui/icons-material/Article';
import PostAdd from '@mui/icons-material/PostAdd';

import { useRouter } from 'next/router';
import { useState, useEffect } from 'react';

const MobileBottomNav = () => {
  const router = useRouter();
  const [value, setValue] = useState(0);

  useEffect(() => {
    if (router.pathname === '/') {
      setValue(0);
    } else if (router.pathname === '/post') {
      setValue(1);
    }
    else{
           setValue(2);
 
    }
  }, [router.pathname]);



  return (
    <Paper sx={{ position: 'fixed', bottom: 0, left: 0, right: 0, zIndex: 1 }}>
      <BottomNavigation value={value} showLabels>
        <BottomNavigationAction href="/" label="Resume" icon={<RestoreIcon />} />
                <BottomNavigationAction href='/post' label="Post" icon={<PostAdd />} />

        <BottomNavigationAction href='/article' label="Article" icon={<ArticleIcon />} />
      </BottomNavigation>
    </Paper>
  );
};

export default MobileBottomNav;
