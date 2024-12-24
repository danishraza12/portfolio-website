import { combineReducers } from 'redux';
import {
  FaReact,
  FaMicrosoft,
  FaGithub,
  FaLinkedin,
  FaEnvelope,
  FaAngular,
  FaAws,
  FaNodeJs,
  FaPython,
} from 'react-icons/fa';
import { SiTypescript, SiMongodb, SiMicrosoftsqlserver } from 'react-icons/si';
import { BsMedium } from 'react-icons/bs';

import { EMAIL } from '../../constants/contact';

const skillsReducer = () => {
  return [
    {
      icon: FaAngular,
      name: 'Angular',
      color: 'FF0000',
    },
    {
      icon: FaNodeJs,
      name: 'Node.js',
      color: '0A7029',
    },
    {
      icon: SiMongodb,
      name: 'MongoDB',
      color: '00ff00',
    },
    {
      icon: FaAws,
      name: 'AWS',
      color: 'FFC300',
    },
    {
      icon: SiTypescript,
      name: 'TypeScript',
      color: '2196f3',
    },
    {
      icon: FaReact,
      name: 'React',
      color: '2196f3',
    },
    {
      icon: FaMicrosoft,
      name: '.NET Core',
      color: '4B0082',
    },
    {
      icon: SiMicrosoftsqlserver,
      name: 'SQL Server',
      color: 'ff45b5',
    },
    {
      icon: FaPython,
      name: 'Python',
      color: '3776ab',
    },
  ];
};

const socialMediaReducer = () => {
  return [
    {
      icon: FaGithub,
      link: 'https://github.com/danishraza12',
      name: 'Github',
      color: 'gray-800',
      key: 1,
    },
    {
      icon: FaLinkedin,
      link: 'https://www.linkedin.com/in/danishraza12/',
      name: 'Linkedin',
      color: 'blue-700',
      key: 2,
    },
    {
      icon: FaEnvelope,
      link: 'mailto: ' + EMAIL,
      name: 'Gmail',
      color: 'yellow-800',
      key: 3,
    },
    {
      icon: BsMedium,
      link: 'https://medium.com/@danish_raza',
      name: 'Medium',
      color: 'black',
      key: 4,
    },
  ];
};

export default combineReducers({
  skills: skillsReducer,
  socialMedia: socialMediaReducer,
});
