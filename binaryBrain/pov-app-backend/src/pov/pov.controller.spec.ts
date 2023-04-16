import { Test, TestingModule } from '@nestjs/testing';
import { PovController } from './pov.controller';

describe('PovController', () => {
  let controller: PovController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [PovController],
    }).compile();

    controller = module.get<PovController>(PovController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
