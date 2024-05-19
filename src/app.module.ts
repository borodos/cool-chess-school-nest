import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { DolyamiModule } from './dolyami/dolyami.module';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [DolyamiModule, ConfigModule.forRoot()],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
