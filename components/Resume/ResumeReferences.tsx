import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { faFeatherAlt } from '@fortawesome/free-solid-svg-icons';
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
            </GridContent>
        </GridContentWrapper>
    );
}
