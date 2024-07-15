import styles from './profile-avatar.module.scss'
export const ProfileAvatar = () => {
  return (
    <div className={styles.wrapper}>
      <p className={styles.name}>Michael Nesteruk</p>
      <img className={styles.image} src="https://via.placeholder.com/150" alt="avatar" />
    </div>
  )
}