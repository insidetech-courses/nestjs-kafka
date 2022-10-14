import { Module } from '@nestjs/common';
import { KafkaModule } from 'src/shared/providers/kafka/module/kafka.module';
import { UserController } from '../infra/http/controllers/user.controller';

@Module({
  imports: [KafkaModule],
  controllers: [UserController],
})
export class UserModule {}
