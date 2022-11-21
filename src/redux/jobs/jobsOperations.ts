import { createAsyncThunk } from '@reduxjs/toolkit';
import { UserAPI } from '../../services/api';
import { IItem } from '../../types/jobs';

export const getJobs = createAsyncThunk(
  'jobs/getJobs',
  async (_, { rejectWithValue }) => {
    try {
      const jobs = await UserAPI.fetchJobs();
      return jobs as IItem[];
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);
