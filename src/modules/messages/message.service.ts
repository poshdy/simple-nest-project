import { Injectable } from '@nestjs/common';
import { CreateMessageDto, Message } from './dto/create-message-dto';
import { MessageRepository } from './message.repository';

@Injectable()
export class MessageService {
  constructor(private readonly repo: MessageRepository) {}
  async sendMessage(payload: CreateMessageDto): Promise<any> {
    await this.repo.create(payload);
  }
  async getMessage(id: number): Promise<Message> {
    return await this.repo.findOne(id);
  }
  async getMessages(): Promise<Message[]> {
    return await this.repo.find();
  }
}
