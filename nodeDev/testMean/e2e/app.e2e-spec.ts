import { TestMeanPage } from './app.po';

describe('test-mean App', () => {
  let page: TestMeanPage;

  beforeEach(() => {
    page = new TestMeanPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
