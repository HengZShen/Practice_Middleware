# Practice_Middleware
practice how to implement middleware in request-response cycle


## screenshots
### show request method and time when server get any request from route followed by '/'
![screenshot](/img/time.JPG)
### detail page : 0~30 seconds 
![screenshot](/img/before30.JPG)
### detail page : 31~59 seconds
![screenshot](/img/after30.JPG)

## app.js
1. app.use('/',middleware)=> all requests from route followed by '/' will print the time and request method.

## todo.js
1. router.get('/:id',middleware) => requests from '/:id' will have perform two kinds of results depends on the condition set up by middleware.

2. router.get('/:id/edit', [array of middleware]) => requests from "/:id/edit will" perform a series of middleware.

## Installing
 1. Open your terminal, and clone this project <br>
 `git clone https://github.com/HengZShen/Practice_Middleware.git `
 2. Open terminal, enter the project folder  <br>
 `cd Practice_Middleware`
 3. Install npm  <br>
 ` Type "npm intall" in your terminal`
 4. Install nodemen  <br>
 ` Type "npm install nodemon" `
 5. Create seed data <br>
 ` Type "npm run seed `
 6. Start server  <br>
 ` Type "npm run dev`  <br>
  ` If you see " The server is running on http://localhost:3000 " pop on your terminal`  <br>
  ` The server starts successfully`


## Development environments
  `body-parser : 1.19.0` <br>
  `express : 4.17.1` <br>
  `express-handlebars : 5.2.1` <br>
  `mongoose : 5.12.0` <br>
  `method-override : 3.0.0`
