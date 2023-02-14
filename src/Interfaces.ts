import {RequestHandler} from 'express';

export interface IAuthenticatedRouterOptions {
  middleware?: Array<RequestHandler>
}

