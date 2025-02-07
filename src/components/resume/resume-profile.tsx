import { faPen } from '@fortawesome/free-solid-svg-icons';
import GridContent from '../utils/grid-content';
import GridContentWrapper from '../utils/grid-content-wrapper';

export default function ResumeProfile({ className }: { className?: string }) {
  return (
    <GridContentWrapper title="PROFILE" className={className}>
      <GridContent type={faPen}>
        Results-oriented front-end developer with three years of experience
        building and launching complex e-commerce applications. Proven ability
        to connect brands, distributors, and retailers through effective web
        solutions. One year of back-end experience (.NET) in a warehouse
        management system. Seeking a full-stack developer role to contribute to
        high-quality software products in a dynamic and challenging environment.
      </GridContent>
    </GridContentWrapper>
  );
}
