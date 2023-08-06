import { Module } from '@nestjs/common';
import { drizzle } from 'drizzle-orm/node-postgres';
import { Pool } from 'pg';
import * as schema from './schema';
import { ConfigService } from '@nestjs/config';
import { DATABASE_URL } from '../app.constants';

@Module({
  providers: [
    {
      provide: DATABASE_URL,
      inject: [ConfigService],
      useFactory: (configService: ConfigService) => {
        const connectionString = configService.get<string>('DATABASE_URL');
        const pool = new Pool({
          connectionString,
          ssl: false,
        });

        return drizzle(pool, { schema });
      },
    },
  ],
  exports: [DATABASE_URL],
})
export class DrizzleModule {}
