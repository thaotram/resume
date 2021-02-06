import ResumeName from './ResumeName';
import ResumeAvatar from './ResumeAvatar';
export default function Resume() {
    return (
        <div className="container">
            <div className="bg-white shadow-md">
                <ResumeName />
                <ResumeAvatar />
            </div>
        </div>
    );
}
