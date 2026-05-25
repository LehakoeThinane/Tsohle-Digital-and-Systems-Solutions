import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { ChatbotModule } from './chatbot/chatbot.module';
import { LeadsModule } from './leads/leads.module';
import { KnowledgeBaseModule } from './knowledge-base/knowledge-base.module';

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }),
    KnowledgeBaseModule,
    ChatbotModule,
    LeadsModule,
  ],
})
export class AppModule {}
