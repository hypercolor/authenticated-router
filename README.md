# Hypercolor Swagger Generator

## Table of Contents
- [Introduction](#introduction)
- [Installation](#installation)
- [Usage](#usage)
- [Examples](#Examples)
- [License](LICENSE)
- [More Information](#more-information)
    - [Toolchain](#toolchain)
    - [Project Repository](#project-repository)
    - [Organization Repository](#organization-repository)

## Introduction
This is a bearer authentication router class to be used as an API route mounting tool 

## Installation
- NPM
  - `npm install @hypercolor/authenticated-router`
- Yarn
  - `yarn add @hypercolor/authenticated-router`

## Usage
In you API mounting file, import the package and initialize the router. See examples for details.

## Examples
API Routes File
```typescript
import * as e from 'express'
import {AuthenticatedRoute, AuthenticatedRouter} from './AuthenticatedRouter';

export class V1ApiRoutes {
  public static buildAndMountRoutes(expressApp: e.Application, mountPoint: string) {
    const routers: Array<AuthenticatedRoute> = [
      AuthenticatedRouter.build({
        controllerBuilder: '',
        middleware: []
      },  router => {
        router.route('/home').get(GetWelcomeScreenController);
        router.route('/post').post(CreatePostController);
        router.route('/post/:posto_id/update').put(UpdatePostController);
      })

    ];

    routers.forEach((router: AuthenticatedRouter) => {
      expressApp.use(mountPoint, router.router);
    });

    return routers;
  }
}
```
Aggregated versioned API Routes file
```typescript
import * as e from 'express'
export class Routes {
  public static register(app: e.Application) {
    V1ApiRoutes.buildAndMountRoutes(app, '/api/v1');
  }
}
```

With those files in place, add this line of code to your server initialization file:

```typescript
export class Server {
  constructor() {
    Routes.register(this.app);
  }
}
```


## More Information
#### Toolchain
- Node.js
- TypeScript
- Express.js

#### [Project Repository](https://github.com/hypercolor/swagger-generator)

#### [Organization Repository](https://github.com/hypercolor/)
