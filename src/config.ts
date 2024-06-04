import type AppConfiguration from '@/types/config';

const configuration : AppConfiguration = {

    port: process.env.APP_PORT || 3000,

    host: process.env.APP_PORT || "127.0.0.1",

}

export default configuration;

