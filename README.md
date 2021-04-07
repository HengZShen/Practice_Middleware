# Practice_Middleware
practice how to implement middleware in request-response cycle

## app.js
1. app.use('/',middleware)=> all requests from path '/' will print the time when request start.

## todo.js
1. router.get('/:id',middleware) => requests from '/:id' will have perform two kinds of results depends on the condition set up by middleware

2. router.get('/:id/edit', [array of middleware]) => requests from "/:id/edit will" perform a series of middleware.
