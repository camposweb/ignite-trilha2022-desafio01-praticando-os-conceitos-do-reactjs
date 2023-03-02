import { ChangeEvent, FormEvent, useState } from 'react';
import styles from './CreateTask.module.scss'
import { PlusCircle } from 'phosphor-react'

interface CreateTaskProps {
	onCreateTask: (taskTitle: string) => void;
}

export function CreateTask({ onCreateTask }: CreateTaskProps) {

	const [newTask, setNewTask] = useState('');

	function handleCreateNewTask(event: FormEvent) {
		event.preventDefault();

		onCreateTask(newTask);
		setNewTask('');
	}

	function handleNewTaskChange(event: ChangeEvent<HTMLInputElement>) {
		event.target.setCustomValidity('');
		setNewTask(event.target.value)
	}

	return (
		<form 
			className={styles.taskForm}
			onSubmit={handleCreateNewTask}
		>
			<input 
				type="text" 
				placeholder='Adicione uma nova tarefa'
				value={newTask}
				onChange={handleNewTaskChange}
			/>
			<button type="submit">Criar <PlusCircle size={16} weight='bold' /></button>
		</form>
	)
}