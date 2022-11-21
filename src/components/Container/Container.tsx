import React from 'react';

import s from './Container.module.css';

interface IProps {
  children: any;
}

const Container: React.FunctionComponent<IProps> = ({ children }) => {
  return <div className={s.container}>{children}</div>;
};

export default Container;
