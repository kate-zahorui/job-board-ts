import React from 'react';

import s from './Title.module.css';

interface IProps {
  children: any;
}

const Title: React.FunctionComponent<IProps> = ({ children }) => {
  return <h2 className={s.title}>{children}</h2>;
};

export default Title;
