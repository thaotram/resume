import { faGithub, faGooglePlay } from '@fortawesome/free-brands-svg-icons';
import { faFeatherAlt, faStore } from '@fortawesome/free-solid-svg-icons';
import GridContent from '../Utils/GridContent';
import GridContentWrapper from '../Utils/GridContentWrapper';

export default function ResumeReferences(props: { className?: string }) {
    return (
        <GridContentWrapper title="References" className={props.className}>
            <GridContent type={faGithub} noLine={true}>
                <span className="font-semibold">Github: </span>
                <a href="https://github.com/thaotram" target="_blank">
                    https://github.com/thaotram
                </a>
            </GridContent>
            <GridContent type={faFeatherAlt} noLine={true}>
                <span className="font-semibold">Resume: </span>
                <a href="https://thaotram.netlify.app" target="_blank">
                    https://thaotram.netlify.app
                </a>
            </GridContent>{' '}
            <GridContent type={faGooglePlay} noLine={true}>
                <span className="font-semibold">Where is your money? </span>
                <a
                    href="https://play.google.com/store/apps/details?id=uit.money"
                    target="_blank"
                >
                    https://play.google.com/store/apps/details?id=uit.money
                </a>
            </GridContent>
        </GridContentWrapper>
    );
}
