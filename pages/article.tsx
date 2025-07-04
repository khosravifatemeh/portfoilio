import { Box } from '@mui/material';
import Head from 'next/head';
import ArticleItem from '../components/ArticleItem';

const articles = [
  {
    title: 'Decorators in JavaScript',
    publishedAt: 'May 16, 2025',
    description:
      'Decorators in JavaScript are a powerful design pattern that allows developers to enhance or modify class members or entire classes without touching their original code. This pattern supports cleaner, reusable, and modular implementations of cross-cutting concerns like logging, validation, event management, and more. This article explores both theoretical and real-world examples, including how Carbon’s HostListener decorator simplifies event handling in web components by automating listener management and cleanup.',
    imageUrl: '',
    articleUrl:
      'https://medium.com/@uni.khosravi/decorators-in-javascript-774a7d21aef5',
    tags: [
      'JavaScript',
      'Decorators',
      'Design Patterns',
      'Event Handling',
      'Code Reusability',
    ],
  },
  {
    title: 'Unlocking CSS Secrets: Block Formatting Contexts (BFC)',
    publishedAt: 'Jan 18, 2025',
    description:
      'A Block Formatting Context (BFC) is a CSS concept that defines a region where block-level elements are laid out. Elements within a BFC do not interact with elements outside of it, which helps in managing layout issues like margin collapsing, containing floats, and preventing overlaps. To establish a BFC, you can use properties such as float, overflow, display, or position. For example, setting overflow: hidden; on a container creates a BFC, ensuring that floated elements are contained and preventing content from overlapping.',
    imageUrl: 'articles/css.svg',
    articleUrl:
      'https://medium.com/@uni.khosravi/unlocking-css-secrets-block-formatting-contexts-bfc-0bc2852c203d',
    tags: [
      'CSS',
      'BFC',
      'margin collapsing',
      'Preventing overlap',
      'Containing floats',
    ],
  },
  {
    title: 'The First Step in Developing a Design System: Defining Colors',
    publishedAt: 'Apr 2024',
    description:
      'The design system starts by defining a color palette with various shades for consistency across the UI. It includes colors like black, white, gray, and specific colors for states (error, success, etc.), supporting accessibility and theming. The centralized color definitions ensure easy updates and maintain consistency throughout the application.',
    imageUrl: '',
    articleUrl:
      'https://medium.com/@uni.khosravi/the-first-step-in-developing-a-design-system-defining-colors-9f87d7cecacf',
    tags: ['Design System UI', 'Colors', 'TypeScript', 'SCSS'],
  },
  {
    title: 'Understanding Design System Tokens: From Base to Semantic',
    publishedAt: 'May 2025',
    description:
      'Explains how design tokens evolve from raw primitive values to meaningful semantic and component tokens in a structured design system. Covers token organization by domain, the importance of a TypeScript source of truth, transforming tokens into SCSS maps and variables, and ensuring scalability and maintainability. Highlights the benefits of using tokens for theming, consistency, and improving collaboration between designers and developers.',
    imageUrl: '',
    articleUrl:
      'https://medium.com/@uni.khosravi/understanding-design-system-tokens-from-base-to-semantic-5319c04533dc',
    tags: ['Design System', 'Tokens', 'Frontend Architecture'],
  },
  {
    title: 'Building a Scalable Theme System: From Tokens to CSS Variables',
    publishedAt: 'May 2025',
    description:
      'A comprehensive guide to building a scalable theme system using design tokens. It covers structuring token definitions, managing themes for light and dark modes, generating SCSS maps, merging token groups, and applying CSS variables with fallbacks. This approach ensures consistent theming, supports multiple brand identities, and improves maintainability across the design system.',
    imageUrl: '',
    articleUrl:
      'https://medium.com/@uni.khosravi/building-a-scalable-theme-system-17713f6f3232',
    tags: ['Design System', 'Theming', 'Frontend Architecture'],
  },
  {
    title:
      'Intelligent recognition of Iranian banknotes using Gabor wavelets and Histogram of Oriented Gradients (HOG)',
    publishedAt: 'Sep 2024',
    description:
      'Implemented an intelligent system for recognizing Iranian banknotes using computer vision techniques. The study introduced a method that efficiently classifies banknotes based on color and texture features. Color features were extracted using grayscale pixel averaging, while texture analysis was performed using Histogram of Oriented Gradients (HOG) and Gabor wavelets. The system achieved a recognition accuracy of up to 95.89%. The proposed techniques are also applicable to banknotes from other countries that can be distinguished by color and design.',
    imageUrl: 'articles/civilica',
    articleUrl: 'https://civilica.com/doc/283081/',
    tags: ['Pattern Recognition', 'Image Processing'],
  },
];

const Article = () => {
  return (
    <div>
      <Head>
        <title>Article - Monika(Fatemeh) Khosravi</title>
        <meta name="description" content="Article Page" />
      </Head>
      <Box sx={{ padding: '16px' }}>
        {articles.map((article, index) => (
          <ArticleItem
            key={index}
            title={article.title}
            publishedAt={article.publishedAt}
            description={article.description}
            imageUrl={article.imageUrl}
            articleUrl={article.articleUrl}
            tags={article.tags}
          />
        ))}
      </Box>
    </div>
  );
};

export default Article;
