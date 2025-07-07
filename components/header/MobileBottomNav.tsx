import {
  BottomNavigation,
  BottomNavigationAction,
  Paper,
} from '@mui/material';
import RestoreIcon from '@mui/icons-material/Restore';
import ArticleIcon from '@mui/icons-material/Article';
import PostAdd from '@mui/icons-material/PostAdd';

import { useRouter } from 'next/router';
import { useState, useEffect } from 'react';

// Define route config in one place
const navItems = [
  { label: 'Resume', icon: <RestoreIcon />, path: '/' },
  { label: 'Post', icon: <PostAdd />, path: '/post' },
  { label: 'Article', icon: <ArticleIcon />, path: '/article' },
];

const MobileBottomNav = () => {
  const router = useRouter();
  const [value, setValue] = useState(0);

  // Sync value with current path
  useEffect(() => {
    const currentIndex = navItems.findIndex((item) =>
      router.pathname === '/' ? item.path === '/' : item.path.startsWith("/"+router.pathname.split("/")[1])
    );
        setValue(currentIndex === -1 ? 0 : currentIndex);
  }, [router.pathname]);

  const handleChange = (_: React.SyntheticEvent, newValue: number) => {
    const selectedItem = navItems[newValue];
    if (selectedItem) {
      router.push(selectedItem.path);
    }
  };

  return (
    <Paper
      sx={{ position: 'fixed', bottom: 0, left: 0, right: 0, zIndex: 1 }}
      elevation={3}
    >
      <BottomNavigation value={value} onChange={handleChange} showLabels>
        {navItems.map((item, index) => (
          <BottomNavigationAction
            key={index}
            label={item.label}
            icon={item.icon}
          />
        ))}
      </BottomNavigation>
    </Paper>
  );
};

export default MobileBottomNav;
