import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { LangChainModule } from '../langchain/langchain.module';

@Module({
  imports: [LangChainModule],
  controllers: [AppController],
})
export class AppModule {}
