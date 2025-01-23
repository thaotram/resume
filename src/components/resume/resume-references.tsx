import { faGithub, faGooglePlay } from '@fortawesome/free-brands-svg-icons';
import { faFeatherAlt } from '@fortawesome/free-solid-svg-icons';
import GridContent from '../utils/grid-content';
import GridContentWrapper from '../utils/grid-content-wrapper';

export default function ResumeReferences({
  className,
}: {
  className?: string;
}) {
  return (
    <GridContentWrapper title="References" className={className}>
      <GridContent type={faGithub} noLine>
        <span className="font-semibold">Github: </span>
        <a
          href="https://github.com/thaotram"
          target="_blank"
          rel="noreferrer noopener"
        >
          https://github.com/thaotram
        </a>
      </GridContent>
      <GridContent type={faFeatherAlt} noLine>
        <span className="font-semibold">Resume: </span>
        <a
          href="https://thaotram.netlify.app"
          target="_blank"
          rel="noreferrer noopener"
        >
          https://thaotram.netlify.app
        </a>
      </GridContent>{' '}
      <GridContent type={faGooglePlay} noLine>
        <span className="font-semibold">Where is your money? </span>
        <a
          href="https://play.google.com/store/apps/details?id=uit.money"
          target="_blank"
          rel="noreferrer noopener"
        >
          https://play.google.com/store/apps/details?id=uit.money
        </a>
      </GridContent>
    </GridContentWrapper>
  );
}