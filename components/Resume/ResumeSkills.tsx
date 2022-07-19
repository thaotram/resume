import GridContentWrapper from '../Utils/GridContentWrapper';
import GridContent from '../Utils/GridContent';
import ProgressBar from '../Utils/ProgressBar';
import { faCode, faHashtag } from '@fortawesome/free-solid-svg-icons';

export default function ResumeSkill(props: { className?: string }) {
    return (
        <GridContentWrapper title="skills" className={props.className}>
            <GridContent type={faHashtag} size="base">
                <div className="text-base font-semibold uppercase tracking-widest dark:text-header">
                    Professional
                </div>

                <ProgressBar
                    content="Logical thinking and creative"
                    value={80}
                />
                <ProgressBar content="Office" value={90} />
                <ProgressBar content="Japanese" value={60} />
            </GridContent>
            <GridContent type={faCode} size="base">
                <div className="text-base font-semibold uppercase tracking-widest dark:text-header">
                    technical
                </div>
                <ProgressBar content="Dart, Flutter" value={65} />
                <ProgressBar
                    content="React, Vue, Bootstrap, Tailwind, TypeScript"
                    value={70}
                />
                <ProgressBar content="C#, Go-lang, php" value={50} />
                <ProgressBar content="Figma, PhotoShop" value={90} />
            </GridContent>
        </GridContentWrapper>
    );
}
