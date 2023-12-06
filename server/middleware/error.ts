import { NextFunction, Request, Response } from 'express';
import ErrorHandler from '../utils/ErrorHandler';


export const ErrorMiddleware = (
    err:any,
     req:Request,
      res:Response,
       next:NextFunction
       ) => {
    err.statusCode = err.statusCode || 500;
    err.message = err.message || 'Internal error';

    // id error
    if(err.name === 'CastError'){
        const message = `not found: ${err.path}`;
        err = new ErrorHandler(message, 400)
    }

    // key error
    if(err.code === 11000){
        const message = `Duplicate ${Object.keys(err.keyValue)} enterned`;
        err = new ErrorHandler(message, 400)
    }


    // jwt error
    if(err.name === 'JsonWebTokenError'){
        const message = `Json error`;
        err = new ErrorHandler(message, 400)
    }


    // jwt expire
    if(err.name === 'TokenExpiredError'){
        const message = `Token expired`;
        err = new ErrorHandler(message, 400);
    }

    res.status(err.statusCode).json({
        success:false,
        message:err.message
    })



}