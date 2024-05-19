import { HttpService } from '@nestjs/axios';
import { HttpException, Injectable } from '@nestjs/common';
import { randomUUID } from 'crypto';
import { catchError, firstValueFrom, map } from 'rxjs';
import configHeadersDolyami from 'src/utils/configHeadersDolyami';
import sendMailOptions from 'src/utils/email/sendMailOptions';
import { MailerService } from '@nestjs-modules/mailer';

@Injectable()
export class DolyamiService {
  constructor(
    private readonly httpService: HttpService,
    private readonly mailerService: MailerService,
  ) {}

  async createOrder(data) {
    const uuid = randomUUID();
    const config = {
      ...configHeadersDolyami,
      headers: {
        ...configHeadersDolyami.headers,
        'X-Correlation-ID': uuid,
      },
    };

    const responseData = await firstValueFrom(
      this.httpService
        .post('https://partner.dolyame.ru/v1/orders/create', data, config)
        .pipe(
          map((response) => {
            const resultData = {
              ...response.data,
              uuid: uuid,
              orderId: data.order.id,
            };
            return resultData;
          }),
          catchError((error) => {
            throw new HttpException(error.response.data, error.response.status);
          }),
        ),
    );

    return responseData;
  }

  async getInfoOrder(param) {
    const uuid = randomUUID();
    const config = {
      ...configHeadersDolyami,
      headers: {
        ...configHeadersDolyami.headers,
        'X-Correlation-ID': uuid,
      },
    };

    const responseData = await firstValueFrom(
      this.httpService
        .get(`https://partner.dolyame.ru/v1/orders/${param.id}/info`, config)
        .pipe(
          map((response) => {
            const resultData = {
              ...response.data,
              uuid: uuid,
            };
            return resultData;
          }),
          catchError((error) => {
            throw new HttpException(error.response.data, error.response.status);
          }),
        ),
    );

    return responseData;
  }

  async sendEmail() {
    this.mailerService
      .sendMail(sendMailOptions)
      .then((res) => res)
      .catch((err) => {
        console.log(err);
      });
  }
}
