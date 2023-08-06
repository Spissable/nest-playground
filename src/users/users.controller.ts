import { Controller, Get } from '@nestjs/common';
import { UsersService } from './users.service';
import { UsersResponseDto } from './users.response.dto';
import { ApiResponse } from '@nestjs/swagger';

@Controller('api/users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Get()
  @ApiResponse({ type: UsersResponseDto, isArray: true })
  public async findAllActiveUsers(): Promise<UsersResponseDto[]> {
    return this.usersService.findAllActiveUsers();
  }
}
