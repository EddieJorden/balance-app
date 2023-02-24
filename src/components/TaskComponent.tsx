/* eslint-disable max-len */
/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import styled from 'styled-components';
import { AsyncThunkAction } from '@reduxjs/toolkit';
import { deleteTask, fetchTasks, updateTask } from './tasksSlice';
import { AppDispatch } from '../store';

const Container = styled.div`
  border: 1px solid #ccc;
  padding: 10px;
  margin: 10px;
  border-radius: 5px;
  font-size: 12px;
`;

const Label = styled.label`
  margin-right: 5px;
  font-weight: bold;
`;

const Input = styled.input`
  padding: 5px;
  margin-right: 10px;
  border: none;
  border-bottom: 1px solid #ccc;
  outline: none;
  font-size: 12px;
`;

const TaskInputContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 10px;
`;

const TaskLine = styled.div`
  display: flex;
  justify-content: space-between;
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
  const taskDueDate = new Date(task.task_due_date.replace(/-/g, '/').replace(/T.+/, ''));
  const formattedTaskDueDate = taskDueDate.toDateString();

  const [editing, setEditing] = useState(false);
  const [name, setName] = useState(task.task_name);
  const [description, setDescription] = useState(task.task_description);
  const [dueDate, setDueDate] = useState(formattedTaskDueDate);
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
    dispatch(fetchTasks(task.user_id));
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
        <TaskInputContainer>
          <Label htmlFor="task-name">Task Name:</Label>
          <Input
            type="text"
            id="task-name"
            value={name}
            onChange={(e: { target: { value: React.SetStateAction<string>; }; }) => setName(e.target.value)}
          />
        </TaskInputContainer>
        <TaskInputContainer>
          <Label htmlFor="task-description">Description:</Label>
          <Input
            type="text"
            id="task-description"
            value={description}
            onChange={(e: { target: { value: React.SetStateAction<string>; }; }) => setDescription(e.target.value)}
          />
        </TaskInputContainer>
        <TaskInputContainer>
          <Label htmlFor="task-due-date">Due Date:</Label>
          <Input
            type="date"
            id="task-due-date"
            value={dueDate}
            onChange={(e: { target: { value: React.SetStateAction<string>; }; }) => setDueDate(e.target.value)}
          />
        </TaskInputContainer>
        <TaskInputContainer>
          <Label htmlFor="task-priority">Priority:</Label>
          <Input
            type="text"
            id="task-priority"
            value={priority}
            onChange={(e: { target: { value: React.SetStateAction<string>; }; }) => setPriority(e.target.value)}
          />
        </TaskInputContainer>
        <TaskInputContainer>
          <Label htmlFor="task-status">Status:</Label>
          <Input
            type="text"
            id="task-status"
            value={status}
            onChange={(e: { target: { value: React.SetStateAction<string>; }; }) => setStatus(e.target.value)}
          />
        </TaskInputContainer>
        <Button onClick={handleSave}>Save</Button>
      </Container>
    );
  }

  return (
    <Container>
      <TaskLine>
        Task Name
        <Name>{task.task_name}</Name>
      </TaskLine>
      <TaskLine>
        Description
        <Description>{task.task_description}</Description>
      </TaskLine>
      <TaskLine>
        Due Date
        <DueDate>{formattedTaskDueDate}</DueDate>
      </TaskLine>
      <TaskLine>
        Priority
        <Priority>{task.task_priority}</Priority>
      </TaskLine>
      <TaskLine>
        Status
        <Status>{task.task_status}</Status>
      </TaskLine>

      <Button onClick={() => setEditing(true)}>Edit</Button>
      <Button onClick={handleDelete}>Delete</Button>
    </Container>
  );
}

export default TaskComponent;
