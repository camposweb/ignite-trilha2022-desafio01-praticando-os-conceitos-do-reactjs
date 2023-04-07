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