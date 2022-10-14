import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { FeedModule } from './module/feed/module/feed.module';
import { UserModule } from './module/user/module/user.module';

@Module({
  imports: [UserModule, FeedModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
