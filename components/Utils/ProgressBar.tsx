import styles from './ProgressBar.module.scss';

export default function ProgressBar(props: { content: string; value: number }) {
    return (
        <div className="mt-1.5">
            <div>{props.content}</div>
            <div className={styles.progress}>
                <div
                    className={styles['progress-bar']}
                    role="progressbar"
                    style={{ width: props.value + '%' }}
                    aria-valuenow={props.value}
                    aria-valuemin={0}
                    aria-valuemax={100}
                />
            </div>
        </div>
    );
}
