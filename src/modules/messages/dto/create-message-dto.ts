import { IsString, Length } from 'class-validator';

export class CreateMessageDto {
  @IsString()
  @Length(1, 500, { message: 'message must at least have 1 character' })
  content: string;
}

export type Message = {
  content: string;
  id: number;
};
