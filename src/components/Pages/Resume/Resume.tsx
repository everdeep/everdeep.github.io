import React from 'react';
import {
    AppContextInterface,
    withAppContext,
} from '@components/App/AppContext';
import { Briefcase, ProfileCircle, University } from '@src/Icons';
import { CubeWrapped } from '@src/components/Animations';
import Divider from '@components/Divider';

import './Resume.scss';

const Resume: React.FC = ({
    appContext,
}: {
    appContext: AppContextInterface;
}) => {
    return (
        <div className='resume__container'>
            <div className='section'>
                <div className='header'>
                    <ProfileCircle className='fill' />
                    <h3>ABOUT ME</h3>
                </div>
                <div className='body'>
                    <p>
                        A software engineer with a passion for innovation and
                        new technologies. I enjoy learning all things and am not
                        restricted to only one line of work. Machine learning is
                        my new expertise!
                    </p>
                </div>
            </div>
            <div className='section'>
                <div className='header'>
                    <CubeWrapped className='icon' />
                    <h3>PROJECTS</h3>
                </div>
                <div className='body'>
                    <div className='entry'>
                        <div className='entry__header'>
                            <div className='title'>Crypto Trader</div>
                            <span className='date'>2023 - Present</span>
                        </div>
                        <div className='entry__body'>
                            <p>
                                This project involves the development of a
                                trading platform that allows high volume trading
                                for multiple users with many active trading
                                bots. The platform will support both simulated
                                and live trading to provide accurate performance
                                analysis of trading strategies.
                            </p>
                            <p>
                                Using the latest techniques in machine learning,
                                users will have a greater understanding of their
                                trade history and potential changes they can
                                make to improve their margins.
                            </p>

                            <p>
                                <strong>Technologies</strong><br />
                                ReactJS, Typescript, Webpack, Redux, Sass
                                Python, pytest, Redis, MySQL, AWS
                            </p>
                        </div>
                    </div>
                    <Divider className='accent' />
                    <div className='entry'>
                        <div className='entry__header'>
                            <div className='title'>File Transfer</div>
                            <span className='date'>2018</span>
                        </div>
                        <div className='entry__body'>
                            <p>
                                A simple file transfer application that sends
                                data through a TCP connection to another client.
                            </p>

                            <p>
                                <strong>Technologies:</strong> Python, Tkinter
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            <div className='section'>
                <div className='header'>
                    <University className='fill' />
                    <h3>EDUCATION</h3>
                </div>
                <div className='body'>
                    <div className='entry'>
                        <div className='entry__header'>
                            <div className='title'>University of Sydney</div>
                            <span className='date'>2016 - 2019</span>
                        </div>
                        <div className='entry__body'>
                            <p>Bachelor Computer Science and Technology</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className='section'>
                <div className='header'>
                    <Briefcase className='stroke' />
                    <h3>WORK EXPERIENCE</h3>
                </div>
                <div className='body'>
                    <div className='entry'>
                        <div className='entry__header'>
                            <div className='title'>Stolle Industries GmbH</div>
                            <span className='date'>2023 - Present</span>
                        </div>
                        <div className='entry__body'>
                            <span>
                                <i>Software Engineer</i>
                            </span>
                            <p>
                                <strong>Responsibilities</strong><br />
                                Developing software solutions within the
                                business to improve efficiency in all
                                departments.
                            </p>

                            <p>
                                <strong>Technologies</strong><br />
                                ReactJS, Typescript, Sass, Python, C#,
                                Typescript
                            </p>
                        </div>
                    </div>
                    <Divider className='accent' />
                    <div className='entry'>
                        <div className='entry__header'>
                            <div className='title'>Freelance</div>
                            <span className='date'>2019 - Present</span>
                        </div>
                        <div className='entry__body'>
                            <span>
                                <i>Software Engineer</i>
                            </span>
                            <p>
                                <strong>Responsibilities</strong><br/>
                                Developing and maintaining web applications for clients
                            </p>

                            <p>
                                <strong>Technologies</strong><br/>
                                ReactJS, Python, NodeJS Express, MongoDB, .NET, AWS
                            </p>
                        </div>
                    </div>
                    <Divider className='accent' />
                    <div className='entry'>
                        <div className='entry__header'>
                            <div className='title'>Service NSW</div>
                            <span className='date'>2020 - 2022</span>
                        </div>
                        <div className='entry__body'>
                            <span>
                                <i>Software Engineer</i>
                            </span>
                            <p>
                                <strong>Responsibilities</strong><br/>
                                Developing and maintaining rebates and grants aimed at
                                relieving financial stress within the community.
                            </p>

                            <p>
                                <strong>Technologies</strong><br/>
                                ReactJS, Angular, Typescript, JUnit Java, Springboot,
                                AWS, Splunk, Cloud foundry, MSSQL
                            </p>
                        </div>
                    </div>
                    <Divider className='accent' />
                    <div className='entry'>
                        <div className='entry__header'>
                            <div className='title'>JP Morgan Chase</div>
                            <span className='date'>2018 - 2020</span>
                        </div>
                        <div className='entry__body'>
                            <span>
                                <i>Software Engineer</i>
                            </span>
                            <p>
                                <strong>Responsibilities</strong><br/>
                                Working with stakeholders in an Agile environment to
                                improve efficiency within the business.
                            </p>

                            <p>
                                <strong>Technologies</strong><br/>
                                Java, Springboot, Splunk, Jenkins, MSSQL, JUnit
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default withAppContext(Resume);
