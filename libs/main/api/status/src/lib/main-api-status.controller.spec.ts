import { Test } from '@nestjs/testing';
import { MainApiStatusController } from './main-api-status.controller';
import { MainApiStatusService } from './main-api-status.service';

describe('MainApiStatusController', () => {
  let controller: MainApiStatusController;

  beforeEach(async () => {
    const module = await Test.createTestingModule({
      providers: [MainApiStatusService],
      controllers: [MainApiStatusController],
    }).compile();

    controller = module.get(MainApiStatusController);
  });

  it('should be defined', () => {
    expect(controller).toBeTruthy();
  });
});
