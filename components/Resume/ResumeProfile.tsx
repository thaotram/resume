import GridContentWrapper from '../Utils/GridContentWrapper';
import GridContent from '../Utils/GridContent';
import { faPen } from '@fortawesome/free-solid-svg-icons';

export default function ResumeProfile(props: { className?: string }) {
    return (
        <GridContentWrapper title="PROFILE" className={props.className}>
            <GridContent type={faPen}>
                An energetic, enthusiastic and responsible individual looking
                for front-end developer position. Hard-working and willing to
                learn new knowledge and technology. Easily adapted to teamwork
                environment.
            </GridContent>
        </GridContentWrapper>
    );
}
