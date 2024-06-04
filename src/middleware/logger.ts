import { type Context, type Next } from 'hono';
import pino from 'pino';

const logger = pino({
    transport: {
        target: 'pino-pretty',
        options: {
            colorize: true
        }
    }
});

export default async function (c: Context, next: Next){
    const { method, url } = c.req;
    const start = Date.now();
    await next();
    const end = Date.now();
    logger.info(`${method} ${url} ${end - start}ms`);
}
