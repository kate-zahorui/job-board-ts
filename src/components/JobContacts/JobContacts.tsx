import React from 'react';

import { useAppSelector } from '../../hooks/hooks';

import { Title } from '../';
import s from './JobContacts.module.css';

const JobContacts: React.FunctionComponent = () => {
  const { currentJob } = useAppSelector(state => state.jobs);
  if (!currentJob) {
    return null;
  }

  return (
    <section>
      <div className={s.mobile}>
        <Title>Contacts</Title>
      </div>
      <div className={s.contacts}>
        <div className={s.contacts__bg}>
          <div className={s.contacts__text}>
            <h3 className={s.contacts__name}>{currentJob.name}</h3>
            <address className={s.contacts__address}>
              {currentJob.address}
            </address>
            <address>
              <a href={`tel:${currentJob.phone}`} className={s.contacts__link}>
                {currentJob.phone}
              </a>
              <a
                href={`mailto:${currentJob.email}`}
                className={s.contacts__link}
              >
                {currentJob.email}
              </a>
            </address>
          </div>

          <div className={s.map}>Map</div>
        </div>
      </div>
    </section>
  );
};

export default JobContacts;
