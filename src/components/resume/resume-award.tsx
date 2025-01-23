import { faAward } from '@fortawesome/free-solid-svg-icons';
import GridContent from '../utils/grid-content';
import GridContentWrapper from '../utils/grid-content-wrapper';

export default function ResumeAward({ className }: { className?: string }) {
  return (
    <GridContentWrapper title="award" className={className}>
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
