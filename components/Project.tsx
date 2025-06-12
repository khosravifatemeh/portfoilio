import { Box, Button, Collapse, Divider, Typography } from '@mui/material';
import { useState } from 'react';
import WorkIcon from '@mui/icons-material/Work';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import ExpandLessIcon from '@mui/icons-material/ExpandLess';
import ProjectItem from './ProjectItem';
import { sortedListByDate } from '../utils/date';

const Project = () => {
  const [open, setOpen] = useState(true);

  const handleToggle = () => {
    setOpen(!open);
  };
  const projects = [
    {
      title: 'Rahkaran',
      company: 'System Group',
      side: 'Senior Frontend Software Engineer',
      startDate: 'Apr 2021',
      endDate: 'current',
      isPrivate: true,
      description:
        'Contributed to the development of a design system library, 8 common libraries, and a microfrontend architecture. Led a team of 5 frontend engineers to redesign the inventory module in an ERP system serving over 80,000 customers. Implemented a Playwright Fluent API wrapper to streamline testing. The project included several sections: the App section, which encompassed ERP module apps like Sales, Inventory, and others; the Common Services section, which provided shared functionality across modules; and the Design System Library, which included building block components.',
      images: [],
      skills: [
        'JavaScript',
        'TypeScript',
        'React',
        'Angular',
        'RxJS',
        'Jest',
        'Cypress',
        'Playwright',
        'Stencil',
        'C#',
        'PostgreSQL',
        'SCSS',
        'HTML',
        'Git',
      ],
    },
    {
      title: 'Collaborative Whiteboard',
      company: 'Raimun',
      side: 'Senior Frontend Software Engineer',
      startDate: 'Jun 2020',
      endDate: 'Aug 2020',
      isPrivate: true,
      description:
        'Developed a collaborative whiteboard from scratch, featuring various shapes, text, responsive design, and a range of colors, brushes, and pens with adjustable depths. Enhanced performance by batching point sends and receives, optimizing responsiveness while ensuring an appealing UI and seamless user experience. Collaborated closely with the design, backend, and product teams to implement forward-thinking solutions.',
      images: ['whiteboard/1.png'],
      skills: ['JavaScript', 'Vue', 'Paper.js', 'SCSS', 'HTML', 'Git'],
    },
    {
      title: 'Railive',
      company: 'Raimun',
      side: 'Senior Frontend Software Engineer',
      startDate: 'Jun 2020',
      isPrivate: true,
      endDate: 'Mar 2021',
      description:
        'Developed an online course platform for educators and lecturers, enabling course presentation, checkout, class interactions, and video conferencing. Optimized SEO strategies to improve visibility. Maintained the original version built with React, and later redesigned the platform using Vue and Nuxt.js with Test-Driven Development (TDD) practices. Implemented a CI/CD pipeline using GitLab and Docker to automate testing, enforce linting rules, and streamline deployment for smooth and efficient delivery.',
      images: [
        'railive/1.png',
        'railive/2.png',
        'railive/3.png',
        'railive/4.png',
      ],
      skills: [
        'JavaScript',
        'TypeScript',
        'React',
        'Vue',
        'Nuxt.js',
        'SCSS',
        'HTML',
        'Bootstrap',
        'Material',
        'Ant Design',
        'Jest',
        'Cypress',
        'WebRTC',
        'Git',
      ],
    },
    {
      title: 'Taninevahy Admin Panel',
      company: 'Raimun',
      side: 'Senior Frontend Software Engineer',
      startDate: 'Sep 2020',
      isPrivate: true,
      endDate: 'Mar 2021',
      description:
        'Developed a web application from scratch for a religious organization, establishing the initial structure and building key features.',
      images: [],
      skills: [
        'JavaScript',
        'Vue',
        'SCSS',
        'HTML',
        'Element UI',
        'Jest',
        'Git',
      ],
    },
    {
      title: 'Ninicartoon',
      company: 'Freelancing',
      side: 'Frontend Software Engineer',
      startDate: 'May 2019',
      endDate: 'Mar 2021',
      isPrivate: true,
      description:
        'Developed a video platform for kids from scratch, collaborating closely with the founder to discuss each design and strategy for well-informed solutions. Optimized performance and SEO to enhance visibility and speed. Redesigned UI elements to improve the overall user experience. Applied cross-browser standards to ensure a consistent view across different devices and browsers, with a special focus on TV compatibility.',
      images: [
        'ninicartoon/1.png',
        'ninicartoon/2.png',
        'ninicartoon/3.png',
        'ninicartoon/4.png',
      ],
      skills: [
        'JavaScript',
        'React',
        'Next.js',
        'SCSS',
        'Bootstrap',
        'HTML',
        'Git',
      ],
    },
    {
      title: 'IranRoute',
      company: 'Freelancing',
      side: 'Frontend Software Engineer',
      startDate: 'Jun 2019',
      isPrivate: true,
      endDate: 'Jan 2020',
      description:
        'Developed the hotel section of the product, including listing with advanced filters, detail pages, checkout, and more, boosting performance by 96% and increasing web traffic by 30%. Ensured cross-device and cross-browser compatibility to deliver a seamless and consistent user experience.',
      images: [
        'iranroute/1.png',
        'iranroute/2.png',
        'iranroute/3.png',
        'iranroute/4.png',
      ],
      skills: [
        'JavaScript',
        'React',
        'Redux',
        'Next.js',
        'GraphQL',
        'SCSS',
        'HTML',
        'Bootstrap',
        'Git',
      ],
    },
    {
      title: 'Skyscraper',
      company: 'Freelancing',
      side: 'Frontend Software Engineer',
      startDate: 'May 2019',
      isPrivate: true,
      endDate: 'Nov 2019',
      description:
        'Architected an e-commerce frontend application using React and TypeScript, following Clean Architecture, Domain-Driven Design (DDD), and MVVM principles. Each feature was developed with clear separation of concerns: the domain layer included business logic, domain entities, and repository interfaces; the data layer connected to data sources and handled repository implementations; and the app layer was organized into core, generic, and support modules based on DDD practices. The core module contained the feature implementations and was structured following the MVVM pattern. I also helped maintain the legacy backend codebase built with Node.js and Express.',
      images: [],
      skills: [
        'Clean Architecture',
        'Domain Driven Design',
        'MVVM',
        'React',
        'TypeScript',
        'Reactive Programming',
        'Functional Programming',
      ],
    },
    {
      title: 'Garaj',
      company: 'Pardazesh Negar Rashin',
      side: 'Frontend Software Engineer',
      startDate: 'Dec 2018',
      isPrivate: false,
      endDate: 'May 2019',
      description:
        'Developed a location-based platform. Redesigned the product’s frontend with 60+ features for 250+ users using React, enhancing maintainability and reducing launch time by 50%. Collaborated with design, product, and backend teams, delivering a seamless and efficient user experience.',
      images: ['garaj/1.png', 'garaj/2.png', 'garaj/3.png', 'garaj/4.png'],
      skills: [
        'JavaScript',
        'JQuery',
        'React',
        'CSS',
        'HTML',
        'C#',
        'ASP.NET MVC',
        'Git',
      ],
    },
    {
      title: 'Dunzhe',
      company: 'Pardazesh Negar Rashin',
      side: 'Frontend Software Engineer',
      startDate: 'June 2018',
      isPrivate: false,
      endDate: 'Dec 2018',
      description:
        'Developed a location-based beauty platform from scratch, enabling users to find nearby salons while showcasing beauty-related content. Redesigned the user interface to enhance user experience, boosting performance by 98% through Core Web Vitals optimization. Improved SEO to increase search visibility.',
      images: ['dunzhe/1.png', 'dunzhe/2.png', 'dunzhe/3.png', 'dunzhe/4.png'],
      skills: [
        'JavaScript',
        'JQuery',
        'CSS',
        'HTML',
        'C#',
        'ASP.NET MVC',
        'Git',
      ],
    },
  ];

  return (
    <Box sx={{ padding: '16px' }}>
      <Box sx={{ display: 'flex', alignItems: 'center' }}>
        <WorkIcon sx={{ marginRight: 1 }} />
        <Typography variant="h5" component={'div'}>
          Highlighted Projects
        </Typography>
        <Button onClick={handleToggle} sx={{ marginLeft: 'auto' }}>
          {open ? <ExpandLessIcon /> : <ExpandMoreIcon />}
        </Button>
      </Box>
      <Collapse in={open}>
        {sortedListByDate(projects).map((project, index) => (
          <>
            <ProjectItem
              key={index}
              title={project.title}
              startDate={project.startDate}
              endDate={project.endDate}
              description={project.description}
              images={project.images}
              skills={project.skills}
              company={project.company}
              side={project.side}
              isPrivate={project.isPrivate}
            />
            {index < projects.length - 1 && (
              <Divider sx={{ backgroundColor: 'rgba(128, 128, 128, 0.5)' }} />
            )}
          </>
        ))}
      </Collapse>
    </Box>
  );
};
export default Project;
