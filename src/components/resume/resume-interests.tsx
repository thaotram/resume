import {
    faHandsPraying,
    faPlaneDeparture,
    faSeedling
} from '@fortawesome/free-solid-svg-icons';
import GridContent from '../utils/grid-content';
import GridContentWrapper from '../utils/grid-content-wrapper';

export default function ResumeInterests({ className }: { className?: string }) {
  return (
    <GridContentWrapper title="Interest" className={className}>
      <GridContent type={faSeedling} noLine>
        Gardening
      </GridContent>
      <GridContent type={faPlaneDeparture} noLine>
        Traveling
      </GridContent>
      <GridContent type={faHandsPraying} noLine>
        Yoga
      </GridContent>
    </GridContentWrapper>
  );
}
