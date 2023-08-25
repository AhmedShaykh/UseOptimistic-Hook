import { neon } from "@neondatabase/serverless";

const sql = neon(process.env.DATABASE_URL);

export async function helloWorld() {

    const [dbResponse] = await sql`SELECT NOW();`;

    const dbNow = dbResponse && dbResponse.now ? dbResponse.now : "";

    return { dbNow: dbNow };
};