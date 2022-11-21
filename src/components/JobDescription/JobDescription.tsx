import React from 'react';
import { useAppSelector } from '../../hooks/hooks';

import s from './JobDescription.module.css';

const JobDescription: React.FunctionComponent = () => {
  const { currentJob } = useAppSelector(state => state.jobs);
  if (!currentJob) {
    return null;
  }

  // Extracting description text
  const firstSeparation = currentJob?.description.split('Responsopilities:');
  const description = firstSeparation[0];

  // Extracting responsopilities text
  const secondSeparation = firstSeparation[1].split('Compensation & Benefits:');
  const responsopilities = secondSeparation[0];

  // Extracting benefits items text
  const benefits = secondSeparation[1].split('.');
  benefits.pop();

  return (
    <div className={s.description}>
      <p className={s.description__text}>{description}</p>
      <h3 className={s.description__title}>Responsopilities</h3>
      <p className={s.description__text}>{responsopilities}</p>
      <h3 className={s.description__title}>Compensation & Benefits:</h3>
      <p className={s.description__text}>
        Our physicians enjoy a wide range of benefits, including:
      </p>
      <ul className={s.description__list}>
        {benefits &&
          benefits.map((item, index) => (
            <li key={`benefit${index}`} className={s.description__item}>
              {item}
            </li>
          ))}
      </ul>
    </div>
  );
};

export default JobDescription;
