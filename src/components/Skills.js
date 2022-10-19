import React from 'react';

const Skills = () => {
    return (
        <div>
             <div className="my_skills">
                <div className="container">
                    <h3>Skills</h3>
                        <div className="boxes">
                            <div class="box">
                                <h4>Mechanical Designer</h4>
                                <span> <i className="fas fa-cogs"></i> </span>
                                <progress id="file1" value="80" max="100"></progress>
                            </div>
                            <div class="box">
                                <h4>Lab Technician</h4>
                                <span> <i class="fas fa-microscope"></i> </span>
                                <progress id="file2" value="90" max="100"></progress>
                               </div>
                            <div className="box box3">
                                <h4>CSS</h4>
                                <span><i className="fab fa-css3-alt"> CSS </i></span>
                                <progress id="file3" value="80" max="100"></progress>
                                </div>
                            <div className="box box4">
                                <h4>HTML5</h4>
                                <span><i className="fab fa-html5"> HTML5</i></span>
                                <progress id="file4" value="80" max="100"></progress>
                            </div>
                            <div className="box box5">
                                <h4>Javascript</h4>
                                <span><i className="fab fa-js-square"> Javascript</i></span>
                                <progress id="file5" value="65" max="100"></progress>
                            </div>
                            <div className="box box6">
                                <h4>NodeJS</h4>
                                <span><i className="fab fa-node"></i></span>
                                <progress id="file6" value="55" max="100"></progress>
                            </div>
                            <a href="https://openbadgepassport.com/app/badge/info/406063" rel="noreferrer" target="_blank">
                            <div className="box box7">
                                <h4>Git</h4>
                                <span><i className="fab fa-git-alt"> Git</i></span>
                                <progress id="file7" value="70" max="100"></progress>
                            </div></a>
                           
                            <div className="box box8">
                                <h4>ReactJS</h4>
                                <span><i className="fab fa-react"> <span className="react">REACT</span></i></span>
                                <progress id="file8" value="60" max="100"></progress>
                            </div>

                            <div className="box box9">
                                <h4>SolidWorks</h4>
                                <span><img src="https://img.icons8.com/color/50/000000/solidworks.png" alt="solidWorks"/></span>
                                <progress id="file9" value="70" max="100"></progress>
                            </div>
                         
                            <div className="box box10">
                                <h4>Python</h4>
                                <span><i className="fab fa-python"></i></span>
                                <progress id="file10" value="30" max="100"></progress>
                            </div>  
                            <div className="box box11">
                                <h4>AWS</h4>
                                <span><i className="fab fa-aws"></i></span>
                                <progress id="file10" value="65" max="100"></progress>
                            </div> 
                            <div className="box box12">
                                <h4>Docker</h4>
                                <span><i className="fab fa-docker"></i></span>
                                <progress id="file10" value="65" max="100"></progress>
                            </div> 
                            <div className="box box13">
                                <h4>Database</h4>
                                <span><i className="fas fa-database"></i></span>
                                <progress id="file10" value="70" max="100"></progress>
                            </div> 
                            <div className="box box14">
                                <h4>Unit testing and Quality Assurance</h4>
                                <span><i className="fas fa-check"></i></span>
                                <progress id="file10" value="70" max="100"></progress>
                            </div> 
                            <div className="box box15">
                                <h4>CICD</h4>
                                <span><i className="fas fa-cloud"></i></span>
                                <progress id="file10" value="70" max="100"></progress>
                            </div> 
                            <div className="box box16">
                                <h4>Plotly</h4>
                                <span><i class="fas fa-chart-line"></i></span>
                                <progress id="file10" value="80" max="100"></progress>
                            </div> 
                            <div className="box box17">
                                <h4>Jenkins</h4>
                                <span><i className="fab fa-jenkins"></i></span>
                                <progress id="file10" value="60" max="100"></progress>
                            </div> 

                            <div className="box box18">
                                <h4>Figma</h4>
                                <span><img src="https://img.icons8.com/color/50/000000/figma.png" alt="Figma"/></span>
                                <progress id="file9" value="80" max="100"></progress>
                        </div>
                        <div className="box box18">
                                <h4>MongoDB</h4>
                                <span><img src="https://img.shields.io/badge/MongoDB-4EA94B?style=for-the-badge&logo=mongodb&logoColor=white" alt="Figma"/></span>
                                <progress id="file9" value="60" max="100"></progress>
                            </div>
                        <div className="box box18">
                                <h4>MySQL</h4>
                                <span><img src="https://img.shields.io/badge/Mysql-10263E?style=for-the-badge&logo=mysql&logoColor=E7A982"  alt="Figma"/></span>
                                <progress id="file9" value="60" max="100"></progress>
                        </div>
                        </div>
                        
                </div>
            </div>
        </div>
    );
};

export default Skills;