import { Inject, Injectable } from '@nestjs/common';
import { NodePgDatabase } from 'drizzle-orm/node-postgres';
import * as schema from '../drizzle/schema';
import { DATABASE_URL } from '../app.constants';
import { UsersResponseDto } from './users.response.dto';
import { eq } from 'drizzle-orm';
import { users } from '../drizzle/schema';

@Injectable()
export class UsersService {
  constructor(
    @Inject(DATABASE_URL) private conn: NodePgDatabase<typeof schema>,
  ) {}

  public async findAllActiveUsers(): Promise<UsersResponseDto[]> {
    const dbUsers = await this.conn.query.users.findMany({
      where: eq(users.active, true),
      with: {
        user_role: true,
      },
    });

    return dbUsers.map((dbUser) => new UsersResponseDto(dbUser));
  }
}
