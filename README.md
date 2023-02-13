# @hypercolor/authenticated-router

## Table of Contents
- [Motivation](#motivation)
- [Installation](#installation)
- [Examples](#Examples)
- [License](LICENSE)
- [More Information](#more-information)
    - [Toolchain](#toolchain)
    - [Project Repository](#project-repository)
    - [Organization Repository](#organization-repository)

## Motivation
This tool helps Express developers apply middleware chains consistently across sets of APIs.  Using Express Router's standard pattern for adding middleware means you will need to manually copy and paste the set of middleware for each mounted route.  `AuthenticatedRouter` lets you build groups of routes that all have the same upstream middleware applied. 

## Installation
- NPM
  - `npm install @hypercolor/authenticated-router`
- Yarn
  - `yarn add @hypercolor/authenticated-router`

## Example
```typescript
import {AuthenticatedRoute, AuthenticatedRouter} from './AuthenticatedRouter';

const router = AuthenticatedRouter.build({
  middleware: []
}, routeGroup => {
  routeGroup.route('/home').get(buildHandler(GetWelcomeScreenController));
  routeGroup.route('/post').post(buildHandler(CreatePostController));
  routeGroup.route('/post/:post_id/update').put(buildHandler(UpdatePostController));
})

expressApp.use('/mount', router.router)
```

## AuthenticatedRouter API
* `build(options, builder)`

Creates a block of routes that will have all the same middleware applied.  Middleware array is passed in as `options.middleware`.

Routes are specified in the `builder` callback.  The closure is invoked with an `RouteGroup` parameter. 

## RouteGroup API

The RouteGroup contains wrappers for Express Router's verbs.  Pass in an Express RequestHandler to create the mount.

### Express Router Wrappers
#### get(controller: RequestHandler): this;
#### post(controller: RequestHandler): this;
#### put(controller: RequestHandler): this;
#### patch(controller: RequestHandler): this;
#### delete(controller: RequestHandler): this;
#### all(controller: RequestHandler): this;
#### options(controller: RequestHandler): this;
#### head(controller: RequestHandler): this;

### use(middleware: RequestHandler): this;

Add a new middleware.  Will only be applied to routes added after this is called.



#### [Project Repository](https://github.com/hypercolor/swagger-generator)

#### [Organization Repository](https://github.com/hypercolor/)
