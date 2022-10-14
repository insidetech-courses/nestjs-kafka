import {
  ClientKafka,
  ClientsModule,
  ClientsModuleOptions,
  Transport,
} from '@nestjs/microservices';

export const kafkaConfig: ClientsModuleOptions[0] = {
  name: 'KAFKA_SERVICE',
  transport: Transport.KAFKA,
  options: {
    client: {
      brokers: ['maximum-chigger-7131-us1-kafka.upstash.io:9092'],
      clientId: 'kafka',
      sasl: {
        mechanism: 'scram-sha-256',
        username:
          'bWF4aW11bS1jaGlnZ2VyLTcxMzEkZ_pYUsEghEjxo32g7MXGKJc1qCmf9S7WUTs',
        password:
          'xALmm9VgnWkKnpFI64l6TijHYXuCHEqgvouUPoi6J_xvywkAIGB1wg4uBJ9k2X4TzszcdA==',
      },
      ssl: true,
    },
    consumer: {
      groupId: `test-${Math.random()}`,
      allowAutoTopicCreation: true,
    },
  },
};

export const kafkaClientConfig = ClientsModule.register([kafkaConfig]);

export const kafkaProvider = {
  provide: 'KAFKA_PRODUCER',
  useFactory: (client: ClientKafka) => client.connect(),
  inject: ['KAFKA_SERVICE'],
};
