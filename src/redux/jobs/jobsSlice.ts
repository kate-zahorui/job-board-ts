import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { getJobs } from './jobsOperations';
import { IItem, IState } from '../../types/jobs';

const initialState: IState = {
  items: [],
  currentJob: null,
  isLoading: false,
  error: '',
  perPage: 15,
};

export const jobsSlice = createSlice({
  name: 'jobs',
  initialState,
  reducers: {
    setJob: (state, action: PayloadAction<string>) => {
      const job = state.items.find(i => i.id === action.payload)!;
      state.currentJob = job;
    },
  },
  extraReducers: builder => {
    builder
      .addCase(getJobs.pending, (state, _) => {
        state.isLoading = true;
        state.error = '';
      })
      .addCase(getJobs.fulfilled, (state, action: PayloadAction<IItem[]>) => {
        state.isLoading = false;

        if (action.payload.length > 0) {
          state.items = action.payload;
        }
      })
      .addCase(getJobs.rejected, (state, action: any) => {
        state.isLoading = false;
        state.error = action.payload.message;
      });
  },
});

export const { setJob } = jobsSlice.actions;

export default jobsSlice.reducer;
