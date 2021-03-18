import GridContentWrapper from '../Utils/GridContentWrapper';
import GridContent from '../Utils/GridContent';
import ProgressBar from '../Utils/ProgressBar';
import { faCode, faHashtag } from '@fortawesome/free-solid-svg-icons';

export default function ResumeSkill(props: { className?: string }) {
    return (
        <GridContentWrapper title="skills" className={props.className}>
            <GridContent type={faHashtag} size="base">
                <div className="dark:text-header text-base font-semibold tracking-widest uppercase">
                    Profressional
                </div>

                <ProgressBar
                    content="Logical thinking and creative"
                    value={80}
                />
                <ProgressBar content="Office" value={90} />
                <ProgressBar content="Japanese" value={50} />
            </GridContent>
            <GridContent type={faCode} size="base">
                <div className="dark:text-header text-base font-semibold tracking-widest uppercase">
                    technical
                </div>
                <ProgressBar
                    content="HTML, CSS, JS, Bootstrap, Tailwind"
                    value={70}
                />
                <ProgressBar content="C#, React, TypeScipt" value={70} />
            </GridContent>
        </GridContentWrapper>
    );
}
