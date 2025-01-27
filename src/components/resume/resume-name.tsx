import GridContent from '../utils/grid-content';
import GridContentWrapper from '../utils/grid-content-wrapper';
import styles from './resume-name.module.scss';

export default function ResumeName({ className }: { className?: string }) {
  return (
    <div className={cn('pt-12 text-right', className)}>
      <GridContentWrapper className={cn(styles.name)}>
        <GridContent>
          <div className="-mr-title text-lg font-medium tracking-title">
            LE THI THAO
          </div>
          <div className="-mr-widest -mt-1 text-4xl font-bold tracking-widest">
            TRAM
          </div>
        </GridContent>
      </GridContentWrapper>
      <div className="mr-12 bg-orange px-3 py-2 text-xs font-medium uppercase tracking-widest lg:mr-0 dark:text-blue-50">
        Front-end Developer
      </div>
    </div>
  );
}
