import {
  Box,
  Card,
  Chip,
  Link,
  Typography,
} from '@mui/material';

interface ArticleItemProps {
  title: string;
  publishedAt?: string;
  description: string;
  imageUrl?: string;
  articleUrl: string;
  tags: string[];
}

const ArticleItem: React.FC<ArticleItemProps> = ({
  title,
  description,
  articleUrl,
  tags,
}) => {

  return (
    <Link
      href={articleUrl}
      target="_blank"
      rel="noopener"
      sx={{ textDecoration: 'none' }}
    >
      <Card sx={{ display: 'flex', marginBottom: 2 }}>
        <Box sx={{ flex: 1, padding: 2 }}>
          <Typography variant="h5">{title}</Typography>

          <Typography variant="body1" sx={{ marginTop: 2 }}>
            {description}
          </Typography>
          <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1, mt: 2 }}>
            {tags.map((tag, index) => (
              <Chip
                key={index}
                label={tag}
                size="small"
                variant="outlined"
                sx={{
                  backgroundColor: 'transparent',
                  borderColor: 'divider',
                }}
              />
            ))}
          </Box>
        </Box>
        {/* <CardMedia
          component="img"
          image={imageUrl}
          alt="Article image"
          sx={{
            width: isMobile ? '112px' : '200px',
            height: isMobile ? '112px' : '134px',
            objectFit: 'contain',
            objectPosition: 'center',
            marginTop: 1,
          }}
        /> */}
      </Card>
    </Link>
  );
};

export default ArticleItem;
