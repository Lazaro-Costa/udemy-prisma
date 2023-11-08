import { ApiProperty } from '@nestjs/swagger';
import { IsEmail, IsNotEmpty, IsOptional, IsString } from 'class-validator';

export class CreatePostDto {
  @ApiProperty({ description: 'Título do Post' })
  @IsString()
  @IsNotEmpty()
  title: string;

  @ApiProperty({ description: 'Conteúdo do Post' })
  @IsString()
  @IsOptional()
  content?: string;

  @ApiProperty({ description: 'Email do Autor' })
  @IsEmail()
  authorEmail: string;
}
