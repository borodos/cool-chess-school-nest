import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { HttpService } from '@nestjs/axios';
import { InternalServerErrorException } from '@nestjs/common';
import cors from 'cors';

async function bootstrap() {
  const httpService = new HttpService();
  const app = await NestFactory.create(AppModule);

  httpService.axiosRef.interceptors.response.use(
    (response) => {
      return response;
    },
    (error) => {
      console.error('Internal server error exception', error);
      throw new InternalServerErrorException();
    },
  );

  app.use(
    cors({
      credentials: true,
      origin: '*',
    }),
  );

  await app.listen(3000);
}
bootstrap();
