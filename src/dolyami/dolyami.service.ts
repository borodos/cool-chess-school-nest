import { HttpService } from '@nestjs/axios';
import { HttpException, Injectable } from '@nestjs/common';
import { randomUUID } from 'crypto';
import { catchError, firstValueFrom, map } from 'rxjs';
import configHeadersDolyami from 'src/utils/configHeadersDolyami';

const uuid = randomUUID();
const config = {
  ...configHeadersDolyami,
  headers: {
    ...configHeadersDolyami.headers,
    'X-Correlation-ID': uuid,
  },
};

@Injectable()
export class DolyamiService {
  constructor(private readonly httpService: HttpService) {}

  async createOrder(data) {
    const responseData = await firstValueFrom(
      this.httpService
        .post('https://partner.dolyame.ru/v1/orders/create', data, config)
        .pipe(
          map((response) => {
            return response.data;
          }),
          catchError((error) => {
            throw new HttpException(error.response.data, error.response.status);
          }),
        ),
    );

    return responseData;
  }
}
