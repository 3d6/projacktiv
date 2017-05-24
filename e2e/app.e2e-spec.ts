import { FitproPage } from './app.po';

describe('fitpro App', () => {
  let page: FitproPage;

  beforeEach(() => {
    page = new FitproPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
