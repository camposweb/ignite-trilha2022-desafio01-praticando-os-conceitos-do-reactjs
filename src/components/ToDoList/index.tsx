import { InfoTask } from '../InfoTask'
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

interface TodoListProps {
	onDeleteTask: (taskId: string) => void;
	onCompleted: (taskId: string) => void;
}

export function ToDoList({ onDeleteTask, onCompleted }: TodoListProps) {

	const tasksCount = tasks.length;
	const tasksCompleted = tasks.filter(task => task.isCompleted).length

	return (
		<div className={styles.viewList}>
			<main>
			<InfoTask infoCreateTask={tasksCount} infoDoneTask={tasksCompleted} />
			{tasks.map(task => {
				return (
					<Task
						key={task.id}
						task={task}
						onCompleted={onCompleted}
						onDeleteTask={onDeleteTask}
					/>
				)
			})}
			</main>
		</div>
	)
}