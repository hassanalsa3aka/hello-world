import { LocationService } from './location.service';
import { Repository } from 'typeorm';
import { Location } from './location.entity';
import { GenericFactory } from '../common/generic.factory';
import { MockHelper } from '../common/mock.helper';


describe('LocationService', () => {
  let service: LocationService;
  let mockRepository: Repository<Location>;

  beforeEach(async () => {
    mockRepository = MockHelper.mock<Repository<Location>>({
      find: {
        resolves: [
          GenericFactory.create<Location>(Location, {
            id: 'e35405af-d4e9-4cdd-9fe4-1987b43f4d7c',
            name: 'Nice location 1',
          }),
          GenericFactory.create<Location>(Location, {
            id: '477467dc-fab2-49f7-88eb-5e472d217365',
            name: 'Nice location 2',
          }),
        ],
      },
    });

    service = new LocationService(mockRepository);
  });

  it('should return locations', () => {
    expect(service.list()).resolves.toMatchObject([
      {
         id: 'e35405af-d4e9-4cdd-9fe4-1987b43f4d7c',
         name: 'Nice location 1',
      },
      {
         id: '477467dc-fab2-49f7-88eb-5e472d217365',
         name: 'Nice location 2',
      },
    ]);
  });
});