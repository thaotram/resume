import GridContent from '../utils/grid-content';
import GridContentWrapper from '../utils/grid-content-wrapper';

export default function ResumeExperience({
  className,
}: {
  className?: string;
}) {
  return (
    <GridContentWrapper title="Experience" className={className}>
      <GridContent type="dot">
        <div className="justify-between text-base font-semibold md:flex">
          <div className="dark:text-header">Eton</div>
          <div>08/2022 - now</div>
        </div>
      </GridContent>
      <GridContent type="slash">
        <div className="font-semibold dark:text-header">MSMO CORE SERVICES</div>
        <p className="font-semibold">
          Role:
          <span> Fullstack Developer</span>
        </p>
        <p className="font-semibold">
          Technologies:
          <span> .NET, ReactJS, PostgreSQL</span>
        </p>
        <p className="font-semibold">Achievements:</p>
        <p>
          ◦ Designed and developed: Improved order processing performance by 10%
          by optimizing processes and reducing errors. Developed an intuitive
          management interface (Outbound Manager) to enhance user experience.
        </p>
        <p>
          ◦ Optimized: Enhanced system performance by developing intelligent
          algorithms to group similar orders, reducing processing time.
        </p>
      </GridContent>
      <GridContent type="slash">
        <div className="font-semibold dark:text-header">VOTA</div>
        <p className="font-semibold">
          Role:
          <span> Frontend Developer</span>
        </p>
        <p className="font-semibold">
          Technologies:
          <span> ReactJS, Tailwind CSS, TypeScript</span>
        </p>
        <p className="font-semibold">Achievements:</p>
        <p>
          ◦ Developed UI: Designed and developed a user-friendly interface for
          both administrators and customers.
        </p>
        <p>
          ◦ Improved performance: Increased data entry efficiency by developing
          a bulk import feature for up to 1000 orders, saving users time and
          effort.
        </p>
        <p>
          ◦ Enhanced UX: Applied UX/UI design principles to create an intuitive
          and easy-to-use interface.
        </p>
      </GridContent>
      <GridContent type="slash">
        <div className="font-semibold dark:text-header">
          SUPPORT FOR OTHER PROJECTS
        </div>
        <p>
          Resolved technical issues for team members, resolving issues during
          development. Collaborated on designing and developing print templates
          for warehouse output, meeting company standards for professionalism
          and efficiency.
        </p>
      </GridContent>
      <GridContent type="dot">
        <div className="justify-between text-base font-semibold md:flex">
          <div className="dark:text-header">Freelancer</div>
          <div>10/2021 - 07/2022</div>
        </div>
      </GridContent>
      <GridContent type="slash">
        <div className="font-semibold dark:text-header">TimeDo</div>
        <p>
          Developed a cross-platform time tracking and reminder application
          using <span className="font-semibold">Flutter</span>, incorporating
          functional widgets,{' '}
          <span className="font-semibold">Flutter Hook</span>, and{' '}
          <span className="font-semibold">Riverpod</span> for state management.
          Successfully implemented <span className="font-semibold">Hive</span>{' '}
          and <span className="font-semibold">Isar</span> databases for local
          data persistence. Gained experience in all stages of the development
          lifecycle, from UI design in{' '}
          <span className="font-semibold">Figma</span> to implementation and
          testing.
        </p>
      </GridContent>
      <GridContent type="dot">
        <div className="justify-between text-base font-semibold md:flex">
          <div className="dark:text-header">Midota</div>
          <div>03/2021 - 09/2021</div>
        </div>
        <div>Junior</div>
      </GridContent>
      <GridContent type="slash">
        <div className="font-semibold dark:text-header">
          Omenu - Restaurant management
        </div>
        <p>
          Maintained and developed new front-end features for a restaurant
          management application using{' '}
          <span className="font-semibold">React/Redux Saga</span>.
        </p>
      </GridContent>
      <GridContent type="slash">
        <div className="font-semibold dark:text-header">
          Willraise - Tax calculator
        </div>
        <p>
          Contributed to back-end development using{' '}
          <span className="font-semibold">PHP/Laravel</span> and front-end
          development with <span className="font-semibold">Vue</span> for a tax
          calculation web application used by Japanese customers.
        </p>
      </GridContent>
      <GridContent type="dot">
        <div className="justify-between text-base font-semibold md:flex">
          <div className="dark:text-header">ALT IELTS Gia Su</div>
          <div>08/2019 - 04/2020</div>
        </div>
        <div>Internship</div>
      </GridContent>
      <GridContent type="slash">
        <div className="font-semibold dark:text-header">
          Official websites of the company
        </div>
        <p>
          When I having an internship program in this company, the main tasks I
          have to do is maintaining the company's websites. These websites using{' '}
          <span className="font-semibold">jQuery</span>,{' '}
          <span className="font-semibold">Bootstrap</span> in the Front-End &{' '}
          <span className="font-semibold">ASP.NET/Razor</span> in the Back-End.
        </p>
      </GridContent>
    </GridContentWrapper>
  );
}
