import { configureStore } from '@reduxjs/toolkit';

import jobsReducer from './jobs/jobsSlice';

const store = configureStore({
  reducer: {
    jobs: jobsReducer,
  },
});

export { store };

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
