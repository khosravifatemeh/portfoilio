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
        `The ERP product consists of 8 modules, each managed by a cross-functional team. The project includes several key sections: the App section, which contains ERP module apps like Sales, Inventory, and others; the Common Services and Components section, providing shared functionality across modules; and the Design System Library, which offers reusable building block components.\n- Contributed to the development of a Design System Library, eight common libraries, and a microfrontend architecture.\n- Redesigned the Inventory module in an ERP system serving over 80,000 customers and led a team of five frontend engineers.\n- Reviewed over 80 pull requests and established style guides to ensure consistency across the codebase.\n- Defined bug and feature standards to improve overall team productivity.\n- Developed a frontend roadmap to accelerate onboarding and productivity for new hires.\n- Implemented a Playwright Fluent API wrapper to streamline and enhance testing processes.`,
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
        'A collaborative whiteboard.\n- Implementing various shapes, text, responsive design, and a range of colors, brushes, and pens with adjustable depths.\n - Enhanced performance by batching point sends and receives.\n- Optimized responsiveness while ensuring an appealing UI and seamless user experience. \n- Collaborated closely with the design, backend, and product teams to implement forward-thinking solutions.',
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
        `An online course platform for educators and lecturers, enabling course presentation, checkout, class interactions, and video conferencing.
- Maintained the original React-based version of the platform.\n- Redesigned the platform using Vue and Nuxt.js, following Test-Driven Development (TDD) practices.\n- Implemented a CI/CD pipeline with GitLab and Docker to automate testing, enforce linting rules, and streamline deployment for efficient delivery.\n- Optimized SEO strategies to enhance search visibility.`,
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
        `A panel providing religious learning content.\n- Established the initial project structure, including the test section and app configuration for layout and libraries.\n- Developed several core components of the project.`,
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
        `A video platform for kids.\n- Collaborated closely with the founder to discuss design and strategy for well-informed solutions.\n- Created the initial project structure.\n- Optimized performance and SEO to enhance visibility and speed.\n- Improved accessibility for a wider audience.\n- Redesigned UI elements to enhance the overall user experience.\n- Applied cross-browser standards to ensure consistent display across devices and browsers, with special focus on TV compatibility.`,
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
        `A platform offering hotel bookings, bus services, and additional travel-related services for tourists.\n- Developed the hotel section of the product, including listing with advanced filters, detail pages, and checkout.\n- Boosting performance by 96% and increasing web traffic by 30%.\n- Ensured cross-device and cross-browser compatibility to deliver a seamless and consistent user experience.`,
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
      description:`An e-commerce product. Each feature was developed with clear separation of concerns: the domain layer included business logic, domain entities, and repository interfaces; the data layer connected to data sources and handled repository implementations; and the app layer was organized into core, generic, and support modules based on DDD practices. The core module contained the feature implementations and was structured following the MVVM pattern.\n- Contributed in architected frontend application using React and TypeScript, following Clean Architecture, Domain-Driven Design (DDD), and MVVM principles.\n- Helped maintain the legacy backend codebase built with Node.js and Express.
`,
      images: [],
      skills: [
        'React',
        'TypeScript',
        'Clean Architecture',
        'Domain Driven Design',
        'MVVM',
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
        'A location-based car service.\n- Redesigned several components by translating designs into functional components to improve UI/UX.\n- Collaborated with design, product, and backend teams to deliver a seamless and efficient user experience.',
      images: ['garaj/1.png', 'garaj/2.png', 'garaj/3.png', 'garaj/4.png'],
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
    {
      title: 'Dunzhe',
      company: 'Pardazesh Negar Rashin',
      side: 'Frontend Software Engineer',
      startDate: 'June 2018',
      isPrivate: false,
      endDate: 'Dec 2018',
      description:
        'A location-based beauty platform, enabling users to find nearby salons while showcasing beauty-related content.\n- Developed the platform from scratch.\n- Redesigned the frontend with 60+ features for 250+ users using React, enhancing maintainability and user experience.\n- Boosted performance by 98% through Core Web Vitals optimization.\n- Improved SEO to increase search visibility.',
      images: ['dunzhe/1.png', 'dunzhe/2.png', 'dunzhe/3.png', 'dunzhe/4.png'],
      skills: [
        'React',
        'JavaScript',
        'CSS',
        'HTML',
      'Bootstrap',

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
