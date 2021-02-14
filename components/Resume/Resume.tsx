import ResumeName from './ResumeName';
import ResumeAvatar from './ResumeAvatar';
import ResumeContact from './ResumeContact';
import ResumeProfile from './ResumeProfile';
import ResumeEducation from './ResumeEducation';
import ResumeExperience from './ResumeExperience';
import ResumeSkill from './ResumeSkills';
import ResumeAward from './ResumeAward';
import ResumeInterests from './ResumeInterests';
import ResumeReferences from './ResumeReferences';

export default function Resume() {
    return (
        <div className="container">
            <div className="bg-white shadow-md">
                <ResumeName />
                <ResumeAvatar />
                <ResumeContact />
                <ResumeProfile />
                <ResumeEducation />
                <ResumeExperience />
                <ResumeSkill />
                <ResumeAward />
                <ResumeInterests />
                <ResumeReferences />
            </div>
        </div>
    );
}
