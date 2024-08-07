import React from 'react';
import ScrollIntoView from 'react-scroll-into-view';
import { FaChevronDown } from 'react-icons/fa';

const About = () => {
  return (
    <div className="max-w-6xl mt-10 mx-auto">
      <p className="text-2xl text-black md:text-4xl font-bold text-center">
        Hey there 👋
      </p>
      <p className="text-base md:text-xl text-justify text-gray-600 leading-relaxed mt-4">
        An extremely motivated and competent Software Engineer possessing
        an extensive pool of knowledge and skill-set within the Software
        Engineering domain, having over{' '} <strong> 3.5 years </strong> of experience. 
        Full Stack App Development is my forte having successfully completed multiple projects 
        using <strong>Angular 2+, Node.js (TypeScript), AWS, .NET Core, React.js</strong>. 
        Also have experience in different version control software such as{' '} 
        <strong>Git, GitBash, BitBucket, SourceTree</strong> along with database 
        management using{' '} <strong>MongoDB, SQL Server (SSMS),
        PostgreSQL and Oracle PL/SQL</strong>.
      </p>

      <ScrollIntoView selector="#tech">
        <div className="mx-auto p-8">
          <FaChevronDown className="animate-bounce mx-auto text-3xl text-blue-500" />
        </div>
      </ScrollIntoView>
    </div>
  );
};

export default About;
