# ApiTestNodejs

This project was generated with [NodeJs](https://nodejs.org/es/) version 12.13.0.

## Server

The server was Inject with [Express](https://expressjs.com/es/) version 4.17.1

## Data Base

The data base was create with [JawsDB](https://elements.heroku.com/addons/jawsdb)

### Script Create Table

CREATE TABLE `employee` (
    `id` int(10) NOT NULL AUTO_INCREMENT, 
    `name` text NOT NULL, 
    `last_name` text NOT NULL, 
    `identification` int(50) NOT NULL, 
    `phone` int(50) NOT NULL, 
    `email` text NOT NULL, 
    PRIMARY KEY (`id`)
) ENGINE = InnoDB DEFAULT CHARSET = utf8


## Development server

Run `npm run dev` for a dev server. Navigate to `http://localhost:3000/`. The app will automatically reload if you change any of the source files.


