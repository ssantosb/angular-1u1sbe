import { UnitModule } from './unit.module';

describe('UnitModule', () => {
  let unitModule: UnitModule;

  beforeEach(() => {
    unitModule = new UnitModule();
  });

  it('should create an instance', () => {
    expect(unitModule).toBeTruthy();
  });
});
