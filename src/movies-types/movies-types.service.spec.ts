import { Test, TestingModule } from '@nestjs/testing';
import { MoviesTypesService } from './movies-types.service';

describe('MoviesTypesService', () => {
  let service: MoviesTypesService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [MoviesTypesService],
    }).compile();

    service = module.get<MoviesTypesService>(MoviesTypesService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
