import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import ReactMarkdown from 'react-markdown';
import { posts } from '../../data/posts';

const PostPage = () => {
  const router = useRouter();
  const { slug } = router.query;
  const [content, setContent] = useState('');

  useEffect(() => {
    if (slug) {
          const path = `${router.basePath}/post/${slug}.md`;
      fetch(path)
        .then((res) => res.text())
        .then(setContent);
    }
  }, [slug]);

  const post = posts.find((p) => p.slug === slug);

  if (!post) return <div>Post not found</div>;

  return (
    <div style={{
        padding: 32,
        background: '#fff',
        maxWidth: 800,
        overflow:"auto",
        margin: '32px auto',
        boxShadow: '0 2px 8px rgba(0,0,0,0.06)',
      }}>
      <h1>{post.name}</h1>
      <ReactMarkdown>{content}</ReactMarkdown>
    </div>
  );
};

export default PostPage;