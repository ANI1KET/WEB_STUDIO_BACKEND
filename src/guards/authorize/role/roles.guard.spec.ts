import { AuthorizeGuard } from './roles.guard';

describe('AuthorizeGuard', () => {
  it('should be defined', () => {
    expect(new AuthorizeGuard()).toBeDefined();
  });
});
