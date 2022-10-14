import { Body, Controller, Inject, Post } from '@nestjs/common';
import { Producer } from '@nestjs/microservices/external/kafka.interface';

@Controller('user')
export class UserController {
  constructor(
    @Inject('KAFKA_PRODUCER') private readonly kafkaProducer: Producer,
  ) {}

  @Post()
  async create(@Body() body: any) {
    return await this.kafkaProducer.send({
      topic: 'kafka-test',
      messages: [{ key: 'user-created', value: JSON.stringify(body) }],
    });
  }
}
