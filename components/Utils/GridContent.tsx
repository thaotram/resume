import styles from './GridContent.module.scss';
import cn from 'classnames';
import { IconDefinition } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export default function GridContent(props: {
    children: React.ReactNode;
    type?: 'dot' | 'slash' | IconDefinition;
    size?: 'sm' | 'base';
    position?: 'top' | 'bottom';
    noLine?: boolean;
}) {
    return (
        <>
            <div
                className={cn(
                    styles.line,
                    typeof props.type === 'string' && styles[props.type],
                    props.size === 'base' && styles.base,
                    props.position === 'bottom' && styles.bottom,
                    props.noLine && styles.noLine,
                )}
            >
                {typeof props.type !== 'string' && (
                    <FontAwesomeIcon icon={props.type} />
                )}
            </div>
            <div className={styles.content}>{props.children}</div>
        </>
    );
}
