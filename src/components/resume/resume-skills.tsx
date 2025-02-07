import { faCode, faHashtag } from '@fortawesome/free-solid-svg-icons';
import GridContent from '../utils/grid-content';
import GridContentWrapper from '../utils/grid-content-wrapper';

export default function ResumeSkill({ className }: { className?: string }) {
  return (
    <GridContentWrapper title="skills" className={className}>
      <GridContent type={faCode} size="base">
        <div className="text-base font-semibold uppercase tracking-widest dark:text-header">
          technical
        </div>
        <div className="mt-2">React, Tailwind, Bootstrap, TypeScript, Vue</div>
        <div className="mt-2">C#, Go-lang, php</div>
        <div className="mt-2">Dart, Flutter</div>
      </GridContent>
      <GridContent type={faHashtag} size="base">
        <div className="text-base font-semibold uppercase tracking-widest dark:text-header">
          Productivity Tools
        </div>
        <div className="mt-2">Figma, Notion, Photoshop</div>
      </GridContent>
    </GridContentWrapper>
  );
}
