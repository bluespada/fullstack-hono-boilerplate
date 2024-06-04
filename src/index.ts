import { Hono, type Context } from 'hono';
import AppConfig from '@/config';
import logger from '@/middleware/logger';

const app = new Hono();

app.use(logger);


export default {
    host: AppConfig.host,
    port: AppConfig.port,
    fetch: app.fetch,
};
