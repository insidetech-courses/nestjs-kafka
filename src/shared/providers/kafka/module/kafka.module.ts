import { Module } from '@nestjs/common';
import { kafkaClientConfig, kafkaProvider } from '../config/kafka.config';

@Module({
  imports: [kafkaClientConfig],
  providers: [kafkaProvider],
  exports: [kafkaProvider, kafkaClientConfig],
})
export class KafkaModule {}
