import { defineConfig } from 'drizzle-kit';


export default defineConfig({
    schema: "./src/schema.ts",
    out: "./drizzle",
    dialect: "postgresql",
    dbCredentials: {
        host: "localhost",
        port: 5432,
        user: "root",
        password: "root",
        database: "postgres",
    }
})
