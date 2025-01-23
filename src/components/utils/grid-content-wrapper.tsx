import styles from './grid-content-wrapper.module.scss';

export default function GridContentWrapper({
  title,
  className,
  children,
}: {
  title?: string;
  className?: string;
  children: React.ReactNode;
}) {
  return (
    <div className={cn(styles['grid-content'], className)}>
      {title && <div className={styles['grid-content-title']}>{title}</div>}
      {children}
    </div>
  );
}
