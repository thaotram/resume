import ResumeAward from './resume-award';
import ResumeContact from './resume-contact';
import ResumeEducation from './resume-education';
import ResumeExperience from './resume-experience';
import ResumeInterests from './resume-interests';
import ResumeName from './resume-name';
import ResumeProfile from './resume-profile';
import ResumeReferences from './resume-references';
import ResumeSkill from './resume-skills';
import styles from './Resume.module.scss';

export default function Resume() {
  return (
    <div>
      <div className={styles.resume}>
        <div className={styles.content}>
          <ResumeName className={styles.name} />
          <ResumeContact
            className={cn(styles.contact, 'mr-10 lg:!mr-0 lg:!mt-4')}
          />

          <ResumeEducation className={cn(styles.education, 'lg:!mr-0')} />
          <ResumeAward className={cn(styles.award, 'lg:!mr-0')} />
          <ResumeInterests className={cn(styles.interests, 'lg:!mr-0')} />
        </div>
        <div className={styles.content}>
          <ResumeProfile className={cn(styles.profile, 'lg:!mt-20')} />
          <ResumeExperience className={styles.experience} />
          <ResumeSkill className={cn(styles.skill)} />
          <ResumeReferences className={styles.references} />
        </div>
      </div>
    </div>
  );
}
