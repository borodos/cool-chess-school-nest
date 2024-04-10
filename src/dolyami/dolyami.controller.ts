import { Body, Controller, Post } from '@nestjs/common';
import { DolyamiService } from './dolyami.service';
import { OrderDTO } from 'src/dto/order.dto';

@Controller('dolyami')
export class DolyamiController {
  constructor(private readonly dolyamiService: DolyamiService) {}

  @Post('create')
  async create(@Body() data: OrderDTO) {
    return await this.dolyamiService.createOrder(data);
  }
}
