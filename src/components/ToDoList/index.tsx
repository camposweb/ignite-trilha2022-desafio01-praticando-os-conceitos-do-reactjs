import { CreateToDo } from '../CreateTask'
import { InfoTask } from '../InfoTask'
import { NotTask } from '../NotTask'
import { Task, TaskType } from '../Task'
import styles from './ToDoList.module.scss'

const tasks: TaskType[] = [
	{
		id: crypto.randomUUID(),
		content: 'Academia',
		isCompleted: true,
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
]

export function ToDoList() {

	const tasksCount = tasks.length;
	const tasksCompleted = tasks.filter(task => task.isCompleted).length

	return (
		<div className={styles.viewList}>
			{/* <div className={styles.infoTask}>
				<strong>Tarefas criadas: <span>5</span></strong> 
				<strong>Concluídas: <span>0 de 5</span></strong>
			</div> */}
			<main>
			<InfoTask infoCreateTask={tasksCount} infoDoneTask={tasksCompleted} />
			{/* <NotTask /> */}
			{tasks.map(task => {
				return (
					<Task
						key={task.id}
						task={task}
					/>
				)
			})}
			</main>
		</div>
	)
}