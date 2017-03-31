import { Angualr2RedditPage } from './app.po';

describe('angualr2-reddit App', () => {
  let page: Angualr2RedditPage;

  beforeEach(() => {
    page = new Angualr2RedditPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
