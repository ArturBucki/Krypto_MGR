import {Redis} from 'ioredis'
require('dotenv').config()

const redisClient = () => {
    if(process.env.REDIS_URL){
        console.log(`Redis połączony`);
        return process.env.REDIS_URL;
    }
    throw new Error('Redis nie połączono, error');
};



export const redis = new Redis(redisClient());