import ExpandLessIcon from '@mui/icons-material/ExpandLess';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import WorkIcon from '@mui/icons-material/Work';
import { Box, Button, Collapse, Typography } from '@mui/material';
import { useState } from 'react';
import { sortedListByDate } from '../utils/date';
import { getPublicPath } from '../utils/path';

interface ExperienceItemProps {
  title: string;
  company: string;
  location: string;
  employmentType: string;
  startDate: string;
  endDate: string;
  techStack: string[];
  description: string;
  companyLogo?: string;
  companyUrl?: string;
}

const ExperienceItem: React.FC<ExperienceItemProps> = ({
  title,
  company,
  location,
  employmentType,
  startDate,
  endDate,
  techStack,
  description,
  companyLogo,
  companyUrl,
}) => (
  <Box sx={{ mb: 2, mt: 2 }}>
    <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
      <Box
        component={companyUrl ? 'a' : 'div'}
        href={companyUrl}
        target="_blank"
        rel="noopener noreferrer"
        sx={{
          display: 'flex',
          cursor: companyUrl ? 'pointer' : 'default',
          '&:hover': {
            opacity: companyUrl ? 0.8 : 1,
          },
        }}
      >
        <Box
          component="img"
          src={getPublicPath(companyLogo || '/experiences/nophoto.png')}
          alt={`${company} logo`}
          sx={{
            width: 48,
            height: 48,
            objectFit: 'contain',
            borderRadius: 1,
          }}
        />
      </Box>
      <Box>
        <Typography variant="h6">{title}</Typography>
        <Typography variant="subtitle1" color="text.secondary">
          <Box component="span" sx={{ color: 'primary.main' }}>
            {company}
          </Box>{' '}
          • {location} • {employmentType}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {startDate} - {endDate}
        </Typography>
      </Box>
    </Box>

    <Typography variant="body1" sx={{ mt: 1 }}>
      {description}
    </Typography>
    {techStack.length > 0 && (
      <Typography variant="body1" sx={{ mt: 1 }}>
        <Box component="span" sx={{ fontWeight: 'bold' }}>
          Tech Stack:
        </Box>{' '}
        {techStack.join(', ') + '.'}
      </Typography>
    )}
  </Box>
);

const Experience = () => {
  const [open, setOpen] = useState(true);

  const experiences: ExperienceItemProps[] = [
    {
      title: 'Senior Frontend Software Engineer',
      company: 'System Group',
      companyUrl: 'https://www.linkedin.com/company/hamkaransystem',
      companyLogo: '/experiences/sg.jpg',
      location: 'Tehran',
      employmentType: 'Full-time',
      startDate: 'Apr 2021',
      endDate: 'current',
      techStack: [
        'TypeScript',
        'JavaScript',
        'React',
        'Angular',
        'RxJS',
        'Git',
        'Webpack',
        'Stencil',
        'Jest',
        'REST API',
        'Docker',
        'Playwright',
        'SCSS',
        'HTML',
        'C#',
        'PostgreSQL',
      ],
      description:
        'Contributed to the development and maintenance of a design system library, including 40+ reusable components, 8 common libraries, and a microfrontend architecture. Developed a Playwright wrapper to streamline testing processes. Played a key role in redesigning an enterprise ERP system serving over 80,000 customers. Led a team of 5 in redesigning the inventory module. Created a frontend roadmap, presented it in a meeting with company mentors, and showcased our microfrontend architecture at a university event attended by 200+ students.',
    },
    {
      title: 'Senior Frontend Software Engineer',
      company: 'Raimun',
      location: 'Esfahan',
      employmentType: 'Full-time',
      startDate: 'Jun 2020',
      endDate: 'Mar 2021',
      techStack: [
        'React',
        'Vue',
        'Nuxt.js',
        'Vuex',
        'Webpack',
        'JavaScript',
        'Jest',
        'REST API',
        'Ant Design',
        'Web Socket',
        'TypeScript',
        'TailwindCSS',
        'SCSS',
        'Git',
      ],
      description:
        'Redesigned a video conferencing product for 200+ educators using Nuxt.js and Vue, enhancing scalability and user experience while maintaining the existing React setup. Created CI/CD pipelines for 3 products to enforce linting, tests, and automatic deployment. Migrated the main product to Vue 3. Promoted a Test-Driven Development (TDD) culture, enabling pair programming, code reviews, and maintaining 85%+ test coverage. Implemented SEO strategies to improve product ranking.',
    },
    {
      title: 'Frontend Software Engineer',
      company: 'Freelance',
      location: 'Esfahan',
      employmentType: 'Full-time',
      startDate: 'May 2019',
      endDate: 'Jun 2020',
      techStack: [
        'React',
        'Redux',
        'Next.js',
        'Webpack',
        'GraphQL',
        'Bootstrap',
        'SCSS',
        'Storybook',
        'Vitest',
        'Node.js',
        'HTML',
        'TypeScript',
        'Git',
      ],
      description:
        'Developed the hotel reservation feature for the IranRoute product, optimizing performance by up to 98% based on Core Web Vitals and increasing user engagement by 30%. Built Ninicartoon, a video platform for kids, from scratch, collaborating on design and strategy to ensure seamless technical integration. Ensured cross-browser compatibility for consistent user experiences. Developed an e-commerce product following Clean Architecture and contributed to maintaining legacy backend code using Node.js. Reduced build time by 40%.',
    },
    {
      title: 'Frontend Software Engineer',
      company: 'Pardazesh Negar Rashin',
      companyLogo: '/experiences/pnr.jpg',
      companyUrl: 'https://ir.linkedin.com/company/pardazesh-negar-rashin',
      location: 'Tehran',
      employmentType: 'Full-time',
      startDate: 'Dec 2017',
      endDate: 'May 2019',
      techStack: [
        'JavaScript',
        'React',
        'Dapper ORM',
        'C#',
        'HTML',
        'jQuery',
        'ASP.NET MVC',
        'SQL',
        'REST API',
        'CSS',
      ],
      description:
        'Enhanced 10+ startup websites by translating business needs into functional frontend code, utilizing UI/UX patterns. Analyzed 30+ designs to ensure seamless technical integration. Optimized performance by up to 98% using Core Web Vitals. Redesigned the main product in React to improve maintainability.',
    },
    {
      title: 'Technical Instructor',
      company: 'Various Universities',
      location: 'Shahrekord',
      employmentType: 'Full-time',
      startDate: 'Jun 2013',
      endDate: 'Nov 2017',
      techStack: [],
      description:
        'Taught technical courses to 600+ students across 6 institutions and universities',
    },
  ];

  return (
    <Box sx={{ padding: '16px' }}>
      <Box sx={{ display: 'flex', alignItems: 'center' }}>
        <WorkIcon sx={{ marginRight: 1 }} />
        <Typography variant="h5" component="div">
          Experience
        </Typography>
        <Button onClick={() => setOpen(!open)} sx={{ marginLeft: 'auto' }}>
          {open ? <ExpandLessIcon /> : <ExpandMoreIcon />}
        </Button>
      </Box>
      <Collapse in={open}>
        {sortedListByDate(experiences).map((exp, index) => (
          <ExperienceItem key={index} {...exp} />
        ))}
      </Collapse>
    </Box>
  );
};

export default Experience;
