import React from "react";

const Projects = () => {
  return (
    <div className="projects">
      <div className="container">
        <h3>Projects</h3>
        <div className="cards">
          <div className="card card19">
            <img src={require("../img_project/Hero.png")} alt="Product.png" />
            <h4>Figma, Unsplash</h4>
            <p>
              The page shows some of the UI/UX design with Figma. It shows some
              of the design visual hierarchy, type (personality, setting,
              pairing), colors, extreme and soft image cropping, overlay,
              desaturating the images, and using tints.
              <a
                href="https://www.figma.com/proto/CzG5BrjRklI5erZh9jjXCl/Tech-Updates-project?type=design&node-id=261-4644&t=qtGxfDRs7K8K9KrV-0&scaling=min-zoom&page-id=0%3A1"
                target="_blank"
                rel="noopener noreferrer"
              >
                Click to see more
              </a>
            </p>

            <a
              href="https://github.com/FemiAdesola/design-UI-UX"
              target="_blank"
              rel="noreferrer"
              className="github"
            >
              Check <i className="fab fa-github fa-2x"></i>
            </a>
          </div>

          <div className="card card19">
            <img
              src={require("../img_project/Data_Science.png")}
              alt="Data_Science.png"
            />
            <h4>
              {" "}
              The libraries used are Pandas, Numpy, Seaborn, and Matplotlib.pyplot, and the model is based on logistic regression, deep learning, K-means, autoencoders, neural networks, and so on. Jupyter Notebook serves as a web-based interactive computing environment, and Python is utilized as a language.
            </h4>
            <p>
            This represents the data analysis results for many departments, including Human Resources, Marketing, Sales, Operations, and Public Relations. The goal is to draw a valid conclusion based on the information gathered. For example, the sales department must plan for sales, and the public relations department must determine whether customers are satisfied with their service.{" "}
              <a
                href="https://github.com/FemiAdesola/Data-Science/blob/main/Human_Resources_Department.ipynb"
                target="_blank"
                rel="noopener noreferrer"
              >
                Click to see more
              </a>
            </p>

            <a
              href="https://github.com/FemiAdesola/Data-Science"
              target="_blank"
              rel="noreferrer"
              className="github"
            >
              Check <i className="fab fa-github fa-2x"></i>
            </a>
          </div>

          <div className="card card19">
            <img
              src={require("../img_project/Fullstack.png")}
              alt="Product.png"
            />
            <h4>
              {" "}
              eCommerce (Built with React bootsrap, TypeScript, Redux, React hook userform, RectJS,
              redux-persist, SASS/SCSS in Frontend and Backend with C#, ASP.NET, PostgreSQL and Entity Framework Core)
            </h4>
            <p>
            This is a full-stack project built with ASP .NET core for the backend and React Redux for the Frontend. For getting the full-stack project done, eCommerce was used as a way to illustrate the connection.
            This project aims to understand the connection between the backend, database structure, and the frontend.
             .{" "}
              <a
                href="https://fullstackfrontend.netlify.app/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Click to see more
              </a>
            </p>

            <a
              href="https://github.com/FemiAdesola/fullstack-"
              target="_blank"
              rel="noreferrer"
              className="github"
            >
              Check <i className="fab fa-github fa-2x"></i>
            </a>
          </div>

          <div className="card card19">
            <img
              src={require("../img_project/Product.png")}
              alt="Product.png"
            />
            <h4>
              {" "}
              eCommerce (Built with MUI, TypeScript, Redux, React hook userform,
              redux-persist)
            </h4>
            <p>
              This is an eCommerce app where users can order products through an
              online service. The users can filter the product based on the
              available category of product, sort by highest and lowest price,
              name of the product .{" "}
              <a
                href="https://femi-frontend.netlify.app/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Click to see more
              </a>
            </p>

            <a
              href="https://github.com/FemiAdesola/frontend-project"
              target="_blank"
              rel="noreferrer"
              className="github"
            >
              Check <i className="fab fa-github fa-2x"></i>
            </a>
          </div>

          <div className="card card19">
            <img src={require("../img_project/BuyIt.png")} alt="Product.png" />
            <h4>
              {" "}
              Backend (MongoDB, NodeJS, ExpressJS, jsonwetoken,mongoose) and
              Frontend (ReactJS, Redux, Redux toolkit, stripe, Paypal,
              React-boostrap)
            </h4>
            <p>
              This project is a full-stack project built with NodeJS for the
              backend and the React, Redux toolkit for the frontend, and MongoDB
              used for the database, while PayPal used as a means of
              transaction.
              <a
                href="https://buyit-fehz.onrender.com/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Click to see more
              </a>
            </p>

            <a
              href="https://github.com/FemiAdesola/BuyIt"
              target="_blank"
              rel="noreferrer"
              className="github"
            >
              Check <i className="fab fa-github fa-2x"></i>
            </a>
          </div>

          <div className="card card19">
            <img
              src={require("../img_project/FoodApp.png")}
              alt="FoodApp.png"
            />
            <h4>
              {" "}
              Food App (Built with C#, .Net, Docker, Azure SQL server, CSS)
            </h4>
            <p>
              This app is a Food app where user can order their food or choose
              their desired food, and it was built with C#, .Net, and Azure SQL
              server.{" "}
              <a
                href="https://femi-foodapp.herokuapp.com/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Click to see more
              </a>
            </p>

            <a
              href="https://github.com/FemiAdesola/FoodApp"
              target="_blank"
              rel="noreferrer"
              className="github"
            >
              Check <i className="fab fa-github fa-2x"></i>
            </a>
          </div>
          <div class="card card19">
            <img
              src={require("../img_project/BudgetApp.png")}
              alt="BudgetApp"
            />
            <h4>
              {" "}
              Budget App (Built with Rect hook, SCSS/SASS for styling,
              TypeScript)
            </h4>
            <p>
              This budget application aims to help users create and manage their
              income and expenses and to set their saving target from their
              current balance to their saving account and vice versa.{" "}
              <a
                href="https://femi-budget-app.netlify.app"
                target="_blank"
                rel="noopener noreferrer"
              >
                See more
              </a>
            </p>
            <a
              href="https://github.com/FemiAdesola/React-budget"
              target="_blank"
              rel="noreferrer"
              className="github"
            >
              Check <i className="fab fa-github fa-2x"></i>
            </a>
          </div>
          {/* <div class="card card1">
            <img
              src={require("../img_project/BTECH.png")}
              alt=" My Projects"
            />
            <h4>MPT, Buffer behavior testing, KBH-3H</h4>
            <p>
              Downscaled tests on buffer behaviour. Posiva Working Report
              2012-100. Posiva Oy, Eurajoki, Finland.{" "}
              <a
                href="https://www.posiva.fi/en/index/media/reports.html"
                target="_blank"
                rel="noopener noreferrer"
              >
                See more
              </a>
            </p>
          </div> */}

          <div class="card card2">
            <img
              src={require("../img_project/Portfolio1.png")}
              alt=" My Projects"
            />
            <h4>HTML, CSS, React, JavaScript</h4>
            <p>
              The project was done with HTML, CSS, basic Javascript to stand as
              my portfolio and some exiting...{" "}
              <a
                href="https://femiadesola.github.io/coursework/"
                target="_blank"
                rel="noopener noreferrer"
              >
                See more
              </a>
            </p>
          </div>

          {/* <div className="card card3">
            <img
              src={require("../img_project/Fractionation.png")}
              alt=" My Projects"
            />
            <h4> Fractionation processing</h4>
            <p>
              Cost-Efficiency and Beneficial Effects of the Process to Recover
              Lignin, Hemicellulose and Cellulose with Deep Eutectic Solvent.{" "}
              <a
                href="https://lutpub.lut.fi/handle/10024/161447"
                target="_blank"
                rel="noopener noreferrer"
              >
                See more
              </a>
            </p>
          </div> */}
          <div className="card card4">
            <img src={require("../img_project/Game.png")} alt="Game" />
            <h4> Speed game app built with ReactJS</h4>
            <p>
              The game (UI) displays circles 1 to 5, the score from the user,
              start and end game button, where the user can click on the start
              game button, then follow highlighted circle by touching on any
              random highlighted point.{" "}
              <a
                href="https://react21s.github.io/Game_App/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Click to play the game
              </a>
            </p>

            <a
              href="https://github.com/React21S/Game_App"
              target="_blank"
              rel="noreferrer"
              className="github"
            >
              Check <i className="fab fa-github fa-2x"></i>
            </a>
          </div>
          <div className="card card5">
            <img src={require("../img_project/Animal.png")} alt="animal" />
            <h4> Animal app built with ReactJS</h4>
            <p>
              An app constructed with react class and function component, list,
              and keys. Users can search for an animal by inserting the name of
              an animal inside the search input and and it fetch the animal.{" "}
              <a
                href="https://react21s.github.io/Animal-App/#/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Click to see more
              </a>
            </p>

            <a
              href="https://github.com/React21S/Animal-App"
              target="_blank"
              rel="noreferrer"
              className="github"
            >
              Check <i className="fab fa-github fa-2x"></i>
            </a>
          </div>
          <div className="card card6">
            <img
              src={require("../img_project/Countries.png")}
              alt="countries"
            />
            <h4> List of Countries App</h4>
            <p>
              This app is based on list of the countries where users can check
              the country's name, capital, population, region, and countries
              they share a border. Also, when the user clicks on each country's
              card under the countries menu bar, it leads to a page where the
              user can view the current weather condition of that country.{" "}
              <a
                href="https://react21s.github.io/Countries-App/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Click to get weather of your country
              </a>
            </p>

            <a
              href="https://github.com/React21S/Countries-App"
              target="_blank"
              rel="noreferrer"
              className="github"
            >
              Check <i className="fab fa-github fa-2x"></i>
            </a>
          </div>
          <div className="card card7">
            <img src={require("../img_project/Form.png")} alt="form" />
            <h4> Application form</h4>
            <p>
              An application form, where the user clicks on submit button and
              the message popup, requires the user for another action, where
              users can choose their suitable answer. Users can determine to
              send the form to a database or not by clicking the appropriate
              button.{" "}
              <a
                href="https://react21s.github.io/Form/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Click to see more
              </a>
            </p>

            <a
              href="https://github.com/React21S/Form"
              target="_blank"
              rel="noreferrer"
              className="github"
            >
              Check <i className="fab fa-github fa-2x"></i>
            </a>
          </div>
          <div className="card card8">
            <img src={require("../img_project/Moped.png")} alt="moped" />
            <h4> Backend application (Application for database storage)</h4>
            <p>
              This program is a backend software application with Express js,
              whereby users can add or remove data from the database. The front
              page described how the users could navigate to any steps, whereby
              the user can see all items in storage, get a single item, add to
              the item in the warehouse, update particular or remove the item in
              the store.{" "}
              <a
                href="https://moped-storage.herokuapp.com/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Click to see more
              </a>
            </p>

            <a
              href="https://github.com/React21S/Moped_storage"
              target="_blank"
              rel="noreferrer"
              className="github"
            >
              Check <i className="fab fa-github fa-2x"></i>
            </a>
          </div>
          <div className="card card9">
            <img src={require("../img_project/IceCream.png")} alt="ice-cream" />
            <h4> Backend application (Application for database storage)</h4>
            <p>
              This program is a backend software application for the sale of
              items. In other words, Nodejs is used in this program to build a
              scalable network for ice cream sales. In this app, users can
              choose the option of ice cream and see the price.{" "}
              <a href="##" target="_blank" rel="noopener noreferrer">
                Click to see more
              </a>
            </p>

            <a
              href="https://github.com/React21S/nodejs_icecream-app"
              target="_blank"
              rel="noreferrer"
              className="github"
            >
              Check <i className="fab fa-github fa-2x"></i>
            </a>
          </div>
          <div className="card card10">
            <img src={require("../img_project/Currency.png")} alt="Currency" />
            <h4> Currency Converter (done with vanilla javascript)</h4>
            <p>
              THere is a currency exchange app where users can select their base
              currency and target currency, get the appropriate exchange rate
              based on the user selection. The app is done with vanilla
              javascript, CSS, and HTML.{" "}
              <a
                href="https://react21s.github.io/Currency-App/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Click to see more
              </a>
            </p>

            <a
              href="https://github.com/React21S/Currency-App"
              target="_blank"
              rel="noreferrer"
              className="github"
            >
              Check <i className="fab fa-github fa-2x"></i>
            </a>
          </div>
          <div className="card card11">
            <img
              src={require("../img_project/SnakeGame.png")}
              alt="snakeGame"
            />
            <h4> Snake game (Javascript, HTMll and CSS)</h4>
            <p>
              The game was constructed base on data structure lecture. In this
              game, the user clicks on the start game button, and another screen
              appears where the user can control the snake movement either left,
              right, up, or down. The game is over when the snake hits the wall
              or itself. The message popup tells the user the score, message
              about the performance{" "}
              <a
                href="https://femiadesola.github.io/Snake-game/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Click to play the game
              </a>
            </p>

            <a
              href="https://github.com/React21S/Snake-game"
              target="_blank"
              rel="noreferrer"
              className="github"
            >
              Check <i className="fab fa-github fa-2x"></i>
            </a>
          </div>
          <div className="card card11">
            <img
              src={require("../img_project/ratInMaze.png")}
              alt="ratinmaze"
            />
            <h4> Rat in Maze (React and data structure with backtracking )</h4>
            <p>
              This a rat in maze app constructed with React and data structure.
              In data structure aspect, array, recursion, push, pop,
              backtracking were used as dynamic program.{" "}
              <a
                href="https://react21s.github.io/RatInMaze/#/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Click to see more
              </a>
            </p>

            <a
              href="https://github.com/React21S/RatInMaze"
              target="_blank"
              rel="noreferrer"
              className="github"
            >
              Check <i className="fab fa-github fa-2x"></i>
            </a>
          </div>

          <div className="card card12">
            <img src={require("../img_project/Database.png")} alt="database" />
            <h4>
              {" "}
              RESTAPI (Built with Mariadb, mysql, HTML/CSS, javascript and
              ExpressJS)
            </h4>
            <p>
              This is a REST API requests for getting the information needed
              directly from the database. This REST API communicates via HTTP
              requests, and it performs database functions for creating,
              getting, updating, and deleting records within a specific resource
              in a database.{" "}
              <a
                href="https://github.com/React21S/firstdb"
                target="_blank"
                rel="noopener noreferrer"
              >
                Click to see more
              </a>
            </p>

            <a
              href="https://github.com/React21S/MySQL_database_for_storage"
              target="_blank"
              rel="noreferrer"
              className="github"
            >
              Check <i className="fab fa-github fa-2x"></i>
            </a>
          </div>

          <div className="card card13">
            <img
              src={require("../img_project/UnitTest.png")}
              alt="unitTesting"
            />
            <h4>
              {" "}
              Unit testing and Quality Assurance(Built with Jest, javascript)
            </h4>
            <p>
              This is a Unit testing and Quality Assurance method for testing
              product website for qualities by productId, product type, product
              price, product model etc., .{" "}
              <a
                href="https://github.com/React21S/Product-Unit-testing/blob/main/ProductsAPI.md"
                target="_blank"
                rel="noopener noreferrer"
              >
                Click to see more
              </a>
            </p>

            <a
              href="https://github.com/React21S/Product-Unit-testing"
              target="_blank"
              rel="noreferrer"
              className="github"
            >
              Check <i className="fab fa-github fa-2x"></i>
            </a>
          </div>

          <div className="card card14">
            <img src={require("../img_project/TodoApp.png")} alt="todoApp" />
            <h4>
              {" "}
              TodoApp (Built with React redux, React content management,
              HTMl/CSS, Typescript, javascript)
            </h4>
            <p>
              This is Todo App and it was build with different applications. In
              this app user filled the title and task, click on an add task
              button to add the task. User clicks on any of completed task to
              strike out the completed task, and clicks on the delete button to
              delete the completed task. Also, user can select option to view
              each condition such as done, notDone and All.{" "}
              <a
                href="https://github.com/React21S/todoAppTs"
                target="_blank"
                rel="noopener noreferrer"
              >
                Click to see more
              </a>
            </p>

            <a
              href="https://github.com/React21S/Todo_Redux-"
              target="_blank"
              rel="noreferrer"
              className="github"
            >
              Check <i className="fab fa-github fa-2x"></i>
            </a>
          </div>

          <div className="card card14">
            <img
              src={require("../img_project/SignUp.png")}
              alt="authentication"
            />
            <h4>
              {" "}
              Authentication App (Built with React, React content management,
              HTMl/CSS, firebase as backend)
            </h4>
            <p>
              This is an authentication app built with react context management
              with firebase for deployment. Users can signup with their name,
              email, password and get access to enter data. Each user has their
              login page, where the user cannot see what is going on on another
              user's page{" "}
              <a
                href="https://npscore-72b0f.web.app/login"
                target="_blank"
                rel="noopener noreferrer"
              >
                Click to see more
              </a>
            </p>

            <a
              href="https://github.com/React21S/Authentication"
              target="_blank"
              rel="noreferrer"
              className="github"
            >
              Check <i className="fab fa-github fa-2x"></i>
            </a>
          </div>

          <div className="card card15">
            <img
              src={require("../img_project/ProjectTool.png")}
              alt="project management app"
            />
            <h4>
              {" "}
              Project management App (Built with React, React content
              management, HTMl/CSS, firebase as backend and Material UI [MUI])
            </h4>
            <p>
              This is a project management app that can use to assign a project
              within a team or an office. The users can signup or login to view
              the project assigned to them, create a project, assign people to
              the project, and enter the due date for each project.{" "}
              <a
                href="https://chartapp-e2f1a.web.app/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Click to see more
              </a>
            </p>

            <a
              href="https://github.com/FemiAdesola/Project_management_App"
              target="_blank"
              rel="noreferrer"
              className="github"
            >
              Check <i className="fab fa-github fa-2x"></i>
            </a>
          </div>

          <div className="card card15">
            <img src={require("../img_project/NPS.png")} alt="NPS SCore" />
            <h4>
              {" "}
              Net Promoter Score (Built HTML, CSS, Javascript, React, Redux,
              MySQL, Node.js. Material UI [MUI])
            </h4>
            <p>
              Net Promoter Score (NPS) is an application used by many
              organizations or companies to evaluate the feedback on how well
              their services or products are with their customers. This project
              was done by a team of five people as a final software development
              project at The Business college Helsinki in collaboration with
              PHZ.fi.{" "}
              <a
                href="https://github.com/Termanty/PS-Dashboard"
                target="_blank"
                rel="noopener noreferrer"
              >
                Click to see more
              </a>
            </p>

            <a
              href="https://github.com/Termanty/PS-Dashboard"
              target="_blank"
              rel="noreferrer"
              className="github"
            >
              Check <i className="fab fa-github fa-2x"></i>
            </a>
          </div>
          <div className="card card16">
            <img src={require("../img_project/Kiva.png")} alt="Kivaweb" />
            <h4>
              {" "}
              Coming soon website (Built with HTML, CSS, Javascript, React,
              Redux, Material UI [MUI])
            </h4>
            <p>
              This is a hand play website designed for a coming soon of a
              company before switching to another program.{" "}
              <a
                href="https://github.com/FemiAdesola/kiva"
                target="_blank"
                rel="noopener noreferrer"
              >
                Click to see more
              </a>
            </p>

            <a
              href="https://github.com/FemiAdesola/kiva"
              target="_blank"
              rel="noreferrer"
              className="github"
            >
              Check <i className="fab fa-github fa-2x"></i>
            </a>
          </div>
          <div className="card card17">
            <img
              src={require("../img_project/KivaCountDown.png")}
              alt="KivaCountDown.png"
            />
            <h4>
              {" "}
              Coming soon website (Built with HTML, CSS, Javascript, React,
              Redux, Material UI [MUI])
            </h4>
            <p>
              This is a website designed purposely for counting down an event,
              and when the event is expired, it displays a content box written
              the event has passed.{" "}
              <a
                href="https://kiva-project-f1a64.web.app/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Click to see more
              </a>
            </p>

            <a
              href="https://github.com/FemiAdesola/kivavirta"
              target="_blank"
              rel="noreferrer"
              className="github"
            >
              Check <i className="fab fa-github fa-2x"></i>
            </a>
          </div>
          <div className="card card18">
            <img
              src={require("../img_project/ShoppingApp.png")}
              alt="ShoppingApp.png"
            />
            <h4>
              {" "}
              ECommerce website (Built with expressJS, nodeJS, mongoDB,
              mongoose, bcryptjs, stripe, pdfkit, Morgan, CSS, Javascript)
            </h4>
            <p>
              This app is a shopping app built with nodejs and expressJS with
              ejs as middleware, and the MongoDB database was used as a database
              for storing the data. Also, in this shopping app, the signup user
              can add a product or update a product, but it can't update, edit
              or delete the product that another user added to the product list.{" "}
              <a
                href="https://femi-shopping-app.herokuapp.com/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Click to see more
              </a>
            </p>

            <a
              href="https://github.com/FemiAdesola/shopMongosePayment"
              target="_blank"
              rel="noreferrer"
              className="github"
            >
              Check <i className="fab fa-github fa-2x"></i>
            </a>
          </div>
          <div className="card card18">
            <img src={require("../img_project/Todo.png")} alt="Todo.png" />
            <h4>
              {" "}
              Todo App (Built with expressJS, nodeJS, mongoDB, CSS, React hooks)
            </h4>
            <p>
              This app is a todo app built with nodejs and expressJS for
              backend, MongoDB database was used as a database for storing the
              data and reactJS was used for frontend.{" "}
              <a
                href="https://femi-todo-frontend.netlify.app/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Click to see more
              </a>
            </p>

            <a
              href="https://github.com/FemiAdesola/TodoWithNode"
              target="_blank"
              rel="noreferrer"
              className="github"
            >
              Check <i className="fab fa-github fa-2x"></i>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Projects;
