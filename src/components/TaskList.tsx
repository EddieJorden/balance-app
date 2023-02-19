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

        No tasks
      </ul>
    </div>
  );
}

export default TaskList;
