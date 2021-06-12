import { Test } from '@nestjs/testing';
import { MainApiStatusService } from './main-api-status.service';

describe('MainApiStatusService', () => {
  let service: MainApiStatusService;

  beforeEach(async () => {
    const module = await Test.createTestingModule({
      providers: [MainApiStatusService],
    }).compile();

    service = module.get(MainApiStatusService);
  });

  it('should be defined', () => {
    expect(service).toBeTruthy();
  });
});
