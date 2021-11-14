import { combineReducers } from 'redux';
import { FaReact, FaMicrosoft } from 'react-icons/fa';
import { SiJavascript, SiTailwindcss, SiRedux } from 'react-icons/si';
import { AiOutlineConsoleSql } from 'react-icons/ai';

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
      icon: FaMicrosoft,
      name: '.NET/.NET Core',
      color: '4B0082',
    },
    {
      icon: SiRedux,
      name: 'Redux',
      color: '4B0082',
    },
    {
      icon: SiTailwindcss,
      name: 'TailwindCSS',
      color: '00C0A3',
    },
    {
      icon: AiOutlineConsoleSql,
      name: 'Oracle/SSMS',
      color: '888888',
    },
  ];
};

export default combineReducers({
  skills: skillsReducer,
});
