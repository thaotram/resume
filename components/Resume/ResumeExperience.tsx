import GridContentWrapper from '../Utils/GridContentWrapper';
import GridContent from '../Utils/GridContent';

export default function ResumeExperience(props: { className?: string }) {
    return (
        <GridContentWrapper title="Experience" className={props.className}>
            <GridContent type="dot">
                <div className="justify-between text-base font-semibold md:flex">
                    <div className="dark:text-header">
                        UNIVERSITY OF INFORMATION TECHNOLOGY
                    </div>
                    <div>2015-2020</div>
                </div>
                <div>Student</div>
            </GridContent>
            <GridContent type="slash">
                <div className="justify-between font-semibold md:flex">
                    <div className="dark:text-header">
                        Hotel Management Application
                    </div>
                    <div>09/2018 - 01/2020</div>
                </div>
                <p>
                    A web-based application which front-end developed by{' '}
                    <span className="font-semibold">Vue</span> framework written
                    in <span className="font-semibold">Typescript</span>,
                    back-end developed by{' '}
                    <span className="font-semibold">ASP.NET Core</span> and{' '}
                    <span className="font-semibold">GraphQL</span>, specifically
                    focusing on hotels and motels management.
                </p>
                <p className="italic">
                    ◦ In this project, I only worked with its backend. It's
                    about the business layer and the data access layer.
                    Furthermore, I had to write more than200 unit tests to make
                    sure every query or mutation I wrote always returns the
                    desired response.
                </p>
            </GridContent>
            <GridContent type="slash">
                <div className="justify-between font-semibold md:flex">
                    <div className="dark:text-header">Personal Blog</div>
                    <div>04/2017 - 06/2017</div>
                </div>
                <p>
                    This is the demo project of DotNet Technology Subject. The
                    server is a{' '}
                    <span className="font-semibold">RESTful API</span> Web
                    Service created by{' '}
                    <span className="font-semibold">ASP.NET Core</span>. It uses
                    the <span className="font-semibold">Realm</span> as the main
                    database.The client is a single page application created by{' '}
                    <span className="font-semibold">Vue</span> and{' '}
                    <span className="font-semibold">TypeScript</span>.
                </p>
                <p className="italic">
                    ◦ In this project, I designed and worked with the server and
                    offer the <span className="font-semibold">Swagger</span> to
                    my front-end developer.
                </p>
            </GridContent>
            <GridContent type="slash">
                <div className="justify-between font-semibold md:flex">
                    <div className="dark:text-header">
                        Disney's Aladdin 1993
                    </div>
                    <div>10/2017 - 12/2017</div>
                </div>
                <p>
                    Using <span className="font-semibold">C++</span> and{' '}
                    <span className="font-semibold">DirectX 9</span>. This is an
                    effort to clone a masterpiece classic Gameboy, besides it's
                    the project of Introduction to game development Subject too.
                </p>
                <p className="italic">
                    ◦ In this project, I cut sprites and programmed behaviors
                    for characters.
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
                    When I having an internship program in this company, the
                    main tasks I have to do is maintaining the company's
                    websites. These websites using{' '}
                    <span className="font-semibold">jQuery</span>,{' '}
                    <span className="font-semibold">Bootstrap</span> in the
                    Front-End &{' '}
                    <span className="font-semibold">ASP.NET/Razor</span> in the
                    Back-End.
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
                    This is a complex app for restaurant management. The web
                    version uses{' '}
                    <span className="font-semibold">React/Redux Saga</span> as
                    the main framework for the project.
                </p>
                <p className="italic">
                    ◦ In this project, I do maintenance and develop new features
                    for the front-end.
                </p>
            </GridContent>{' '}
            <GridContent type="slash">
                <div className="font-semibold dark:text-header">
                    Willraise - Tax calculator
                </div>
                <p>
                    This is an web application written for Japanese customers.
                </p>
                <p>
                    The user will enter the required values and the application
                    will send the tax results to their email address.
                </p>
                <p className="italic">
                    ◦ In this project, I write most of the project's backend in{' '}
                    <span className="font-semibold">PHP/Laravel</span> and
                    support writing the front-end in{' '}
                    <span className="font-semibold">Vue</span>.
                </p>
            </GridContent>
        </GridContentWrapper>
    );
}
