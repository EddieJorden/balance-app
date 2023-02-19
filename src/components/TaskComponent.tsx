import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import styled from 'styled-components';
import { AsyncThunkAction } from '@reduxjs/toolkit';
import { deleteTask, updateTask } from './tasksSlice';
import { AppDispatch } from '../store';

const Container = styled.div`
  border: 1px solid #ccc;
  padding: 10px;
  margin: 10px;
  border-radius: 5px;
`;

const Name = styled.h3`
  margin: 0 0 10px 0;
`;

const Description = styled.p`
  margin: 0 0 10px 0;
`;

const DueDate = styled.p`
  margin: 0 0 10px 0;
`;

const Priority = styled.p`
  margin: 0 0 10px 0;
`;

const Status = styled.p`
  margin: 0 0 10px 0;
`;

const Button = styled.button`
  margin: 0 5px;
`;

interface TaskProps {
  task: {
    id: number;
    user_id: number;
    task_name: string;
    task_description: string;
    task_due_date: string;
    task_priority: string;
    task_status: string;
  };
}

function TaskComponent({ task }: TaskProps) {
  const [editing, setEditing] = useState(false);
  const [name, setName] = useState(task.task_name);
  const [description, setDescription] = useState(task.task_description);
  const [dueDate, setDueDate] = useState(task.task_due_date);
  const [priority, setPriority] = useState(task.task_priority);
  const [status, setStatus] = useState(task.task_status);

  const dispatch: AppDispatch = useDispatch();

  const handleDelete = () => {
    const deleteTaskAction: AsyncThunkAction<any, {
      userId: number;
      taskId: number;
    }, {}
    > = deleteTask({
      userId: task.user_id,
      taskId: task.id,
    });
    dispatch(deleteTaskAction);
  };

  const handleSave = () => {
    // Update task in Redux store
    dispatch(updateTask({
      userId: task.user_id,
      taskId: task.id,
      taskName: name,
      taskDescription: description,
      taskDueDate: dueDate,
      taskPriority: priority,
      taskStatus: status,
    }));
    setEditing(false);
  };

  if (editing) {
    return (
      <Container>
        <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
        <input type="text" value={description} onChange={(e) => setDescription(e.target.value)} />
        <input type="text" value={dueDate} onChange={(e) => setDueDate(e.target.value)} />
        <input type="text" value={priority} onChange={(e) => setPriority(e.target.value)} />
        <input type="text" value={status} onChange={(e) => setStatus(e.target.value)} />
        <Button onClick={handleSave}>Save</Button>
      </Container>
    );
  }

  return (
    <Container>
      <Name>{task.task_name}</Name>
      <Description>{task.task_description}</Description>
      <DueDate>{task.task_due_date}</DueDate>
      <Priority>{task.task_priority}</Priority>
      <Status>{task.task_status}</Status>
      <Button onClick={() => setEditing(true)}>Edit</Button>
      <Button onClick={handleDelete}>Delete</Button>
    </Container>
  );
}

export default TaskComponent;
