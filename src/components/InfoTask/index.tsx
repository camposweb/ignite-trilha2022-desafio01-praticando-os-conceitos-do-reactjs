import styles from './InfoTask.module.scss'

interface InfoTaskProps {
	infoCreateTask: number;
	infoDoneTask: number;
}

export function InfoTask({ infoCreateTask, infoDoneTask }: InfoTaskProps) {
	return (
		<div className={styles.infoTask}>
			<strong>Tarefas criadas: <span>{infoCreateTask}</span></strong>
			<strong>Concluídas: <span>{infoDoneTask} de {infoCreateTask}</span></strong>
		</div>
	)
}