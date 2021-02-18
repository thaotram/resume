import {
    faBookOpen,
    faGamepad,
    faPlaneDeparture,
} from '@fortawesome/free-solid-svg-icons';
import GridContent from '../Utils/GridContent';
import GridContentWrapper from '../Utils/GridContentWrapper';

export default function ResumeInterests(props: { className?: string }) {
    return (
        <GridContentWrapper title="Interest" className={props.className}>
            <GridContent type={faPlaneDeparture} noLine={true}>
                Traveling
            </GridContent>
            <GridContent type={faBookOpen} noLine={true}>
                Reading
            </GridContent>
            <GridContent type={faGamepad} noLine={true}>
                Video Games
            </GridContent>
        </GridContentWrapper>
    );
}
