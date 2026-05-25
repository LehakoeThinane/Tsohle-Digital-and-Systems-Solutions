import { IsString, IsEmail, IsOptional, IsIn } from 'class-validator';

export class CreateLeadDto {
  @IsString()
  name: string;

  @IsString()
  company: string;

  @IsString()
  problem: string;

  @IsOptional()
  @IsEmail()
  email?: string;

  @IsOptional()
  @IsString()
  phone?: string;

  @IsOptional()
  @IsString()
  timeline?: string;

  @IsOptional()
  @IsIn(['smme', 'enterprise', 'unknown'])
  segment?: string;

  @IsOptional()
  @IsString()
  source?: string;
}
