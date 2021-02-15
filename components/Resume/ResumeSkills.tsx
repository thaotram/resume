import GridContentWrapper from '../Utils/GridContentWrapper';
import GridContent from '../Utils/GridContent';
import ProgressBar from '../Utils/ProgressBar';

export default function ResumeSkill() {
    return (
        <GridContentWrapper title="skills">
            <GridContent type="dot">
                <div className="text-base font-semibold tracking-widest uppercase">
                    Profressional
                </div>
                <ProgressBar
                    content="HTML, CSS, JS, Bootstrap, Tailwind"
                    value={80}
                ></ProgressBar>
                <ProgressBar
                    content="C#, React, TypeScipt"
                    value={80}
                ></ProgressBar>
                <ProgressBar
                    content="Logical thinking and creative"
                    value={80}
                ></ProgressBar>
                <ProgressBar content="Office" value={90}></ProgressBar>
                <ProgressBar content="Japanese" value={60}></ProgressBar>
            </GridContent>
            <GridContent type="dot">
                <div className="text-base font-semibold tracking-widest uppercase">
                    technical
                </div>
            </GridContent>
        </GridContentWrapper>
    );
}
