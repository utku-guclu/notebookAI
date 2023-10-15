import {neon, neonConfig} from '@neondatabase/serverless'
import {drizzle} from 'drizzle-orm/neon-http'

neonConfig.fetchConnectionCache = true  

if (!process.env.DATABASE_URL)  {
  throw new Error("DATABASE_URL is not defined")
}

// db - sql
const sql = neon(process.env.DATABASE_URL)  

// db - object relational mapping
export const db = drizzle(sql);

