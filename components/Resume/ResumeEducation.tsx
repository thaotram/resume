import GridContentWrapper from '../Utils/GridContentWrapper';
import GridContent from '../Utils/GridContent';

export default function ResumeEducation() {
    return (
        <GridContentWrapper title="EDUCATION">
            <GridContent>
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
