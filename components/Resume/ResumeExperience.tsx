import GridContentWrapper from '../Utils/GridContentWrapper';
import GridContent from '../Utils/GridContent';

export default function ResumeExperience() {
    return (
        <GridContentWrapper title="Experience">
            <GridContent type="dot">
                <div className="justify-between text-base font-semibold md:flex">
                    <div>UNIVERSITY OF INFORMATION TECHNOLOGY</div>
                    <div>2015-2020</div>
                </div>
                <div>Student</div>
            </GridContent>
            <GridContent type="slash">
                <div className="justify-between font-semibold md:flex">
                    <div>Hotel Management Application</div>
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
                    <div>Personal Blog</div>
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
                    <div>Disney's Aladdin 1993</div>
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
                    <div>ALT IELTS Gia Su</div>
                    <div>08/2019 - 04/2020</div>
                </div>
                <div>Internship</div>
            </GridContent>
            <GridContent type="slash">
                <div className="font-semibold">
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
        </GridContentWrapper>
    );
}
