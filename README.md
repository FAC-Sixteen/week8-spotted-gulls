# week8-spotted-gulls

![gulls](https://thumbs.gfycat.com/CharmingDimwittedBonobo-size_restricted.gif)

# SPOTTED GULL
http://spotted-gull.herokuapp.com/

## Team

:bird: @Fweddi :bird: @RohanSS :bird: @tloth

## Overview

A dating app for gulls! By dating app, we mean a platform where gulls can upload information about themselves, and see others' information. In no way can they get in touch with each other! #Safety.

## Built with

+ JavaScript, CSS
+ PostgresSQL
+ Express.js
+ Handlebars.js
+ Love

## Setup :blowfish:

+ git clone!
+ `npm i`!
+ get the environment variables from us!
+ create test database with a superuser, and add the details to config.env under TEST_DATABASE_URL
+ run `npm start` to start the server
+ you're ready to gull!

## General gulls, specific gulls, personal gulls

+ learn to use Express
+ learn to use Handlebars

- [x] have app deployed on heroku
- [ ] use CI (Travis)
- [x] use github projects
- [x] have a one table database
- [x] use express to set up server and router
- [x] use express for controllers
- [x] use handlebars to display pages more efficiently
- [x] have tests
- [x] be able to register a new gull
- [x] be able to sea each gull
- [x] be able to sea all gulls at once*
- [x] have reasonable CSS
- [x] error pages

*this we left for Friday, leaving reviewers rather peckish:

![Sandra - get all gulls](https://i.imgur.com/qUzANA5.png)

_Anna_ :fish:

+ testing

_Freddie_ :fish:

+ databases

_Rohan_ :fish:

+ having fun doing CSS

## Stretch gulls

+ login and authentication
+ comment section under each gull
+ fish/chips button (instead of like button)
+ messaging platform so gulls can talk to each other
+ add squawks to enhance UX

## Planning and process

:ocean: wireframe! :sweat_smile:

![wireframe](https://i.imgur.com/N4ROA7t.jpg)

:ocean: user journey ft orange is the new black!

![user journey](https://i.imgur.com/cNKkb5z.jpg)

:ocean: database schema!

![schema](https://i.imgur.com/FTb5OjY.jpg)

We worked together as a 3, which turned out fine, but took quite a long time.


## What we learned

+ how to add data using Handlebars
+ how Express works
+ that you can't have issues automatically assigned to github projects --> we tried using hub in the command line, but prioritised projects for aesthetic pleasure
+ main.hbs --> when <link>ing in the .css file, it thinks the starting point is an other folder in the public folder (that doesn't exist) i.e. instead of ../../../public/main.css, it's ../main.css
+ in a form, `<select>`s also need `name` and `id`!

## Problems encountered

+ towards the end of Day 1, right in the middle of creating the database, we realised gulls can't type* (*not scientifically confirmed)
+ Travis quietly not working properly in the background
+ parsing data to partials

![gull](https://media3.giphy.com/media/EU937QYxNFPeE/giphy.gif)
