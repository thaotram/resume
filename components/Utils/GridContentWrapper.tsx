import styles from './GridContentWrapper.module.scss';
import cn from 'classnames';

export default function GridContentWrapper(props: {
    title?: string;
    className?: string;
    children: React.ReactNode;
}) {
    return (
        <div className={cn(styles['grid-content'], props.className)}>
            {props.title && (
                <div className={styles['grid-content-title']}>
                    {props.title}
                </div>
            )}
            {props.children}
        </div>
    );
}
