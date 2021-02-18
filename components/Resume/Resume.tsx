import styles from './Resume.module.scss';
import cn from 'classnames';
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
            <div className={styles.resume}>
                <div className={styles.content}>
                    <ResumeName className={styles.name} />
                    <ResumeAvatar className={styles.avatar} />
                    <ResumeContact className={styles.contact} />

                    <ResumeEducation
                        className={cn(styles.education, 'lg:!mr-0')}
                    />
                    <ResumeAward className={cn(styles.award, 'lg:!mr-0')} />
                    <ResumeInterests
                        className={cn(styles.interests, 'lg:!mr-0')}
                    />
                </div>
                <div className={styles.content}>
                    <ResumeProfile
                        className={cn(styles.profile, 'lg:!mt-24')}
                    />
                    <ResumeExperience className={styles.experience} />
                    <ResumeSkill className={cn(styles.skill)} />
                    <ResumeReferences className={styles.references} />
                </div>
            </div>
        </div>
    );
}
