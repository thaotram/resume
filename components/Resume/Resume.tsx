import ResumeName from './ResumeName';
import ResumeAvatar from './ResumeAvatar';
import ResumeContact from './ResumeContact';
import ResumeProfile from './ResumeProfile';
import ResumeEducation from './ResumeEducation';
import ResumeExperience from './ResumeExperience';

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
            </div>
        </div>
    );
}
