import {
  Body,
  Controller,
  Get,
  Param,
  ParseIntPipe,
  Post,
  NotFoundException,
} from '@nestjs/common';
import { MessageService } from './message.service';
import { CreateMessageDto, Message } from './dto/create-message-dto';

@Controller('messages')
export class MessageController {
  constructor(private readonly messageService: MessageService) {}
  @Get('/')
  getMessages(): Promise<Message[]> {
    return this.messageService.getMessages();
  }

  @Get('/:id')
  async getMessage(@Param('id', ParseIntPipe) id: number): Promise<Message> {
    const message = await this.messageService.getMessage(id);
    if (!message) {
      throw new NotFoundException('no message found');
    } else {
      return message;
    }
  }
  @Post('/')
  justGet(
    @Body() payload: CreateMessageDto,
  ): Promise<{ id: string; content: string }> {
    return this.messageService.sendMessage(payload);
  }
}
