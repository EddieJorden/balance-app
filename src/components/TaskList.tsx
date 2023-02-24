/* eslint-disable jsx-a11y/label-has-associated-control */
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';
import TaskComponent from './TaskComponent';

import { RootState, AppDispatch } from '../store';
import { Task, fetchTasks, addTask } from './tasksSlice';
import { selectUserProfile } from './userProfileSlice';

const StyledTaskList = styled.div`


  button {
    padding: 10px 20px;
    border: none;
    border-radius: 5px;
    background-color: #00509d;
    color: white;
    font-size: 1.2rem;
    cursor: pointer;
    transition: all 0.2s ease-in-out;

    &:hover {
      background-color: #1a6eb1;
    }
  }

`;

function TaskList() {
  const dispatch: AppDispatch = useDispatch();
  const userId = useSelector(selectUserProfile).id;

  const handleCreateTask = async () => {
    const data = {
      userId,
      taskName: 'Task Name',
      taskDescription: 'Task Description',
      taskDueDate: 'due date',
      taskPriority: 'High',
      taskStatus: 'Not Started',
    };
    try {
      await dispatch(addTask(data));
      dispatch(fetchTasks(userId));
    } catch (error) {
      console.log('Error adding task:', error);
    }
  };
  useEffect(() => {
    dispatch(fetchTasks(userId));
  }, []);

  const tasks = useSelector((state: RootState) => state.tasks.tasks);

  if (tasks.length) {
    return (
      <StyledTaskList>
        <h2>Tasks</h2>
        <button type="button" onClick={handleCreateTask}>Add New Task</button>
        <div>
          {tasks?.map((task: Task) => (
            <TaskComponent key={task.id} task={task} />
          ))}
        </div>
      </StyledTaskList>
    );
  }

  return (
    <StyledTaskList>
      <h2>Tasks</h2>
      <ul>
        <li>No tasks</li>
        <button type="button" onClick={handleCreateTask}>Add New Task</button>
      </ul>
    </StyledTaskList>
  );
}

export default TaskList;
