import { Test, TestingModule } from '@nestjs/testing';
import { PovService } from './pov.service';

describe('PovService', () => {
  let service: PovService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [PovService],
    }).compile();

    service = module.get<PovService>(PovService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
