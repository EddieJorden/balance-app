/* eslint-disable jsx-a11y/label-has-associated-control */
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import TaskComponent from './TaskComponent';

import { RootState, AppDispatch } from '../store';
import { Task, fetchTasks } from './tasksSlice';

function TaskList() {
  const dispatch: AppDispatch = useDispatch();
  const userId = 17;

  useEffect(() => {
    dispatch(fetchTasks(userId));
  }, [dispatch]);

  const tasks = useSelector((state: RootState) => state.tasks.tasks);

  console.log('tasks', tasks);

  if (tasks.length) {
    return (
      <div>
        <h2>Tasks</h2>
        <form>
          <label htmlFor="taskName">Task Name</label>
          <input type="text" id="taskName" name="taskName" />
          <label htmlFor="taskDescription">Task Description</label>
          <input type="text" id="taskDescription" name="taskDescription" />
          <label htmlFor="taskDueDate">Task Due Date</label>
          <input type="text" id="taskDueDate" name="taskDueDate" />
          <label htmlFor="taskPriority">Task Priority</label>
          <input type="text" id="taskPriority" name="taskPriority" />
          <label htmlFor="taskStatus">Task Status</label>
          <input type="text" id="taskStatus" name="taskStatus" />
          <button type="submit">Create Task</button>
        </form>

        <ul className="task-list">
          {tasks.map((task: Task) => (
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
      </ul>
    </div>
  );
}

export default TaskList;
