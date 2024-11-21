import { Test, TestingModule } from '@nestjs/testing';
import { MoviesTypesController } from './movies-types.controller';

describe('MoviesTypesController', () => {
  let controller: MoviesTypesController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [MoviesTypesController],
    }).compile();

    controller = module.get<MoviesTypesController>(MoviesTypesController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
