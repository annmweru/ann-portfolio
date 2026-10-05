import React from 'react'
import ProjectsText from './ProjectsText'
import SingleProjects from './SingleProjects'
import { motion } from 'framer-motion'
import { fadeIn } from '../../../src/framerMotion/variants'

const projects = [
  {
  name: 'VitalLink Triage',
  year: '2026',
  description:
    'An offline-first paramedic triage intake application designed for field EMS use, enabling paramedics to capture and manage patient triage records reliably even when network connectivity is unavailable.',
  techStack: 'React Native • Expo • TypeScript • Redux Toolkit • SQLite • Jest',
  align: 'right',
  image: '/images/vitallink.png',
  link: null,
  github: 'https://github.com/annmweru/VitalLink-Triage',
  features:
    ['Offline-First Architecture',
     'SQLite Local Persistence',
     'Redux Toolkit State Management',
     'Patient Triage Intake',
     'Reliable Data Capture',
     'Jest Testing']
},
  {
  name: 'Library Management System',
  year: '2026',
  description:
    'A Java-based library management system for managing books, borrowing, returns, and availability, with database persistence and business-rule validation.',
  techStack: 'Java • OOP • JDBC • MySQL • SQL • Exception Handling • Enums',
  align: 'left',
  image: '/images/library.png',
  link: null,
  github: 'https://github.com/annmweru/02-oop-library-management',
  features:
    ['Book Management',
     'Borrow & Return Books',
     'Book Availability Tracking',
     'JDBC Database Connectivity',
     'Custom Exception Handling',
     'Enum-Based Status Management']
},
      {
    name: 'Ardhisasa Land Portal',
    year: '2025',
    description: 
    'Contributed to Kenya’s national digital land management platform by developing scalable Angular features, integrating backend services, and improving workflows for land registration, ownership verification, and lease management.',
    techStack: 'Angular • TypeScript • Tailwind CSS • NgRx • Reactive Forms • REST API • RxJS  • Dialogs',
    align: 'right',
    image: '/images/ardhisasa.png',
    link: 'https://ardhisasa.lands.go.ke/home',
    github: null,
    features: 
    ['Angular 8 → 18 Migration', 
    'REST & SOAP Integration', 
    'NgRx State Management', 
    'Reactive Forms', 
    'Complex Approval Workflows', 
    'Government-Scale Platform']
  },

  {
    name: 'FlowBoard',
    year: '2026',
    description: 
    'A modern Kanban-style project management application built for teams to organize work, manage priorities, and track progress through customizableworkflow boards. priority tags, and progress tracking across customizable workflow boards.',
    techStack: 'Angular • NgRx • Firebase • Tailwind CSS',
    align: 'left',
    image: '/images/flowboard.png',
    link: null,
    github: 'https://github.com/annmweru/Flowboard',
    features: 
    ['Drag & Drop Task Management', 
    'Firebase Authentication', 
    'Real-time Synchronization', 
    'NgRx State Management', 
    'Responsive Dashboard',
    'Priority & Progress Tracking']
  },

   {
    name: 'Job Tracker',
    year: '2026',
    description: 
    'A job tracking application that helps users organize applications,track interviews, monitor offers, and visualize their job searchhrough an intuitive dashboard.',
    techStack: 'React • Framer Motion • Tailwind CSS',
    align: 'right',
    image: '/images/jobTrack.png',
    link:null,
    github: 'https://github.com/annmweru/Job-tracker',
    features: 
    ['Application Pipeline', 
    'Interview Tracking', 
    'Local Storage Persistence', 
    'Responsive Dashboard'],

  }, 
  
  {
    name: 'Product Catalog',
    year: '2025',
    description: 
    'An e-commerce product listing application featuring advanced search,dynamic filtering, shopping cart functionality, and responsive layouts.',
    techStack: ' Angular • NgRx • Dialogs • RxJS • Reactive Forms • REST API',
    align: 'left',
    image: '/images/productList.png',
    link: null,
    github: 'https://github.com/annmweru/product-list-app',
    features:
    ['REST API Integration', 
    'Shopping Cart', 
    'Product Search', 
    'Dynamic Filtering',
    'Angular Material Dialogs',
    'Responsive Design']
  }, 
  
  {
    name: 'Portfolio Website',
    year: '2026',
    description: 
    'A responsive portfolio website designed to showcase my professional experience, technical expertise, and projects with a focus on performance, accessibility, and modern UI design.',
    techStack: 'React • Framer Motion • Tailwind CSS',
    align: 'right',
    image: '/images/portfolio.png',
    link: 'https://annahmweru-dev.netlify.app/',
    github: 'https://github.com/annmweru/ann-portfolio',
    features: 
    ['Responsive Design',
    'Framer Motion Animations', 
    'Dark Mode UI', 
    'Project Showcase',
    'Performance Optimized',
    'SEO Friendly']
  },

  {
    name: 'Metropol Credit Reporting System',
    year: '2021',
    description:
    'Contributed to the development of a credit reporting platform by building responsive Angular interfaces, integrating financial data services, and improving application performance to support efficient credit risk assessment and reporting.',
    techStack: 'Angular • TypeScript • BootStrap',
    align: 'left',
    image: '/images/metropol.png',
    link: 'https://metropol.co.ke/',
    github:null,
    features: [
    'Financial Data Integration',
    'API Performance Improvements',
    'Responsive UI',
    'Reusable Angular Components',
    'TypeScript Development',
    'Bootstrap UI'
  ]  },

  {
    name: 'Heroku Hosting Website',
    year: '2020',
    description:
    'A personal portfolio website built to showcase projects, technical skills, and web development experience while exploring cloud deployment, responsive design, and modern frontend development practices.',    techStack: 'HTML • CSS • JavaScript • Firebase',
    align: 'right',
    image: '/images/netlify.png',
    link: 'https://annmweru-heroku.netlify.app/',
    github: 'https://github.com/annmweru/Flowboard',
  features: [
    'Responsive Design',
    'Firebase Hosting',
    'Project Showcase',
    'Cross-Browser Compatibility',
    'Mobile-First Design',
    'Performance Optimized'
  ]  }
]

const ProjectsMain = () => {
  return (
    <div id='projects' className='max-w-[1200px] mx-auto px-4'>
      <motion.div
        variants={fadeIn('up', 0.2)}
        initial='hidden'
        whileInView='show'
        viewport={{ once: false, amount: 0 }}
      >
        <ProjectsText />
      </motion.div>

      <div className='flex flex-col gap-20 max-w-[900px] mx-auto mt-12'>
        {projects.map((item, index) => {
          return <SingleProjects
            key={index}
            name={item.name}
            year={item.year}
            align={item.align}
            image={item.image}
            link={item.link}
            github={item.github}
            features={item.features}
            description={item.description}
            techStack={item.techStack}
          />
        })}
      </div>
    </div>
  )
}

export default ProjectsMain