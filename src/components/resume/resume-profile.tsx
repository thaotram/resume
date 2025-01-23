import { faPen } from '@fortawesome/free-solid-svg-icons';
import GridContent from '../utils/grid-content';
import GridContentWrapper from '../utils/grid-content-wrapper';

export default function ResumeProfile({ className }: { className?: string }) {
  return (
    <GridContentWrapper title="PROFILE" className={className}>
      <GridContent type={faPen}>
        An energetic, enthusiastic and responsible individual looking for
        front-end developer position. Hard-working and willing to learn new
        knowledge and technology. Easily adapted to teamwork environment.
      </GridContent>
    </GridContentWrapper>
  );
}
