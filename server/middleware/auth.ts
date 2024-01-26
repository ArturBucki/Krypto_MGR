import { Request, Response, NextFunction } from 'express';
import { CatchAsyncError } from './catchAsyncErrors';
import ErrorHandler from '../utils/ErrorHandler';
import jwt, { JwtPayload } from 'jsonwebtoken';
import { redis } from '../utils/redis';

// Auth user
export const isAutheticated = CatchAsyncError(async (req: Request, res: Response, next: NextFunction) => {
    try {
        const access_token = req.cookies.access_token;

        // Dodaj log, aby sprawdzić wartość access_token
        console.log('Access Token:', access_token);

        if (!access_token) {
            return next(new ErrorHandler('Zaloguj się aby uzyskać dostęp', 400));
        }

        // Type assertion using 'as' keyword
        const decoded = jwt.verify(access_token, process.env.ACCESS_TOKEN as string) as JwtPayload;

        console.log('Decoded Token:', decoded);

        if (!decoded) {
            return next(new ErrorHandler('Token nie jest poprawny', 400));
        }

        const user = await redis.get(decoded.id);

        if (!user) {
            return next(new ErrorHandler('Zaloguj się aby mieć dostęp do tych danych', 400));
        }

        req.user = JSON.parse(user);
        next();
    } catch (error) {
        console.error('Error in isAuthenticated:', error);
        next(error);
    }
});
