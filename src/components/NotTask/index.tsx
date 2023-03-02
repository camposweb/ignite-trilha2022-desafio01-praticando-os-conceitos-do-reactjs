import styles from './NotTask.module.scss'
import ClipBoard from '../../assets/clipboard.svg'

export function NotTask() {
	return (
		<div className={styles.notTask}>
			<img src={ClipBoard} />
			<strong>Você ainda não tem tarefas cadastradas</strong>
			<span>Crie tarefas e organize seus itens a fazer</span>
		</div>
	)
}