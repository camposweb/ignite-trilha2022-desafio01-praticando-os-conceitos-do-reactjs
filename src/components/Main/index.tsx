import { useState } from 'react'
import { CreateTask } from '../CreateTask'
import { NotTask } from '../NotTask'
import { Task, TaskType } from '../Task'
import styles from './Main.module.scss'


export function Main() {

	const [tasks, setTasks] = useState<TaskType[]>([
		{
			id: crypto.randomUUID(),
			content: 'Academia',
			isCompleted: false,
		},
		{
			id: crypto.randomUUID(),
			content: 'Estudar',
			isCompleted: false
		},
		{
			id: crypto.randomUUID(),
			content: 'trabalhar',
			isCompleted: false
		}
	])

	const tasksCount = tasks.length;
	const tasksCompleted = tasks.filter(task => task.isCompleted).length


	function createTask(taskTitle: string) {
		setTasks([...tasks,
		{
			id: crypto.randomUUID(),
			content: taskTitle,
			isCompleted: false
		}
		]);
	}

	function toggleTaskCompletedById(taskId: string) {
		const toggleTask = tasks.map((task) => {
			if (task.id === taskId) {
				return {
					...task,
					isCompleted: !task.isCompleted,
				};
			}
			return task;
		});
		setTasks(toggleTask);
	}

	function deleteTaskById(taskId: string) {
		const taskDelete = tasks.filter(task => {
			return task.id !== taskId;
		})
		setTasks(taskDelete);
	}

	return (
		<div className={styles.wrapper}>
			<CreateTask onCreateTask={createTask} />
			<div className={styles.viewList}>
				<div className={styles.infoTask}>
					<strong>Tarefas criadas: <span>{tasksCount}</span></strong>
					<strong>Concluídas: <span>{tasksCompleted} de {tasksCount}</span></strong>
				</div>
				<main>
					{tasksCount <= 0 ? <NotTask /> :
						tasks.map(task => {
							return (
								<Task
									key={task.id}
									task={task}
									onCompleted={toggleTaskCompletedById}
									onDeleteTask={deleteTaskById}
								/>
							)
						})
					}
				</main>
			</div>
		</div>
	)
}