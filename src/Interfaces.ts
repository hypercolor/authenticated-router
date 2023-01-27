import {Request, RequestHandler, Response} from 'express';


export type IControllerType = new (...args: Array<any>) => Controller;

export interface Controller {
  request: Request,
  response: Response
  start(req: Request, res: Response): Promise<any>,
  handleRequest(): Promise<any>,
}


export interface IAuthenticatedRouterOptions {
  middleware?: Array<RequestHandler>

  controllerBuilder?(controller: IControllerType): RequestHandler
}

export interface IMountedRoute {
  path: string,
  verb: string,
  controller: IControllerType | undefined
}
