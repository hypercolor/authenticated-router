import {IRoute, RequestHandler, Router} from 'express';
import {IAuthenticatedRouterOptions} from './Interfaces';

export class AuthenticatedRouter {
  public router: Router = Router();
  public routeGroups: Array<RouteGroup> = [];

  constructor(private readonly options?: IAuthenticatedRouterOptions) {
    this.options = options || {};
  }

  public static build(options: IAuthenticatedRouterOptions, builder: (router: AuthenticatedRouter) => void) {
    const router = new AuthenticatedRouter(options);
    builder(router);
    return router;
  }

  public route(route: string) {
    const routeGroup = new RouteGroup(route, this.router, this.options!);
    this.routeGroups.push(routeGroup);
    return routeGroup;
  }
}

export class RouteGroup {
  public verb = 'unknown';
  public handler?: RequestHandler;
  private route: IRoute;
  private myMiddleware: Array<RequestHandler> = [];

  constructor(public path: string, router: Router, private opts: IAuthenticatedRouterOptions) {
    this.route = router.route(path);
  }

  public use(middleware: RequestHandler) {
    this.myMiddleware.push(middleware);
    return this;
  }

  public get(controller: RequestHandler) {
    return this.handleMethod('get', controller);
  }

  public post(controller: RequestHandler) {
    return this.handleMethod('post', controller);
  }

  public put(controller: RequestHandler) {
    return this.handleMethod('put', controller);
  }

  public patch(controller: RequestHandler) {
    return this.handleMethod('patch', controller);
  }

  public delete(controller: RequestHandler) {
    return this.handleMethod('delete', controller);
  }

  public all(controller: RequestHandler) {
    return this.handleMethod('all', controller);
  }

  public options(controller: RequestHandler) {
    return this.handleMethod('options', controller);
  }

  public head(controller: RequestHandler) {
    return this.handleMethod('head', controller);
  }

  private handleMethod(verb: string, handler: RequestHandler) {
    this.handler = handler;
    this.verb = verb;
    (this.route as any)[verb](...this.buildMiddlewareArray(), handler);
    return this;
  }

  private buildMiddlewareArray() {
    let handlers: Array<any> = [];
    if (this.opts.middleware) {
      handlers = handlers.concat(this.opts.middleware);
    }
    return handlers.concat(this.myMiddleware);
  }
}
