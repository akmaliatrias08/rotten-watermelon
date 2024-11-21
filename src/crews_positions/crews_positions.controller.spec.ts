import { Test, TestingModule } from '@nestjs/testing';
import { CrewsPositionsController } from './crews_positions.controller';

describe('CrewsPositionsController', () => {
  let controller: CrewsPositionsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [CrewsPositionsController],
    }).compile();

    controller = module.get<CrewsPositionsController>(CrewsPositionsController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
