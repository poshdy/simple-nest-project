import { NestFactory } from '@nestjs/core';
import { MessageModule } from './modules/messages/message.module';
import { ValidationPipe } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(MessageModule);
  app.useGlobalPipes(new ValidationPipe());
  await app.listen(4000);
}
bootstrap();
