import GridContent from '../Utils/GridContent';
import GridContentWrapper from '../Utils/GridContentWrapper';

export default function ResumeReferences(props: { className?: string }) {
    return (
        <GridContentWrapper title="References" className={props.className}>
            <GridContent>github</GridContent>
        </GridContentWrapper>
    );
}
