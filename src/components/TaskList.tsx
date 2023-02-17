import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { RootState, AppDispatch } from '../store';
import { Task, fetchTasks, deleteTask } from './tasksSlice';

function TaskList() {
  const dispatch: AppDispatch = useDispatch();
  const userId = 17;
  const taskId = 4;

  useEffect(() => {
    dispatch(fetchTasks(userId));
  }, [dispatch]);

  const tasks = useSelector((state: RootState) => state.tasks.tasks);

  console.log(tasks);

  if (tasks.length) {
    return (
      <div>
        <h2>Tasks</h2>
        <ul className="task-list">

          {tasks.map((task: Task) => (
            <li key={task.id}>
              <h3>{task.task_name}</h3>
              <p>{task.task_description}</p>
              <p>
                Due Date:
                {task.task_due_Date}
              </p>
              <p>
                Priority:
                {task.task_priority}
              </p>
              <p>
                Status:
                {task.task_status}
              </p>
            </li>
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
