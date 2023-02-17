/* eslint-disable no-param-reassign */
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { prefix } from './utils';

export interface Task {
  id: number;
  task_name: string;
  task_description: string;
  task_due_Date: string;
  task_priority: string;
  task_status: string;
}

interface TasksState {
  tasks: Task[];
  status: 'idle' | 'loading' | 'succeeded' | 'failed';
  error: string | null;
}

const initialState: TasksState = {
  tasks: [],
  status: 'idle',
  error: null,
};

export const fetchTasks = createAsyncThunk('tasks/fetchTasks', async (userId: number) => {
  const response = await axios.get(`${prefix}/users/${userId}/tasks`);
  return response.data;
});

export const addTask = createAsyncThunk('tasks/addTask', async (data: {
  userId: number;
  taskName: string;
  taskDescription: string;
  taskDueDate: string;
  taskPriority: string;
  taskStatus: string;
}) => {
  const response = await axios.post(`${prefix}/users/${data.userId}/tasks`, data);
  console.log('response.data', response.data);
  return response.data;
});

export const deleteTask = createAsyncThunk('tasks/deleteTask', async (data: {
  userId: number;
  taskId: number;
}) => {
  const response = await axios.post(`${prefix}/users/${data.userId}/tasks/${data.taskId}/delete`);
  console.log('response', response.data);
  return response.data;
});

const tasksSlice = createSlice({
  name: 'tasks',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchTasks.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchTasks.fulfilled, (state, action) => {
        state.status = 'succeeded';
        console.log('fetchTasks fulfilled', action.payload);
        state.tasks = action.payload;
      })
      .addCase(fetchTasks.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message ?? 'Something went wrong';
      })
      .addCase(addTask.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(addTask.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.tasks.push(action.payload);
      })
      .addCase(addTask.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message ?? 'Something went wrong';
      });
  },
});

export const selectTasks = (state: any) => state.tasks;

export default tasksSlice.reducer;
