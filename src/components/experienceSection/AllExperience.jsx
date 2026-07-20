import React from 'react'
import SingleExperience from './SingleExperience'
import { motion } from 'framer-motion'
import { fadeIn } from '../../../src/framerMotion/variants'

const experiences = [
  {
    job: 'Software Engineer',
    company: 'WoodsMan Technologies',
    date: 'May 2026 - Present',
    responsibilities: [
      'Building and consuming RESTful APIs connecting Angular frontend modules to Node.js backend services, ensuring clean data contracts, validation, and error handling across the stack.',
      'Collaborating with operations and logistics stakeholders to translate business requirements into technical solutions that address real transport and fuel management workflows.',
      'Managing and querying PostgreSQL and MongoDB databases, designing schemas and writing optimised queries to support operational data needs across the business.',
    ]
  },
  {
    job: 'Frontend Developer',
    company: 'I&M Bank Kenya',
    date: 'Nov 2025 - Jan 2026',
    responsibilities: [
      'Delivered a high-volume multicurrency prepaid card platform featuring Mastercard international card capabilities including card listing, real-time balance visibility, and full transaction management for multi-currency wallets.',
      'Implemented end-to-end statement services covering on-demand PDF generation, paginated transaction history, email delivery, and in-browser document viewing, integrating with backend microservices via RESTful API contracts.',
      'Built the "Fikisha Card Goal Warning" feature, a real-time alerting system that surfaces expected impacts of deposits and withdrawals to improve customer financial transparency.',
      'Led the migration of Angular 12-18, modernising the codebase to leverage standalone components, updated lifecycle APIs, and improved build performance, ensuring compatibility with the latest Backbase SDK versions and reducing technical debt across the platform.'
    ]
  },
  {
    job: 'Frontend Developer',
    company: 'Konza Silicon',
    date: 'Jan 2022 - Oct 2025',
    responsibilities: [
      'Led a zero-downtime Angular 8–18 migration on a live government production platform.',
      'Built complex multi-stakeholder approval workflows for national land lease applications, managing reactive state across Angular components using RxJS and NgRx.',
      'Integrated Angular UI with REST, JSON, and SOAP/XML backend services for land registry workflows including ownership verification and historical record retrieval.',
      'Implemented bulk printing for lease certificates using Node.js, significantly cutting manual processing time for government staff.',
      'Introduced Husky pre-commit hooks to enforce code quality standards team-wide, reducing broken builds by 30% and improving overall codebase maintainability.',
      "Mentored junior developers and acted as interim Team Lead, coordinating sprint delivery and unblocking team members."
    ]
  },
  {
    job: 'Frontend Developer',
    company: 'Metropol Corporation',
    date: 'Sep 2021 - Dec 2021',
    responsibilities: [
      'Reduced frontend API latency by 35% through payload optimisation, directly improving dashboard responsiveness for end users across 50+ financial institutions.',
      'Contributed Angular and AngularJS modules to a credit reporting SPA consuming REST, JSON, and XML microservices, implementing authentication state management and robust error handling.',
      'Built a reusable Angular component library that improved UI consistency and eliminated code duplication across the platform.'
    ]
  }
];

const AllExperience = () => {
  return (
    <div className='relative max-w-3xl mx-auto pl-10 sm:pl-12'>
      {/* Vertical connecting line */}
      <div className='absolute left-[7px] sm:left-[9px] top-1 bottom-1 w-[2px] bg-orange/40' />

      {experiences.map((experience, index) => (
        <SingleExperience
          key={index}
          experience={experience}
          index={index}
        />
      ))}
    </div>
  )
}

export default AllExperience