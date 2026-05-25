import { IsString, IsOptional, IsIn } from 'class-validator';

export class ChatMessageDto {
  @IsString()
  message: string;

  @IsOptional()
  @IsString()
  sessionId?: string;

  @IsOptional()
  @IsIn(['en','zu','xh','af','nso','tn','st','ts','ss','ve','nr'])
  language?: string;
}

export class ChatResponseDto {
  sessionId: string;
  message: string;
  language: string;
  leadStage: string;
  leadCaptured: boolean;
}
