import GridContentWrapper from '../Utils/GridContentWrapper';
import GridContent from '../Utils/GridContent';
import styles from './ResumeName.module.scss';
import cn from 'classnames';

export default function ResumeName(props: { className?: string }) {
    return (
        <div className={cn('pt-12 text-right', props.className)}>
            <GridContentWrapper className={cn(styles.name, props.className)}>
                <GridContent>
                    <div className="-mr-title text-lg font-medium tracking-title">
                        LE THI THAO
                    </div>
                    <div className="-mr-widest -mt-1 text-4xl font-bold tracking-widest">
                        TRAM
                    </div>
                </GridContent>
            </GridContentWrapper>
            <div className="mr-12 px-3 py-2 dark:text-blue-50 text-xs font-medium tracking-widest bg-orange uppercase lg:mr-0">
                Front-end Web Developer
            </div>
        </div>
    );
}
