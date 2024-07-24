import styles from './profile-avatar.module.scss';
import { Profile } from '@/(src)/shared/services/profile/types';
interface Props {
  profile: Profile | null;
}
export const ProfileAvatar = ({ profile }: Props) => {
  if (!profile) {
    return <div>Authorize</div>;
  }
  if (typeof window === 'undefined') {
    return;
  }
  return (
    <div className={styles.wrapper}>
      <p className={styles.name}>
        {profile?.user.firstName} {profile?.user.lastName}
      </p>
      <img
        className={styles.image}
        src={profile?.user.avatarUrl}
        alt="avatar"
      />
    </div>
  );
};
