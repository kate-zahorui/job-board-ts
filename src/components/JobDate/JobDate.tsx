import React from 'react';
import { useLocation } from 'react-router-dom';

import s from './JobDate.module.css';

interface IProps {
  date: string;
}

const JobDate: React.FunctionComponent<IProps> = ({ date }) => {
  const location = useLocation();
  const dateClass = location.pathname === '/' ? 'list__date' : 'job__date';

  const getFullDays = (ms: number): number => {
    const day = 1000 * 60 * 60 * 24;
    const days = Math.floor(ms / day);

    return days;
  };

  const getPublicationDate = (time: string): string | undefined => {
    if (!time) return;

    const currentTime = Date.now();
    const publicationDate = new Date(time);
    const publicationTime = publicationDate.getTime();

    const daysPassed = getFullDays(currentTime - publicationTime);

    if (daysPassed === 0) {
      return 'Posted today';
    }
    return `Posted ${daysPassed} days ago`;
  };

  const postTime = getPublicationDate(date);

  return (
    <time dateTime={date} className={s[dateClass]}>
      {postTime}
    </time>
  );
};

export default JobDate;
