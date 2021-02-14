import GridContentWrapper from '../Utils/GridContentWrapper';
import GridContent from '../Utils/GridContent';
import styles from './ResumeName.module.scss';
import cn from 'classnames';

export default function ResumeName(props: { className?: string }) {
    return (
        <div className={cn('pt-14 text-right', props.className)}>
            <GridContentWrapper className={cn(styles.name, props.className)}>
                <GridContent>
                    <div className="text-lg font-medium tracking-title -mr-title">
                        LE THI THAO
                    </div>
                    <div className="-mt-1 text-4xl font-bold tracking-widest -mr-widest">
                        TRAM
                    </div>
                </GridContent>
            </GridContentWrapper>
            <div className="mr-12 px-3 py-2 text-xs font-medium tracking-widest bg-yellow-300 uppercase">
                Front-end Web Developer
            </div>
        </div>
    );
}
