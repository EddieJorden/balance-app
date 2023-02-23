/* eslint-disable no-param-reassign */
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { prefix } from './utils';

export interface Task {
  id: number;
  user_id: number;
  task_name: string;
  task_description: string;
  task_due_date: string;
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
  return response.data;
});

export const deleteTask = createAsyncThunk('tasks/deleteTask', async (data: {
  userId: number;
  taskId: number;

}) => {
  const response = await axios.post(`${prefix}/users/${data.userId}/tasks/${data.taskId}/delete`);
  return response.data;
});

export const updateTask = createAsyncThunk(
  'tasks/updateTask',
  async (data: {
    userId: number;
    taskId: number;
    taskName: string;
    taskDescription: string;
    taskDueDate: string;
    taskPriority: string;
    taskStatus: string;
  }) => {
    const {
      userId, taskId, taskName, taskDescription, taskDueDate, taskPriority, taskStatus,
    } = data;
    const response = await axios.post(`${prefix}/users/${userId}/tasks/${taskId}/update`, {
      task_name: taskName,
      task_description: taskDescription,
      task_due_date: taskDueDate,
      task_priority: taskPriority,
      task_status: taskStatus,
    });
    return response.data;
  },
);

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
        state.tasks = action.payload;
      })
      .addCase(addTask.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message ?? 'Something went wrong';
      })
      .addCase(updateTask.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(updateTask.fulfilled, (state, action) => {
        state.status = 'succeeded';
        const index = state.tasks.findIndex((task) => task.id === action.payload.id);
        state.tasks[index] = action.payload;
      })
      .addCase(updateTask.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message ?? 'Something went wrong';
      });
  },
});

export const selectTasks = (state: any) => state.tasks.tasks;

export default tasksSlice.reducer;
