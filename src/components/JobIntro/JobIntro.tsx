import React from 'react';
import { useAppSelector } from '../../hooks/hooks';

import { JobDate } from '../';
import s from './JobIntro.module.css';

const JobIntro: React.FunctionComponent = () => {
  const { currentJob } = useAppSelector(state => state.jobs);
  if (!currentJob) {
    return null;
  }

  const getSalary = (salaryAmount: string): string => {
    const salaryRange = salaryAmount.replace('k', ' 000').replace('k', ' 000');
    return `€ ${salaryRange}`;
  };

  const salary = getSalary(currentJob.salary);

  return (
    <>
      {currentJob && (
        <div className={s.job}>
          <h2 className={s.job__title}>{currentJob.title}</h2>
          <JobDate date={currentJob.createdAt} />

          <div className={s.salary}>
            <p className={s.salary__text}>Brutto, per year</p>
            <p className={s.salary__number}>{salary}</p>
          </div>
        </div>
      )}
    </>
  );
};

export default JobIntro;
