import { User, UserRole } from '../drizzle/schema';

export class UsersResponseDto {
  readonly id: number;
  readonly email: string | null;
  readonly role: string | null;

  constructor(user: User & { user_role: UserRole | null }) {
    this.id = user.id;
    this.email = user.email;
    this.role = user.user_role?.name ?? null;
  }
}
