import { Controller } from '@nestjs/common';
import { MessagePattern, Payload } from '@nestjs/microservices';

@Controller('feed')
export class FeedController {
  @MessagePattern('kafka-test')
  async create(@Payload() data: any) {
    console.log({
      post: {
        title: 'novo post!',
        user: data,
      },
    });
  }
}
