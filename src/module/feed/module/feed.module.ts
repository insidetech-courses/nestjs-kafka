import { Module } from '@nestjs/common';
import { FeedController } from '../infra/http/controllers/feed.controller';

@Module({
  controllers: [FeedController],
})
export class FeedModule {}
