import { Test, TestingModule } from '@nestjs/testing';
import { InProgressController } from './in-progress.controller';

describe('InProgressController', () => {
  let controller: InProgressController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [InProgressController],
    }).compile();

    controller = module.get<InProgressController>(InProgressController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
