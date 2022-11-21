import React from 'react';
import { useParams } from 'react-router-dom';
import { useAppSelector } from '../../hooks/hooks';

import { Title } from '../';
import s from './JobAdditional.module.css';

const JobAdditional: React.FunctionComponent = () => {
  const { currentJob } = useAppSelector(state => state.jobs);
  const { jobId } = useParams();
  if (!currentJob) {
    return null;
  }

  return (
    <section className={s.section}>
      <Title>Additional info</Title>

      {currentJob?.employment_type && (
        <section className={s.employment}>
          <h3 className={s.employment__title}>Employment type</h3>
          <ul className={s.employment__list}>
            {currentJob.employment_type.map((item, index) => (
              <li
                key={`${jobId}employment${index}`}
                className={s.employment__item}
              >
                {item}
              </li>
            ))}
          </ul>
        </section>
      )}

      {currentJob.benefits && (
        <section className={s.benefits}>
          <h3 className={s.benefits__title}>Benefits</h3>
          <ul className={s.benefits__list}>
            {currentJob.benefits.map((item, index) => (
              <li key={`${jobId}benefits${index}`} className={s.benefits__item}>
                {item}
              </li>
            ))}
          </ul>
        </section>
      )}
    </section>
  );
};

export default JobAdditional;
