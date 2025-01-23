import styles from './progress-bar.module.scss';

export default function ProgressBar({
  content,
  value,
}: {
  content: string;
  value: number;
}) {
  return (
    <div className="mt-1.5">
      <div>{content}</div>
      <div className={styles.progress}>
        <div
          className={styles['progress-bar']}
          role="progressbar"
          style={{ width: `${value}%` }}
          aria-valuenow={value}
          aria-valuemin={0}
          aria-valuemax={100}
        />
      </div>
    </div>
  );
}
