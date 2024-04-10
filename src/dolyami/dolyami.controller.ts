import { Body, Controller, Post, Res } from '@nestjs/common';
import { DolyamiService } from './dolyami.service';
import { OrderDTO } from 'src/dto/order.dto';

@Controller('dolyami')
export class DolyamiController {
  constructor(private readonly dolyamiService: DolyamiService) {}

  @Post('create')
  async create(@Body() data: OrderDTO, @Res() res) {
    res.send(data);
    return await this.dolyamiService.createOrder(data);
  }
}
