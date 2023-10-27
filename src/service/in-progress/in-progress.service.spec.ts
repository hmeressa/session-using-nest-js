import { Test, TestingModule } from '@nestjs/testing';
import { InProgressService } from './in-progress.service';

describe('InProgressService', () => {
  let service: InProgressService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [InProgressService],
    }).compile();

    service = module.get<InProgressService>(InProgressService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
