# ImageGallery

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 13.2.0.

Added [Electron](https://www.electronjs.org/) to extend this project to be able to work as a Windows App as well.

## Development server

Run `npm run start:electron` for a dev server. The app will automatically start in a native Window.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Application Working

Application has a simple Search option where we can search for Subreddit Galleries. Once we type in some text and search we world get all the images in Subreddit Gallery. We would display `No results` if the Imgur server returns nothing.

## Technical Insights

Used Imgur Login to register and Application.
We are using Client ID to access the Subreddit Images provided by Imgur.
Using Electron to use Angular app as a Native application
We can package applications using Electron and use them accross Platform. It helps in faster development times using web tech. 
