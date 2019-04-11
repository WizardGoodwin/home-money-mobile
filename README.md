# React blog

This is demo mobile app, developed by me for training and demonstration purposes.
This app allows to keep records of home accounting - add incomes, outcomes, keep track of balance, to plan budget and 
work with records' history.
The goal of it's creating - learning of Angular an Ionic frameworks, their work in conjunction an also practicing skills
and techniques for working with hybrid apps.


## Technologies and Libs

- Angular 7.2.2
- Ionic 4.1
- Capacitor - access to native mobile functions
- rxjs - handling async operations
- moment - formatting date and time
- ngx-charts - creating diagrams
- json-server - API imitation


## Implemented functionality

- Users registration and authorization;
- CRUD operations for some entities (records, categories) by asynchronous requests to server;
- Output of current exchange rates with real time update feature;
- Search and filter records according to the required parameter; 
- Guarded routes (with redirecting if necessary).


## Description of the app
APK file for Android devices is in `/apk` directory.

You can register as new user or login with following credentials:

E-mail: admin@email.com;
Password: 12345678;

You can navigate with sidebar menu, which opens by clicking on button in left upper corner of the screen.

### `Bill` page
User can see current balance and also current exchange rates.

### `History` page
There is pie chart with outcome categories in the upper part of the page.
Lower is history of all added records with search by chosen parameter feature.
Also there is filter button in right upper corner of the screen.

### `Planning` page
On the planning page user can see outcomes in relation to limits for each category.
According to the amount of available balance changes progress bar color.

### `Records` page
There is new record form on this page. There are 2 types of records - income and outcome. Also user can choose 
category and add description to record. Besides, user can add, edit and delete categories of records.

