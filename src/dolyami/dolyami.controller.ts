import { Body, Controller, HttpCode, Post, Res } from '@nestjs/common';
import { DolyamiService } from './dolyami.service';
import { OrderDTO } from 'src/dto/order.dto';

@Controller('dolyami')
export class DolyamiController {
  constructor(private readonly dolyamiService: DolyamiService) {}

  @Post('create')
  @HttpCode(200)
  async create(@Body() data: OrderDTO): Promise<any> {
    return data;
    return this.dolyamiService.createOrder(data);
  }
}
