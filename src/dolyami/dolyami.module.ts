import { MailerModule } from '@nestjs-modules/mailer';
import { HttpModule } from '@nestjs/axios/dist';
import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { DolyamiController } from './dolyami.controller';
import { DolyamiService } from './dolyami.service';

// import { HandlebarsAdapter } from '@nestjs-modules/mailer/dist/adapters/handlebars.adapter';

@Module({
  imports: [
    HttpModule.registerAsync({
      useFactory: async () => ({
        timeout: 5000,
        maxRedirects: 5,
      }),
    }),
    MailerModule.forRootAsync({
      imports: [ConfigModule],
      inject: [ConfigService],
      useFactory: async (configService: ConfigService) => ({
        transport: {
          host: configService.get('EMAIL_HOST'),
          port: configService.get('EMAIL_PORT'),
          secure: true,
          auth: {
            user: configService.get('EMAIL_ID'),
            pass: configService.get('EMAIL_PASS'),
          },
        },
      }),
    }),
  ],
  controllers: [DolyamiController],
  providers: [DolyamiService],
})
export class DolyamiModule {}
