import { Module } from '@nestjs/common';
import { DolyamiController } from './dolyami.controller';
import { HttpModule } from '@nestjs/axios/dist';
import { DolyamiService } from './dolyami.service';
import { MailerModule } from '@nestjs-modules/mailer';
// import { HandlebarsAdapter } from '@nestjs-modules/mailer/dist/adapters/handlebars.adapter';

@Module({
  imports: [
    HttpModule.registerAsync({
      useFactory: () => ({
        timeout: 5000,
        maxRedirects: 5,
      }),
    }),

    MailerModule.forRoot({
      transport: {
        host: 'smtp.mail.ru',
        port: '465',
        secure: true,
        auth: {
          user: 'jojofan22819@mail.ru',
          pass: 'ZdeUwkvNkmKbcia3AbaY',
        },
      },
    }),
  ],
  controllers: [DolyamiController],
  providers: [DolyamiService],
})
export class DolyamiModule {}
