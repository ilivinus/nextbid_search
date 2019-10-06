## [Development Assignment TheNextBid](https://thenextbidsearch.herokuapp.com/)

## Setup Requirements
* Nodejs >= 8.0v
* npm

## Steps to run the application
* Clone the repository and navigate to the project root directory using your command prompt or terminal (bash shell).
* Run `npm install` to install the node modules.
* Run `npm start` to run the app in the development mode.
* Open [http://localhost:3000](http://localhost:3000) to view it in the browser.


## Steps to run the Test
* From command prompt, run `npm test` in the project root directory. This launches the test runner in the interactive watch mode

#### You can click [here](https://thenextbidsearch.herokuapp.com/) to visit the site


## Description on the Choices made

1. 
    * **Choice :** I separated the components into presentational components (how things look) and container components (how things work). 
    * **Reason :** This is to enhance unit testing since concerns are separated.

2. 
    * **Choice :** I used debounce in the search field to handle text change
    * **Reason :** This is to ensure that the web api doesn't get called too frequently.

3.
    * **Choice :** I implemented search suggestion functionality.
    * **Reason :** This is to enhance user experience (UX).

4.   * **Choice :** Mobile first design. The applicaiton is         responsive.
     * **Reason :** The percentage of mobile users is always higher.
5.   * **Choice :** Centralization of the configuration.
     * **Reason :** This is to ensure one source of truth for the applicatio configuration.
6.   * **Choice :** Always grouped the *css*, *container*, *component*, *test* of a particular component in one folder.
     * **Reason :** This is for easy module referencing and confusion reduction especially when it comes to  identifying what asset belongs to which component.
