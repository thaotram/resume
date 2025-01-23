import { faUserGraduate } from '@fortawesome/free-solid-svg-icons';
import GridContent from '../utils/grid-content';
import GridContentWrapper from '../utils/grid-content-wrapper';

export default function ResumeEducation({ className }: { className?: string }) {
  return (
    <GridContentWrapper title="EDUCATION" className={className}>
      <GridContent type={faUserGraduate} size="base">
        <div className="text-base font-semibold dark:text-header">
          UNIVERSITY OF INFORMATION TECHNOLOGY (UIT)
        </div>
        <div>Software Engineering</div>
        <div>2015-2020</div>
        <div className="font-semibold">GPA: 7.76/10</div>
      </GridContent>
    </GridContentWrapper>
  );
}
