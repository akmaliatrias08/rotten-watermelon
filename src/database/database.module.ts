import { Module } from '@nestjs/common';
import { Client } from 'pg';
import 'dotenv/config'

const pgClient = {
  provide: 'PG_CLIENT',
  useFactory: () => {
    const client = new Client({
        user: process.env.POSTGRES_USER,
        password: process.env.POSTGRES_PASSWORD,
        host: process.env.POSTGRES_HOST,
        port: 5432,
        database: process.env.POSTGRES_DB,
    });
    client.connect();
    return client;
  },
}

@Module({
    providers: [pgClient],
    exports: [pgClient],
})
export class DatabaseModule {}
