import { readFile, writeFile } from 'fs/promises';
import { CreateMessageDto, Message } from './dto/create-message-dto';
import { Injectable } from '@nestjs/common';



@Injectable()
export class MessageRepository {
  async readContents() {
    const data = await readFile('messages.json', {
      flag: 'r',
      encoding: 'utf-8',
    });

    const contents = JSON.parse(data);
    return contents;
  }

  async findOne(id: number): Promise<Message> {
    const messages = await this.readContents();
    return messages[id];
  }
  async find(): Promise<Message[]> {
    const messages = await this.readContents();
    return messages;
  }
  async create(data: CreateMessageDto) {
    const messages = await this.readContents();
    const id = Math.floor(Math.random() * 1000 - 1);
    messages[id] = { id, content: data.content };

    await writeFile('messages.json', JSON.stringify(messages), {
      flag: 'w',
      encoding: 'utf8',
    });
  }
}
