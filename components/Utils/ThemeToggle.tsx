import { useEffect, useState } from 'react';
import Moon from '../Icons/Moon';
import Sun from '../Icons/Sun';
import styles from './ThemeToggle.module.scss';

export default function ThemeToggle(props: { className?: string }) {
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
