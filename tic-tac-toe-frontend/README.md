# TicTacToeFrontend

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 11.0.4.

## Requirements
- npm

## Design
The app presents a simple tic tac toe game. It was assumed that the board size is 3x3 and the `X` always start.
The layout is very simplistic it contains a header with the app name and a 1 item menu.
The board itself is dark blue. There are 2 buttons to play the game.<br>
When the game is finished a snackbar is displayed, with either `Draw`, `X won` or `O won` because I assumed the reuirements had a typo.

## Architecture
The app uses a redux store to store current data like the board and the current player. 
The app container several modules.<br>
`core` for core functionality like services and the store <br>
`shared` for shared components and modules <br>
and feature modules <br>

All modules are lazy loaded.

The app uses the `smart and dumb components` architecture for a better data flow.

## Installation
After checking out the repo run `npm install`

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `npm run start:e2e` and then `npm run e2e`. The backend must run too.
