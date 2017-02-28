import { MyLiveSitePage } from './app.po';

describe('my-live-site App', () => {
  let page: MyLiveSitePage;

  beforeEach(() => {
    page = new MyLiveSitePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
