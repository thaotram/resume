import {
  faBookOpen,
  faGamepad,
  faPlaneDeparture,
} from '@fortawesome/free-solid-svg-icons';
import GridContent from '../utils/grid-content';
import GridContentWrapper from '../utils/grid-content-wrapper';

export default function ResumeInterests({ className }: { className?: string }) {
  return (
    <GridContentWrapper title="Interest" className={className}>
      <GridContent type={faPlaneDeparture} noLine>
        Traveling
      </GridContent>
      <GridContent type={faBookOpen} noLine>
        Reading
      </GridContent>
      <GridContent type={faGamepad} noLine>
        Video Games
      </GridContent>
    </GridContentWrapper>
  );
}
