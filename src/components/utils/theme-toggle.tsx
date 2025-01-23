import { useEffect, useState } from 'react';
import Moon from '../icons/moon';
import Sun from '../icons/sun';
import styles from './theme-toggle.module.scss';

export default function ThemeToggle() {
  const [dark, setDark] = useState(false);

  useEffect(() => {
    if (dark) document.body.classList.add('dark');
    else document.body.classList.remove('dark');
  }, [dark]);

  return (
    <div className={styles.toggle} onClick={() => setDark(!dark)}>
      <div className={styles.inner}>
        <Sun className={styles.sun} />
        <Moon className={styles.moon} />
      </div>
    </div>
  );
}
