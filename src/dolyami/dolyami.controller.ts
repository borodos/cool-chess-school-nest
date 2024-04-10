import { Body, Controller, Post } from '@nestjs/common';
import { DolyamiService } from './dolyami.service';

@Controller('dolyami')
export class DolyamiController {
  constructor(private readonly dolyamiService: DolyamiService) {}

  @Post('/create')
  create(@Body() data) {
    return this.dolyamiService.createOrder(data);
  }
}
