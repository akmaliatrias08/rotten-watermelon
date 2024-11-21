import { Test, TestingModule } from '@nestjs/testing';
import { CrewsPositionsService } from './crews_positions.service';

describe('CrewsPositionsService', () => {
  let service: CrewsPositionsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [CrewsPositionsService],
    }).compile();

    service = module.get<CrewsPositionsService>(CrewsPositionsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
