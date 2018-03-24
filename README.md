# Order of Operations Quiz

[![Build Status](https://travis-ci.org/edward-ly/arithmetic-quiz-mobile.svg?branch=develop)](https://travis-ci.org/edward-ly/arithmetic-quiz-mobile) [![code style: prettier](https://img.shields.io/badge/code_style-prettier-ff69b4.svg)](https://github.com/prettier/prettier)

A [React Native](https://facebook.github.io/react-native/)-based mobile app that tests the user’s understanding of order of operations as well as arithmetic expressions in Polish / Reverse Polish notation. New questions are randomly generated on-the-fly based on user settings for endless replayability.

Run the app via [Expo](https://expo.io/) here: [https://expo.io/@edward_ly/arithmetic-quiz](https://expo.io/@edward_ly/arithmetic-quiz)

## Technical Overview

This project was bootstrapped with [Create React Native App](https://github.com/react-community/create-react-native-app). For more information on how to setup and develop your own React Native App, you can find the most recent version of the official README [here](https://github.com/react-community/create-react-native-app/blob/master/README.md).

## Getting Started

### Building the App

> This app uses [npm](https://github.com/npm/npm) to manage development dependencies, so install [Node](https://nodejs.org/en/) if necessary.

To build the app from source, just clone the repository and run `npm start`.

```shell
$ git clone <this repo> <project folder>
$ cd <project folder>
$ npm start
```

This will install dependencies and start the app, after which a QR code will appear in the console.

Now, you can download the [Expo](https://expo.io/) client app from the App Store or Google Play Store onto your phone and scan the QR code to run the app.

### Developing the App

The commands `npm start`, `npm test`, `npm run ios`, `npm run android`, and `npm run eject` perform the same functions as in [Create React Native App](https://github.com/react-community/create-react-native-app/blob/master/README.md#getting-started). Additional commands for this project include:

#### `npm run lint`

Runs [ESLint](https://eslint.org/) on all project files, printing any code warnings and errors found to the console.

#### `npm run prettier`

Runs the [Prettier](https://github.com/prettier/prettier) code formatter, with ESLint being run afterwards to make any additional fixes. Any changes made are automatically written and saved to the affected files, and can be committed with `git commit` or undone with `git reset` or `git stash`.

#### `npm run publish`

Short for `git push && git checkout master && git merge develop && git push && git checkout develop` when run on the default `develop` branch. Pushes local commits to the `develop` and `master` branches simultaneously, and publishes the updated app to Expo via [Travis](https://travis-ci.org/).

## Last updated

23 March 2018
