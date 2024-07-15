import { Test, TestingModule } from '@nestjs/testing';
import { MessageController } from './message.controller';
import { MessageService } from './message.service';

describe('AppController', () => {
  let appController: MessageController;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [MessageController],
      providers: [MessageService],
    }).compile();

    appController = app.get<MessageController>(MessageController);
  });

  describe('root', () => {
    it('should return "Hello World!"', () => {
      expect(appController.getMessage()).toBe('Hello World!');
    });
  });
});
