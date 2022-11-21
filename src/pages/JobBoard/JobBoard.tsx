import React, { useEffect } from 'react';
import { useAppSelector, useAppDispatch } from '../../hooks/hooks';

import { getJobs } from '../../redux/jobs/jobsOperations';
import { Container, PaginatedList } from '../../components';
import s from './JobBoard.module.css';

const JobBoard: React.FunctionComponent = () => {
  const { items, isLoading, error } = useAppSelector(state => state.jobs);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(getJobs());
  }, [dispatch]);

  const showJobs = items.length > 0 && !error && !isLoading;
  const noJobs = items.length === 0 && !error && !isLoading;

  return (
    <main className={s.background}>
      <Container>
        {isLoading && <p>Loading...</p>}
        {error && <p>Error. {error}</p>}

        {showJobs && <PaginatedList />}
        {noJobs && <p>There're no jobs.</p>}
      </Container>
    </main>
  );
};

export default JobBoard;
