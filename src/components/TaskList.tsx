/* eslint-disable jsx-a11y/label-has-associated-control */
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import TaskComponent from './TaskComponent';

import { RootState, AppDispatch } from '../store';
import { Task, fetchTasks, addTask } from './tasksSlice';
import { selectUserProfile } from './userProfileSlice';

function TaskList() {
  const dispatch: AppDispatch = useDispatch();
  const userId = useSelector(selectUserProfile).id;

  const handleCreateTask = async () => {
    const data = {
      userId,
      taskName: 'New Task',
      taskDescription: 'New Task Description',
      taskDueDate: '2021-10-10',
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
      <div>
        <h2>Tasks</h2>
        <button type="button" onClick={handleCreateTask}>Add New Task</button>
        <ul className="task-list">
          {tasks?.map((task: Task) => (
            <TaskComponent key={task.id} task={task} />
          ))}
        </ul>
      </div>
    );
  }

  return (
    <div>
      <h2>Tasks</h2>
      <ul className="task-list">
        <li>No tasks</li>
        <button type="button" onClick={handleCreateTask}>Add New Task</button>
      </ul>
    </div>
  );
}

export default TaskList;
