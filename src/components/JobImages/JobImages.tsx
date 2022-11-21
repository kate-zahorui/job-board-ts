import React from 'react';
import { useAppSelector } from '../../hooks/hooks';

import { Title } from '../';
import s from './JobImages.module.css';

const JobImages: React.FunctionComponent = () => {
  const { currentJob } = useAppSelector(state => state.jobs);

  return (
    <>
      {currentJob && (
        <section className={s.section}>
          <Title>Attached images</Title>
          <ul className={s.list}>
            {currentJob.pictures.map((item, index) => (
              <li key={`picture${index}`} className={s.item}>
                <img
                  src={item}
                  alt={`${currentJob.name}_${index}`}
                  height="300"
                  className={s.image}
                />
              </li>
            ))}
          </ul>
        </section>
      )}
    </>
  );
};

export default JobImages;
