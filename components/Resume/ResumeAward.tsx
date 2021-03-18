import GridContentWrapper from '../Utils/GridContentWrapper';
import GridContent from '../Utils/GridContent';
import { faAward } from '@fortawesome/free-solid-svg-icons';

export default function ResumeAward(props: { className?: string }) {
    return (
        <GridContentWrapper title="award" className={props.className}>
            <GridContent type={faAward} size="base">
                <div className="text-base font-semibold">04/2016</div>
            </GridContent>
            <GridContent>
                <div className="font-semibold">
                    Mathematical Olympiad for Students - Algebra
                </div>
                <div>Third Award</div>
            </GridContent>
        </GridContentWrapper>
    );
}
