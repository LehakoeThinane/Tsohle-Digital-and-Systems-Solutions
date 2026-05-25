import { Body, Controller, Post } from '@nestjs/common';
import { ChatbotService } from './chatbot.service';
import { ChatMessageDto, ChatResponseDto } from './dto/chat.dto';
import { KnowledgeBaseService, SA_LANGUAGES } from '../knowledge-base/knowledge-base.service';

@Controller('chat')
export class ChatbotController {
  constructor(
    private readonly chatbot: ChatbotService,
    private readonly kb: KnowledgeBaseService,
  ) {}

  @Post()
  async chat(@Body() dto: ChatMessageDto): Promise<ChatResponseDto> {
    const { sessionId, reply, stage, leadCaptured } = await this.chatbot.chat(
      dto.message,
      dto.sessionId,
      dto.language ?? 'en',
    );

    return {
      sessionId,
      message: reply,
      language: dto.language ?? 'en',
      leadStage: stage,
      leadCaptured,
    };
  }

  @Post('languages')
  getSupportedLanguages() {
    return { languages: SA_LANGUAGES };
  }
}
