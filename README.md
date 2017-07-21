# Back to Basics Angular and Express Starter Pack

This project means to be a mostly unopinionated, back to basics, down to earth [Angular](https://angular.io/) and [Express](https://expressjs.com/) starter project. It was created by using of [@angular/cli](https://github.com/angular/angular-cli) and [express generator](https://expressjs.com/en/starter/generator.html), the official ones and applying only minor modifications which are all documented below in order to make them work together. 

The starter files can also be run inside a [Vagrant](https://www.vagrantup.com/) box running [Ubuntu](https://www.vagrantup.com/) Xenial.

## Back to Basics 

__Back to Basics projects are created to be a good starting point, especially for people less comfortable with custom setups created by who knows who, or who are just starting their journey into this world.__

Back to Basics projects are based on vendor recommended setups, they are easy to keep updated and developers can fall-back to the official documentation of the tools anytime. This way these projects are independent of regular maintenance or third party documentation.

Relying on official setups drops the entry barrier a lot and raises the confidence of newcomers. These setups are ideal for learning. This does not mean you should dismiss them for production applications or professional development environments. There might be other setups which suit you more or there might not be, it's up to you to compare and decide.

## Installation

Follow the steps below which match your desired development style.

### Local Setup

1. ```clone``` this project
2. Install [Node JS](https://nodejs.org/en/download/), prefer Node v7 or later
3. When done run ```npm install -g @angular/cli``` (you might need to sudo on *nix)
4. ```cd``` to the folder you cloned this project to and run ```npm install```

### Vagrant Setup

The Vagrant box also provisions [Maria DB](https://mariadb.org/) as a DBMS (better performance, more storage engines, familiarity of MYSQL etc.), it's a more "ready-to-go" solution.

1. Install [Vagrant](https://www.vagrantup.com/) and [Virtual Box](https://www.virtualbox.org/) (5.1.14 works, 5.1.16 does not, there is a problem in later versions of VB that prevents folders from being synced wait for it to be resolved)
2. ```clone``` this project
3. ```cd <project_folder>/vm``` and run ```vagrant up```
4. After that is done, you can either SSH into the machine (```vagrant ssh```) and run the below commands in the ```/app``` folder or run them from your local machine like this: ```vagrant ssh -c 'cd /app && <command>```
5. If you want Angular CLI (and nodemon) to trigger a browser reload when a file updates you will need to install and use [vagrant-fsnotify](https://github.com/adrienkohlbecker/vagrant-fsnotify), just follow the instructions on their github page, it works like a charm

### Yeoman generator

Maybe this will be a reality in the future.

## Running the app

Follow these instructions to get your app running. Note that all commands should be run in the project folder, which in case of the Vagrant setup is under ```/app```.

### Server Side

```npm run start:server``` will start Express and the server will be listening on port 3000 by default. 

Express, by default, does not offer many options so this is it.

### Client Side

1. ```npm run start:client``` will start the Angular CLI webpack development server which by default listens on port 4200.
2. ```npm test``` will run all Angular tests
3. ```npm run build:client``` will build the Angular project. The output files are dumped in the ```<project>/server/public``` folder where Express can pick them up directly and serve them as static files (default Express setup)

(You can also run the default commands of Angular CLI)[https://github.com/angular/angular-cli/wiki], including scaffolding and all other commands. Note that if you would like to run the development server this way you need to specify the ```--host``` parameter as ```0.0.0.0``` if you run it inside Vagrant. This is done automatically when using ```npm run serve:client```.

## Changes to the default setups

Here is a list of modifications done to the default setups. You can replicate these in order to update all dependecies yourself.

1. Express is installed with the ```--pug``` option (latest dependencies) 
2. Angular is installed with these options: ```--prefix=bb --routing --skip-git --style=scss```
3. Both package.json files (Angular CLI and Express) which were generated are merged in one file and placed in the parent dir.
    - the dirs for each of the components were named client and server respectively
    - tasks are namespaced as ```:client``` and ```:server```
    - default ```start``` and ```test``` tasks point to the namespaced tasks
4. Two extra dev dependencies are fetched: ```nodemon``` and ```concurrently``` by running ```npm install --save-dev nodemon concurrently``` and a new task for the server is created called ```daemon:server``` to which the default ```npm start``` is pointed

