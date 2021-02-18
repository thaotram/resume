import GridContentWrapper from '../Utils/GridContentWrapper';
import GridContent from '../Utils/GridContent';
import { faUserGraduate } from '@fortawesome/free-solid-svg-icons';

export default function ResumeEducation(props: { className?: string }) {
    return (
        <GridContentWrapper title="EDUCATION" className={props.className}>
            <GridContent type={faUserGraduate} size="base">
                <div className="text-base font-semibold">
                    UNIVERSITY OF INFORMATION TECHNOLOGY (UIT)
                </div>
                <div>Software Engineering</div>
                <div>2015-2020</div>
                <div className="font-semibold">GPA: 7.76/10</div>
            </GridContent>
        </GridContentWrapper>
    );
}
