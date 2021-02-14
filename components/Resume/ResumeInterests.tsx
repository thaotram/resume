import GridContent from '../Utils/GridContent';
import GridContentWrapper from '../Utils/GridContentWrapper';

export default function ResumeInterests(props: { className?: string }) {
    return (
        <GridContentWrapper title="Interest" className={props.className}>
            <GridContent>
                <div>Traveling</div>
                <div>Reading</div>
                <div>Video Games</div>
            </GridContent>
        </GridContentWrapper>
    );
}
