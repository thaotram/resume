import type { IconProp } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import styles from './grid-content.module.scss';

export default function GridContent({
  children,
  type,
  size,
  position,
  noLine,
}: {
  children: React.ReactNode;
  type?: 'dot' | 'slash' | IconProp;
  size?: 'sm' | 'base';
  position?: 'top' | 'bottom';
  noLine?: boolean;
}) {
  return (
    <>
      <div
        className={cn(
          styles.line,
          (type === 'dot' || type === 'slash') && styles[type],
          size === 'base' && styles.base,
          position === 'bottom' && styles.bottom,
          noLine && styles['no-line'],
        )}
      >
        {type && type !== 'dot' && type !== 'slash' && (
          <FontAwesomeIcon icon={type} />
        )}
      </div>
      <div className={styles.content}>{children}</div>
    </>
  );
}
