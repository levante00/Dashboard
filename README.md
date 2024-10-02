<!-- # Dashboard

Dashboard created using Vue.js and Tailwind CSS frameworks.

## Running the program(For Linux)
* ### First Download npm and nodejs
    1. Open Terminal and use $ sudo apt-get update
    2. $ sudo apt install nodejs
* ### After that clone the repository on your local machine
    1. Open Terminal and use $ git clone https://github.com/levante00/Dashboard.git
* ### Finally install the necessary packages and start the dev server 
    1. $ npm install
    2. $ npm run dev -->


# Dashboard

A responsive dashboard application built using **Vue.js** and **Tailwind CSS** frameworks.

## Installation

### Prerequisites

Ensure you have Node.js and npm installed on your system.

For Linux:
1. Open Terminal and run the following commands:
    ```bash
    sudo apt update
    sudo apt install nodejs npm
    ```

For MacOS:
1. Install Homebrew (if not installed):
    ```bash
    /bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"
    ```
2. Use Homebrew to install Node.js:
    ```bash
    brew install node
    ```

For Windows:
1. Download and install Node.js from [Node.js Official Site](https://nodejs.org/).

### Cloning the repository
Once you have Node.js and npm set up, clone the repository to your local machine:
```bash
git clone https://github.com/levante00/Dashboard.git
```

### Installing Dependencies

Once the repository is cloned, you need to install the required dependencies for the project. This includes all necessary libraries and packages that the application depends on.

1. Navigate to the project directory using Terminal or Command Prompt:
    ```bash
    cd Dashboard
    ```

2. Run the following command to install all necessary Node.js packages:
    ```bash
    npm install
    ```
   This command will install all dependencies listed in the `package.json` file, including Vue.js, Tailwind CSS, and any other required packages.

### Running the Development Server

After installing the dependencies, you can start the development server to preview and test the application locally.

1. In the project directory, run the following command:
    ```bash
    npm run dev
    ```
   This will compile the project and start a local development server. By default, the server will be available at `http://localhost:3000/`.

2. Open your web browser and navigate to:
    ```
    http://localhost:3000/
    ```
   You should now see the dashboard running locally. Any changes you make to the source files will automatically be reflected in the browser as the development server uses hot-reloading.

3. To stop the development server, press `CTRL + C` in the terminal where the server is running.