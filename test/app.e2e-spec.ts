import { Test, TestingModule } from '@nestjs/testing';
import request from 'supertest';
import { describe, it, beforeEach } from 'vitest';
import { AppModule } from './../src/app.module';
import {
  FastifyAdapter,
  NestFastifyApplication,
} from '@nestjs/platform-fastify';

describe('AppController (e2e)', () => {
  let app: NestFastifyApplication;

  beforeEach(async () => {
    const moduleFixture: TestingModule = await Test.createTestingModule({
      imports: [AppModule],
    }).compile();

    app = moduleFixture.createNestApplication(new FastifyAdapter());
    await app.init();
    await app.getHttpAdapter().getInstance().ready();
  });

  it('GET /api/hello-world', () => {
    return request(app.getHttpServer())
      .get('/api/hello-world')
      .expect(200)
      .expect('Hello World!');
  });
});
