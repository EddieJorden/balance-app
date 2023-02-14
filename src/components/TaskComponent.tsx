import {
  useDispatch,
} from 'react-redux';
import styled from 'styled-components';

import { udateUserTask, editUserTask, deleteUserTask } from './userSlice';

const TaskBox = styled.div`
    padding: 10px;
    margin: 10px;
    border: 1px solid #ccc;
    background-color: #f9f9f9;
    display: flex;
    flex-wrap: wrap;
    align-items: center;
`;

function Task({ task }: any) {
  const dispatch = useDispatch();
  return (
    <TaskBox>
      <p>
        Task Name:
        {task.taskName}
      </p>
      <p>
        Time Commitment:
        {task.timeCommitment}
      </p>
      <label htmlFor={`task-${task.id}`}>
        <input aria-label="Complete" type="checkbox" checked={task.completionStatus} onChange={() => dispatch(udateUserTask(task.id))} />
        Complete
      </label>
      <button type="button" onClick={() => dispatch(deleteUserTask(task.id))}>Delete</button>
      <button type="button" onClick={() => dispatch(editUserTask(task))}>Edit</button>

    </TaskBox>
  );
}

export default Task;
