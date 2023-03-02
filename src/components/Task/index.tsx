import { Trash } from 'phosphor-react'
import styles from './Task.module.scss'


export interface TaskType {
	id: string;
	content: string;
	isCompleted: boolean;
}

export interface TaskProps {
	task: TaskType;
	onDeleteTask: (taskId: string) => void;
	onCompleted: (taskId: string) => void;
}

export function Task({ task, onDeleteTask, onCompleted }: TaskProps) {

	return (
		<div className={styles.containerTask}>
			<div className={styles.contentTask}>
				<form>
					<input
						type="checkbox"
						id={`checkboxId-${task.id}`}
						//checked={task.isCompleted}
						onClick={() => onCompleted(task.id)}
					/>
					<label htmlFor={`checkboxId-${task.id}`}></label>
				</form>
				<p className={task.isCompleted ? styles.textCompleted : ''}>{task.content}</p>
				<button onClick={() => onDeleteTask(task.id)}>
					<Trash size={24} />
				</button>
			</div>
		</div>
	)
}