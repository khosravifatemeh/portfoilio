import ArticleIcon from '@mui/icons-material/Article';
import RestoreIcon from '@mui/icons-material/Restore';
import { AppBar, Box, Button, Toolbar } from '@mui/material';
import Link from 'next/link';
import { useRouter } from 'next/router';

const DesktopMenu = () => {
  const router = useRouter();

  return (
    <AppBar position="static" sx={{ backgroundColor: 'white', color: 'black' }}>
      <Toolbar>
        <Box sx={{ display: 'flex', justifyContent: 'center', flexGrow: 1 }}>
          <Link href="/" passHref>
            <Button
              sx={{
                color:
                  router.pathname === '/' ? 'primary.main' : 'text.secondary',
              }}
              startIcon={<RestoreIcon />}
            >
              Resume
            </Button>
          </Link>
          <Link href="/article" passHref>
            <Button
              sx={{
                color:
                  router.pathname === '/article'
                    ? 'primary.main'
                    : 'text.secondary',
              }}
              startIcon={<ArticleIcon />}
            >
              Article
            </Button>
          </Link>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default DesktopMenu;
