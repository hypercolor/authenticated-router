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

## Examples
API Routes File
```typescript
import {AuthenticatedRoute, AuthenticatedRouter} from './AuthenticatedRouter';

const router = AuthenticatedRouter.build({
  middleware: []
},  router => {
  router.route('/home').get(buildHandler(GetWelcomeScreenController));
  router.route('/post').post(buildHandler(CreatePostController));
  router.route('/post/:post_id/update').put(buildHandler(UpdatePostController));
})

expressApp.use('/mount', router.router)
```


#### [Project Repository](https://github.com/hypercolor/swagger-generator)

#### [Organization Repository](https://github.com/hypercolor/)
