import React from 'react';

const Projects = () => {
    return (
        <div className="projects">
            <div className="container">
                    <h3>Projects</h3>
                    <div className="cards">
                        <div class="card card1">
                            <img src="https://source.unsplash.com/RjewO7Oqcv8" alt=" My Projects"/>
                            <h4>MPT, Buffer behavior testing, KBH-3H</h4>
                            <p>
                                Downscaled tests on buffer behaviour. Posiva Working Report 2012-100.
                                Posiva Oy,  Eurajoki, Finland.{" "}
                                <a href="https://www.posiva.fi/en/index/media/reports.html" target="_blank" rel="noopener noreferrer">See more</a>     
                            </p>
                        
                            
                        </div>

                        <div class="card card2">
                            <img src="https://source.unsplash.com/EJMTKCZ00I0" alt=" My Projects"/>
                            <h4>HTML, CSS, React, JavaScript</h4>
                            <p>
                                The project was done with HTML, CSS, basic Javascript to stand as my portfolio and some exiting...{" "}
                                <a href="https://femiadesola.github.io/coursework/" target="_blank" rel="noopener noreferrer">See more</a>
                            </p>
                            
                        </div>

                        <div className="card card3">
                            <img src="https://source.unsplash.com/mhUsz2ezlXQ" alt=" My Projects"/>
                            <h4> Fractionation processing</h4>
                            <p>
                                Cost-Efficiency and Beneficial Effects of the Process to Recover Lignin, Hemicellulose and
                                Cellulose with Deep Eutectic Solvent.{" "}
                                <a href="https://lutpub.lut.fi/handle/10024/161447" target="_blank" rel="noopener noreferrer">See more</a>
                            </p>
                        
                            
                        </div>
                        <div className="card card4">
                            <img src={require("../img_project/Game.png")} alt="Game"/>
                            <h4>  Speed game app built with ReactJS</h4>
                            <p>
                            The game (UI) displays circles 1 to 5, the score from the user, start and end game button, where the user can click on the start game button, then follow highlighted circle by touching on any random highlighted point.{" "}
                            <a href="https://react21s.github.io/Game_App/" target="_blank" rel="noopener noreferrer">Click to play the game</a>
                            </p>
                         
                            <a href="https://github.com/React21S/Game_App" target="_blank" rel="noreferrer" className="github">Check <i className="fab fa-github fa-2x"></i>
                            </a>
                       
                        </div>
                        <div className="card card5">
                            <img src={require("../img_project/Animal.png")} alt="animal"/>
                            <h4>  Animal app built with ReactJS</h4>
                            <p>
                            An app constructed with react class and function component, list, and keys. Users can search for an animal by inserting the name of an animal inside the search input and and it fetch the animal. {" "}
                            <a href="https://react21s.github.io/Animal-App/#/" target="_blank" rel="noopener noreferrer">Click to see more</a>
                            </p>
                           
                            <a href="https://github.com/React21S/Animal-App" target="_blank" rel="noreferrer" className="github">Check <i className="fab fa-github fa-2x"></i>
                            </a>
                        </div>
                        <div className="card card6">
                            <img src={require("../img_project/Countries.png")} alt="countries"/>
                            <h4>  List of Countries App</h4>
                            <p>
                            This app is based on list of the countries where users can check the country's name, capital, population, region, and countries they share a border. Also, when the user clicks on each country's card under the countries menu bar, it leads to a page where the user can view the current weather condition of that country. {" "}
                            <a href="https://react21s.github.io/Countries-App/" target="_blank" rel="noopener noreferrer">Click to get weather of your country</a>
                            </p>
                           
                            <a href="https://github.com/React21S/Countries-App" target="_blank" rel="noreferrer" className="github">Check <i className="fab fa-github fa-2x"></i>
                            </a>
                        </div>
                        <div className="card card7">
                            <img src={require("../img_project/Form.png")} alt="form"/>
                            <h4> Application form</h4>
                            <p>
                            An application form, where the user clicks on submit button and the message popup, requires the user for another action, where users can choose their suitable answer. Users can determine to send the form to a database or not by clicking the appropriate button. {" "}
                            <a href="https://react21s.github.io/Form/" target="_blank" rel="noopener noreferrer">Click to see more</a>
                            </p>
                           
                            <a href="https://github.com/React21S/Form" target="_blank" rel="noreferrer" className="github">Check <i className="fab fa-github fa-2x"></i>
                            </a>
                        </div>
                        <div className="card card8">
                            <img src={require("../img_project/Moped.png")} alt="moped"/>
                            <h4> Backend application (Application for database storage)</h4>
                            <p>
                            This program is a backend software application with Express js, whereby users can add or remove data from the database. The front page described how the users could navigate to any steps, whereby the user can see all items in storage, get a single item, add to the item in the warehouse, update particular or remove the item in the store.  {" "}
                            <a href="##" target="_blank" rel="noopener noreferrer">Click to see more</a>
                            </p>
                           
                            <a href="https://github.com/React21S/Moped_storage"  target="_blank" rel="noreferrer" className="github">Check <i className="fab fa-github fa-2x"></i>
                            </a>
                        </div>
                        <div className="card card9">
                            <img src={require("../img_project/IceCream.png")} alt="ice-cream"/>
                            <h4> Backend application (Application for database storage)</h4>
                            <p>
                            This program is a backend software application for the sale of items. In other words,  Nodejs is used in this program to build a scalable network for ice cream sales. In this app, users can choose the option of ice cream and see the price.  {" "}
                            <a href="##" target="_blank" rel="noopener noreferrer">Click to see more</a>
                            </p>
                           
                            <a href="https://github.com/React21S/nodejs_icecream-app"  target="_blank" rel="noreferrer" className="github">Check <i className="fab fa-github fa-2x"></i>
                            </a>
                        </div>
                        <div className="card card10">
                            <img src={require("../img_project/Currency.png")} alt="Currency"/>
                            <h4> Currency Converter (done with vanilla javascript)</h4>
                            <p>
                            THere is a currency exchange app where users can select their base currency and target currency, get the appropriate exchange rate based on the user selection.  The app is done with vanilla javascript, CSS, and HTML.  {" "}
                            <a href="https://react21s.github.io/Currency-App/" target="_blank" rel="noopener noreferrer">Click to see more</a>
                            </p>
                           
                            <a href="https://github.com/React21S/Currency-App"  target="_blank" rel="noreferrer" className="github">Check <i className="fab fa-github fa-2x"></i>
                            </a>
                        </div>
                        <div className="card card11">
                            <img src={require("../img_project/SnakeGame.png")} alt="snakeGame"/>
                            <h4> Snake game (Javascript, HTMll and CSS)</h4>
                            <p>
                                The game was constructed base on data structure lecture. 
                            In this game, the user clicks on the start game button, and another screen appears where the user can control the snake movement either left, right, up, or down. The game is over when the snake hits the wall or itself. The message popup tells the user the score, message about the performance {" "}
                            <a href="https://femiadesola.github.io/Snake-game/" target="_blank" rel="noopener noreferrer">Click to play the game</a>
                            </p>
                           
                            <a href="https://github.com/React21S/Snake-game"  target="_blank" rel="noreferrer" className="github">Check <i className="fab fa-github fa-2x"></i>
                            </a>
                        </div>
                        <div className="card card11">
                            <img src={require("../img_project/ratInMaze.png")} alt="ratinmaze"/>
                            <h4> Rat in Maze (React and data structure with backtracking )</h4>
                            <p>
                            This a rat in maze app constructed with React and data structure. In data structure aspect, array, recursion, push, pop, backtracking were used as dynamic program. {" "}
                            <a href="https://react21s.github.io/RatInMaze/#/" target="_blank" rel="noopener noreferrer">Click to see more</a>
                            </p>
                           
                            <a href="https://github.com/React21S/RatInMaze"  target="_blank" rel="noreferrer" className="github">Check <i className="fab fa-github fa-2x"></i>
                            </a>
                        </div>

                        <div className="card card12">
                            <img src={require("../img_project/Database.png")} alt="database"/>
                            <h4> RESTAPI (Built with Mariadb, mysql, HTML/CSS, javascript and ExpressJS)</h4>
                            <p>
                            This is a REST API requests for getting the information needed directly from the database. 
                            This REST API communicates via HTTP requests, and it performs database functions for creating, getting, updating, and deleting records within a specific resource in a database. {" "}
                            <a href="https://github.com/React21S/firstdb" target="_blank" rel="noopener noreferrer">Click to see more</a>
                            </p>
                           
                            <a href="https://github.com/React21S/MySQL_database_for_storage"  target="_blank" rel="noreferrer" className="github">Check <i className="fab fa-github fa-2x"></i>
                            </a>
                        </div>

                        <div className="card card13">
                            <img src={require("../img_project/UnitTest.png")} alt="unitTesting"/>
                            <h4> Unit testing and Quality Assurance(Built with Jest, javascript)</h4>
                            <p>
                            This is a Unit testing and Quality Assurance method for testing product website for qualities by productId, product type, product price, product model etc., .  
                             {" "}
                            <a href="https://github.com/React21S/Product-Unit-testing/blob/main/ProductsAPI.md" target="_blank" rel="noopener noreferrer">Click to see more</a>
                            </p>
                           
                            <a href="https://github.com/React21S/Product-Unit-testing"  target="_blank" rel="noreferrer" className="github">Check <i className="fab fa-github fa-2x"></i>
                            </a>
                        </div>

                        <div className="card card14">
                            <img src={require("../img_project/TodoApp.png")} alt="todoApp"/>
                            <h4> TodoApp (Built with React redux, React content management, HTMl/CSS, Typescript,  javascript)</h4>
                            <p>
                           This is Todo App and it was build with different applications. In this app user filled the title and task, click on an add task button to add the task. User clicks on any of completed task to strike out the completed task, and clicks on the delete button to delete the completed task. Also, user can select option to view each condition such as done, notDone and All. {" "}
                            <a href="https://github.com/React21S/todoAppTs" target="_blank" rel="noopener noreferrer">Click to see more</a>
                            </p>
                           
                            <a href="https://github.com/React21S/Todo_Redux-"  target="_blank" rel="noreferrer" className="github">Check <i className="fab fa-github fa-2x"></i>
                            </a>
                        </div>


                        <div className="card card14">
                            <img src={require("../img_project/SignUp.png")} alt="todoApp"/>
                            <h4> Authentication App (Built with React, React content management, HTMl/CSS, firebase as backend)</h4>
                            <p>
                            This is an authentication app built with react context management with firebase for deployment. Users can signup with their name, email, password and get access to enter data. Each user has their login page, where the user cannot see what is going on on another user's page {" "}
                            <a href="https://npscore-72b0f.web.app/login" target="_blank" rel="noopener noreferrer">Click to see more</a>
                            </p>
                           
                            <a href="https://github.com/React21S/Authentication"  target="_blank" rel="noreferrer" className="github">Check <i className="fab fa-github fa-2x"></i>
                            </a>
                        </div>

                    </div>
                </div>
        </div>
    );
};

export default Projects;