import Link from 'next/link';
import { posts } from "../../data/posts";
import { Card, CardContent, Typography, Box } from '@mui/material';

export default function PostList() {
  return (
      <Box sx={{ padding: '16px' }}>
  
      <Box sx={{ display: 'flex', flexDirection: 'column', gap: 3 }}>
        {posts.map((post) => (
          <Card
            key={post.slug}
            sx={{ width: '100%', cursor: 'pointer', textDecoration: 'none' }}
            component={Link}
            href={`/post/${post.slug}`}
          >
            <CardContent>
              <Typography variant="h5" >
                {post.name}
              </Typography>
              <Typography variant="body1" sx={{ marginTop: 2 }}>
                {post.description}
              </Typography>
            </CardContent>
          </Card>
        ))}
      </Box>
    </Box>
  );
}