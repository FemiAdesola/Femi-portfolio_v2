import React from 'react';

const AboutMe = () => {
    return (
        <div className="about_me">
            <div className="container">
                <h3>About me</h3>
                <img src={require("../img/about.png")} alt="About me"/>
                
                <p>
                    My name is Femi Adesola Oyinloye, I am currently studying the Full Stack Web Developer program at Business College Helsinki. I portray the attribute of a person that can work in any environment to contribute an idea, making positive change, co-operate with other people if the situation is necessary or required.  I like to integrate my previous experience and understanding as a Mechanical Designer, IT, and Lab Technician to any task with new approaches. <br/>
                    In my previous workplaces, my daily routines had been experimental test set-ups, design test equipment, installation and maintenance of test equipment, testing and sensors calibration, sample material installation and sampling, measurement data processing, and reporting. Also, the connection of different kinds of the sensor with the data acquisition system, set up the LabView, and troubleshooting. <br/>
                    However, I have gained knowledge in Software development Skills (Front-End) [HTML/CSS, Javascript, ReactJS and knowledge in UI/UX], and knowledge in Back-End with NodeJS and Python for data analysis. In addition, I have experience in technical design based on conceptual drawings of test equipment using SolidWorks software.
                    More also, My studies and work experiences have taught me problem-solving, teamwork skills, and the capability to perform multitasking in a rapid-paced condition. 
                   I have been regarded several times as a careful and outstanding employee with many gifts-card in my previous jobs. In other words, I am ready to contribute my idea, making positive changes. 

                </p>
            </div>
    </div>
    );
};

export default AboutMe;