import styles from './Header.module.scss'
import toDoLogo from '../../assets/todo-logo.svg'

export function Header() {
	return (
		<header className={styles.header}>
			<img src={toDoLogo}  />
		</header>
	)
}