import { combineReducers } from 'redux';
import {
  FaReact,
  FaMicrosoft,
  FaGithub,
  FaLinkedin,
  FaEnvelope,
} from 'react-icons/fa';
import { SiJavascript, SiTailwindcss, SiRedux } from 'react-icons/si';
import { AiOutlineConsoleSql } from 'react-icons/ai';
import { BsMedium } from 'react-icons/bs';

const skillsReducer = () => {
  return [
    {
      icon: FaReact,
      name: 'React',
      color: '2196f3',
    },
    {
      icon: SiJavascript,
      name: 'JavaScript',
      color: 'ffdf00',
    },
    {
      icon: SiRedux,
      name: 'Redux',
      color: '4B0082',
    },
    {
      icon: FaMicrosoft,
      name: '.NET/.NET Core',
      color: '4B0082',
    },
    {
      icon: SiTailwindcss,
      name: 'Tailwind CSS',
      color: '00C0A3',
    },
    {
      icon: AiOutlineConsoleSql,
      name: 'Oracle / SSMS',
      color: '888888',
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
    },
    {
      icon: FaLinkedin,
      link: 'https://www.linkedin.com/in/danishraza12/',
      name: 'Linkedin',
      color: 'blue-700',
    },
    {
      icon: FaEnvelope,
      link: 'https://mail.google.com/mail/u/0/#inbox?compose=GTvVlcSDXXrlwdBPCKKrwRGBQbxqzHqlQHDllVfRkQJJMzhHWwRNHjwqSshmnvZwcfNqnkDZRkbzh',
      name: 'Gmail',
      color: 'yellow-800',
    },
    {
      icon: BsMedium,
      link: 'https://medium.com/@danish_raza',
      name: 'Medium',
      color: 'black',
    },
  ];
};

export default combineReducers({
  skills: skillsReducer,
  socialMedia: socialMediaReducer,
});
